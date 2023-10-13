import { MenuItem } from "@shared/types/restaurant";
import { FC } from "react";

interface OrderCheckboxItem {
  checked: boolean;
  item: MenuItem;
}

interface OrderCheckboxGroupProps {
  items: OrderCheckboxItem[];
  setItems: React.Dispatch<React.SetStateAction<OrderCheckboxItem[]>>
}

export const OrderCheckboxGroup: FC<OrderCheckboxGroupProps> = ({ items, setItems }) => {
  const onChange = (index: number, checked: boolean) => {
    const updatedItems = [...items];

    updatedItems[index] = { ...updatedItems[index], checked };

    setItems(updatedItems);
  };

  return (
    <ul className="list-group">
      {items.map(({item, checked}, i) => (
        <li key={`${item.name}__${item.price}`} className="list-group-item">
          <label>
            <input type="checkbox" checked={checked} onChange={((event) => onChange(i, event.target.checked))}/>
            {item.name} <span className="badge">${item.price}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
