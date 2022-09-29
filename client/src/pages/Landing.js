import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingWrapper';

const Landing = () => {
  return (
    <Wrapper>
      <div className="container page full-page">
        <img src={main} alt="add post" className="img main-img" />
        <div className="info">
          <h1>
            <span>Mural</span> de noticias
          </h1>
          <p>
            Crea tu propia bitácora de noticias personalizadas y gestiona la
            información que consideres relevante para compartirlas con tu propia
            comunidad.
          </p>
          <Link to="/register" className="btn btn-hero">
            Acceder/Registrarse
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Landing;
