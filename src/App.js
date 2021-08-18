import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";

import { sendCartData } from './reducers/cart-reducer.js'
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart))

    
    // const sendCartData = async () => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "pending",
    //       title: "Sending...",
    //       message: "Sending Cart Data...",
    //     })
    //   );
    //   const response = await fetch(
    //     "https://redux-toolkit-c08d9-default-rtdb.firebaseio.com/cart.json",
    //     { method: "PUT", body: JSON.stringify(cart) }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Sending data failed.");
    //   }

    //   dispatch(
    //     uiActions.showNotification({
    //       status: "success",
    //       title: "Success!",
    //       message: "Sending Cart Data Successfully!",
    //     })
    //   );
    // };
    //   sendCartData().catch((error) => {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "error",
    //         title: "Error!",
    //         message: "Sending Cart Data Failed!",
    //       })
    //     );
    //   });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} message={notification.message} title={notification.title} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
