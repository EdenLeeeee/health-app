import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header-wrapper col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="list-group">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''}
        >
          Home
        </NavLink>
        <NavLink
          to="/column-page"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''}
        >
          Column Page
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
