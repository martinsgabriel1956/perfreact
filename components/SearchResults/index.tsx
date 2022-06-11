import { useMemo } from "react";
import { ProductItem } from "../ProductItem";
import { SearchResultsProps } from "./types";

export function SearchResults({ totalPrice, results, onAddToWishlist }: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => (
        <ProductItem 
          key={product.id} 
          product={product}
          onAddToWishlist={onAddToWishlist} 
        />
      ))}
    </div>
  )
}