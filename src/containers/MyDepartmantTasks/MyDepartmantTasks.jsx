import React, { useEffect } from 'react';
import { myDepartmentTasks } from '../../redux/actions/myDepartmantTasksAction';
import style from './myDepartmantTasks.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TaskCard } from '../../components/AllTasks';
import NotFound from '../NotFound/NotFound';
function MyDepartmantTasks() {
  const dispatch = useDispatch();
  const myDepartmentTasksState = useSelector(
    state => state.getMyDepartmentTasks.data
  );
  useEffect(() => {
    dispatch(myDepartmentTasks());
  }, [dispatch]);
  return (
    <>
      {myDepartmentTasksState.length ? (
        <div className={style.myDepartmentTasks}>
          <div className={style.myDepartmentTasksWrapper}>
            {myDepartmentTasksState?.map(task => {
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

export default MyDepartmantTasks;
