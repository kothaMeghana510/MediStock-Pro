import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { setReturnStock } from "../services/apiReturnStocks";
import useDeleteReceived from "../receivedStock/useDeleteReceived";
import toast from "react-hot-toast";

function ReturnForm({returnStock, setShowReturnForm}) {
  const {register, handleSubmit, reset, formState} = useForm({defaultValues: returnStock});
  const { errors } = formState;
  const queryClient = useQueryClient();
  const { deletingStockReceived } = useDeleteReceived({ showToast: false });
   

  const {mutate} = useMutation({
    mutationFn: setReturnStock,

    onSuccess: () => (
      toast.success("Stock added to Returns"),
      queryClient.invalidateQueries({
        queryKey: ['returnStocks']
      })
    )
  })
console.log(returnStock);

  
function handleReturn(data) {
      console.log(data);
      const finalReturnStock = {
        returnStockId: returnStock.id,
        medicineName: returnStock.medicineName,
        created_at: returnStock.created_at,
        returnQuantity: data.quantity,
        receivedQuantity: returnStock.quantity,
        returnReason: data.reason,
        amount: returnStock.amount,
      }
      mutate(finalReturnStock, {
        onSuccess:  () => {
          setShowReturnForm(false);
          deletingStockReceived(returnStock.id);
          reset();  
        }
      })
}

function onError(errors) {
  console.log(errors);
}

    return (
      <>
        <form onSubmit={handleSubmit(handleReturn, onError)} className="flex flex-col  items-center  gap-10  rounded-lg h-auto">
          <h1 className="font-semibold text-xl uppercase">{returnStock.medicineName}</h1>
          <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
                <label htmlFor="quantity" className="font-semibold text-lg ">Quantity</label>                
                <input type="text" id="quantity"
                       className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
                       {
                        ...register("quantity", {
                          required: "This field is Required",
                          min: {
                            value: 1,
                            message: "Quantity should be atleast One"
                          }
                        })
                       }
                       />
                       {errors?.quantity?.message && <span className="text-red-500 col-start-2 block mx-3 font-bold">{errors.quantity.message}</span>}
          </div>
          <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
                <label htmlFor="reason" className="font-semibold text-lg ">Reason</label>                
                <select className="bg-blue-100  border-2 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1 appearance-none"
                        {
                          ...register("reason", {
                            required: "This field is Required"
                          })
                        }
                >
                  <option value="">Select Reason</option>
                  <option value="damaged">Damaged</option>
                  <option value="expired">Received Expired medicine</option>
                  <option value="nearToExpiry">Received Near to Expiry</option>
                  <option value="wrongItem">Received Wrong Item</option>
                  <option value="ExcessStock">Excess Stock</option>
                  <option value="others">Others</option>
                </select>
                {errors?.reason?.message && <span className="text-red-500 col-start-2 block mx-3 font-bold">{errors.reason.message}</span>}
          </div>

          <button className="ml-auto p-2 mx-5 bg-cyan-500 text-white font-semibold rounded-md">Send To Returns</button>
        </form>
      </>
);

}

export default ReturnForm;