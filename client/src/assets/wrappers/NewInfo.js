import styled from 'styled-components';

const Wrapper = styled.section`
  margin-left: 10px;
  color: var(--grey-700);
  .icon svg {
    font-size: 22px;
  }
  @media (max-width: 992px) {
    .icon svg {
      font-size: 30px;
    }
  }
`;

export default Wrapper;
