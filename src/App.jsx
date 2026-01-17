import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";
import Banner from "./Banner/Banner";
import CardContainerHeader from "./CardContainer/CardContainerHeader";
import Footer from "./Components/Footer/Footer";

const playersPromise = fetch("/players.json").then((response) =>
  response.json()
);

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  // const handleAvailableToggle = () => setToggle(true);
  // const handleSelectedToggle = () => setToggle(false);

  return (
    <>
      <Navbar availableBalance={availableBalance} />
      <Banner />
      <CardContainerHeader
        toggle={toggle}
        setToggle={setToggle}
        purchasedPlayers={purchasedPlayers}
      />
      <Suspense
        fallback={
          <p className="text-center text-5xl font-bold">
            <span className="loading loading-infinity loading-xl"></span>
          </p>
        }
      >
        {toggle ? (
          <AvailablePlayers
            playersPromise={playersPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          />
        ) : (
          <SelectedPlayers
            setToggle={setToggle}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            setAvailableBalance={setAvailableBalance}
          />
        )}
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
