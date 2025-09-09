import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReviewStock from "./reviewStock";


// Form saves the data in Local Storage first
function AddStockForm() {
    const { register, handleSubmit, formState, reset }= useForm();
    const [drafts, setDrafts] = useState([]);
    const {errors} = formState;

    useEffect(() => {
        const savedDrafts = localStorage.getItem("drafts");
        if(savedDrafts) {
            setDrafts(JSON.parse(savedDrafts));
        }
    }, []);

    function submitForm(data){
        const updatedDrafts = [...drafts, data];

        setDrafts(updatedDrafts);
        reset();

        localStorage.setItem("drafts", JSON.stringify(updatedDrafts));
    }

    function onError(errors) {
        console.log(errors)
    }

    return (
        <>
        <h1 className="uppercase font-extrabold text-2xl mx-2 px-2 py-1 mb-2 text-stone-600">Add Stock</h1>
        <form onSubmit={handleSubmit(submitForm, onError)} className="flex flex-col  items-center  gap-10 border-2 border-cyan-500 rounded-lg h-auto mx-28 p-6">
            <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
                <label htmlFor="medicineName" className="font-semibold text-lg ">Medicine Name</label>
                <input type="text" 
                        id="medicineName" 
                        {...register("medicineName", { required: "This field is required" })} 
                        className="border-2  bg-blue-100 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
                />
                {errors?.medicineName?.message && <span className="text-red-500 col-start-2 block mx-3 font-bold">{errors.medicineName.message}</span>}
            </div>

            <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
                <label htmlFor="quantity" className="font-semibold text-lg">Quantity</label>
                <input type="text" 
                        id="quantity" 
                        {...register("quantity",
                            { 
                                required: "This field is required", 
                                min: 
                                {
                                    value: 1,
                                    message: "Quantity should be atleast one"
                                }
                        }
                    )} 
                        className="border-2 bg-blue-100  border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1"
                />
                {errors?.quantity?.message && <span className="text-red-500 col-start-2 block  mx-3 font-bold">{errors.quantity.message}</span>}
            </div>

            <div className="grid grid-cols-2 items-center gap-4 w-full max-w-md">
                <label htmlFor="quantity" id="category" className="font-semibold text-lg">category</label>
                <select  {...register("category", { required: "You need to set Category for better Experience"} )} className="bg-blue-100  border-2 border-cyan-400 rounded-md focus:outline-none focus:ring ring-cyan-300 focus:border-cyan-500 ring-offset-4 p-1 appearance-none">
                    <option value="" >Select Category</option>
                    <option value="Tablets">Tablets</option>
                    <option value="Capsules">Capsules</option>
                    <option value="Syrups">Syrups</option>
                    <option value="Injections">Injections</option>
                    <option value="Ointments">Ointments</option>
                    <option value="Others">Others</option>
                </select>
                {errors?.category?.message && <span className="text-red-500 col-start-2 block mx-3 font-bold">{errors.category.message}</span>}                
            </div>

            <button className="ml-auto p-2 mx-5 bg-cyan-500 text-white font-semibold rounded-md">Add Stock</button>
        </form>
        
        <div>
            {drafts.length > 0 && <ReviewStock  drafts={drafts} setDrafts={setDrafts}/>}
        </div>
        </>
    )
}

export default AddStockForm;