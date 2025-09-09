import EmptyChart from "./EmptyChart";
import useCategoryData from "./useCategoryData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CategoriesOverview() {
    const { categoryData } = useCategoryData();

    if(!categoryData.length) return <EmptyChart />
    return (
        <div className="bg-white p-5 mt-10 shadow-md">
           <h1 className='font-semibold text-lg text-stone-600 uppercase mx-2 px-2 py-1'>Stock Categories Overview</h1>
           <ResponsiveContainer width="80%" height={300}>
            <BarChart
            width={20}
            height={100}
            data={categoryData}
            barSize={40}
            
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
            <XAxis dataKey="category" tick={{fontSize: '16px', fontWeight: 'bold', fil: '#555'}}/>
            <YAxis label={{value: 'Quantity', angle: -90, position: 'insideLeft', style: { fontSize: 16, fill: '#555', fontWeight: 'bold' } }} tick={{fontSize: '16px', fontWeight: 'bold', fil: '#555'}} allowDecimals={false} domain={[0, 'dataMax + 2']} />
            <Tooltip 
                contentStyle={
                    {
                        backgroundColor: '#fff',
                        border: "1px sold #ccc",
                        borderRadius: "8px",
                        padding: "6px 10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        fontWeight: 'bold',
                        textTransform: 'capitalize'
                    }
                }
            />
        <Legend     
            iconSize={15}
            iconType="circle"
            layout="horizontal"
            align="center"
            verticalAlign="bottom" 
        />
            <Bar dataKey="safe" stackId="a" fill="#228b22" activeBar={false}  />
            <Bar dataKey="nearExpiry" stackId="a"  fill="#FFBB28" activeBar={false} />
            <Bar dataKey="expired" stackId="a" fill="#FF0000" activeBar={false} />

            </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CategoriesOverview;


// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const Example = () => {
//   return (
//     <ResponsiveContainer width="50%" height="50%">
//       <BarChart
//         width={20}
//         height={100}
//         data={data}
//         margin={{
//           top: 20,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="pv" stackId="a" fill="#8884d8" />
//         <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default Example;
