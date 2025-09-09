function Loader() {
    return (
        <div className="flex  justify-center items-center min-w-full m-10 animate-pulse [animation-duration:3s]"> 
        <div className="w-full space-y-2">
            <div className="w-1/3 h-4 bg-gray-200 rounded-md"></div>  
            <div className="w-1/2 h-4 bg-gray-200 rounded-md"></div>   
            <div className="w-1/2 h-4 bg-gray-200 rounded-md"></div> 
            <div className="w-2/3 h-4 bg-gray-200 rounded-md"></div>     
            <div className="w-2/3 h-4 bg-gray-200 rounded-md"></div> 
            <div className="w-2/3 h-4 bg-gray-200 rounded-md"></div>         
        </div>
        </div>
    )
}

export default Loader;