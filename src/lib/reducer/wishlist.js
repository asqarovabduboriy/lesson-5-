import { TOGLELIKE } from "../action/action";


const initialState = {
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
}

export const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGLELIKE:
           let index = state.wishlist?.findIndex((el) => el.id === action.payload.id)

           if(index < 0){
          state.wishlist= [...state.wishlist, action.payload]
           }else{
           state.wishlist = state.wishlist.filter((el) => el.id !== action.payload.id)
           }

           localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
            return {
                ...state,
            }
        default:
            return state
    }
}