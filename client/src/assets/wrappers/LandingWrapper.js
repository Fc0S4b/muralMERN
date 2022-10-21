import styled from 'styled-components';

const Wrapper = styled.main`
  background: var(--primary-100);
  display: grid;
  place-content: center;
  .page {
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }
  img {
    max-width: 600px;
    display: block;
  }
  p {
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
  }
  .info {
    text-align: left;
  }

  span {
    color: var(--primary-500);
  }
  p {
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    margin-bottom: 15px;
  }

  @media (max-width: 992px) {
    position: relative;
    background: var(--primary-100) url('../images/main.svg') no-repeat
      center/cover;

    img {
      opacity: 16%;
      display: block;
      position: absolute;
      top: -12%;
      left: -1%;
      width: 600px;
      height: 600px;
    }

    .info {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
    p {
      max-width: 500px;
      margin: 30px auto;
    }
  }
`;

export default Wrapper;
