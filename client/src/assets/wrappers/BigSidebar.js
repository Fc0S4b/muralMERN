import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  background: var(--primary-100);
  box-shadow: 3px 1px 0px 0px rgba(0, 0, 0, 0.1);
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
      color: var(--color-5-700);
      cursor: pointer;
    }
    .nightmode:hover {
      color: var(--primary-700);
    }
    .nav-link {
      font-size: 20px;
      text-align: center;
      color: var(--color-5-900);
    }
    .icon {
      color: var(--color-3-900);
    }
    .icon:hover {
      color: var(--color-3-700);
      font-size: 21px;
    }
    .btn-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5px;
      font-size: 20px;
      margin-top: 3px;
    }
    .btn-container > button {
      background: transparent;
      border: transparent;
      cursor: pointer;
    }
    .btn-container:hover {
      color: var(--primary-900);
    }

    .btn-container > h3 {
      font-size: 14px;
    }
    .btn-container span {
      color: var(--color-5-900);
    }
    .btn-container span:hover {
      color: var(--primary-500);
    }
  }
`;

export default Wrapper;
