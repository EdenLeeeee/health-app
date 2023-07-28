import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from 'logo.svg';
import iconMemo from '../../assets/icons/icon_memo.svg';
import iconChallenge from '../../assets/icons/icon_challenge.svg';
import iconInfo from '../../assets/icons/icon_info.svg';
import iconMenu from '../../assets/icons/icon_menu.svg';
import { t } from 'i18next';

function Header() {
  const arrayNav = [
    {
      menuName: 'MENU_RECORD',
      icon: iconMemo,
      url: ''
    },
    {
      menuName: 'MENU_CHALLENGE',
      icon: iconChallenge,
      url: '/challenge'
    },
    {
      menuName: 'MENU_NOTICE',
      icon: iconInfo,
      url: '/info'
    }
  ];
  return (
    <div className="header-wrapper d-flex">
      <div className="logo col-sm-6">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-item col-sm-6">
        {arrayNav.map((menu, index) => {
          return (
            <NavLink
              key={index}
              to={menu.url}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''}
            >
              <img src={menu.icon} alt={t(menu.menuName)} />
              <span className="ms-2">
                {t(menu.menuName)}
              </span>
            </NavLink>
          );
        })}

        <div className="dropdown">
          <img
            className="dropdown-toggle"
            id="menu-list"
            data-bs-toggle="dropdown"
            src={iconMenu}
            alt={t('MENU')}
          />
          <ul className="dropdown-menu" aria-labelledby="menu-list">
            <li>
              <NavLink className="dropdown-item" to="#">
                Action
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
