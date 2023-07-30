import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from 'logo.svg';
import iconMemo from '../../assets/icons/icon_memo.svg';
import iconChallenge from '../../assets/icons/icon_challenge.svg';
import iconInfo from '../../assets/icons/icon_info.svg';
import iconMenu from '../../assets/icons/icon_menu.svg';
import iconClose from '../../assets/icons/icon_close.svg';
import { t } from 'i18next';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const arrayNav = [
    {
      menuName: 'MENU_RECORD',
      icon: iconMemo,
      url: '/my-records'
    },
    {
      menuName: 'MENU_CHALLENGE',
      icon: iconChallenge,
      url: '/challenge'
    },
    {
      menuName: 'MENU_NOTICE',
      icon: iconInfo,
      url: '/info',
      isHasBadge: true
    }
  ];

  const subMenu = [
    {
      menuName: 'HEADER.SUB_MENU.MY_RECORD',
      url: '/my-records'
    },
    {
      menuName: 'HEADER.SUB_MENU.WEIGHT_CHART',
      url: '/weight-chart'
    },
    {
      menuName: 'HEADER.SUB_MENU.GOAL',
      url: '/goal'
    },
    {
      menuName: 'HEADER.SUB_MENU.SELECTED_COURSE',
      url: '/selected-course'
    },
    {
      menuName: 'HEADER.SUB_MENU.COLUMN_LIST',
      url: '/column-page'
    },
    {
      menuName: 'HEADER.SUB_MENU.SETTINGS',
      url: '/settings'
    }
  ];

  const [isShow, setIsShow] = useState(false);
  const ref = useRef(null);

  useEffect(
    () => {
      /**
     * Alert if clicked on outside of element
     */
      function handleClickOutside(event: Event | null) {
        const eventTarget = event?.target as HTMLElement;
        if (
          ref.current &&
          (ref.current as HTMLUListElement).className.includes('show') &&
          !(ref.current as HTMLUListElement).contains(eventTarget) &&
          eventTarget?.id !== 'menu-list'
        ) {
          setIsShow(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    },
    [ref]
  );

  return (
    <div className="header-wrapper d-flex sticky-top">
      <div className="d-flex main-container">
        <div className="logo col-sm-6">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
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
                <div className="position-relative">
                <img src={menu.icon} alt={t(menu.menuName)} />
                {
                  menu.isHasBadge && 
                  <div className="position-absolute translate-middle badge rounded-pill">
                      <span>1</span>
                  </div>
                }
                </div>
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
              src={isShow ? iconClose : iconMenu}
              alt={t('MENU')}
              onClick={() => setIsShow(!isShow)}
            />
            <ul
              className={`${isShow ? 'show' : ''} dropdown-menu`}
              aria-labelledby="menu-list"
              ref={ref}
            >
              {subMenu.map((menu, index) =>
                <li className="d-flex" key={index}>
                  <NavLink
                    onClick={() => setIsShow(false)}
                    className="dropdown-item"
                    to={menu.url}
                  >
                    {t(menu.menuName)}
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
