import { MenuItem } from "./menu-item";

export interface Order {
  _id: string;
  restaurant: string;
  name: string;
  address: string;
  phone: string;
  status: string;
  items: MenuItem[];
}
