import { v4 as uuidv4 } from 'uuid'

import './ShopItem.css'

export default function ShopItem(props) {
    const {product} = props;
  return (
    <div className='shopItem' key={uuidv4()}>
        <h2 className='shopItem-name'>{ product.name }</h2>
        <h3 className='shopItem-color'>{ product.color }</h3>
        <img className='shopItem-img' src= {product.img} alt='shopCard-img'/>
        <div className='shopItem-price-wrapper'>
            <div className='shopItem-price'>{`$ ${product.price}`}</div>
            <button className='shopItem-price-button'> Add to cart</button>
        </div>
    </div>
  )
}