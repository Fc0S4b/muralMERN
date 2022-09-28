import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';

const Error = () => {
  return (
    <div>
      <img src={img} alt="not found" />
      <h3>Error</h3>
      <p>Not Found!</p>
      <Link to="/">back home</Link>
    </div>
  );
};
export default Error;
