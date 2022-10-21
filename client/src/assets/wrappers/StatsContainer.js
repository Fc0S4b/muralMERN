import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 20px 50px;
  h3 {
    display: block;
    margin-bottom: 20px;
    font-size: 1.75rem;
    color: var(--grey-400);
  }
  .stats-container {
    display: grid;
    row-gap: 2rem;
  }
  .stats-container article {
    background: var(--color-5-500);
  }

  @media (min-width: 768px) {
    .stats-container {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .stats-container {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
  }
`;

export default Wrapper;
