const INITIAL_STATE = {
    listProducts: []
}

export const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, listProducts: action.payload }
        default:
            return state;
    }
}