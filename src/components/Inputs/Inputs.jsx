import React from 'react';
import { SearchClearIcon, SearchIcon } from '../../assets/icon';
import style from './inputs.module.scss';
const DefaultInput = ({
  title,
  value,
  onChange,
  type,
  autoFocus,
  placeholder,
  styles,
  stylesInput,
}) => {
  return (
    <label style={styles} className={style.inputLabel}>
      <h1>{title}</h1>
      <input
        style={stylesInput}
        placeholder={placeholder}
        id={type}
        name={type}
        type={type}
        value={value}
        autoFocus={autoFocus}
        onChange={event => onChange(event.target.value)}
      />
    </label>
  );
};
const SearchInput = ({ placeholder, value, onChange, clickClear }) => {
  return (
    <label className={style.searchInputLabel}>
      <input
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
      />
      {value.length ? (
        <SearchClearIcon style={style.clearIcon} click={clickClear} />
      ) : null}
      <SearchIcon />
    </label>
  );
};
const DefaultTextarea = ({
  title,
  placeholder,
  value,
  onChange,
  stylesTextArea,
}) => {
  return (
    <label className={style.textareaLabel}>
      <h1>{title}</h1>
      <textarea
        styles={stylesTextArea}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
};
export { DefaultInput, DefaultTextarea, SearchInput };
