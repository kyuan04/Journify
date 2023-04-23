import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import AttractionCard from "../../components/AttractionCards/AttractionCards";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button"
import "./DestinationInfo.scss";
import axios from "axios";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import CircularProgress from '@mui/material/CircularProgress';
import { blue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from "@mui/material/TextField";

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

function ApiCallButton({ listItems }) {
    console.log(listItems);
    const [numDaysModalOpen, setNumDaysModalOpen] = useState(false);
    const [resultsModalOpen, setResultsModalOpen] = useState(false);
    const [numDays, setNumDays] = useState(3);
    const [isLoading, setIsLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [responseText, setResponseText] = useState("");
    

    const handleOpen = () => {
        setNumDaysModalOpen(true);
    };

    const handleClose = () => {
        setNumDaysModalOpen(false);
        setResultsModalOpen(true);
    }

    const handleDaysChange = (event) => {
        setNumDays(event.target.value);
    }

    const handleResultsModalClose = () => {
        setResultsModalOpen(false);
    }
    const handleClick = async () => {
        setNumDaysModalOpen(true);
        console.log(numDays);

        let queryString = window.location.search.substring(1);
        console.log(queryString);
        let location = queryString;
        let searchLocation = location.replace("%20", " ");
        // locationFromParams = 
        
        listItems = listItems.attractionResults.businesses;   // now stores objects of businesses from search result

        let attractionsArray = [] 

        listItems.forEach((attractions) => (
            attractionsArray.push(attractions.name)
        ));
        
        try {
            setIsLoading(true);
            setDisabled(true);
            const response = await axios.post("http://127.0.0.1:5000/itinerary", {
                activities: attractionsArray,
                location: searchLocation,
                days: numDays
            });
            
            let returnedResponse = response.data;
            returnedResponse = returnedResponse.response.trim();
            setResponseText(returnedResponse);
            console.log(responseText);
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
        setNumDaysModalOpen(false);
        setDisabled(false);
        setResultsModalOpen(true);
    };

  return (
    <div className="generate-intinerary-button-wrapper">
        <Button variant="outlined" onClick={handleOpen} className="generate-intinerary-button">Generate Itinerary</Button>
        <Modal open={numDaysModalOpen} onClose={handleClose} disablePortal disableEnforceFocus>
            <Paper className="modal-paper" elevation={3} square={false} >
                <Box sx={modalStyle}>
                    <Typography variant="h6">Generate an itinerary from the activities below! How many days do you want to go for?</Typography>

                    <Select value={numDays} onChange={handleDaysChange} disabled={disabled} >
                        <MenuItem value={1}>1 day</MenuItem>
                        <MenuItem value={2}>2 days</MenuItem>
                        <MenuItem value={3}>3 days</MenuItem>
                        <MenuItem value={4}>4 days</MenuItem>
                        <MenuItem value={5}>5 days</MenuItem>
                        <MenuItem value={6}>6 days</MenuItem>
                        <MenuItem value={7}>7 days</MenuItem>
                    </Select>
                    <Button variant="outlined" onClick={handleClick} disabled={disabled} className="modal-generate-button">Generate</Button>
                    {isLoading && (
                        <div className="loading-container">
                            <CircularProgress 
                            size={48}
                            sx={{
                                color: blue[200],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                            />
                        </div>
                    )} 
                </Box>
            </Paper>
        </Modal>
        <Modal open={resultsModalOpen} onClose={handleResultsModalClose}>
            <Paper>
                <Box sx={modalStyle}>
                    <IconButton className="close-icon" aria-label="close" onClick={handleResultsModalClose}>
                        <CloseIcon/>
                    </IconButton>
                    <Typography variant="h5" component="div" className="result-modal-heading">
                        Trip Itinerary
                    </Typography>
                    <TextField
                        label="Result Text"
                        value={responseText}
                        multiline
                        rows={10}
                        fullWidth
                        variant="outlined"
                        disabled
                        InputProps={{
                            style: {
                                color: '#333',
                                fontSize: 16.
                            }
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#333',
                            },
                        }}
                    />
                </Box>
            </Paper>
        </Modal>
    </div>
  );
}

function DestinationInfo() {
    const [listItems, setListItems] = useState([]);
    const location = useLocation();
    const yelpResults = location.state;

    useEffect(() => {
        setListItems(yelpResults);
    }, [yelpResults]);

    const handleAddToList = (item) => {
    setListItems((prevListItems) => [...prevListItems, item]);
    };

    return (
    <div>
        <Navbar />
        <h2 className="destination-info-page-heading">Attractions</h2>
        <ApiCallButton listItems={listItems} />
        <AttractionCard
            attractionResults={yelpResults}
            listItems={listItems}
            onAddToList={handleAddToList}
        />
    </div>
    );
}

export default DestinationInfo;
