import { ADD_TO_CART } from "./productTypes"

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}