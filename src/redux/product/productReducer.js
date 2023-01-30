import { ADD_TO_CART, FETCH_PRODUCTS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from "./productTypes"

const initialState = { 
    cartItems: [],
    products: null,
    loading: false,
    error: ''
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART: return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
        }
        case FETCH_PRODUCTS: return {
            ...state,
            loading: true
        }
        case FETCH_PRODUCTS_SUCCESS: return {
            ...state,
            products: action.payload,
            loading: false
        }
        case FETCH_PRODUCTS_FAILURE: return {
            ...state,
            error: action.payload,
            products: null,
            loading: false,
        }
        default: return state
    }
}

export default productReducer