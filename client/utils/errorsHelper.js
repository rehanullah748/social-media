export const errorsConversion = (errors) => {
  let errorsObj = {};
  errors.forEach((err) => {
    const key = err.path; // name, userName, password
    errorsObj[key] = err.msg;
  });
  return errorsObj;
};
