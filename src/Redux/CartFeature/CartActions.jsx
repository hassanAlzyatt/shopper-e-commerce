const   ADD_TO_CART="ADD_TO_CART"
const   DELETE_FROM_CART="DELETE_FROM_CART"
const   INCREASE_IN_CART="INCREASE_IN_CART"
const   DECREASE_IN_CART="DECREASE_IN_CART"

 export  function addToCart(product){
    return{
        type:ADD_TO_CART,
        product:product
    }
}
export  function deleteFromCart(product){
    return{
        type:DELETE_FROM_CART,
        product:product
    }
}
export  function increaseInCart(product){
    return{
        type:INCREASE_IN_CART,
        product:product
    }
}
export  function decreaseInCart(product){
    return{
        type:DECREASE_IN_CART,
        product:product
    }
}