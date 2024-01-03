export const createStatusError = (message, code) => {
  const err = new Error(message);
  err.status(code);
  return err;
};
