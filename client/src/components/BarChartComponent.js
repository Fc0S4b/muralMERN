import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

//
// const getIntroOfPage = (label) => {
//   if (label === 'Page A') {
//     return "Page A is about men's clothing";
//   }
//   if (label === 'Page B') {
//     return "Page B is about women's dress";
//   }
//   if (label === 'Page C') {
//     return "Page C is about women's bag";
//   }
//   if (label === 'Page D') {
//     return 'Page D is about household goods';
//   }
//   if (label === 'Page E') {
//     return 'Page E is about food';
//   }
//   if (label === 'Page F') {
//     return 'Page F is about baby food';
//   }
//   return '';
// };

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p
          className="label"
          style={{ textTransform: 'capitalize' }}
        >{`${label} : ${payload[0].value}`}</p>
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}

        <p className="desc">
          Post{payload[0].value > 1 ? 's' : ''} realizado
          {payload[0].value > 1 ? 's' : ''}
        </p>
      </div>
    );
  }

  return null;
};

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" style={{ textTransform: 'capitalize' }} />
        <YAxis allowDecimals={false} domain={[0, 'dataMax']} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="count" barSize={55} fill="#c84b31" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
