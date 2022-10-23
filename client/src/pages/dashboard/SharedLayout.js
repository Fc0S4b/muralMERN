import { Outlet } from 'react-router-dom';
import { Navbar, SmallSidebar, BigSidebar, FootNav } from '../../components';
import Wrapper from '../../assets/wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className="dashboard full-page">
          <BigSidebar />
          <div>
            <Navbar />
            <SmallSidebar />
            <div className="dashboard-page">
              <Outlet />
            </div>
            <FootNav />
          </div>
        </main>
      </Wrapper>
    </>
  );
};
export default SharedLayout;
