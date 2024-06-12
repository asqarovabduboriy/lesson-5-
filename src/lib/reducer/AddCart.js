import {
  ADDCART,
  DECREMENTQUANTITY,
  INCREMENTQUANTITY,
  REMOVECART,
} from "../action/action";

const initialState = {
  cart: JSON.parse(localStorage.getItem("carts")) || [],
};
export const AddCartReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADDCART:
            if (!action.payload || !action.payload.id) {
                console.error("ADDCART action payload is missing or invalid");
                return state;
            }
            let index = state.cart.findIndex((el) => el.id === action.payload.id);
            if (index < 0) {
                const newCart = [...state.cart, { ...action.payload, quantity: 1 }];
                localStorage.setItem("carts", JSON.stringify(newCart));
                return {
                    ...state,
                    cart: newCart
                };
            }
            return state;

        case INCREMENTQUANTITY:
            if (!action.payload || !action.payload.id) {
                console.error("INCREMENTQUANTITY action payload is missing or invalid");
                return state;
            }
            const newCartInc = state.cart.map(el =>
                el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
            );
            localStorage.setItem("carts", JSON.stringify(newCartInc));
            return {
                ...state,
                cart: newCartInc
            };

            case DECREMENTQUANTITY:
                if (!action.payload || !action.payload.id) {
                    console.log("DECREMENTQUANTITY action payload is missing or invalid");
                    return state;
                }
                
                const newCardec = state.cart.map(el =>
                    el.id === action.payload.id ? { ...el, quantity: el.quantity -1 } : el
                );
                localStorage.setItem("carts", JSON.stringify(newCardec));
                return {
                    ...state,
                    cart: newCardec
                };

                case REMOVECART:
                    if (!action.payload || !action.payload.id) {
                        console.error("REMOVECART action payload is missing or invalid");
                        return state;
                    }
                    const removecart = state.cart.filter((el) => el.id !== action.payload.id);
                    localStorage.setItem("carts", JSON.stringify(removecart));
                    return {
                        ...state,
                        cart: removecart
                    };

        default:
            return state;
    }
};

;



// export const removeItem = (state = initialState, action) => {
//   switch (action.type) {
//     case REMOVECART:
//       let index = state.cart?.findIndex((el) => el.id === action.payload.id);
//       state.cart = state.cart.filter((el, i) => index !== i);
//       localStorage.setItem("carts", JSON.stringify(state.cart));
//       return {
//         ...state,
//       };
//     default:
//       return state;
//   }
// };
