import { fetchFromPlaceMyOrderApi } from '@shared/utilities/fetch-from-place-my-order-api';
import { City } from '@shared/types/city';
import { Order } from '@shared/types/order';
import { OrderForm } from '@shared/types/order-form';
import { Restaurant } from '@shared/types/restaurant';
import { State } from '@shared/types/state';

export const fetchCities = (state: string) =>
  fetchFromPlaceMyOrderApi<City[]>('cities', {
    params: { state },
  });

export const fetchCreateOrders = (orderForm: OrderForm) =>
  fetchFromPlaceMyOrderApi<Order[]>('orders', {
    options: {
      method: 'POST',
      body: JSON.stringify(orderForm),
    },
  });

export const fetchDeleteOrders = (id: string) =>
  fetchFromPlaceMyOrderApi<Order[]>(`orders/${id}`, {
    options: {
      method: 'DELETE',
    },
  });

export const fetchOrders = () => fetchFromPlaceMyOrderApi<Order[]>('orders');

export const fetchRestaurant = (slug: string) =>
  fetchFromPlaceMyOrderApi<Restaurant>(`restaurants/${slug}`);

export const fetchRestaurants = (state: string, city: string) =>
  fetchFromPlaceMyOrderApi<Restaurant[]>('restaurants', {
    params: { 'filter[address.state]': state, ['filter[address.city]']: city },
  });

export const fetchStates = () => fetchFromPlaceMyOrderApi<State[]>('states');

export const fetchUpdateOrders = (order: Order) =>
  fetchFromPlaceMyOrderApi<void>('orders', {
    options: {
      method: 'PUT',
      body: JSON.stringify(order),
    },
  });
