export interface SearchResultsProps {
  totalPrice: number;
  results: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }[];
  onAddToWishlist: (id: number) => void;
}