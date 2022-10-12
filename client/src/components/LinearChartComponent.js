import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

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

const LinearChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
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
        <Line
          type="monotone"
          dataKey="count"
          stroke="#6c0f16"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LinearChartComponent;
