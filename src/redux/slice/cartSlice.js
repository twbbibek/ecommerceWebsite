import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setReduxcart: (state, action) => {
      state.cartItems = action.payload;
    },
    addToReduxCart: (state, action) => {
      let product = action.payload;
      let oldItems = [...state.cartItems];
      let { id, name, price } = product;

      /* if already exists .. increment to the quantity else create new cart item  */

      let matched = oldItems.find(el => el._id == _id)

      if( matched) {
         oldItems = oldItems.map(el => {
           if(el._d === _id) {
            return {...el, quality: el.quantity + 1}
           }
           return el
         })
      }else{
        oldItems.push({ _id, name, price });
      }

      state.cartItems = oldItems;
    },
    decrement:(state, action)=> {
      let _id = action.payload
      let oldItems = [...state.cartItems]
    }
  },
});

// Action creators are generated for each case reducer function
export const { setReduxcart, addToReduxCart } = cartSlice.actions;

export default cartSlice.reducer;
