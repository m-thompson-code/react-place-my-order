import { FC, useState } from "react";
import { OrderForm } from "./components/OrderForm";

export const Order: FC = () => {
  const [orderComplete, setOrderComplete] = useState(false);

  return <>
  {orderComplete && <div>orderComplete: {orderComplete}</div>}
  {!orderComplete && <OrderForm />}
  </>
};
