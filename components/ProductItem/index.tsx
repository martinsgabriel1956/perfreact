import { memo, useState } from "react";
import dynamic from "next/dynamic";

import { ProductItemProps } from "./types";
import { AddProductToWishlistProps } from "../AddProductToWishlist/types";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import('../AddProductToWishlist').then(module => module.AddProductToWishlist);
}, {
  loading: () => <span>Loading...</span>
})


function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar ao favoritos</button>

      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});
