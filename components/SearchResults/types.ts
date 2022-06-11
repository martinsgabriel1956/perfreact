export interface SearchResultsProps {
  results: {
    id: number;
    price: number;
    title: string;
  }[];
  onAddToWishlist: (id: number) => void;
}