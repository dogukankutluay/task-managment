import React from 'react';
import { useSelector } from 'react-redux';
import { AssignedDepartmentL } from '../../../language/languages';
function AssignedDepartmentReturn({ department }) {
  const languageState = useSelector(state => state.language.language);

  let result;
  const defaultDepartments = [
    {
      key: 1,
      value: AssignedDepartmentL.one[languageState],
    },
    {
      key: 2,
      value: AssignedDepartmentL.two[languageState],
    },
    {
      key: 3,
      value: AssignedDepartmentL.three[languageState],
    },
  ];
  var found = false;
  for (var i = 0; i < defaultDepartments.length; i++) {
    if (defaultDepartments[i].key === department) {
      found = true;
      break;
    }
  }
  if (found) {
    result = defaultDepartments.filter(item => item.key === department)[0]
      .value;
  } else {
    result = '...';
  }
  return <>{result}</>;
}

export default AssignedDepartmentReturn;
