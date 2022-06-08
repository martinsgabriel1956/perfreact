import { ProductItem } from "../ProductItem";
import { SearchResultsProps } from "./types";

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}