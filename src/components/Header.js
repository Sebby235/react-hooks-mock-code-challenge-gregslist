import React, { useState } from "react";
import Search from "./Search";
import ListingForm from "./ListingForm";

function Header({ search, handleSearch, handleSearchSubmit, handleLocationSort, handleListingSubmit}) {
  const [showForm, setShowForm] = useState(false)
  
  const handleSortClick = () => {
    handleLocationSort()
  }

  const handleFormToggle = () => {
    setShowForm(!showForm)
  }
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit}/>
      <button onClick={handleSortClick}>Sort Alphabetically by Location</button>
      <button onClick={handleFormToggle}>Create a listing!</button>
      {showForm ? <ListingForm handleListingSubmit={handleListingSubmit}/> : null}
    </header>
  );
}

export default Header;
