import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const NavLinks = ({ links, toggleSidebar, name }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link '
            }
            onClick={toggleSidebar}
            end
          >
            <div className="icon icon-text">{icon}</div>
            <span className="text">{name || text}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
