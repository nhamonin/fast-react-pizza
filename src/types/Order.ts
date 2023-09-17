import { Cart } from './Cart';

export interface Order {
  id: string;
  customer: string;
  status?: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: Cart;
  position: string;
  orderPrice: number;
  priorityPrice: number;
}

export type PartialOrder = Partial<Order>;

export interface OrderItem {
  name: string;
  totalPrice: number;
  quantity: number;
}
export interface OrderErrors {
  phone?: string;
}
