import React, { useState } from 'react';
import style from './taskcard.module.scss';
import { DefaultButton } from '../../Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import {
  taskCardUserProfile,
  taskCardDetail,
} from '../../../redux/actions/popupsAction';
import AssignedDepartmentReturn from './AssignedDepartmentReturn';
import StatusReturn from './StatusReturn';
import { TaskCardL } from '../../../language/languages';
import { DotMenuIcon } from '../../../assets/icon';
import { TaskCardHeadActionDatas } from '../../../collections/collections';
import { statusChange } from '../../../redux/actions/statusChangeAction';
function TaskCard({ task }) {
  const [headActionShow, setHeadActionShow] = useState(false);
  const languageState = useSelector(state => state.language.language);
  const dispatch = useDispatch();

  const _onClikTaskCardUserProfile = value =>
    dispatch(taskCardUserProfile(value));
  const _onClikTaskCardDetail = value => dispatch(taskCardDetail(value));
  const _onMouseOutHeadAction = () => {
    setTimeout(() => {
      setHeadActionShow(false);
    }, 1000);
  };
  const _onClickHeadAction = actionType => {
    dispatch(statusChange(task.id, actionType));
  };
  let temporaryImage1 =
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e';
  let temporaryImage2 =
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2';
  return (
    <div className={style.taskCard}>
      <div className={style.head}>
        <DotMenuIcon click={() => setHeadActionShow(!headActionShow)} />
        {headActionShow && (
          <div
            onMouseLeave={_onMouseOutHeadAction}
            className={style.headAction}>
            <ul>
              {TaskCardHeadActionDatas.map(item => {
                return (
                  <li onClick={() => _onClickHeadAction(item.actionType)}>
                    {item.name[languageState]}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className={style.container}>
        <div className={style.top}>
          <h1>{task.title}</h1>
          <span>#{task.id}</span>
          <div>
            <h1>{TaskCardL.department[languageState]}</h1>
            <p>
              <AssignedDepartmentReturn department={task.assignedDepartment} />
            </p>
          </div>
        </div>
        <div className={style.center}>
          <h1>{TaskCardL.description[languageState]}</h1>
          <p>{task.description}</p>
        </div>
        <div className={style.bottom}>
          <img
            onClick={() =>
              _onClikTaskCardUserProfile({
                popup: true,
                items: {
                  image:
                    task.user.id === 2002 ? temporaryImage1 : temporaryImage2,
                  id: task.user.id,
                },
              })
            }
            src={task.user.id === 2002 ? temporaryImage1 : temporaryImage2}
            alt=""
          />
          <div>
            <h1>{TaskCardL.name[languageState]}</h1>
            <p>{task.user.name}</p>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.footerContainer}>
          <div>
            <h1>{TaskCardL.status[languageState]}</h1>
            <StatusReturn statusReturn="color" status={task.status} />
          </div>
          <DefaultButton
            text={TaskCardL.detail[languageState]}
            onClick={() => _onClikTaskCardDetail({ popup: true, id: task.id })}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
