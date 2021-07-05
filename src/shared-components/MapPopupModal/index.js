import styled from 'styled-components';

const ContainerDiv = styled.div`
    width: 200px;
    min-height: 200px;
    background: #FFFFFF;
    border-radius: 5px;
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 20px;
`;

const MapPopupModal = ({showModal, children}) => 
showModal ? (<ContainerDiv>
    <div>{children}</div>
</ContainerDiv>) : null;

export default MapPopupModal;