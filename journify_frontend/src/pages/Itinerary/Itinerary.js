import React, { useState } from "react";
import axios from "axios";
import AttractionCard from "../../components/AttractionCards/AttractionCards";

const Itinerary = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [itineraryText, setItineraryText] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleSearchClick = async () => {
    // ... existing code to get searchValue
    const requestData = {
      activities: listItems,
      location: "Los Angeles",
      days: 2,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/itinerary",
        requestData
      );
      setItineraryText(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleGenerateClick = async () => {
    // ... existing code to get searchValue
    const requestData = {
      activities: listItems,
      location: "Los Angeles",
      days: 2,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/itinerary",
        requestData
      );
      setItineraryText(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AttractionCard handleAddToList={setListItems} />
      <button onClick={handleGenerateClick}>Generate Itinerary</button>
      <textarea value={itineraryText} onChange={() => {}} />
    </div>
  );
};

export default Itinerary;
