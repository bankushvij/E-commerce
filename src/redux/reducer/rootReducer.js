
import { combineReducers } from "redux";

import itemsReducer from "./items/items.reducer";
const rootReducer=combineReducers(
    {
        itemsReducer,
    }
)

export default rootReducer;