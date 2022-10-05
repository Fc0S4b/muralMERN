import Wrapper from '../assets/wrappers/FootNav';
import links from '../utils/nav-links';
import { NavLinks } from '../components';
const FootNav = () => {
  return (
    <Wrapper>
      <div className="content">
        <NavLinks links={links} />
      </div>
    </Wrapper>
  );
};
export default FootNav;
