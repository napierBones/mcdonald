export type CategoryType = {
  id: string;
  title: string;
  desc?: string;
  color: string;
  img: string;
  slug: string;
};

export type ProductOption = {
  title: string;
  additionalPrice: number;
};

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  catSlug: string;
  options?: ProductOption[]; // Change this to an array of ProductOption
};

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: string;
};



export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

export type CartType = {
products: CartItemType[];
totalItems: number;
totalPrice: number;
};


export type ActionTypes={
  addtoCart:(item:CartItemType)=>void
  removeFromCart:(item:CartItemType)=>void
}