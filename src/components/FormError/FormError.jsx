import React from 'react';
import style from './formerror.module.scss';
const DefaultErorr = ({ errorName }) => {
  return <h1 className={style.formError}>{errorName}</h1>;
};

export { DefaultErorr };
