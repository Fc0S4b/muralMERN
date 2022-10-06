import Wrapper from '../assets/wrappers/SmallSidebar';
import { NavLinks, NightMode } from '../components';
import sidebarLinks from '../utils/sidebar-links';
const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className="content">
        <NightMode />
        <NavLinks links={sidebarLinks} />
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
