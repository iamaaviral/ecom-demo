import React from 'react';
import Product from '../Product/Product';
import data from '../../constant'
import './List.css';

const List = () => {

    // const [data, setData] = React.useState(null);

    // const [num, setNum] = React.useState(0);

    React.useEffect(() => {
        // console.log('make the api call')
        // fetch('http://demo7838675.mockable.io/products')
        //     .then(res =>  res.json())
        //     .then(result => {
        //         setData(result.products)
        //     })
      }, [])

    //   let handleClick = () => {
    //       //have to check which button is actually clicked 
    //   }

    return(
       <div className='each-item-wrapper'>
            {
              data && data.products.map((eachItem, index) => {
                        return (
                        //     <div className="each-item">
                        //     <div className="img-wrapper">
                        //         <img src={eachItem.searchImage} alt="product-img" />
                        //     </div>
                        //     <div className="content-wrapper">
                        //         <h3 className="brand-name">{eachItem.brand}</h3>
                        //         <h4 className="brand-desc"> {eachItem.additionalInfo}</h4>
                        //         <h5>
                        //             <span className="b-d-price">Rs. {eachItem.price}</span>
                        //             {eachItem.discountDisplayLabel ? <span className="b-price">Rs. {eachItem.mrp}</span> : null}
                        //             <span className="b-discount">{eachItem.discountDisplayLabel}</span>
                        //         </h5>
                        //         <button
                        //             className={`add-to-cart-btn`}
                        //             onClick={handleClick}
                        //         >Add to Cart</button>
                        //     </div>
                        // </div>
                        <Product item={eachItem} key={index}/>
                        )
                })
            }
       </div>
    )
}

export default List;
