import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from "react";
import "./AttractionCards.scss";

function AttractionCard(props) {
    const [attractions, setAttractions] = useState([]);
    var attractions_array = props.attractionResults.attractionResults.businesses;
    console.log(attractions_array);
    return (
        <div className="my-card-grid">
            {attractions_array.map((attraction) => (
                <Card key={attraction.name} sx={{ maxWidth: 400 }} className="my-card">
                    <CardMedia 
                        component="img"
                        image={attraction.image_url}
                    />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {attraction.name}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default AttractionCard;