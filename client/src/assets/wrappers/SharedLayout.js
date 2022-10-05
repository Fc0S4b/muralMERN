import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    background: var(--primary-100);
  }
  .dashboard-page {
    width: 90vw;
    margin: 50px auto;
    padding: 2rem 0;
    height: 70vh;
  }

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
      background: var(--color-2-100);
    }
  }
`;

export default Wrapper;
