import styled from 'styled-components';

const Wrapper = styled.nav`
  background: var(--primary-400);
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  align-items: center;

  .nav-center {
    display: flex;
    background: white;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem;
    background: var(--primary-300);
    color: var(--grey-100);
  }
  .logo {
    height: 50px;
  }
  .toggle-btn {
    font-size: 25px;
    background: transparent;
    border: transparent;
    cursor: pointer;
    color: var(--color-4-100);
  }
  .toggle-btn:hover {
    color: var(--color-5-100);
  }
  @media (max-width: 992px) {
    .toggle-btn {
      display: none;
    }
    .logo {
      height: 40px;
    }
    .logo-text {
      font-size: 24px;
    }
  }
`;

export default Wrapper;
