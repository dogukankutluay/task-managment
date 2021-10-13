import React from 'react';
import style from './buttons.module.scss';
const DefaultButton = ({
  text,
  styles,
  loadingIcon: Icon,
  loading,
  onClick,
}) => {
  return (
    <button className={style.button} style={styles} onClick={onClick}>
      {loading ? <Icon /> : text}
    </button>
  );
};

export { DefaultButton };
