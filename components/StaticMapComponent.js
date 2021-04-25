import { StaticMap } from "react-map-gl";


const StaticMapComponent = ({MAPBOXAPI}) => {
  return (
    <StaticMap
      mapboxApiAccessToken={MAPBOXAPI}
      width="100%"
      height="600px"
      latitude={37.78}
      longitude={-122.45}
      zoom={5}
    />
  );
};

export default StaticMapComponent;
