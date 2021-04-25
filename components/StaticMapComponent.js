import { StaticMap } from "react-map-gl";

const StaticMapComponent = ({ MAPBOXAPI }) => {
  return (
    <StaticMap
      mapboxApiAccessToken={MAPBOXAPI}
      width="100%"
      height="600px"
      latitude={39.37521}
      longitude={-9.34102}
      zoom={15}
    />
  );
};

export default StaticMapComponent;
