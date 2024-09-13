const counterReducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return  state = state + action.payload;
  } else if (action.type === "DECREMENT") {
   return state = state - 1;
  } else {
   return state = 0;
  }
};
export default counterReducer;
