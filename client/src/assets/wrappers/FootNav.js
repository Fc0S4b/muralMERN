import styled from 'styled-components';

const Wrapper = styled.nav`
  height: 4rem;
  background: green;
  position: fixed;
  bottom: 0;
  width: 100%;

  .content {
    width: 90vw;
    padding: 10px;
    background: orange;
  }
  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-link {
    margin-left: 30px;
    text-align: center;
  }
  .icon {
    font-size: 25px;
    margin-bottom: -10px;
  }
`;

export default Wrapper;
