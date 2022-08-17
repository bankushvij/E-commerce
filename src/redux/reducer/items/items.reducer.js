import { GET_ITEMS, GET_IMAGE } from "./items.type";

const initialState = {
    items: [],
    image: []
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case GET_IMAGE:
            return {
                ...state,
                image: action.payload,
            };


        default:
            return {
                ...state,
            };
    }
}

export default itemsReducer;