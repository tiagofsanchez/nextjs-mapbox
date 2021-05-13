import { useState } from "react";
import ReactMapGL from "react-map-gl";

const DynamicMap = ({ MAPBOXAPI }) => {
  const [viewport, setViewport] = useState({
    // The latitude and longitude of the center of London
    latitude: 39.37521,
    longitude: -9.34102,
    zoom: 15,
    width: "100%",
    height: "600px",
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={MAPBOXAPI}
      {...viewport}
      onViewportChange={setViewport}
    />
  );
};

export default DynamicMap;
