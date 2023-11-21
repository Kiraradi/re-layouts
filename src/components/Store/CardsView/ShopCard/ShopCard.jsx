import { v4 as uuidv4 } from 'uuid'

import './ShopCard.css'

export default function ShopCard(props) {
    const {product} = props;
  return (
    <div className='shopCard' key={uuidv4()}>
        <h2 className='shopCard-name'>{ product.name }</h2>
        <h3 className='shopCard-color'>{ product.color }</h3>
        <img className='shopCard-img' src= {product.img} alt='shopCard-img'/>
        <div className='price-wrapper'>
            <div className='price'>{`$ ${product.price}`}</div>
            <button className='price-button'> Add to cart</button>
        </div>
    </div>
  )
}

