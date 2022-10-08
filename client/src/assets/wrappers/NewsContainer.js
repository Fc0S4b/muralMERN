import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 2rem 1rem;
  background: var(--color-2-200);
  h3 {
    text-transform: none;
  }
  .news {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
  @media (min-width: 800px) {
    .news {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default Wrapper;
