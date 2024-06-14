// import Item from "../Item";

const initialData = {
  Cart: [],
};

function CartReducer(state = initialData, action) {
  switch (action.type) {
    case "Add_Item_To_Cart":
      return {
        ...state,
        Cart: [...state.Cart, action.payload],
      };
    case "Delete_Item_From_Cart":
      return {
        ...state,
        Cart: state.Cart.filter(
          (item) => item.Mobile != action.payload.Mobile
        ),
      };
  }
  return state;
}

export default CartReducer;
