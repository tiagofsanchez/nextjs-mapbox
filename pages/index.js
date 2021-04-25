import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import styled from "styled-components";

const MapGridContainer = styled.div`
  width: 100%;
  display: grid;

  .mapgrid {
    display: grid;
    grid-template-rows: auto;
  }
`;

const StaticMap = dynamic(() => import("../components/StaticMapComponent"), {
  loading: () => <h1>Loading ...</h1>,
  ssr: false,
});

const DynamicMap = dynamic(() => import("../components/DynamicMap"), {
  loading: () => <h1>Loading...</h1>,
  ssr: false,
});

export default function Home(props) {
  const {MAPBOXAPI } = props
  return (
    <div className={styles.container}>
      <Head>
        <title>Testing MapBox with Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Testing MapBox with Next</h1>

        <MapGridContainer>
          <div className="mapgrid">
            <h4>Static Map</h4>
            <p>
              A static map that could be very useful when the user doesn't
              require interaction
            </p>
            <StaticMap MAPBOXAPI={MAPBOXAPI}/>
            <p>Check it out</p>
          </div>
          <div className="mapgrid">
            <h4>Dynamic Map</h4>
            <p>
              The user will require same sort of interactions, like searching
              the map surroundings
            </p>
            <DynamicMap MAPBOXAPI={MAPBOXAPI}/>
            <p>Check it out</p>
          </div>
        </MapGridContainer>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.tiagofsanchez.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test by Tiago
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps() { 
 // This is the only way that I can get access to the 
 // my env variable
  const MAPBOXAPI = process.env.MAPBOX_KEY
  return { 
    props: { 
      MAPBOXAPI: MAPBOXAPI
    }
  }
}

