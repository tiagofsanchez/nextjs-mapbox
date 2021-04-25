import { StaticMap } from "react-map-gl";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 50px;
  .text {
    margin: 20px;
  }
  .staticgrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 10px;
  }
`;

const TheMAP = ({ MAPBOXAPI }) => (
  <StaticMap
    mapboxApiAccessToken={MAPBOXAPI}
    width="100%"
    height="400px"
    latitude={39.37521}
    longitude={-9.34102}
    zoom={15}
  />
);

const PlayingWithStaticMaps = (props) => {
  const { MAPBOXAPI } = props;
  return (
    <Container>
      <section>
        <div className="text">
          <h1>Playing with Static Maps</h1>
          <p>Full width</p>
        </div>

        <TheMAP MAPBOXAPI={MAPBOXAPI} />
      </section>
      <div className="staticgrid">
        <TheMAP MAPBOXAPI={MAPBOXAPI} />
        <TheMAP MAPBOXAPI={MAPBOXAPI} />
        <TheMAP MAPBOXAPI={MAPBOXAPI} />
        <TheMAP MAPBOXAPI={MAPBOXAPI} />
      </div>
    </Container>
  );
};

export default PlayingWithStaticMaps;

export async function getServerSideProps() {
  // This is the only way that I can get access to the
  // my env variable
  const MAPBOXAPI = process.env.MAPBOX_KEY;
  return {
    props: {
      MAPBOXAPI: MAPBOXAPI,
    },
  };
}
