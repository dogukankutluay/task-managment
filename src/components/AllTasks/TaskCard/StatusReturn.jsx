import React from 'react';
import { useSelector } from 'react-redux';
import { StatusL } from '../../../language/languages';
function StatusReturn({ status, statusReturn }) {
  const languageState = useSelector(state => state.language.language);
  let result;

  const defaultStatus = [
    {
      key: 0,
      value: StatusL.one[languageState],
      color: {
        backgroundColor: 'yellow',
      },
    },
    {
      key: 1,
      value: StatusL.two[languageState],
      color: {
        backgroundColor: 'green',
      },
    },
    {
      key: 2,
      value: StatusL.three[languageState],
      color: {
        backgroundColor: 'red',
      },
    },
  ];
  var found = false;
  for (var i = 0; i < defaultStatus.length; i++) {
    if (defaultStatus[i].key === status) {
      found = true;
      break;
    }
  }
  if (found) {
    let filter = defaultStatus.filter(item => item.key === status);
    if (filter.length) {
      result = filter[0][statusReturn];
    }
  } else {
    result = {};
  }
  if (statusReturn === 'color') {
    return (
      <>
        <span style={result}></span>
      </>
    );
  }
  if (statusReturn === 'value') {
    return (
      <>
        <p>{result}</p>
      </>
    );
  }
}

export default StatusReturn;
