import Wrapper from '../assets/wrappers/Navbar';
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
} from 'react-icons/tb';
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={console.log('toggleSidebar')}>
          <TbLayoutSidebarLeftExpand />
          {/* {showSidebar? <TbLayoutSidebarLeftCollapse/>:<TbLayoutSidebarLeftExpand /> } */}
        </button>
      </div>
    </Wrapper>
  );
};
export default Navbar;
