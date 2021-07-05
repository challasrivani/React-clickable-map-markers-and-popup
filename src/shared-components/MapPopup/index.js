import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: block;
`; 

const MapPopup = ({
    locationName = 'aLocation',
    description = 'location Description'
}) => (<ContainerDiv>
        <div style={{fontWeight: 800, marginBottom: '20px'}}>Location Data</div>
        <div>locationName: {locationName}</div>
        <div>Description: {description}</div>
    </ContainerDiv>);

export default MapPopup;