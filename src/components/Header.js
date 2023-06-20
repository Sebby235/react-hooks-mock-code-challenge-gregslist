import React from "react";
import Search from "./Search";

function Header({ search, handleSearch, handleSearchSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit}/>
    </header>
  );
}

export default Header;
