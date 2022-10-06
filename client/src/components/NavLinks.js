import { NavLink } from 'react-router-dom';

const NavLinks = ({ links, toggleSidebar }) => {
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
            <span className="text">{text}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
