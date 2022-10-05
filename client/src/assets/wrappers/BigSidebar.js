import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    .sidebar-container {
      background: var(--primary-200);
      min-height: 100vh;
      height: 100%;
      width: 150px;
      margin-left: -150px;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
  }
`;

export default Wrapper;
