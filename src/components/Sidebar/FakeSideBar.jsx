import React from 'react';
import style from './sidebar.module.scss';
import collections from './sideBarCollections';
import {
  LogOutIcon,
  HamburgerMenu,
  CreateTaskIcon,
} from '../../assets/icon/index';
import { sideBarHamburger, taskCreate } from '../../redux/actions/popupsAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const FakeSideBar = () => {
  const history = useHistory();
  let location = history.location.pathname.split('/')[1];
  const dispatch = useDispatch();
  const _clickTaskCreate = () => dispatch(taskCreate(true));

  const _clickHamburgerMenu = value => dispatch(sideBarHamburger(value));
  const defaultIconColor = `rgba(194, 194, 194, 0.748)`;
  const activeIconColor = `#0E71BF`;
  return (
    <div className={style.sidebar} style={{ width: '50px' }}>
      <div className={style.logo}>
        <span onClick={() => _clickHamburgerMenu(true)}>
          <HamburgerMenu color={defaultIconColor} />
        </span>
      </div>
      <ul>
        {collections.map(({ icon: Icon, name, href }) => {
          return (
            <li key={name} style={liStyles}>
              <Link to={href} onClick={() => _clickHamburgerMenu(true)}>
                <Icon
                  color={
                    location === href.split('/')[1]
                      ? activeIconColor
                      : defaultIconColor
                  }
                />
              </Link>
            </li>
          );
        })}
        <li style={liStyles} onClick={_clickTaskCreate}>
          <CreateTaskIcon color={defaultIconColor} />
        </li>
        <li style={liStyles}>
          <LogOutIcon color={defaultIconColor} />
        </li>
      </ul>
    </div>
  );
};
const liStyles = {
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
};
export default FakeSideBar;
