// import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { insertStocks } from "../services/apiReceivedStock";
import toast from "react-hot-toast";
import useDeleteStock from "./useDeleteStock";

function RowModel({stock = {}, setShowRowModel}) {
    const { register, reset, handleSubmit } = useForm({defaultValues: stock});
    const queryClient = useQueryClient();
    const {deletingStock} = useDeleteStock({showToast : false});

    const {mutate} = useMutation({
        mutationFn: insertStocks,

        onSuccess: () => {
            toast.success("Stock Recieved Successfully");
            queryClient.invalidateQueries({
                queryKey: ["receivedStocks"]
            })
            reset();
        }
    });
    

    function handleRowSubmit(data) {
        console.log(data);
        mutate(data, {
            onSuccess: () => {
                deletingStock(data.id)
                setShowRowModel(false)
            }
        });
    }


    return (
        <form  onSubmit={handleSubmit(handleRowSubmit)} className="flex flex-col  items-center  gap-10  h-auto  ">
            <h1 className="font-semibold text-xl">Medicine Name: <span className="text-indigo-700">{stock.medicineName}</span></h1>
            <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
                <label htmlFor="quantity" className="font-semibold text-lg ">Quantity</label>
                <input type="text" 
                        id="quantity" 
                        className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
                        {
                            ...register("quantity")
                        }
                />
            </div>

             <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
                <label htmlFor="expiryDate" className="font-semibold text-lg ">Expiry Date</label>
                <input type="date" 
                        id="expiryDate" 
                        className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
                        {
                            ...register("expiryDate", 
                            {
                                required: "This feild is Required"
                            })
                        }
                />
            </div>

            <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
                <label htmlFor="batchNo" className="font-semibold text-lg ">Batch No.</label>
                <input type="text" 
                        id="batchNo" 
                        className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
                        {
                            ...register("batchNo", 
                            {
                                required: "This feild is required"
                            })
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
                                // setValueAs: (value) => value === "" ? null : Number(value),
                        })
                        }
                />
            </div>

            <button  className="ml-auto p-2 mx-5 bg-cyan-500 text-white font-semibold rounded-md">Save Stock</button> 
        </form>
    )
}

export default RowModel;