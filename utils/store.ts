import { ActionTypes, CartType, CartItemType } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,

      addtoCart(item: CartItemType) {
        const products = get().products;

        // Check if a product with the same ID and optionTitle already exists
        const productInState = products.find(
          product => product.id === item.id && product.optionTitle === item.optionTitle
        );

        if (productInState) {
          // Update the existing product's quantity and price
          const updatedProducts = products.map(product =>
            product.id === productInState.id && product.optionTitle === productInState.optionTitle
              ? {
                  ...product, // Keep existing properties
                  quantity: product.quantity + item.quantity, // Update quantity
                  price: product.price + item.price, // Update price
                }
              : product // Keep other products unchanged
          );

          set(state => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        } else {
          // Add new product, treat as a different product
          set(state => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        }
      },

      removeFromCart(item: CartItemType) {
        set(state => {
          const productToRemove = state.products.find(
            product => product.id === item.id && product.optionTitle === item.optionTitle
          );

          const updatedTotalItems = state.totalItems - (productToRemove ? productToRemove.quantity : 0);
          const updatedTotalPrice = state.totalPrice - (productToRemove ? productToRemove.price : 0);

          return {
            products: state.products.filter(
              product => product.id !== item.id || product.optionTitle !== item.optionTitle
            ),
            totalItems: updatedTotalItems,
            totalPrice: updatedTotalPrice,
          };
        });
      },
    }),
    { name: 'cart' }
  )
);
