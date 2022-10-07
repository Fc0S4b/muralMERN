import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 0.5rem 2rem;
  margin-bottom: 3rem;
  .form {
    max-width: 100%;
    width: 100%;
  }
  .form-input:focus {
    outline: none;
    border-bottom: 1px solid var(--primary-200);
  }
  .form-input {
    font-size: 20px;
    color: var(--grey-700);
    box-shadow: var(--inset-shadow);
  }
  .form-select {
    text-transform: capitalize;
    box-shadow: var(--inset-shadow);
  }
  .form-select:focus {
    outline: none;
    border-bottom: 1px solid var(--primary-200);
  }
  .boxText {
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
