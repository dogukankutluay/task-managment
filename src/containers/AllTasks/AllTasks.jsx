import React, { useEffect, useState } from 'react';
import style from './alltasks.module.scss';
import { TaskCard } from '../../components/AllTasks';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllTasks,
  filterAllTasks,
} from '../../redux/actions/getAllTasksAction';
import { DefaultDropDown } from '../../components/DropDowns/DropDowns';
import {
  TaskDepartmentDatas,
  TaskStatusDatas,
} from '../../collections/collections';
import { AllTasksL } from '../../language/languages';
import NotFound from '../NotFound/NotFound';
function AllTasks() {
  const dispatch = useDispatch();
  const languageState = useSelector(state => state.language.language);

  const getAllTasksState = useSelector(state => state.getAllTasks.data);
  const [filterState, setFilterState] = useState({
    assignedDepartment: -1,
    status: -1,
  });
  let additionalDropData = {
    value: -1,
    name: AllTasksL.filter.all[languageState],
  };
  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);
  useEffect(() => {
    dispatch(filterAllTasks(filterState));
    if (filterState.assignedDepartment === -1 && filterState.status === -1) {
      dispatch(getAllTasks());
    }
  }, [dispatch, filterState]);
  return (
    <>
      <div className={style.allTasks}>
        <div className={style.allTasksWrapper}>
          <div className={style.filterHead}>
            <div className={style.filterHeadWrapper}>
              <DefaultDropDown
                placeHolder={AllTasksL.filter.department[languageState]}
                datas={[...TaskDepartmentDatas, additionalDropData]}
                onChange={value =>
                  setFilterState({
                    ...filterState,
                    assignedDepartment: Number(value),
                  })
                }
              />
              <DefaultDropDown
                placeHolder={AllTasksL.filter.status[languageState]}
                datas={[...TaskStatusDatas, additionalDropData]}
                onChange={value =>
                  setFilterState({
                    ...filterState,
                    status: Number(value),
                  })
                }
              />
            </div>
          </div>
          {getAllTasksState.length ? (
            getAllTasksState.map(task => {
              return <TaskCard task={task} />;
            })
          ) : (
            <NotFound styles={notFoundStyles} />
          )}
        </div>
      </div>
    </>
  );
}
const notFoundStyles = {
  marginTop: '7rem',
};
export default AllTasks;
