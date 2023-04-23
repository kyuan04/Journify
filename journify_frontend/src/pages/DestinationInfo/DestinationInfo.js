import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import AttractionCard from "../../components/AttractionCards/AttractionCards";
import { useLocation } from "react-router-dom";
import "./DestinationInfo.scss";

function ApiCallButton({ listItems }) {
  const handleClick = () => {
    // Call the API with the listItems as a parameter
    console.log(listItems);
    fetch("/itinerary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        activities: listItems,
        location: "Los Angeles",
        days: 3,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as needed
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Generate Itinerary</button>;
    </div>
  );
}

function DestinationInfo() {
  const location = useLocation();
  const yelpResults = location.state;

  const [listItems, setListItems] = useState([]);

  const handleAddToList = (item) => {
    setListItems((prevListItems) => [...prevListItems, item]);
  };

  return (
    <div>
    <Navbar />
    <h2 className="destination-info-page-heading">Attractions</h2>
      <ApiCallButton listItems={listItems} />
      <AttractionCard
        attractionResults={yelpResults}
        listItems={listItems}
        onAddToList={handleAddToList}
      />
    </div>
  );
}

export default DestinationInfo;
