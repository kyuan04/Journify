import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .get("http://127.0.0.1:5000/data", { params: { location: searchQuery } })
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Vacation Planner</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="searchInput">Enter preferences:</label>
          <input
            type="text"
            id="searchInput"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    </>
  );
}

export default HomePage;
