import { MenuItem } from "./menu-item";

export interface OrderForm {
  restaurant: string;
  name: string;
  address: string;
  phone: string;
  items: MenuItem[];
}
