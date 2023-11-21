import ShopCard from './ShopCard/ShopCard'

import './CardsView.css'

export default function CardsView(props) {
    const {products} = props;
  return (
    <div className='cardsView'>
        {
            products.map((product) => {
                return <ShopCard product = {product}/>
            })
        }
    </div>
  )
}


