//defining initial states
export const initialState = {
  basket: [],
  user: null,
  // user: "",
};

// listener for our app that takes state for our App and action made , this listens what actions are made and return a new state
const reducer = (state, action) => {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Pseudo
      //happens when items added to basket
      //when Duplicate items exist(their id match or number of same id >1), show only one item
      //add their prices, using reduce method
      //use map method to find matching IDs
      //count them and display the result
      // if (action.item.id == state.basket.id) {
      return {
        //spread operator to copy previous state values of the entire App, if there are d/t states than the basket state
        ...state,
        basket: [...state.basket, action.item],
      };
    // };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove (id: ${action.id} as its not in basket)`);
      }
      return {
        state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
