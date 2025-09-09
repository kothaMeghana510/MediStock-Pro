import { Cell, Pie, PieChart, Tooltip, Legend } from 'recharts';
import useDashboardData from './useDashboardData';

function StockOverview() {
    const {receivedData, pendingData, returnedData} = useDashboardData();
    const data = [
  { labelName: 'Received Stock', value: receivedData?.length },
  { labelName: 'Pending Orders', value: pendingData?.length },
  { labelName: 'Returned Stock', value: returnedData?.length },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='flex flex-col bg-white w-[40%] p-5 shadow-md rounded-lg'>
        <h1 className='font-semibold text-lg text-stone-600 uppercase mx-2 px-2 py-1'>Stock Overveiw</h1>
    <PieChart width={500} height={300} >
      <Pie
        data={data}
        nameKey="labelName"
        cx={100}
        cy={150}
        innerRadius={65}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        
      >
        {data.map((entry, index) => (
            <Cell key={`cell-${entry.labelName}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
        <Tooltip 
            contentStyle=
            {{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "6px 10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
            }}
        />
        <Legend 
            verticalAlign='bottom'
            align='right'
            width='30%'
            layout='vertical'
            iconSize={15}
            iconType='circle'
            wrapperStyle={{ fontSize: "16px", fontWeight: "500", marginRight: "25%"}}
            
        />
    </PieChart>
    </div>
  );
}

export default StockOverview;
