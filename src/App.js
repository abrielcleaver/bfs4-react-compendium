import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
import Controls from './components/controls/controls';
import Pokedex from './components/pokedex/pokedex';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState([]);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, sort);
      setPokemon(data.results);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    // because loading is in the dependency array
    // this useEffect will be called whenever loading changes
    // we only want to load new data when loading is true
    // wrap the call to fetchData in a conditional
    if (loading) {
      fetchData();
    }
    // react requires query also be in the dependency array
    // whenever loading or query change, react will call the callback
    // but will only fetch the data when loading is true
  }, [loading, query, sort]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loading"></span>}
      {!loading && (
        <>
          <Controls
            query={query}
            setQuery={setQuery}
            setLoading={setLoading}
            sort={sort}
            setSort={setSort}
          />
          <Pokedex pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
