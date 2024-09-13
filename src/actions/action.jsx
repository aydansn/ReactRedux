// ~ ACTION - FUNCTION RETURN TIPI OBJECT (type, payload)
export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const sign_in = () => {
  return {
    type: "SIGN_IN",
  };
};

export const sign_out = () => {
  return {
    type: "SIGN_OUT",
  };
};
