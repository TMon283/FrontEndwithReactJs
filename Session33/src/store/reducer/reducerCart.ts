type Action = {
  type: string;
  payload: any;
};

const initialState = {
  cart: [
    {
      id: 1,
      title: "Cake",
      price: 10,
      quantity: 3,
    },
    {
      id: 2,
      title: "Hamburger",
      price: 15,
      quantity: 5,
    },
  ],
};

export const reducerCart = (state = initialState, action: Action) => {
  console.log("Reducer called with action:", action.type, action.payload);
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;
      const existing = state.cart.find((p: any) => p.id === item.id);
      console.log("Existing item:", existing);
      if (existing) {
        const newState = {
          ...state,
          cart: state.cart.map((p: any) =>
            p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
        console.log("Updated existing item, new state:", newState);
        return newState;
      } else {
        const newState = {
          ...state,
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
        console.log("Added new item, new state:", newState);
        return newState;
      }
    }

    case "INCREMENT": {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.cart[index].quantity += 1;
      }
      return JSON.parse(JSON.stringify(state));
    }

    case "DECREMENT": {
      const index2 = state.cart.findIndex((item) => item.id === action.payload.id);
      if (index2 !== -1 && state.cart[index2].quantity > 1) {
        state.cart[index2].quantity -= 1;
      }
      return JSON.parse(JSON.stringify(state));
    }

    case "REMOVE": {
      const newCart = state.cart.filter((item) => item.id !== action.payload.id);
      return { ...state, cart: newCart };
    }

    default:
      return state;
  }
};
