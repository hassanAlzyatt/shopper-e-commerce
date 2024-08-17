import { useDispatch } from "react-redux";
import { decreaseInCart, deleteFromCart, increaseInCart } from "../../Redux/CartFeature/CartActions";
import './Cart.css'
export default function CartItem(props){
    const dispatch=useDispatch()

    return(
        <div className="cart-item-class">
        <img src={props.image} alt='item' />
        <h3>{props.name}</h3>
       <div className='prices-class'>
          <p id='old-price'>{props.old_price} $</p>
          <p id='new-price'>{props.new_price} $</p>
          
          <div className="quantity-class">
          <button onClick={()=>dispatch(increaseInCart(props))} id="button-change-id">+</button>
          <p>{props.quantity}</p>
          <button onClick={()=>dispatch(decreaseInCart(props))}  disabled={props.quantity <= 1} id="button-change-id">-</button>
          </div>
          <button onClick={()=>dispatch(deleteFromCart(props))} id="delete-button">X</button>
        
       </div>
      

    </div>
    );
}