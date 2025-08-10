// import React from "react";

// const ExpenseChart = ({ expenses }) => {
//   return (
//     <div className="chart-section">
//       <div className="chart-box">
//         <h3>Expense Chart</h3>
//         <div className="chart-placeholder">

//           <div className="donut">All</div>
//           <div className="legend">
//             <span><span className="dot travel"></span>Travel</span>
//             <span><span className="dot groceries"></span>Groceries</span>
//             <span><span className="dot food"></span>Food & Drink</span>
//             <span><span className="dot health"></span>Health</span>
//           </div>
//         </div>
//       </div>

//       <div className="chart-box">
//         <h3>Expenses Tracker</h3>
//         <div className="bar-graph">
//           <div className="bar" style={{ height: "60px" }}>Jan</div>
//           <div className="bar" style={{ height: "100px" }}>Mar</div>
//           <div className="bar" style={{ height: "80px" }}>May</div>
//           <div className="bar" style={{ height: "90px" }}>Jul</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpenseChart;

import React from "react";
import { Cell, Pie, PieChart } from 'recharts';

const data = [
  { name: 'Food', value: 100 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 800 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function ExpenseChart() {
  return (
    <PieChart width={250} height={200}>
      <Pie
        data={data}
        cx={120}
        cy={85}
        innerRadius={40}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default ExpenseChart;
