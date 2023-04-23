import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import "./DestinationCards.scss"

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
                  {/* {destinationsSearchData.map((destinations, index) => (
                    <Card className="destination-cards" sx={{ maxWidth: 400 }}>
                        <Typography component="div" className="destination-card-heading" variant="h6">
                            {destinations[index]}
                        </Typography>
                        <CardMedia 
                            component="img"
                            height="220"
                            image={recipes.recipe.image}
                            alt={recipes.recipe.label}
                        /> 
                        <CardContent>
                            <Typography component="div" className="recipe-card-heading" variant="h6">
                                <a className="recipe-card-heading-link" target="_blank" rel="noreferrer" href={recipes.recipe.url}>{recipes.recipe.label}</a>
                            </Typography>
                            <Typography component="div" className="subheading" variant="subheading">
                                Cuisine: {recipes.recipe.cuisineType}
                            </Typography>
                            <Typography component="div" className="subheading" variant="body1">
                              Calories: {recipes.recipe.calories.toFixed(2)} cal
                            </Typography>
                            <Typography component="div" className="recipe-source" variant="body2">
                              Source: {recipes.recipe.source != null ? recipes.recipe.source : "Unknown source"}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <Button component={Link} target="_blank" to={`/recipes/${editedLabels[index]}`} className="learn-more-button" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))} */}
        </div>
    </div>
    </>
    );
}

export default DestinationCard;