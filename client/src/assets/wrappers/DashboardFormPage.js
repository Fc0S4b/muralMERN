import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 3rem 2rem 1rem;
  .form {
    max-width: 100%;
    width: 100%;
  }
  @media (min-width: 992px) {
    .form-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 0.5rem;
      column-gap: 1rem;
    }
    .btn-container {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }
    .btn-container .btn {
      width: 30%;
    }
  }
`;

export default Wrapper;
