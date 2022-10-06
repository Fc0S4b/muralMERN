import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
} from 'react-icons/tb';
import { useAppContext } from '../context/appContext';
const Navbar = () => {
  const { showSidebar, title, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          {showSidebar ? (
            <TbLayoutSidebarLeftCollapse />
          ) : (
            <TbLayoutSidebarLeftExpand />
          )}
        </button>

        <h3 className="logo-text">{title}</h3>
        <Logo className="logo" />
      </div>
    </Wrapper>
  );
};
export default Navbar;
