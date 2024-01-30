import { RestaurantContext } from "../../../../shared/contexts/RestaurantContext/RestaurantContext";
import { FC, useContext, useState } from "react";
import { OrderCheckboxGroup } from "./components/OrderCheckboxGroup";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export const OrderForm: FC = () => {
  const { restaurant } = useContext(RestaurantContext);
  const [ orderProcessing, setOrderProcessing ] = useState(false);

  const [orderName, setOrderName] = useState('');
  const [orderAddress, setOrderAddress] = useState('');
  const [orderPhone, setOrderPhone] = useState('');

  const [lunchItems, setLunchItems] = useState((restaurant.menu?.lunch ?? []).map(item => ({ item, checked: false })));
  const [dinnerItems, setDinnerItems] = useState((restaurant.menu?.dinner ?? []).map(item => ({ item, checked: false })));

  const selectedItems = [...lunchItems, ...dinnerItems].filter(({ checked }) => checked).map(({ item }) => item);

  const orderTotal = selectedItems.reduce((total, item) => {
    total += item.price;
    return total;
  }, 0);

  const formIsValid = () => {
    if (!orderName || !orderAddress || !orderPhone) {
      return false;
    }

    if (!selectedItems.length) {
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    console.log('onSubmit');
  };

  return <div className="order-form"><h2>Order here</h2>
  <form onSubmit={() => onSubmit()}>
    <Tabs>
      {lunchItems.length && <Tab eventKey="lunch" title="Lunch Menu">
        <OrderCheckboxGroup items={lunchItems} setItems={setLunchItems}/>
      </Tab>}
      {dinnerItems.length && <Tab eventKey="dinner" title="Dinner Menu">
        <OrderCheckboxGroup items={dinnerItems} setItems={setDinnerItems}/>
      </Tab>}
    </Tabs>

    <div className="form-group">
      <label htmlFor={'order-name'} className="control-label">Name:</label>
      <input
        value={orderName}
        onChange={(event) => setOrderName(event.target.value)}
        id="order-name"
        name="order-name"
        type="text"
        required
      />
      <p>Please enter your name.</p>
    </div>
    <div className="form-group">
      <label htmlFor={'order-address'} className="control-label">Address:</label>
      <input
        value={orderAddress}
        onChange={(event) => setOrderAddress(event.target.value)}
        id="order-address"
        name="order-address"
        type="text"
        required
      />
      <p className="help-text">Please enter your address.</p>
    </div>
    <div className="form-group">
      <label htmlFor={'order-phone'} className="control-label">Phone:</label>
      <input
        value={orderPhone}
        onChange={(event) => setOrderPhone(event.target.value)}
        id="order-phone"
        name="order-phone"
        type="text"
        required
      />
      <p className="help-text">Please enter your phone number.</p>
    </div>
    <div className="submit">
      <h4>Total: ${orderTotal}</h4>
      {orderProcessing && <div className="loading"></div>}
      <button
        type="submit"
        disabled={orderProcessing || !formIsValid()}
        className="btn"
      >
        Place My Order!
      </button>
    </div>
  </form></div>
};
