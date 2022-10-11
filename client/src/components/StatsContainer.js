import { useAppContext } from '../context/appContext';
import StatsItem from './StatsItem';
import Wrapper from '../assets/wrappers/StatsContainer';
import {
  MdPendingActions,
  MdShare,
  MdCancelPresentation,
  MdFactCheck,
} from 'react-icons/md';

const StatsContainer = () => {
  const { statsStatus } = useAppContext();
  // console.log(statsStatus.pendiente);

  const checkStats = [
    {
      title: 'Pendientes',
      count: statsStatus.pendiente || 0,
      icon: <MdPendingActions />,
      color: '#FFA033',
      bcg: '#fcefc7',
    },
    {
      title: 'Compartidas',
      count: statsStatus.compartida || 0,
      icon: <MdShare />,
      color: '#114B5F',
      bcg: '#e0e8f9',
    },
    {
      title: 'Canceladas',
      count: statsStatus.caducada || 0,
      icon: <MdCancelPresentation />,
      color: '#CA1622',
      bcg: '#ffeeee',
    },
    {
      title: 'Listas',
      count: statsStatus.lista || 0,
      icon: <MdFactCheck />,
      color: '#02A144',
      bcg: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      <h3>Noticias</h3>
      <div className="stats-container">
        {checkStats.map((item, index) => {
          return <StatsItem key={index} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};
export default StatsContainer;
