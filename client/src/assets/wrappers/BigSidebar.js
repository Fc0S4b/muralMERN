import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  background: var(--color-2-300);
  @media (min-width: 992px) {
    display: block;
    .sidebar-container {
      min-height: 100vh;
      height: 100%;
      width: 150px;
      margin-left: -150px;
    }
    .content {
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 30px 0;
      height: calc(100% - 4rem);
      background: red;
    }
    .show-sidebar {
      margin-left: 0;
    }
    .nav-links {
      display: flex;
      flex-direction: column;
    }
    .nightmode {
      font-size: 25px;
    }
    .nav-link {
      font-size: 25px;
    }
  }
`;

export default Wrapper;
