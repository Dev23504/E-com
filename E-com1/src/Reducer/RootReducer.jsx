import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import ItemReducer from "./ItemReducer";


const RootReducer=combineReducers(
    {
        CartReducer : CartReducer,
        ItemReducer: ItemReducer
        
    }
)
export default RootReducer