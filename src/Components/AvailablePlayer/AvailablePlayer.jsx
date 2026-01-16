import React from "react";
import userLogo from "../../assets/user-1.png";
import location from "../../assets/report-1.png";

const AvailablePlayer = ({
  player,
  availableBalance,
  setAvailableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  // console.log(player);
  const {
    playerId,
    image,
    name,
    country,
    role,
    battingType,
    bowlingType,
    biddingPriceUSD,
  } = player;

  const isAlreadySelected = purchasedPlayers.find(
    (player) => player.playerId === playerId
  );

  const handleChoosePlayer = () => {
    // Validation : Already Selected
    if (isAlreadySelected) {
      alert("Player already selected!");
      return;
    }

    // Validation : Max player reached
    if (purchasedPlayers.length >= 6) {
      alert("You can only select 6 players.");
      return;
    }

    if (availableBalance < biddingPriceUSD) {
      alert("Your Available Balance is Lower than Player Price");
      return;
    }
    setAvailableBalance((previous) => previous - biddingPriceUSD);
    setPurchasedPlayers([...purchasedPlayers, player]);
  };

  return (
    <div>
      <div className="card bg-base-100 w-full p-6 shadow-lg rounded-2xl">
        <figure>
          <img
            className="w-96 h-70 mb-6 object-fit rounded-xl"
            src={image}
            alt={name}
          />
        </figure>
        <div className="text-left">
          <h2 className="card-title mb-4">
            <img src={userLogo} alt="Human" />
            {player.name}
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={location} alt="location" />
              <p>{country}</p>
            </div>
            <button className="btn rounded-xl">{role}</button>
          </div>
          <hr className="my-4 text-gray-300" />
          <div>
            <p className="font-bold mb-2">Ratings</p>
            <div className="flex justify-between items-center mb-3">
              <p className="font-semibold">{battingType}</p>
              <button className="text-gray-400">{bowlingType}</button>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">Price: ${biddingPriceUSD}</p>
              <button
                disabled={isAlreadySelected}
                onClick={() => {
                  handleChoosePlayer();
                }}
                className={`btn font-medium rounded-xl hover:bg-[#E7FE29] ${
                  isAlreadySelected ? " text-gray-400" : " text-gray-600"
                }`}
              >
                {isAlreadySelected ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
