import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorWrapper';
const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Error, página no encontrada</h3>
        <p>No podemos encontrar la página que buscas.</p>
        <Link to="/">ir al inicio</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
