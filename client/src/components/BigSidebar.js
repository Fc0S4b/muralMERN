import Wrapper from '../assets/wrappers/BigSidebar';
import { useAppContext } from '../context/appContext';
import { NightMode, NavLinks } from '../components';
import sidebarLinks from '../utils/sidebar-links';
import { AiOutlinePoweroff } from 'react-icons/ai';
const BigSidebar = () => {
  const { showSidebar, toggleSidebar, logoutUser, user } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <header>
            <NightMode />
          </header>
          <NavLinks
            links={sidebarLinks}
            toggleSidebar={toggleSidebar}
            name={user.name}
          />
        </div>
        <div className="btn-container">
          <button onClick={logoutUser}>
            <span>
              <AiOutlinePoweroff />
            </span>
          </button>
          <h3>Cerrar sesión</h3>
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
