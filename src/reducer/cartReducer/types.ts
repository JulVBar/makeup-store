export type CartItemType = {
    id: number;
    vendor_code: string;
    name: string;
    image_link: string;
    brand: string;
    price: number;
    count: number;
    pickedUpColor: Record<string, string>;
  };
  
  export interface CartState {
    totalPrice: number;
    items: CartItemType[];
  }