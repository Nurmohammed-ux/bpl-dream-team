import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const playersPromise = fetch("/players.json").then((response) =>
  response.json()
);

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000000);

  // const handleAvailableToggle = () => setToggle(true);
  // const handleSelectedToggle = () => setToggle(false);

  return (
    <>
      <Navbar availableBalance={availableBalance} />
      <div className="container mx-auto my-10 px-8 md:px-16 flex justify-between items-center">
        <h3 className="font-bold">
          {toggle ? "Available Players" : "Selected Player (0/6)"}
        </h3>
        <div className="join">
          <button
            onClick={() => setToggle(true)}
            className={`btn border-r-0 px-7.5 rounded-l-xl ${
              toggle ? " bg-[#E7FE29]" : "bg-base-100"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn border-l-0 px-7.5 rounded-r-xl ${
              !toggle ? " bg-[#E7FE29]" : "bg-base-100"
            }`}
          >
            Selected<span>(0)</span>
          </button>
        </div>
      </div>
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
          />
        ) : (
          <SelectedPlayers />
        )}
      </Suspense>
    </>
  );
}

export default App;
