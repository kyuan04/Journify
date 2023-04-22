import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.scss";
import background_photo from "../../images/maldives-background-photo.jpg";
import madrid_destination_photo from '../../images/madrid-destination-photo.jpeg';
import hiking_outdoors from "../../images/hiking-outdoors.jpeg";
import beach_couple from "../../images/beach-couple.jpeg";

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if(event.key === "Enter") {
      onSearch(searchValue);
      alert(searchValue);
      setSearchValue("");
    }
  }

  const handleSearchClick = () => {
    onSearch(searchValue);
    alert(searchValue);
    setSearchValue("");
  };
  
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={searchValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="search-button"
        onClick={handleSearchClick}
        
      >Search</button>
    </div>
  );
}

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleSearch = (term) => {
    setSearchTerm(searchTerm);
  }

  return (
    <>
      <div className="background-image-container">
        <Navbar/>
        <h1 className="main-heading">Your journey starts here</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="info-container one">
        <img src={madrid_destination_photo} alt="madrid" className="destination-photo one" />
        <p className="description-text one">Looking to plan your next adventure but feeling overwhelmed by the countless travel options available? Let our website take the hassle out of your trip planning with our easy search and click platform.</p>
      </div>
      <div className="info-container two">
        <p className="description-text two">Let us do the heavy lifting and plan your perfect adventure without breaking a sweat. With our <b>advanced AI technology,</b> we'll cater to what <b>you</b> want. Whether you're looking for a scenic mountain trail, a serene fishing spot, or a rustic camping experience, we've got you covered.</p>
        <img src={hiking_outdoors} alt="hiking" className="destination-photo two" />
      </div>
      <div className="info-container three">
        <img src={beach_couple} alt="couple at beach" className="destination-photo three" />
        <p className="description-text three">No matter where you want to go or what you want to do, we'll handle it all so you can spend time focusing on what really matters</p>
      </div>
    </>
  );
  }

  // return (
  //   <>
  //     <Navbar/>
  //     <div>
  //       <h1>Find your destination!</h1>
  //       <form onSubmit={handleFormSubmit}>
  //         <label htmlFor="searchInput">Enter preferences:</label>
  //         <input
  //           type="text"
  //           id="searchInput"
  //           value={searchQuery}
  //           onChange={handleInputChange}
  //         />
  //         <button type="submit">Enter</button>
  //       </form>
  //   </div>
  //   </>
    
  // );
// }

export default HomePage;
