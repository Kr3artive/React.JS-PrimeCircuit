import React, { createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

  // Fetch fake store API
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data; // Extract data from Axios response
    },
    staleTime: 6000, // Data is fresh every 1 minute
  });

  return (
    <ProductContext.Provider
      value={{ products, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
