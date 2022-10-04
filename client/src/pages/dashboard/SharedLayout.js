import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="all-news">ver todas las noticias</Link>
        <Link to="add-new">Agregar noticia</Link>
      </nav>
    </Wrapper>
  );
};
export default SharedLayout;
