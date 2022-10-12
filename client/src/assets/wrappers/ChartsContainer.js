import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--color-3-900);
    font-size: 1.25rem;
    cursor: pointer;
  }
  button:active {
    color: var(--color-4-900);
  }
  h3 {
    text-align: center;
    margin-bottom: 0.75rem;
    color: var(--grey-500);
  }
`;

export default Wrapper;
