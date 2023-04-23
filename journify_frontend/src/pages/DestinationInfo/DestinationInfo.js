import Navbar from "../../components/Navbar/Navbar";
import AttractionCards from "../../components/AttractionCards/AttractionCards";
import { useLocation } from "react-router-dom";


function DestinationInfo() {

    const location = useLocation();
    const yelpResults = location.state;

    return (
        <div>
            <Navbar />
            <h2>Attractions</h2>
            <AttractionCards attractionResults={yelpResults} />
        </div>
    );
}

export default DestinationInfo;