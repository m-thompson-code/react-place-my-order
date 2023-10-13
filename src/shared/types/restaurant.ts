export interface Restaurant {
  name: string;
  slug: string;
  images: Images;
  menu?: Menu;
  address?: Address;
  _id: string;
}

export interface Images {
  thumbnail: string;
  owner: string;
  banner: string;
}

export interface Menu {
  lunch?: MenuItem[];
  dinner?: MenuItem[];
}

export interface MenuItem {
  name: string;
  price: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}
