import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  background: var(--color-3-700);
  box-shadow: 3px 1px 0px 0px rgba(0, 0, 0, 0.1);
  @media (min-width: 992px) {
    display: block;
    .sidebar-container {
      min-height: 100vh;
      width: 150px;
      margin-left: -150px;
      transition: var(--transition);
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .content {
      height: 100%;
      align-items: center;
      padding: 30px 0;
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
      color: var(--color-4-700);
      cursor: pointer;
    }
    .nightmode:hover {
      color: var(--color-5-900);
    }
    .nav-link {
      font-size: 20px;
      text-align: center;
      color: var(--color-5-900);
    }
    .icon {
      color: var(--color-4-500);
    }
    .icon:hover {
      color: var(--color-3-900);
      font-size: 21px;
    }
    .btn-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 5px;
      font-size: 20px;
    }
    .btn-container > button {
      background: transparent;
      border: transparent;
      cursor: pointer;
      margin-top: 10px;
    }
    .btn-container:hover {
      color: var(--grey-900);
    }

    .btn-container > h3 {
      font-size: 14px;
    }
    .btn-container span.text {
      color: var(--grey-200);
    }
    .btn-container span:hover {
      color: var(--grey-300);
    }
    .btn-off {
      color: var(--primary-500);
      font-size: 23px;
    }
    .btn-off h3 {
      font-size: 14px;
      color: var(--grey-200);
    }
  }
`;

export default Wrapper;
