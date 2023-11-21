import ShopItem from './ShopItem/ShopItem';

import './ListView.css'

export default function ListView (props) {
    const {products} = props;
  return (
    <div className='ListView '>
        {
            products.map((product) => {
                return <ShopItem product = {product}/>
            })
        }
    </div>
  )
}