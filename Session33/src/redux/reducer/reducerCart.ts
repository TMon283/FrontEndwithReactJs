type Action={
    type:string,
    payload:any
}
const initialState={
    cart:[
        {
            id:1,
            title:"Cake",
            price: 10,
            quantity:3
        },
         {
            id:2,
            title:"Hamburger",
            price: 15,
            quantity:5
        }
    ],
    
}
export const reducerCart= (state=initialState, action:Action)=>{
   switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;
      const existing = state.cart.find((p: any) => p.id === item.id);
      if (existing) {
        return {
          ...state,
          cart: state.cart.map((p: any) =>
            p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
      }
    }
    case "INCREMENT": {
      return {
        ...state,
        cart: state.cart.map((p: any) =>
          p.id === action.payload.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        ),
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        cart: state.cart.map((p: any) =>
          p.id === action.payload.id
            ? { ...p, quantity: p.quantity - 1 }
            : p
        ),
      };
    }
    case "REMOVE": {
      return {
        ...state,
        cart: state.cart.filter((p: any) => p.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
}