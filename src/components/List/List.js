import React, { useContext } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchProductsAPI } from '../../redux/product/productActions';
import Product from '../Product/Product';
// import data from '../../constant'
import './List.css';

//connect......

const List = (props) => {
  console.log(props)
    // const  data = useSelector((state) => state.product.products)
    // const loading = useSelector((state) => state.product.loading)
    // const dispatch =  useDispatch()

    React.useEffect(() => {
        // dispatch(fetchProductsAPI())
        console.log(props)
        props.getProducts()
      }, [])


    return(
       <div className='each-item-wrapper'>
            {
              props.products && props.products.map((eachItem, index) => {
                        return (
                        <Product item={eachItem} key={index} />
                        )
                })
            }
       </div>
    )
}

const mapStateToProps  = state => {
  return {
    products: state.product.products,
    loading: state.product.loading,
    error: state. product.error
  }
}



const mapDispatchToProps  = dispatch => {
  return {
    getProducts: () => dispatch(fetchProductsAPI())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);
// [items of cart], click action due to which this array changes
