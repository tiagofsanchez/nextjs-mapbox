import { StaticMap } from "react-map-gl";
import styles from "../styles/Home.module.css";

const PlayingWithStaticMaps = (props) => {
  const { MAPBOXAPI } = props
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Playing with Static Maps</h1>
        <p>Full width</p>
        <StaticMap
          mapboxApiAccessToken={MAPBOXAPI}
          width="100vw"
          height="600px"
          latitude={39.37521}
          longitude={-9.34102}
          zoom={15}
        />
  
      </main>
    </div>
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