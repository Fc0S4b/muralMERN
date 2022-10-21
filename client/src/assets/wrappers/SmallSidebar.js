import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }

  box-shadow: 300px 1px 0px 0px rgba(200, 0, 0, 0.1);

  .content {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
  padding-top: 2px;
  background: var(--color-3-500);

  .text {
    display: none;
  }
  .icon {
    color: var(--color-5-900);
  }
  .icon:hover {
    color: var(--color-3-100);
  }
  .active {
    color: var(--color-3-300);
  }
  .active .icon {
    color: var(--color-4-100);
  }
  .nightmode {
    margin-left: 30px;
    cursor: pointer;
    color: var(--color-5-900);
  }
  .nightmode:hover {
    color: var(--color-5-300);
  }
  .off-btn {
    background: transparent;
    border: transparent;
    margin-right: 30px;
    cursor: pointer;
    color: var(--color-5-900);
  }

  .off-btn:hover {
    color: var(--primary-500);
  }
`;

export default Wrapper;
