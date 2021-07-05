import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

import Map from './core-components/Map';
import MapPopupModal from './shared-components/MapPopupModal';
import MapPopup from './shared-components/MapPopup';
import { getMapData } from './store/actions/map.action';
import Loader from './shared-components/Loader';

const ContainerDiv = styled.div`
  display: inline-block;
  position: relative;
`;

const NearMapApp = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.map.isLoading);
  const hasError = useSelector((state) => state.map.hasError);
  const markerList = useSelector((state) => state.map.data);
  
  useEffect(() => {
    dispatch(getMapData());
  }, [dispatch]);

  return (
   <ContainerDiv>
     <Loader isLoading={isLoading} hasError={hasError}>
      <Map markerList={markerList}>
        {(selectedMarker) => (
          <MapPopupModal showModal={!!selectedMarker}>
            <MapPopup
              locationName={selectedMarker?.locationName}
              description={selectedMarker?.description}
            />
          </MapPopupModal>
        )}
      </Map>
     </Loader>
   </ContainerDiv>
  );
}

export default NearMapApp;
