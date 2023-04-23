import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./DestinationCards.scss";

function DestinationCard(props) {
  const [destinations, setDestinations] = useState([]);

  var destinations_array = props.destinationSearchResults.response;
  // setDestinations(props.destinationSearchResults.response);
  console.log(destinations_array);
  // console.log("In destinatinoCards: ", props.destinationSearchResults);

  return (
    <>
      <div className="destination-card-section">
        <div className="destination-cards-container">
          {destinations_array.map((destinations, index) => (
            <Card key={destinations} sx={{ maxWidth: 400 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {destinations}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default DestinationCard;
