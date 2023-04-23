import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./DestinationPage.scss";
// import SearchBar from "../SearchBar/SearchBar";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Navbar from "../../components/Navbar/Navbar";
import DestinationCards from "../../components/DestinationCards/DestinationCards";


function DestinationPage() {
    // const searchData = props.location.state.data;
    const location = useLocation();
    const { searchResults } = location.state;
    console.log("search results: ", searchResults);

    const [loading, setLoading] = React.useState(false);
    const timer = React.useRef();

      
    return (
        <>
            <Navbar />
              <h2 className="destination-page-heading">Destinations</h2>
              {/* <SearchBar onSearch={handleSearch}/> */}
              <DestinationCards destinationSearchResults={searchResults} />
              <Box sx={{ m: 1, position: 'relative'}}>
              </Box>
        </>
    );
}

export default DestinationPage;
