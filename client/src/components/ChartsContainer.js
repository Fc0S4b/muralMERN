import React, { useState } from 'react';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/ChartsContainer';
import SimpleRadarChart from './SimpleRadarChart';
import BarChartComponent from './BarChartComponent';
import LinearChartComponent from './LinearChartComponent';
const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyNews: data, statsNewType: newsType } = useAppContext();

  return (
    <Wrapper>
      <h3>Publicaciones mensuales</h3>
      <SimpleRadarChart newsType={newsType} />
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Gráfico lineal' : 'Gráfico de barras'}
      </button>
      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <LinearChartComponent data={data} />
      )}
    </Wrapper>
  );
};
export default ChartsContainer;
