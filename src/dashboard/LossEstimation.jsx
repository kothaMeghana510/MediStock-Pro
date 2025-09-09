import useGetReceived from '../receivedStock/useGetReceived';
import useReceivedStock from '../receivedStock/useReceivedStock'
import useReturnStocks from '../ReturnStocks/useReturnStocks';


function LossEstimation() {
    const { dashboardStocks } = useGetReceived();
    const { finalStocks } = useReceivedStock({dashboardStocks});
    const { returnStocks } = useReturnStocks();
    
    const nearExpiry = finalStocks?.filter((stock) => stock.daysLeft > 0 && stock.daysLeft <= 30)
    const lossAmount = nearExpiry?.reduce((acc, curr) => acc + curr.amount, 0);
    const expire = finalStocks.filter((stock) => stock.daysLeft <= 0 );
    const loss = expire?.reduce((acc, curr) => acc + curr.amount, 0);

    const returnAmount = returnStocks?.reduce((acc, curr) => acc + curr.amount, 0);
    return (
        <div className='bg-white w-full  shadow-md rounded-lg p-5'>
            <h1 className='font-semibold text-lg text-stone-600 uppercase mx-2 px-2 py-1'>Amount Overview</h1>
            <div className='flex flex-col gap-2 px-10 mt-8'>
            <div className='px-4 py-1 bg-yellow-300 rounded-xl text-yellow-600'>
                <h1 className='text-lg font-semibold '>{`${nearExpiry.length} Medicines are near to Expire`}</h1>
                <h2><span className='text-lg'>Projected Loss : </span> <span className='font-extrabold text-lg'>{lossAmount} ₹</span></h2>
            </div>

             <div className='px-4 py-1 bg-red-300 rounded-xl text-red-600'>
                <h1 className='text-lg font-semibold '>{`${expire.length} Medicines are Expired`}</h1>
                <h2><span className='text-lg'>Amount Lost : </span> <span className='font-extrabold text-lg'>{loss} ₹</span></h2>
            </div>

            <div className='px-4 py-1 bg-green-300 rounded-xl text-green-600'>
                <h1 className='text-lg font-semibold '>{`${returnStocks?.length} Medicines are Returned`}</h1>
                <h2><span className='text-lg'>Refunded Amount : </span> <span className='font-extrabold text-lg'>{returnAmount} ₹</span></h2>
            </div>
            </div>
        </div>
    )
}

export default LossEstimation;