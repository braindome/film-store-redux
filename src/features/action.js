export const addToCart = (film) => {
  return {
    type: "ADD_TO_CART",
    payload: film,
  };
};
