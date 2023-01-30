import { ADD_TO_CART, FETCH_PRODUCTS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from "./productTypes"

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsFailure = (err) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: err
    }
}

export const fetchProductsAPI =() => {
    return (dispatch) => {
        dispatch(fetchProducts)
        fetch('http://demo9170788.mockable.io/products')
        .then(res =>  res.json())
        .then(result => {
            const products = result.products
            dispatch(fetchProductsSuccess(products))
        }).catch(err => {
            const errMsg = err.message
            dispatch(fetchProductsFailure(errMsg))
        })
    }
}