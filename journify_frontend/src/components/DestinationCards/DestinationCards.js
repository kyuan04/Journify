import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./DestinationCards.scss";
import axios from 'axios';

function DestinationCard(props) {
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

  var destinations_array = props.destinationSearchResults.response;
  // setDestinations(props.destinationSearchResults.response);
  console.log("destination array", destinations_array);
  // console.log("In destinatinoCards: ", props.destinationSearchResults);

  const handleClick = async (event, destination) => {
    event.preventDefault();
    const response = await axios.get(`http://127.0.0.1:5000/yelp?location=${destination}`);
    const attractionResults = response.data;
    // const response = fetch(`http://127.0.0.1:5000/yelp?location=${destination}`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
    navigate('/destination-info', {state: { attractionResults }, dest: { destination }});
  }

  return (
    <div className="destination-card-section">
      <div className="destination-cards-container">
        {destinations_array.map((destination, index) => (
          <a key={index} href="#" onClick={(e) => handleClick(e, destination)}>
            <Card sx={{ maxWidth: 400 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {destination}
                </Typography>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
    // <a
    //   href={`https://www.yelp.com/search?find_desc=${props.destinationSearchResults.location}&find_loc=${props.destinationSearchResults.location}&sortby=bestmatch`}
    // >
    //   <div className="destination-card-section">
    //     <div className="destination-cards-container">
    //       {destinations_array.map((destinations, index) => (
    //         <Card key={destinations} sx={{ maxWidth: 400 }}>
    //           <CardContent>
    //             <Typography variant="h6" component="div">
    //               {destinations}
    //             </Typography>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div>
    //   </div>
    // </a>
  );
}

export default DestinationCard;
