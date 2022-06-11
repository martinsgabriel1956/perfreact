import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { SearchResults } from '../components/SearchResults';
import { Results } from './homeTypes';

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  async function handleSearch(e: FormEvent) {
    e.preventDefault();

    if(!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);

    const data = await response.json();

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    const products = data.map(product => ({
      ...product,
      priceFormatted: formatter.format(product.price),
    }))

    const totalPrice = data.reduce((total, product) => {
      return total + product.price;
    }, 0);

    console.log(totalPrice)

    setResults({ totalPrice, data: products });
  }

  async function addToWishlist(id: number) {
    console.log(id);
  }

  return (
    <>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={handleChange} />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults 
        results={results!.data} 
        totalPrice={results!.totalPrice}
        onAddToWishlist={addToWishlist}
      />
    </>
  )
}

export default Home
