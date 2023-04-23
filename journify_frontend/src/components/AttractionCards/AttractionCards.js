import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import "./AttractionCards.scss";
function AttractionCard(props) {
  const [listItems, setListItems] = useState([]);

  const handleAddToList = (product) => {
    const newListItem = {
      id: product.id, // make sure product has an id property
      name: product.name,
      price: product.price, // make sure product has a price property
    };
    setListItems([...listItems, newListItem]);
    console.log(newListItem, "has been added to the list");
  };

  const attractions_array = props.attractionResults.attractionResults
    ?.businesses ?? [{ name: "blank" }];

  return (
    <div className="my-card-grid">
      {attractions_array.map((attraction) => (
        <Card key={attraction.name} sx={{ maxWidth: 400 }} className="my-card">
          <CardMedia component="img" image={attraction.image_url} />
          <CardContent>
            <Typography variant="h6" component="div">
              {attraction.name}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              aria-label="add to favorites"
              onClick={() => handleAddToList(attraction)}
            >
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default AttractionCard;
