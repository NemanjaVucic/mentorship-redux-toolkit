import { NavLink } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink className="nav-links" to="/">
        Home
      </NavLink>
      <NavLink className="nav-links" to="/create">
        Create
      </NavLink>
      <NavLink className="nav-links" to="/update">
        Update
      </NavLink>
      <NavLink className="nav-links" to="/about">
        About
      </NavLink>
    </nav>
  );
};
