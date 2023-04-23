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
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from 'axios';

function DestinationCard(props) {
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

  var destinations_array = props.destinationSearchResults.response;
  // setDestinations(props.destinationSearchResults.response);
  console.log(destinations_array);
  // console.log("In destinatinoCards: ", props.destinationSearchResults);

  const [listItems, setListItems] = useState([]);

  const handleAddToList = (product) => {
    const newListItem = {
      //   id: product.id,
      name: product,
      //   price: product.price,
    };
    setListItems([...listItems, newListItem]);
    console.log(newListItem, "has been added to the list");
  };

  const handleClick = async (event, destination) => {
    event.preventDefault();
    const response = await axios.get(`http://127.0.0.1:5000/yelp?location=${destination}`);
    const attractionResults = response.data;
    navigate('/destination-info', {state: { attractionResults }, dest: { destination }});
    // fetch(`http://127.0.0.1:5000/yelp?location=${destination}`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
  };

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
              <CardActions>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => handleAddToList(destinations)}
                >
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
            </a>
          ))}
        </div>
      </div>
    
  );
}

export default DestinationCard;
