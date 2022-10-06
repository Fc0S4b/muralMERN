import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    background: var(--primary-100);
  }
  .dashboard-page {
    width: 90vw;
    margin: -30px auto;
    /* padding: 1rem 0; */
    height: 70vh;
    transition: var(--transition);
  }

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
      background: var(--color-2-100);
      transition: var(--transition);
      margin: 0px auto;
    }
  }
`;

export default Wrapper;
