import styled from 'styled-components';

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--primary-200);
    border-radius: var(--radius);
  }
  .pageBtn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    transition: var(--transition);
    border-radius: var(--radius);
    cursor: pointer;
  }
  .active {
    background: var(--primary-500);
    color: var(--clr-white);
  }
  .prev-btn,
  .next-btn {
    width: 100px;
    height: 40px;
    border-color: transparent;
    background: transparent;
    border-radius: var(--radius);
    color: var(--primary-500);
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-500);
    color: var(--grey-200);
  }
`;

export default Wrapper;
