import Wrapper from '../assets/wrappers/BigSidebar';
import { useAppContext } from '../context/appContext';
import { NightMode, NavLinks } from '../components';
import sidebarLinks from '../utils/sidebar-links';
const BigSidebar = () => {
  const { showSidebar } = useAppContext();
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
          <NavLinks links={sidebarLinks} />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
