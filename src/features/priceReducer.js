const initialState = {
  price: 0,
};

const calculatePrice = (year) => {
  let price = 0;

  if (year < 2010) {
    price = 29;
  } else if (year < 2016) {
    price = 39;
  } else {
    price = 49;
  }

  return price;
};

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CALCULATE_PRICE":
      const year = parseInt(action.payload, 10);
      const calculatedPrice = calculatePrice(year);
      return {
        ...state,
        price: calculatedPrice,
      };

    default:
      return state;
  }
};

export default {priceReducer, calculatePrice};
