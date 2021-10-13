export const getToken = () => {
  const token = localStorage.getItem('jwtToken');
  return {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
};
