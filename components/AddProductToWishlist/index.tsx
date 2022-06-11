import { AddProductToWishlistProps } from "./types";

export const AddProductToWishlist = ({ onAddToWishlist, onRequestClose }: AddProductToWishlistProps) => {
  return (
    <span>
      Deseja adicionar ao favoritos?

      <button onClick={onAddToWishlist}>
        Sim
      </button>
      <button onClick={onRequestClose}>
        Não
      </button>
    </span>
  );
}