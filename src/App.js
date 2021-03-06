import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
import Pokedex from './components/pokedex/pokedex';
import Controls from './components/controls/controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState([]);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, sort);
      setPokemon(data.results);
      setLoading(false);
    };
    fetchData();
  }, [loading, query, sort]);
  if (loading) return <h1>Loading... please wait</h1>;
  return (
    <div className="App">
      <h1>Pokedex</h1>

      <Controls
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        sort={sort}
        setSort={setSort}
      />
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
