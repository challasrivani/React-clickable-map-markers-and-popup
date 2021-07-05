import styled from 'styled-components';
import marker from '../../assets/images/marker.png';
import markerSelected from '../../assets/images/marker-selected.png';

const Marker = styled.div`
    width: 40px;
    height: 50px;
    cursor: pointer;
    background-image: url(${(props)=> props.isSelected ? markerSelected : marker});
    background-repeat: no-repeat;
    position: absolute;
    left: ${(props) => `${props.xCoord}px`};
    top: ${(props) => `${props.yCoord}px`};

    &:hover {
        transform: scale(1.5);
    }
`;

const MapMarker = ({ xCoord, yCoord, isMarkerSelected }) => (
    <Marker
        xCoord={xCoord}
        yCoord={yCoord}
        isSelected={isMarkerSelected}
    />
);

export default MapMarker;

