import Wrapper from '../assets/wrappers/BigSidebar';
import { useAppContext } from '../context/appContext';

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        {/* <h1>hola</h1> */}
        <div className="content">{/* <h1>chao</h1> */}</div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
