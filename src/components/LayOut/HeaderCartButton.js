import React,{useContext,useEffect,useState} from 'react'
import CartContext from '../../store/Cart-Context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const[btnIsHighLighted,setBtnIsHighLighted]=useState(false)
  const cartCtx = useContext(CartContext)
  const {items}=cartCtx
  const numberOfCartItem=items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  },0)
 
  const btnClasses=`${classes.button} S{btnIsHighLighted ? classes.bump:''}`
  useEffect(()=>
  {
    if(items.length===0)
    {
      return ;
    }
    setBtnIsHighLighted(true)
  },[items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
     
     <span className={classes.icon}>
     <CartIcon/>
     </span>
     <span>Your Cart</span>
     <span className={classes.badge}>{numberOfCartItem}</span>
   
    </button>
  )
}

export default HeaderCartButton