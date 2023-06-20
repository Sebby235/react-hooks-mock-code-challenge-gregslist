import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listingsObj) => {
        setListings(listingsObj)
        setFilteredList(listingsObj)
      })
  }, [])

  const handleDelete = (deleteID) => {
    //remove deleted listing from filtered list
    setFilteredList(filteredList.filter((listing) => listing.id !== deleteID))
    //remove deleted listing from un-filtered list
    setListings(listings.filter((listing) => listing.id !== deleteID))
    //persisting delete
    fetch(`http://localhost:6001/listings/${deleteID}`,{
      method:'DELETE',
      headers: {"Content-Type": "application/json"}
    })
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleSearchSubmit = () => {
    setSearch("")
    if (search === "")
      setFilteredList(listings)
    else
      setFilteredList(filteredList.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase())))
  }

  return (
    <div className="app">
      <Header search={search} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer listings={filteredList} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
