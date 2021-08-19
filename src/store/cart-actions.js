import { uiActions } from "../reducers/ui-reducer";
import { cartActions } from "../reducers/cart-reducer";


export const fetchCartData = () => {
  return async dispatch => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://redux-toolkit-c08d9-default-rtdb.firebaseio.com/cart.json"
      );
      if(!response.ok){
        throw new Error("Could not fetch any data.");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchdata();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching Cart Data Failed!",
        })
      );
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-toolkit-c08d9-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}) }
      );

      if (!response.ok) {
        throw new Error("Sending data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending Cart Data Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending Cart Data Failed!",
        })
      );
    }
  };
};
