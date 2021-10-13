import style from './wrapper.module.scss';
import React, { useEffect } from 'react';
import { PopupsL } from '../../language/languages';
import { useHistory } from 'react-router';
import { AllTasks, MyDepartmantTasks, MyTasks } from '..';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../redux/actions/getAllUserAction';
import {
  logoutPopup,
  taskCardUserProfile,
  taskCardDetail,
  taskCreate,
  alertPopup,
} from '../../redux/actions/popupsAction';
import {
  DefaultPopup,
  TaskCardDetail,
  TaskCardUserProfilePopUp,
  TaskCreatePopup,
} from '../../components/Popups/Popups';
import { logout } from './../../redux/actions/authAction';
import { controlPathname } from '../../helpers/controllers';
import WrapperHeader from './WrapperHeader';
import { Sidebar, FakeSideBar } from '../../components';
import { DefaultAlert } from '../../components/Alerts/Alerts';
const Wrapper = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let location = history.location.pathname.split('/')[1];
  const languageState = useSelector(state => state.language.language);

  const logOutPopupShow = useSelector(state => state.popups.logout);
  const alertPopupState = useSelector(state => state.popups.alert);
  const sideBarHamburger = useSelector(state => state.popups.sidebarHamburger);
  const taskCardUserProfileData = useSelector(
    state => state.popups.taskCardUserProfile
  );
  const taskCardDetailState = useSelector(state => state.popups.taskCardDetail);
  const taskCreateState = useSelector(state => state.popups.taskCreate);
  const _onClikTaskCardUserProfile = value =>
    dispatch(taskCardUserProfile(value));
  const _onClikTaskCardDetail = value => dispatch(taskCardDetail(value));
  const togleLogoutPopupShow = value => dispatch(logoutPopup(value));
  const _logOutOnClick = () => {
    dispatch(logout());
    togleLogoutPopupShow(false);
  };
  const _onClickTaskCreate = value => dispatch(taskCreate(value));
  const wrapperAndHeadrwithHamburgerMenuStyles = () => {
    return sideBarHamburger ? {} : { paddingLeft: '60px' };
  };
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(alertPopup({ text: '', show: false, type: '' }));
  }, [dispatch]);
  return (
    <>
      {alertPopupState?.show ? <DefaultAlert props={alertPopupState} /> : null}
      {taskCreateState ? (
        <TaskCreatePopup
          popupStyles={takCreatePopupStyles}
          popupCloseClick={() => _onClickTaskCreate(false)}
        />
      ) : null}
      {taskCardDetailState.popup ? (
        <TaskCardDetail
          popupCloseClick={() =>
            _onClikTaskCardDetail({ popup: false, id: '' })
          }
        />
      ) : null}
      {logOutPopupShow ? (
        <DefaultPopup
          popupButtonText={PopupsL.logout.button[languageState]}
          popupText={PopupsL.logout.text[languageState]}
          popupStyles={popupStyles}
          popupCloseClick={() => togleLogoutPopupShow(false)}
          popupSuccesClick={_logOutOnClick}
        />
      ) : null}
      {taskCardUserProfileData?.popup ? (
        <TaskCardUserProfilePopUp
          popupStyles={takCardUserProfilePopupStyles}
          popupCloseClick={() =>
            _onClikTaskCardUserProfile({ popup: false, items: {} })
          }
        />
      ) : null}
      {sideBarHamburger ? <Sidebar /> : <FakeSideBar />}

      <div
        className={style.wrapper}
        style={wrapperAndHeadrwithHamburgerMenuStyles()}>
        <WrapperHeader
          wrapperAndHeadrwithHamburgerMenuStyles={
            wrapperAndHeadrwithHamburgerMenuStyles
          }
        />
        {controlPathname('', location) && <AllTasks />}
        {controlPathname('my-tasks', location) && <MyTasks />}
        {controlPathname('my-departmant-tasks', location) && (
          <MyDepartmantTasks />
        )}
      </div>
    </>
  );
};
const popupStyles = {
  width: '400px',
};
const takCardUserProfilePopupStyles = {
  width: '500px',
  padding: '0',
  paddingTop: '1rem',
};
const takCreatePopupStyles = {
  width: '500px',
  padding: '0',
  paddingTop: '1rem',
};
export default Wrapper;
