export const setAuth = (data) => {
  localStorage.setItem('maqshaf-user', JSON.stringify(data?.data));
};

export const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem('maqshaf-user'));
  } catch (err) {
    console.error(err);
    return null;
  }
};
