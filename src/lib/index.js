import { legacy_createStore,combineReducers } from "redux";
import { wishlistReducer } from "./reducer/wishlist";
import { AddCartReducer } from "./reducer/AddCart";
const reducer = combineReducers({
    wishlist:wishlistReducer,
    cart:AddCartReducer,

});
 const store = legacy_createStore(reducer);
 export default store