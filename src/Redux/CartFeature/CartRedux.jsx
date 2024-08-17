
const initialState={
    cartItems:[],
    totalPrice:0,
    totalNumOfItems:0
}

function productIsInCart(product, state) {
    return state.cartItems.some(item => item.id === product.id);
}

 function calculateTotalItems(newCartItems){
    let total=0;
   newCartItems.map((item)=>{
        total+=(item.quantity)
    })
    return total
   

    
}
const CartReducer=(state=initialState,action)=>{

    switch(action.type) {
        case "ADD_TO_CART": {
            
         
       

            if (productIsInCart(action.product, state)) {
                // Return a new state with updated quantity
                const newCartItems = state.cartItems.map(item =>
                  { if(item.id===action.product.id){
                      return{...item,quantity:item.quantity+1}
                   }
                   else{
                    
                    return{...item}



                   }}
                );
                
                return {
                    ...state,
                    cartItems: newCartItems,
                    totalPrice:state.totalPrice+action.product.new_price,
                    totalNumOfItems:calculateTotalItems(newCartItems)
                  

                   
                };
            } else {
                // Add new product to the cart
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.product, quantity: 1 }],
                    totalPrice:state.totalPrice+action.product.new_price,
                    totalNumOfItems:state.totalNumOfItems+1
                  
                    
                };
            }
        }

        case "DELETE_FROM_CART":
            {
                let newArray=state.cartItems.filter((item)=>item.id!==action.product.id)
                return{...state,
                    cartItems:newArray,
                    totalPrice:state.totalPrice-(action.product.new_price*action.product.quantity),
                    totalNumOfItems:calculateTotalItems(newArray)
                  
                  }
            }

        case "INCREASE_IN_CART":
            {
                let newArray=state.cartItems.map((item)=>{
                    if(item.id===action.product.id){
                        return {...item,quantity:item.quantity+1}
                    }
                    else{
                        return{...item}
                    }
                })
                return{...state,cartItems:newArray,
                    totalPrice:state.totalPrice+action.product.new_price,
                    totalNumOfItems:state.totalNumOfItems+1
                  
                    
                   }
            }
            case "DECREASE_IN_CART":
            {
                let newArray=state.cartItems.map((item)=>{
                    if(item.id===action.product.id){
                        return {...item,quantity:item.quantity-1}
                    }
                    else{
                        return{...item}
                    }
                })
                return{...state,cartItems:newArray,
                    totalPrice:state.totalPrice-action.product.new_price,
                    totalNumOfItems:state.totalNumOfItems-1
                   
                  }
            }


        default:
            return state;
    }

}
export default CartReducer;