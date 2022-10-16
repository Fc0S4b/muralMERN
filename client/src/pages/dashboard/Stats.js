import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { StatsContainer, Loading, ChartsContainer } from '../../components';
import useTitle from '../../utils/useTitle';

const Stats = () => {
  const { showStats, isLoading, monthlyNews } = useAppContext();
  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);

  useTitle('Estadísticas');

  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyNews.length > 0 && <ChartsContainer />}
    </>
  );
};
export default Stats;
