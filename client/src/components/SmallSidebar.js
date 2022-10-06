import Wrapper from '../assets/wrappers/SmallSidebar';
import { NavLinks, NightMode } from '../components';
import sidebarLinks from '../utils/sidebar-links';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useAppContext } from '../context/appContext';

const SmallSidebar = () => {
  const { logoutUser } = useAppContext();

  return (
    <Wrapper>
      <div className="content">
        <NightMode />
        <NavLinks links={sidebarLinks} />
        <button className="off-btn" onClick={logoutUser}>
          <span>
            <AiOutlinePoweroff />
          </span>
        </button>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
