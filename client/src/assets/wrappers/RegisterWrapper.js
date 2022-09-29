import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  place-content: center;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  background: var(--color-2-100);
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  h3 {
    text-align: center;
  }
  p {
    text-align: center;
    margin: 1rem;
  }
  .form {
    max-width: 500px;
    border-bottom: 5px solid var(--primary-500);
  }
  .member-btn {
    background: transparent;
    border: transparent;
    cursor: pointer;
    color: var(--primary-500);
  }
`;

export default Wrapper;
