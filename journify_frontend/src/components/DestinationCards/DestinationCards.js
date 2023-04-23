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
import axios from "axios";

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

    // const promises = [];

    // try {
    //   const response1 = await axios.get(
    //     `http://127.0.0.1:5000/yelp?location=${destination}`
    //   );
    //   promises.push(response1);

    //   const response2 = await axios.get(
    //     `http://127.0.0.1:5000/yelp/clubs?location=${destination}`
    //   );
    //   promises.push(response2);

    //   const response3 = await axios.get(
    //     `http://127.0.0.1:5000/yelp/hikes?location=${destination}`
    //   );
    //   promises.push(response3);

    //   const response4 = await axios.get(
    //     `http://127.0.0.1:5000/yelp/museums?location=${destination}`
    //   );
    //   promises.push(response4);

    //   const response5 = await axios.get(
    //     `http://127.0.0.1:5000/yelp/parks?location=${destination}`
    //   );
    //   promises.push(response5);
    // } catch (error) {
    //   console.error(error);
    // }

    // const promises = [
    //   await axios.get(`http://127.0.0.1:5000/yelp?location=${destination}`),
    //   await axios.get(
    //     `http://127.0.0.1:5000/yelp/clubs?location=${destination}`
    //   ),
    //   await axios.get(
    //     `http://127.0.0.1:5000/yelp/hikes?location=${destination}`
    //   ),
    //   await axios.get(
    //     `http://127.0.0.1:5000/yelp/museums?location=${destination}`
    //   ),
    //   await axios.get(
    //     `http://127.0.0.1:5000/yelp/parks?location=${destination}`
    //   ),
    // ];

    // const responses = await Promise.all(promises);
    // console.log(responses);
    // Promise.all(promises)
    //   .then((responses) => {
    //     const attractionResults = responses.map((response) => response.data);
    //     console.log(attractionResults);
    //     navigate("/destination-info", {
    //       state: { attractionResults },
    //       dest: { destination },
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    // Promise.all(promises)
    //   .then((responses) => {
    //     const attractionResults = [];
    //     responses.forEach((response) => {
    //       attractionResults.push(response.data);
    //     });
    //     console.log(attractionResults);
    //     navigate("/destination-info", {
    //       state: { attractionResults },
    //       dest: { destination },
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    // Promise.all(promises)
    //   .then((responses) => {
    //     const response1 = responses[0].data;
    //     const response2 = responses[1].data;
    //     const response3 = responses[2].data;
    //     const response4 = responses[3].data;
    //     const response5 = responses[4].data;

    //     console.log(responses);
    //   })
    //   .catch((error) => {
    //     return 1;
    //   });

    const response = await axios.get(
      `http://127.0.0.1:5000/yelp?location=${destination}`
    );
    // // const response = await axios.get(`http://127.0.0.1:5000/yelp/clubs?location=${destination}`);
    // // const response = await axios.get(`http://127.0.0.1:5000/yelp/hikes?location=${destination}`);
    // // const response = await axios.get(`http://127.0.0.1:5000/yelp/museums?location=${destination}`);
    // // const response = await axios.get(`http://127.0.0.1:5000/yelp/parks?location=${destination}`);

    const attractionResults = response.data;
    navigate("/destination-info", {
      state: { attractionResults },
      dest: { destination },
    });
    // fetch(`http://127.0.0.1:5000/yelp?location=${destination}`)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
  };

  return (
    <div className="destination-card-section">
      <div className="destination-cards-container">
        {destinations_array.map((destinations) => (
          <a
            key={index}
            href="#"
            onClick={(e) => handleClick(e, destinations.location)}
          >
            <Card className="destination-cards" sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                height="220"
                image={destinations.image}
                // alt={destinations.location}
              />
              <Typography
                component="div"
                className="destination-cards-heading"
                variant="h6"
              >
                {destinations.location}
              </Typography>
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
