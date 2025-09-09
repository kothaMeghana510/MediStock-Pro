import DraftStock from "./DraftStock";
import useCreateNewStock from "./useCreateNewStock";


// Component to show the stock that we stored in Local Storage
// for review  and also helps to save data in data base
function ReviewStock({drafts, setDrafts}) {
    const {isCreacting, mutate} = useCreateNewStock();

    function handleSave(drafts) {
        mutate(drafts);
    }

    function onCancel() {
        localStorage.removeItem("drafts");
        window.location.reload();
    }

    function handleDeleteStock(index) {
       const updatedDrafts = drafts.filter((_, i) => i !== index);
       setDrafts(updatedDrafts);
       localStorage.setItem("drafts", JSON.stringify(updatedDrafts));
    }

    return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="mt-4 font-semibold  mr-auto ml-2 text-xl text-blue-800 underline underline-offset-4 ">Review Stock:</h1>
       <table className="min-w-full m-10 mt-8 table-fixed border-collapse border border-gray-100">
            <thead>
            <tr className="uppercase h-10  bg-active font-semibold">
                <td className="px-4 py-2 text-center">S.NO.</td>
                <td className="px-4 py-2 text-center">Medicine Name</td>
                <td className="px-4 py-2 text-center">Quantity</td>
                <td className="px-4 py-2 text-center">Category</td>
                <td>Manage</td>

            </tr>
            </thead>
            <tbody>
                {drafts.map((draft, index) => <DraftStock draft={draft} index={index} key={index} handleDeleteStock={handleDeleteStock} />)}
            </tbody>
            </table>
            <div className="flex ml-auto">
                <button onClick={() => onCancel()} className="p-2 mx-5 text-black border border-stone-400 font-semibold rounded-md">Cancel</button>
                <button onClick= {() => handleSave(drafts)} disabled={isCreacting} className="p-2 mx-5 bg-cyan-500 text-white font-semibold rounded-md">Save Order</button>
            </div>
    </div>   
    )
}

export default ReviewStock;