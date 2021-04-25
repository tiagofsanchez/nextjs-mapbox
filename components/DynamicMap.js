import { useState } from "react";
import ReactMapGL from "react-map-gl";

const API = process.env.MAPBOX_KEY;

const DynamicMap = ({ MAPBOXAPI }) => {
  const [viewport, setViewport] = useState({
    // The latitude and longitude of the center of London
    latitude: 37.78,
    longitude: -122.45,
    zoom: 5,
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
