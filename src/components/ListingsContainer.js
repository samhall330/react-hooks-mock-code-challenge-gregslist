import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings, search}) {

  const [sortBy, setSortBy] = useState("")

  const filteredListings = listings.filter((listing) => listing.description.toLowerCase().includes(search))

  const sortedListings = filteredListings.sort((listing1, listing2) => {
    if (!sortBy){
      return 0
    }
    else {
      return (listing1[sortBy].localeCompare(listing2[sortBy]))}
  });

  const displayListing = sortedListings.map((listing) =>{

    return(
      < ListingCard 
      key={listing.id}
      id={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
      listings={listings}
      setListings={setListings}
      />
    );
  });

  function sortListings(e){
    setSortBy(e.target.value);
  }

  return (
    <main>
      <select onChange={sortListings}>
        Sort Results
        <option select hidden>Description</option>
        <option value="location">By Location</option>
        <option value="description">Alphabetically</option>
      </select>

      <ul className="cards">
        {displayListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
