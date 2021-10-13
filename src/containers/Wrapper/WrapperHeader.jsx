import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import style from './wrapper.module.scss';
import { BottomArrow } from '../../assets/icon';
import { useSelector, useDispatch } from 'react-redux';
import { controlPathname } from '../../helpers/controllers';
import { SearchInput } from '../../components/Inputs/Inputs';
import { searchTask, getAllTasks } from '../../redux/actions/getAllTasksAction';
import { HeaderL } from '../../language/languages';
const HeaderProfile = () => {
  let temporaryImage =
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e';
  const userInfo = useSelector(state => state.user.userInfo);

  return (
    <div className={style.profileBtn}>
      <img src={temporaryImage} alt="" />
      <h2>{userInfo?.name}</h2>
      <BottomArrow color="#7B7D7D" />
    </div>
  );
};
function WrapperHeader({ wrapperAndHeadrwithHamburgerMenuStyles }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const languageState = useSelector(state => state.language.language);
  const [searchValue, setSearchValue] = useState('');
  let location = history.location.pathname.split('/')[1];
  const _onClickClearIcon = () => {
    setSearchValue('');
    dispatch(getAllTasks());
  };
  useEffect(() => {
    if (searchValue.length) {
      dispatch(searchTask(searchValue));
    } else {
      dispatch(getAllTasks());
    }
  }, [dispatch, searchValue]);
  return (
    <>
      <header
        className={style.header}
        style={wrapperAndHeadrwithHamburgerMenuStyles()}>
        <h2>
          {controlPathname('', location) &&
            HeaderL.allTasks.pageName[languageState]}
          {controlPathname('my-tasks', location) &&
            HeaderL.myTasks.pageName[languageState]}
          {controlPathname('my-departmant-tasks', location) &&
            HeaderL.myDepartmentTasks.pageName[languageState]}
        </h2>
        <div className={style.headerContainer}>
          {controlPathname('', location) && (
            <SearchInput
              placeholder={HeaderL.allTasks.searchBarPlaceHolder[languageState]}
              value={searchValue}
              onChange={setSearchValue}
              clickClear={_onClickClearIcon}
            />
          )}
        </div>
        {controlPathname('settings', location) && <HeaderProfile />}
      </header>
    </>
  );
}

export default WrapperHeader;
