function StatsData({icon, color = 'red', value, label, iconText}) {
    const colors = {
       red: "bg-red-500",
        green: "bg-green-300",
        blue: "bg-blue-300",
        purple: "bg-purple-300",
        yellow: "bg-yellow-300"
    }

    const textColors = {
        red: "text-red-600",
        green: "text-green-600",
        blue: "text-blue-600",
        yellow: "text-yellow-600",
        purple: "text-purple-600",
    }
    return (
        <div className="bg-table shadow-md rounded-2xl p-5 w-50 flex flex-row items-center gap-2 my-10">
            <span className={`w-10 h-10 text-2xl font-semibold flex items-center justify-center rounded-full ${textColors[iconText]} ${colors[color]}`}>
                {icon}
            </span>
            <div>
                {label && <p className="text-sm  font-semibold uppercase text-gray-600">{label}</p>}
                {value && <p className="text-xl font-bold text-gray-800">{value}</p>}
            </div>

        </div>
    )
}

export default StatsData;