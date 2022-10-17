import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 70vw;
  margin: 0 auto;
  background: wheat;
  .properties {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
  }

  .properties .icon {
    font-size: 40px;
  }
  .properties .text,
  .status {
    font-size: 30px;
  }
  .content,
  header {
    margin: 20px;
  }
  header > h1 {
    margin-right: 40px;
  }
  header .icon {
    font-size: 20px;
  }
  header .text {
    font-size: 22px;
  }
  .share-links {
    display: flex;
    justify-content: right;
    gap: 10px;
    align-items: center;
  }
  .share-links h3 {
    text-transform: none;
    font-size: 20px;
  }
  @media (max-width: 992px) {
    .icon {
      font-size: 30px;
    }
  }
`;

export default Wrapper;
