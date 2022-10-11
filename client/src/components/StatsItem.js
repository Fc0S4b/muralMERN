import Wrapper from '../assets/wrappers/StatItem';

const StatsItem = ({ count, title, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <h5 className="title">{title}</h5>
        <span className="icon">{icon}</span>
      </header>
    </Wrapper>
  );
};
export default StatsItem;
