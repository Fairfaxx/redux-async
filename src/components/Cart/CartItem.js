import { useDispatch } from "react-redux";
import { cartActions } from "../../reducers/cart-reducer";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemsToCart({
        id,
        price,
        title,
      })
    );
  };

  const removeItemsHandler = () => {
    dispatch(cartActions.removeItemsFromCart(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${total.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemsHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
