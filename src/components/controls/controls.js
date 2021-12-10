import React from 'react';

export default function Controls({ query, setQuery, setLoading, sort, setSort }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
