import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const SimpleRadarChart = ({ newsType }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart margin={{ top: 50 }} data={newsType}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="newType"
          style={{ textTransform: 'capitalize' }}
        />
        <PolarRadiusAxis stroke="#ffb396" />
        <Radar
          dataKey="count"
          stroke="#918450"
          fill="#4c6793"
          fillOpacity={0.3}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
export default SimpleRadarChart;
