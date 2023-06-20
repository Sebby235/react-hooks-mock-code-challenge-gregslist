import React from "react";

function Search({ search, handleSearch, handleSearchSubmit}) {
  function handleSubmit(e) {
    e.preventDefault();
    handleSearchSubmit()
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
