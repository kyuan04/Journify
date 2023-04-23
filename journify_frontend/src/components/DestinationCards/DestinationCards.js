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
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function DestinationCard(props) {
  const [destinations, setDestinations] = useState([]);

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
              <CardActions>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => handleAddToList(destinations)}
                >
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default DestinationCard;
