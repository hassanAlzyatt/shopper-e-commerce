import { useDispatch } from 'react-redux';
import {addToCart} from '../../Redux/CartFeature/CartActions';
import './Item.css'
export default function Item (props){
    const dipatch=useDispatch()
    const{image,name,old_price,new_price}=props
    const product=props


    return(
        <div className="item-class">
            <img src={image} alt='item' />
            <h3>{name}</h3>
           <div className='prices-class'>
              <p id='old-price'>{old_price} $</p>
              <p id='new-price'>{new_price} $</p>
              <button id='cart-button' onClick={()=>dipatch(addToCart(product))}> Add To Cart ➡</button>
           </div>
          

        </div>
    );

}