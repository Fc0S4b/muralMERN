import React, { useState } from 'react';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/ChartsContainer';
import SimpleRadarChart from './SimpleRadarChart';
const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyNews: data, statsNewType: newsType } = useAppContext();
  console.log(newsType);
  return (
    <Wrapper>
      <h3>Publicaciones mensuales</h3>
      <SimpleRadarChart newsType={newsType} />
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Otro gráfico' : 'Gráfico de barras'}
      </button>
    </Wrapper>
  );
};
export default ChartsContainer;
