export const convertDate = (date, hourName) => {
  let d = new Date(date);
  const returnDay = d.getDate() < 9 ? `0${d.getDate()}` : d.getDate();
  const returnMonth =
    d.getMonth() + 1 < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  return `${
    returnDay + '-' + returnMonth + '-' + d.getFullYear()
  }   ${hourName} ${d.getUTCHours()}:${d.getMinutes()}`;
};
