import styled from 'styled-components';

const Wrapper = styled.nav`
  height: 4rem;
  background: var(--primary-500);
  box-shadow: 3px 1px 0px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  width: 100%;

  .content {
    width: 90vw;
    padding: 10px;
    background: var(--primary-500);
  }
  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-link {
    margin-left: 30px;
    text-align: center;
    color: var(--color-5-300);
  }
  .nav-link:hover {
    color: var(--color-4-300);
  }
  .icon {
    font-size: 25px;
    margin-bottom: -10px;
    color: var(--color-4-700);
  }
  .icon:hover {
    color: var(--color-3-500);
  }
  .active {
    color: var(--color-3-500);
  }
  .active .icon {
    color: var(--color-4-100);
  }
`;

export default Wrapper;
