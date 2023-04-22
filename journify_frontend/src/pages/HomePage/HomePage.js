import React, { useState } from "react";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
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
  );
}

export default HomePage;
