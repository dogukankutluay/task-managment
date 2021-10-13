import React, { useEffect } from 'react';
import style from './sidebar.module.scss';
import { Link } from 'react-router-dom';
import collections from './sideBarCollections';
import {
  LogOutIcon,
  HamburgerMenu,
  CreateTaskIcon,
} from '../../assets/icon/index';
import { DefaultDropDown } from '../../components/DropDowns/DropDowns';
import { useDispatch, useSelector } from 'react-redux';
import { SideBarL } from '../../language/languages';
import { DropLanguagesDatas } from '../../collections/collections';
import {
  logoutPopup,
  sideBarHamburger,
  taskCreate,
} from '../../redux/actions/popupsAction';
import { languageAction } from '../../redux/actions/languageAction';
import { useHistory } from 'react-router';
import { taskCardUserProfile } from '../../redux/actions/popupsAction';
import { getMe } from '../../redux/actions/authAction';
const Sidebar = () => {
  const history = useHistory();
  let location = history.location.pathname.split('/')[1];
  const languageState = useSelector(state => state.language.language);
  const getMeState = useSelector(state => state.user.info);
  const dispatch = useDispatch();
  const _logOutOnClick = () => dispatch(logoutPopup(true));
  const _clickTaskCreate = () => dispatch(taskCreate(true));
  const _clickHamburgerMenu = () => dispatch(sideBarHamburger(false));
  const _changeLangAction = value => dispatch(languageAction(value));
  const _onClikTaskCardUserProfile = value =>
    dispatch(taskCardUserProfile(value));
  const defaultIconColor = `rgba(194, 194, 194, 0.748)`;
  const activeIconColor = `#0E71BF`;
  console.log('get me', getMeState);
  let temporaryImage1 =
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e';
  let temporaryImage2 =
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2';
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <img
          onClick={() =>
            _onClikTaskCardUserProfile({
              popup: true,
              items: {
                image:
                  getMeState?.id === 2002 ? temporaryImage1 : temporaryImage2,
                id: getMeState?.id,
              },
            })
          }
          src={getMeState?.id === 2002 ? temporaryImage1 : temporaryImage2}
          alt={getMeState?.id === 2002 ? temporaryImage1 : temporaryImage2}
        />
        <span onClick={_clickHamburgerMenu}>
          <HamburgerMenu color={defaultIconColor} />
        </span>
      </div>
      <ul>
        {collections.map(({ icon: Icon, href, name, text }) => {
          return (
            <li key={name}>
              <Link to={href}>
                <Icon
                  color={
                    location === href.split('/')[1]
                      ? activeIconColor
                      : defaultIconColor
                  }
                />
                <h1>{text[languageState]}</h1>
              </Link>
            </li>
          );
        })}

        <li>
          <div onClick={_clickTaskCreate}>
            <CreateTaskIcon color={defaultIconColor} />
            <h1>{SideBarL.createTask[languageState]}</h1>
          </div>
        </li>
        <li>
          <div onClick={_logOutOnClick}>
            <LogOutIcon color={defaultIconColor} />
            <h1>{SideBarL.logout[languageState]}</h1>
          </div>
        </li>
        <li>
          <DefaultDropDown
            placeHolder={SideBarL.langChoose[languageState]}
            onChange={e => {
              _changeLangAction(e);
            }}
            value={languageState}
            datas={DropLanguagesDatas}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
