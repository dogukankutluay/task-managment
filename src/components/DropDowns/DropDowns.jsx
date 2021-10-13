import style from './dropdowns.module.scss';
const DefaultDropDown = ({
  title,
  placeHolder,
  datas,
  onChange,
  value,
  stylesSelect,
  onClick,
}) => {
  return (
    <>
      <h1 className={style.selectTitle}>{title}</h1>
      <select
        onClick={onClick}
        style={stylesSelect}
        value={value}
        className={style.select}
        onChange={e => onChange(e.target.value)}>
        <option value="" selected disabled>
          {placeHolder}
        </option>
        {datas.map(data => {
          return <option value={data.value}>{data.name}</option>;
        })}
      </select>
    </>
  );
};

export { DefaultDropDown };
