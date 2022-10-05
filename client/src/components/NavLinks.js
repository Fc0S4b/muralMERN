import { NavLink } from 'react-router-dom';

const NavLinks = ({ links }) => {
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
            end
          >
            <div className="icon icon-text">{icon}</div>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
