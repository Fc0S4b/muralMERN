import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--clr-white);
  border-radius: var(--radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--offset-shadow);
  margin: 10px;
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-200);
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    .start-icon {
      margin-right: 15px;
      font-size: 30px;
      opacity: 0.5;
      color: #ffa033;
    }
    .start-icon:hover {
      opacity: 1;
    }
    .active {
      opacity: 1;
    }
    h4 {
      letter-spacing: 0;
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--radius);
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--clr-white);
    margin-right: 1.5rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
      font-weight: bold;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
    }
  }
  .pendiente {
    background: var(--color-4-500);
    color: var(--color-4-900);
  }
  .lista {
    background: #cadae3;
    color: #467186;
  }
  .compartida {
    background: var(--color-5-900);
    color: var(--color-5-500);
  }
  .caducada {
    color: var(--primary-500);
    background: var(--primary-200);
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--radius);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    text-align: center;
    width: 100px;
    height: 30px;
  }
  .icon {
    font-size: 21px;
    color: var(--grey-500);
  }
  .text {
    font-size: 18px;
    margin-left: 3px;
    color: var(--grey-600);
  }
  footer {
    margin-top: 1rem;
  }

  .actions {
    display: flex;
  }
  .actions a {
    font-size: 15px;
    display: grid;
    place-content: center;
  }
  .edit-btn,
  .watch-btn,
  .delete-btn {
    letter-spacing: var(--spacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--grey-200);
    background: var(--color-4-900);
    margin-right: 0.5rem;
  }
  .edit-btn:hover {
    color: var(--grey-700);
    background: var(--color-4-500);
  }
  .watch-btn {
    color: var(--grey-100);
    background: var(--color-2-700);
    margin-right: 0.5rem;
  }
  .watch-btn:hover {
    background: var(--color-2-500);
    color: var(--grey-200);
  }
  .delete-btn {
    color: var(--primary-700);
    background: var(--primary-200);
  }
  .delete-btn:hover {
    color: var(--primary-100);
    background: var(--primary-500);
  }
  &:hover .actions {
    visibility: visible;
  }
  .actions-container {
    display: flex;
    justify-content: space-between;
  }
  .share-links a {
    height: 30px;
    margin-left: 1px;
    background: transparent;
    color: var(--primary-300);
    box-shadow: none;
  }
  .share-links a:hover {
    color: var(--primary-500);
    box-shadow: var(--inset-shadow);
  }
`;

export default Wrapper;
