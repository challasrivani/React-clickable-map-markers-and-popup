import {useState} from 'react';
import MapMarker from '../../shared-components/MapMarker';
import backgroundMap from '../../assets/images/background-map.jpg';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: inline-block;
    position: relative;
`;

const Map = ({markerList = [], children}) => {
    const markerClicked = (data) => {
        setMarkerData(data);
    };
    const mapClicked = () => {
        setMarkerData(null);
    };

    const [selectedMarker, setMarkerData] = useState(null);

    return (
        <ContainerDiv>
            <img src={backgroundMap} alt='map' onClick={mapClicked}/>
            {markerList.map((marker) => (
                <div
                    key={`marker-${marker.coordinates[0]}-${marker.coordinates[1]}`}
                    onClick={()=> markerClicked(marker)}>
                    <MapMarker 
                    xCoord={marker.coordinates[0]}
                    yCoord={marker.coordinates[1]}
                    isMarkerSelected={
                        selectedMarker?.coordinates[0] === marker.coordinates[0]&&
                        selectedMarker?.coordinates[1] === marker.coordinates[1]
                    }
                    />
                </div>
            ))}
            {children(selectedMarker)}
        </ContainerDiv>
    )
}

export default Map;
