import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';
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

        <h3 className="logo-text">dashboard</h3>
        <Logo className="logo" />
      </div>
    </Wrapper>
  );
};
export default Navbar;
