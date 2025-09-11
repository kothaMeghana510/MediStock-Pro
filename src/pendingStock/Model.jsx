import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertStocks } from "../services/apiReceivedStock";
import useDeleteStock from "./useDeleteStock";

import toast from "react-hot-toast";


function Model({stocksToRecieve = {}, setShowModel}) {
    const [currentId, setCurrentId] = useState(0)
    const [savedMedicine, setSavedMedicine] = useState([]);
    const navigate = useNavigate();
    
    const {...receivedValues} = stocksToRecieve;
    const { register, reset, handleSubmit, formState } = useForm({defaultValues: receivedValues[currentId]});
    const {deletingStock} = useDeleteStock({showToast : false});
    const { errors } = formState;

    const isLast = currentId === stocksToRecieve.length - 1
    

    function handleSave(data) {

        const addedStock = [...savedMedicine, data];
        setSavedMedicine(addedStock);
        setCurrentId((prevId) => {
            const nextId = prevId + 1;

            if (nextId < stocksToRecieve.length) {
                reset(stocksToRecieve[nextId]); 
            } 
            return nextId;
        });
        reset();
    }
    const queryClient = useQueryClient();

   const {isLoading, mutate} = useMutation({
        mutationFn: insertStocks,

        onSuccess: () => {
            toast.success("Stock received successfully");
            queryClient.invalidateQueries({
                queryKey: ["receivedStocks"],
            });
        }
   });


async function handleFinalSubmit(data) {
  const finalList = [...savedMedicine, data];
  mutate(finalList, {
    onSuccess: async () => {
      await Promise.all(stocksToRecieve.map((stock) => deletingStock(stock.id)));
      reset();
      setShowModel(false);
      navigate('/home')
    }
  });
}

function onError(errors) {
    console.log(errors);
}

    return (
        <form onSubmit={handleSubmit((isLast ? handleFinalSubmit : handleSave), onError)} className="flex flex-col gap-10  items-center h-auto ">
            <h1 className="font-semibold text-xl">Medicine Name: <span className="text-indigo-700">{stocksToRecieve[currentId]?.medicineName}</span></h1>
            <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
                <label htmlFor="quantity" className="font-semibold text-lg ">Quantity</label>
                <input type="text" 
                        id="quantity" 
                        className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
                        {
                            ...register("quantity", 
                                {
                                    required: "This field is Required",
                                    min: {
                                        value: 1,
                                        message: "This Value should be atleast One"
                                    }
                                }
                            )
                        }
                />
                {errors?.quantity?.message && <span className="text-red-500 col-start-2 block mx-3 font-bold col-span-2">{errors.quantity.message}</span>}

            </div>

             <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
                <label htmlFor="expiryDate" className="font-semibold text-lg ">Expiry Date</label>
                <input type="date" 
                        id="expiryDate" 
                        className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
                        {
                            ...register("expiryDate", 
                            {
                                required: "This field is Required"
                            })
                        }
                        />
                    {errors?.expiryDate?.message && <span className="text-red-500 col-start-2 block mx-3 font-bold col-span-2">{errors.expiryDate.message}</span>}
            </div>

             <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
                <label htmlFor="batchNo" className="font-semibold text-lg ">Batch No.</label>
                <input type="text" 
                        id="batchNo" 
                        className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
                        {
                            ...register("batchNo") 
                            // {
                            //     required: "This feild is required"
                            // })
                        }
                />
            </div>

             <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
                <label htmlFor="amount" className="font-semibold text-lg ">Amount</label>
                <input type="text" 
                        id="amount" 
                        className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
                        {
                            ...register("amount",  {
                                setValueAs: (value) => value === "" ? null : Number(value),
                                required: "This field is Required"
                        })
                        }
                />
                {errors?.amount?.message && <span className="text-red-500 col-start-2 block mx-3 font-bold col-span-2">{errors.amount.message}</span>}

            </div>

            {/* <button onClick={handleSave} className="ml-auto p-2 mx-5 bg-cyan-500 text-white font-semibold rounded-md">Save and Next</button> */}
            {isLast ? <button  disabled={isLoading} className="ml-auto p-2 mx-5 bg-cyan-500 text-white font-semibold rounded-md">Save Stock</button> : <button  className="ml-auto p-2 mx-5 bg-cyan-500 text-white font-semibold rounded-md">Save and Next</button>}
        </form>
    )
}

export default Model;

// import { useForm } from "react-hook-form";

// function Model() {
//     const { register } = useForm();
//     return (
//         <form className="flex flex-col  items-center  gap-10 border-2 border-cyan-500 rounded-lg h-auto mx-28 p-6">
//             <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
//                 <label htmlFor="quantity" className="font-semibold text-lg ">Quantity</label>
//                 <input type="text" 
//                         id="quantity" 
//                         className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
//                         {
//                             ...register("quantity")
//                         }
//                 />
//             </div>

//              <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
//                 <label htmlFor="expiryDate" className="font-semibold text-lg ">Expiry Date</label>
//                 <input type="text" 
//                         id="expiryDate" 
//                         className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
//                         {
//                             ...register("expiryDate", 
//                             {
//                                 required: "This feild is Required"
//                             })
//                         }
//                 />
//             </div>

//              <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
//                 <label htmlFor="batchNo" className="font-semibold text-lg ">Batch No.</label>
//                 <input type="text" 
//                         id="batchNo" 
//                         className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
//                         {
//                             ...register("batchNo", 
//                             {
//                                 required: "This feild is required"
//                             })
//                         }
//                 />
//             </div>

//              <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
//                 <label htmlFor="amount" className="font-semibold text-lg ">Amount</label>
//                 <input type="text" 
//                         id="amount" 
//                         className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
//                         {
//                             ...register("amount")
//                         }
//                 />
//             </div>

//             <button className="ml-auto p-2 mx-5 bg-cyan-500 text-white font-semibold rounded-md">Save and Next</button>
//         </form>
//     )
// }

// export default Model;