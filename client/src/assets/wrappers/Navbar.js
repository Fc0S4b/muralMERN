import styled from 'styled-components';

const Wrapper = styled.nav`
  background: green;
  width: 100%;
  position: sticky;
  top: 0;
  /* margin-bottom: 30px; */
  align-items: center;
  .nav-center {
    display: flex;
    background: white;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem;
    background: yellow;
  }
  .logo {
    height: 50px;
  }
`;

export default Wrapper;
