import { useMemo } from "react";
import { ProductItem } from "../ProductItem";
import { SearchResultsProps } from "./types";

export function SearchResults({ results }: SearchResultsProps) {
  const totalValue = useMemo(() => {
    return results.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalValue}</h2>

      {results.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}