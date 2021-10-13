import React from 'react';
import style from './alerts.module.scss';
import { useSelector } from 'react-redux';
const DefaultAlert = ({ props }) => {
  const languageState = useSelector(state => state.language.language);
  return (
    <div
      className={
        props.type === 'error'
          ? style.alertsErrorWrapper
          : props.type === 'success'
          ? style.alertsSuccessWrapper
          : ''
      }>
      <h1>{props.text[languageState]}</h1>
    </div>
  );
};
export { DefaultAlert };
