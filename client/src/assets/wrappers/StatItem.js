import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 1.5rem;
  background: var(--clr-white);
  border-radius: var(--radius);
  border-bottom: 4px solid ${(props) => props.color};
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.color};
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-size: 20px;
    color: var(--grey-500);
  }
  span.icon {
    background: transparent;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${(props) => props.bcg};
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 4rem;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;
