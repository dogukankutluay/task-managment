import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './myAllTasks.module.scss';
import { myTasks } from '../../redux/actions/myTasksAction';
import { TaskCard } from '../../components/AllTasks';
import NotFound from '../NotFound/NotFound';
function MyTasks() {
  const dispatch = useDispatch();
  const myAllTasksState = useSelector(state => state.getMyAllTask.data);
  useEffect(() => {
    dispatch(myTasks());
  }, [dispatch]);
  return (
    <>
      {myAllTasksState.length ? (
        <div className={style.myAlllTasks}>
          <div className={style.myAllTasksWrapper}>
            {myAllTasksState?.map(task => {
              return <TaskCard task={task} />;
            })}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default MyTasks;
