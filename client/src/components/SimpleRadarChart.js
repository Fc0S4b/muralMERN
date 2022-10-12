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
        <PolarAngleAxis dataKey="newType" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="count"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
export default SimpleRadarChart;
