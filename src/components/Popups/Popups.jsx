import React, { useEffect, useState } from 'react';
import style from './popup.module.scss';
import {
  CloseIcon,
  TitleIcon,
  DescriptionIcon,
  LogsIcon,
} from '../../assets/icon';
import { DefaultButton } from '../Buttons/Buttons';
import { useSelector, useDispatch } from 'react-redux';
import { getOneTask } from '../../redux/actions/getOneTaskAction';
import AssignedDepartmentReturn from '../AllTasks/TaskCard/AssignedDepartmentReturn';
import { deleteTask } from '../../redux/actions/deleteTaskAction';
import { convertDate } from '../../helpers/converts';
import StatusReturn from '../AllTasks/TaskCard/StatusReturn';
import jwtDecode from 'jwt-decode';
import { ActiveAndUnActiveInput } from './PopupElements';
import { editTask } from '../../redux/actions/editTaskAction';
import { PopupsL } from '../../language/languages';
import { DefaultInput, DefaultTextarea } from '../Inputs/Inputs';
import { DefaultDropDown } from '../DropDowns/DropDowns';
import { createTask } from '../../redux/actions/createTaskAction';
import { TaskDepartmentDatas } from '../../collections/collections';
import dummyfoto1 from '../../assets/img/dumy-1.jpg';
import dummyfoto2 from '../../assets/img/dumy-2.jpg';
import { alertPopup } from '../../redux/actions/popupsAction';
const PopupWrapper = props => {
  return (
    <>
      <div className={style.popupWrapper} style={props.popupStyles}>
        <div className={style.head}>
          <h2 style={{ visibility: 'hidden' }}>.</h2>
          <div>
            <button onClick={props.popupCloseClick}>
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className={style.wrapper}>{props.children}</div>
      </div>
      <button
        className={style.shadowBox}
        onClick={props.popupCloseClick}></button>
    </>
  );
};
const DefaultPopup = ({
  popupStyles,
  popupText,
  popupButtonText,
  popupCloseClick,
  popupSuccesClick,
}) => {
  return (
    <>
      <PopupWrapper popupStyles={popupStyles} popupCloseClick={popupCloseClick}>
        {popupText}
        <DefaultButton
          onClick={popupSuccesClick}
          text={popupButtonText}
          styles={{
            backgroundColor: '#0E71BF',
            width: '50%',
            marginTop: '1rem',
          }}
        />
      </PopupWrapper>
    </>
  );
};
const TaskCardUserProfilePopUp = ({ popupCloseClick, popupStyles }) => {
  const languageState = useSelector(state => state.language.language);

  const taskCarUserProfileState = useSelector(
    state => state.popups.taskCardUserProfile
  );
  const getAllUsersState = useSelector(state => state.getAllUsers.data);
  const [user] = useState(
    getAllUsersState
      ? getAllUsersState.filter(
          user => user.id === taskCarUserProfileState.items.id
        )[0]
      : {
          name: '...',
          title: '...',
          email: '...',
        }
  );

  return (
    <>
      <PopupWrapper popupStyles={popupStyles} popupCloseClick={popupCloseClick}>
        <div className={style.takCardUserProfileWrapper}>
          <img src={taskCarUserProfileState.items.image} alt="" />
        </div>
        <div className={style.taskCardUserProfileAbout}>
          <h1>{user?.name}</h1>
          <div>
            <div className={style.box}>
              <h1>{PopupsL.taskCardUserProfile.title[languageState]}</h1>
              <p>{user?.title}</p>
            </div>
            <div className={style.box}>
              <h1>Email</h1>
              <p>{user?.email}</p>
            </div>
            <div className={style.box}>
              <h1>{PopupsL.taskCardUserProfile.department[languageState]}</h1>
              <p>
                <AssignedDepartmentReturn department={user?.department} />
              </p>
            </div>
          </div>
        </div>
      </PopupWrapper>
    </>
  );
};
const TaskCardDetail = ({ popupStyles, popupCloseClick }) => {
  const dispatch = useDispatch();

  const languageState = useSelector(state => state.language.language);

  const taskId = useSelector(state => state.popups.taskCardDetail.id);
  const task = useSelector(state => state.getOneTask.data);
  const userId = jwtDecode(useSelector(state => state.user.token)).userId;
  const [activeInput, setActiveInput] = useState({
    title: false,
    description: false,
  });
  const [updateTask, setUpdateTask] = useState({
    description: '',
    title: '',
  });
  const clearAlertPopup = () => {
    setTimeout(() => {
      dispatch(
        alertPopup({
          type: '',
          text: {
            tr: '',
            en: '',
          },
          show: false,
        })
      );
    }, 2000);
  };
  const _deleteTask = () => {
    dispatch(deleteTask(taskId, popupCloseClick));
    clearAlertPopup();
  };
  const _editTask = () => {
    dispatch(editTask(taskId, updateTask));
    clearAlertPopup();
  };
  let temporaryImage2 = dummyfoto2;
  let temporaryImage1 = dummyfoto1;
  useEffect(() => {
    dispatch(getOneTask(taskId, setUpdateTask));
  }, [dispatch, taskId]);

  return (
    <>
      <PopupWrapper popupStyles={popupStyles} popupCloseClick={popupCloseClick}>
        {task ? (
          <>
            <div className={style.taskCardDetail}>
              <div className={style.title}>
                <TitleIcon />
                <ActiveAndUnActiveInput
                  activeInput={activeInput}
                  userId={userId}
                  task={task}
                  updateTask={updateTask}
                  setActiveInput={setActiveInput}
                  setUpdateTask={setUpdateTask}
                  value="title"
                />
              </div>
              <div className={style.description}>
                <DescriptionIcon />
                <div className={style.descriptionText}>
                  <h1>{PopupsL.taskCardDetail.description[languageState]}</h1>
                  <ActiveAndUnActiveInput
                    activeInput={activeInput}
                    userId={userId}
                    task={task}
                    updateTask={updateTask}
                    setActiveInput={setActiveInput}
                    setUpdateTask={setUpdateTask}
                    value="description"
                  />
                </div>
              </div>
              <div className={style.bottomWrapper}>
                <div className={style.logs}>
                  <LogsIcon />
                  <div className={style.logsContainer}>
                    <h1>{PopupsL.taskCardDetail.logs[languageState]}</h1>
                    <div className={style.logsWrapper}>
                      {task.logs.map((log, index) => {
                        console.log(log);
                        return (
                          <div className={style.logsBox} key={index}>
                            <img
                              src={
                                log.userName === 'Mary Glenn'
                                  ? temporaryImage2
                                  : temporaryImage1
                              }
                              alt={
                                log.userName === 'Mary Glenn'
                                  ? temporaryImage2
                                  : temporaryImage1
                              }
                            />
                            <div className={style.logsInfos}>
                              <div className={style.infoHead}>
                                <h2>{log.userName}</h2>
                                <p>{log.action}</p>
                              </div>
                              <div className={style.infoBottom}>
                                <h3>
                                  {convertDate(
                                    log.date,
                                    PopupsL.taskCardDetail.hour[languageState]
                                  )}
                                </h3>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className={style.actionsAndInfos}>
                  <div className={style.actionBox}>
                    <h1>{PopupsL.taskCardDetail.status[languageState]}</h1>
                    <StatusReturn statusReturn="value" status={task.status} />
                  </div>
                  <div className={style.actionBox}>
                    <h1> {PopupsL.taskCardDetail.department[languageState]}</h1>
                    <p>
                      <AssignedDepartmentReturn
                        department={task.assignedDepartment}
                      />
                    </p>
                  </div>
                  <div className={style.actionBox}>
                    <h1>{PopupsL.taskCardDetail.dutyHolder[languageState]}</h1>
                    <p>{task.user.name}</p>
                  </div>
                </div>
              </div>
              {userId === task.user.id ? (
                <div className={style.bottomActionBtns}>
                  <DefaultButton
                    text={PopupsL.taskCardDetail.delete[languageState]}
                    onClick={_deleteTask}
                  />
                  <DefaultButton
                    text={PopupsL.taskCardDetail.update[languageState]}
                    onClick={_editTask}
                  />
                </div>
              ) : null}
            </div>
          </>
        ) : null}
      </PopupWrapper>
    </>
  );
};
const TaskCreatePopup = ({ popupStyles, popupCloseClick }) => {
  const dispatch = useDispatch();
  const languageState = useSelector(state => state.language.language);
  const [createTaskState, setCreateTaskState] = useState({
    title: '',
    description: '',
    assignedDepartment: 0,
  });
  const errorAlertInitialState = {
    type: 'error',
    text: {
      tr: 'L??tfen bo?? alan b??rakmay??n??z.',
      en: 'Please do not leave any blank spaces.',
    },
    show: true,
  };
  const _onSubmit = () => {
    if (createTaskState.assignedDepartment === 0) {
      dispatch(alertPopup(errorAlertInitialState));
    } else {
      dispatch(
        createTask(
          createTaskState,
          alertPopup,
          errorAlertInitialState,
          popupCloseClick
        )
      );
    }
    setTimeout(() => {
      dispatch(alertPopup({ type: '', text: { tr: '', en: '' }, show: false }));
    }, 2000);
  };

  return (
    <>
      <PopupWrapper popupStyles={popupStyles} popupCloseClick={popupCloseClick}>
        <div className={style.taskCreate}>
          <div className={style.taskCreateContainer}>
            <DefaultInput
              title={PopupsL.taskCreate.title.text[languageState]}
              placeholder={PopupsL.taskCreate.title.placeholder[languageState]}
              onChange={value =>
                setCreateTaskState({ ...createTaskState, title: value })
              }
            />
            <DefaultTextarea
              title={PopupsL.taskCreate.description.text[languageState]}
              placeholder={
                PopupsL.taskCreate.description.placeholder[languageState]
              }
              onChange={value =>
                setCreateTaskState({ ...createTaskState, description: value })
              }
            />
            <DefaultDropDown
              onChange={value =>
                setCreateTaskState({
                  ...createTaskState,
                  assignedDepartment: Number(value),
                })
              }
              placeHolder={
                PopupsL.taskCreate.department.placeholder[languageState]
              }
              title={PopupsL.taskCreate.department.text[languageState]}
              datas={TaskDepartmentDatas}
            />
            <div className={style.actionBottom}>
              <DefaultButton
                text={PopupsL.taskCreate.button[languageState]}
                onClick={_onSubmit}
              />
            </div>
          </div>
        </div>
      </PopupWrapper>
    </>
  );
};
export {
  DefaultPopup,
  TaskCardUserProfilePopUp,
  TaskCardDetail,
  TaskCreatePopup,
};
