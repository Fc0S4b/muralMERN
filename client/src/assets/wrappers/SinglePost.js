import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 70vw;
  margin: 0 auto;
  background: var(--color-4-500);
  .properties {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
  }

  .properties .icon {
    font-size: 40px;
    color: var(--primary-700);
  }
  .properties .text,
  .status {
    font-size: 30px;
  }
  .status {
    border-radius: 10px;
    color: var(--grey-700);
  }
  .pendiente {
    background: var(--color-4-500);
    color: var(--color-4-900);
  }
  .lista {
    background: #cadae3;
    color: #467186;
    padding: 5px;
  }
  .compartida {
    background: var(--color-5-900);
    color: var(--color-5-500);
  }
  .caducada {
    color: var(--primary-500);
    background: var(--primary-200);
  }
  .content,
  header {
    margin: 20px;
  }
  header {
    color: var(--color-5-900);
  }
  .content {
    color: var(--color-5-700);
  }
  p {
    color: var(--color-3-900);
    text-align: justify;
  }
  header > h1 {
    margin-right: 40px;
  }
  header .icon {
    font-size: 20px;
  }
  header .text {
    font-size: 22px;
    text-transform: capitalize;
  }

  @media (max-width: 992px) {
    .icon {
      font-size: 25px;
    }
  }
`;

export default Wrapper;
