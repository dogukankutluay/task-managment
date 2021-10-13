import React from 'react';
import style from './notfound.module.scss';
import { useSelector } from 'react-redux';
import { NotFoundL } from '../../language/languages';
function NotFound() {
  const languageState = useSelector(state => state.language.language);
  return (
    <div className={style.notFoundWrapper}>
      {NotFoundL.notfound[languageState]}
    </div>
  );
}

export default NotFound;
