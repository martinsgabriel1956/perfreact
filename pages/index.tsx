import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { SearchResults } from '../components/SearchResults';

const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

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

    setResults(data);
  }

  return (
    <>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={handleChange} />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults results={results} />
    </>
  )
}

export default Home
