import React,{useReducer} from 'react'
import CartContext from './Cart-Context'
 
const defaultCartState={
    items:[],
    totalAmount:0
}

const cartReducer=(state,action)=>
{
    if(action.type==='ADD')
    {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
      
      const existingCartItemIndex=state.items.findIndex(item => item.id === action.item.id)
      const existingCartItem=state.items[existingCartItemIndex];
      
      let updatedItems;

      if(existingCartItem){
     const updatedItem={
        ...existingCartItem,
        amount:existingCartItem.amount + action.item.amount
      };
      updatedItems=[...state.items]
      updatedItems[existingCartItemIndex]=updatedItem
    }
    else
    {
        
        updatedItems=state.items.concat(action.item)
    }

      
      return{
        items:updatedItems,
        totalAmount:updatedTotalAmount
      }
    }
    if(action.type==='REMOVE')
    {
       
       const existingCartItemIndex=state.items.findIndex(item=>item.id===action.id)
       const esistingItem=state.items[existingCartItemIndex]
       const updatedTotalAmount = state.totalAmount - esistingItem.price 
       let updatedItems;
       if(esistingItem.amout=== 1)
       {
        updatedItems=state.item.filter(item=>item.id !==action.id)
       }
       else{
        const updateditem={...esistingItem,amount:esistingItem.amount -1}
        updatedItems=[...state.items];
        updatedItems[existingCartItemIndex]=updateditem
       }
       return{
        items:updatedItems,
        totalAmount:updatedTotalAmount
       }
    }
 return defaultCartState
}

const CartProvider = (props) => {
   const[cartState,dispatch]= useReducer(cartReducer,defaultCartState)

    const addItemToCartHandler=(item)=>
    {
       dispatch({type:'ADD',item:item})
    }
    const removeItemFromCartHandler=(id)=>
    {
      dispatch({type:'REMOVE',id:id})
    }
 const cartContext= {
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler
 }
  return (
    
   
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
 
  )
}

export default CartProvider