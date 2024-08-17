import { useSelector } from "react-redux";
import { store } from "../../store";
import CartItem from "./CartItem";
import './Cart.css'

export default function Cart(){
    const cartItems=useSelector(state=>state.cartItems)
    const total=useSelector(state=>state.totalPrice)
    console.log(cartItems)

    return(<>
        <h1 style={{textAlign:"center",color:"blue"}}>Total: {total} </h1>
        <div className="cart-class">
            
           
            {cartItems.map((item)=>
                <CartItem {...item} />
            )}
        </div>
        </>
    );
}