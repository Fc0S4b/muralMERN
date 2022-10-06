import Wrapper from '../assets/wrappers/SmallSidebar';
import { NavLinks, NightMode } from '../components';
import sidebarLinks from '../utils/sidebar-links';
import { AiOutlinePoweroff } from 'react-icons/ai';

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className="content">
        <NightMode />
        <NavLinks links={sidebarLinks} />
        <button className="off-btn">
          <span>
            <AiOutlinePoweroff />
          </span>
        </button>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
