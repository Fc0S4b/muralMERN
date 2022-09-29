import styled from 'styled-components';

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 500px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    border: 2px dotted var(--primary-500);
    text-transform: capitalize;
  }
  a:hover {
    color: var(--primary-100);
    background: var(--primary-500);
  }
`;

export default Wrapper;
