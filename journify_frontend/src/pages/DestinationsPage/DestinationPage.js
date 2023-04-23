import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DestinationPage.scss";
// import RecipeCard from "../RecipeCard/RecipeCard";
// import SearchBar from "../SearchBar/SearchBar";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Navbar from "../../components/Navbar/Navbar";


function DestinationPage() {
    const [recipes, setRecipes] = useState([]);
    const [nextPaginationLink, setNextPaginationLink] = useState('');
    const [recipesCount, setRecipesCount] = useState();
    const [loading, setLoading] = React.useState(false);
    const timer = React.useRef();

    // const [prevPaginationLink, setPrevPaginationLink] = useState('');
    
    // var nextPaginationLink = '';

    const buttonSx = {
      ...{
        // bgcolor: green[500],
        '&:hover': {
          // bgcolor: green[700],
        },
      },
    };

    // useEffect(() => {
    //     try {
    //       processRecipes();
    //     } catch(err) {
    //       console.log("Error: ", err)
    //     }
    //   }, []);
    
    //   async function processRecipes() {
    //     try {
    //       const response = await axios.get('http://localhost:8000/api/recipes');
    //       const data = response.data;

    //       setRecipesCount(data.count);
    //       setNextPaginationLink(data._links.next.href);
    //       setRecipes(data.hits);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }

    //   async function showMoreRecipes() {
    //     const response = await axios.get(nextPaginationLink);

    //     const data = response.data;
    //     // console.log("Data:", data);

    //     setRecipesCount(data.count);

    //     const allRecipes = [...recipes, ...data.hits];

    //     if(!loading) {
    //       setLoading(true);
    //       timer.current = window.setTimeout(() => {
    //         setLoading(false);
    //         setRecipes(allRecipes);    // set the results as recipes
    //         setNextPaginationLink(data._links.next.href);
    //       }, 500);
    //     };

    //   }


    //   // gets search term passed in from search bar component as prop
    //   // then we call the api with the search term as a query
    //   const handleSearch = async (searchTerm) => {
    //     // call search function using the search term
    //     const response = await axios.get('http://localhost:8000/api/recipes?' + searchTerm);
    //     const data = response.data;

    //     setRecipesCount(data.count);
    //     // setPrevPaginationLink('http://localhost:8000/api/recipes?' + searchTerm);
    //     setNextPaginationLink(data._links.next.href);
    //     console.log("Setting recipes");
    //     setRecipes(data.hits);    // set the results as recipes
    //   }
      
    return (
        <>
            <Navbar />
              <h2 className="destination-page-heading">Destinations</h2>
              {/* <SearchBar onSearch={handleSearch}/> */}
              {/* <RecipeCard recipes={recipes} recipesCount={recipesCount}/> */}
              <Box sx={{ m: 1, position: 'relative'}}>
                {/* <div
                  className="see-more-button">
                  <Button 
                    variant="outlined" 
                    sx={buttonSx}
                    onClick={showMoreRecipes}
                    disabled={loading}
                  >
                    Show More
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        color: blue[500],
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                      }}
                    />
                  )}
                </div> */}
              </Box>
        </>
    )
}

export default DestinationPage;
