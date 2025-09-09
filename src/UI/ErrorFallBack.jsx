function ErrorFallback({ resetErrorBoundary}) {
    return (
        <div className="flex justify-center h-screen items-center bg-slate-200">
            <div className="bg-gray-50 px-14 py-20 rounded-md flex flex-col justify-center items-center gap-2">
                <h1 className="font-semibold text-xl ">Something went Wrong! 🧐</h1>
                <button onClick={resetErrorBoundary} className="px-2 w-40 py-1 text-center bg-activeBorder  text-white rounded-lg">Try Again</button>
            </div>
        </div>
    )
}

export default ErrorFallback;