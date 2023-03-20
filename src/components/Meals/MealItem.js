import React ,{useContext}from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../store/Cart-Context';

const MealItem = (props) => {
    const price=`$${props.price.toFixed(2)}`;
    const cartCtx=useContext(CartContext)

    const addToCartHandler=(amount)=>
    {
       cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount :amount,
         price:props.price  
       })
    }
  return (
    <li className={classes.meal}>
        <div><h3>{props.name}</h3></div>
        <div className={classes.discription}>{props.discription}</div>
        <div className={classes.price}>{price}</div>
      <div><MealItemForm  onAddToCart={addToCartHandler}/></div>  

    </li>
  )
}

export default MealItem
const Sum=(num1,num2)=>
{
  return num1+num2
}
Sum(12,13)