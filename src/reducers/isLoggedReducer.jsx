const isLoggedReducer = (state = false, action) => {
  if (action.type === "SIGN_IN") {
    return (state = true);
  } else if (action.type === "SIGN_OUT") {
    return (state = false);
  } else {
    return state;
  }
};

export default isLoggedReducer;
