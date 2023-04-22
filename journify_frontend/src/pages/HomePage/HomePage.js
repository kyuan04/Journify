import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const inputData = searchQuery; // pass input as string
    console.log("Hello");
    axios
      .post("http://localhost:3000/api/v1/generate_text_test", inputData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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
