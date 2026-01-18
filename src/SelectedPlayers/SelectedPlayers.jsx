import React from "react";
import SelectedPlayer from "../Components/SelectedPlayer/SelectedPlayer";
import { removeStoredId } from "../Components/LocalStorage/LocalStorage";

const SelectedPlayers = ({
  purchasedPlayers,
  setPurchasedPlayers,
  setAvailableBalance,
  setToggle,
}) => {
  //   console.log("purchasedPlayers", purchasedPlayers);
  const handleRemovePlayer = (player) => {
    console.log("Remove connected", player);
    const remainingPurchasedPlayer = purchasedPlayers.filter(
      (purchasedPlayer) => purchasedPlayer.playerId !== player.playerId,
    );
    setPurchasedPlayers(remainingPurchasedPlayer);
    setAvailableBalance((previous) => previous + player.biddingPriceUSD);
    removeStoredId(player.playerId);
  };

  return (
    <div className="container mx-auto my-10 px-8 md:px-16">
      {purchasedPlayers.map((player) => (
        <SelectedPlayer
          key={player.playerId}
          player={player}
          handleRemovePlayer={handleRemovePlayer}
        />
      ))}
      <div className="border inline-block mt-12 rounded-xl">
        <button
          disabled={purchasedPlayers.length >= 6}
          onClick={() => setToggle(true)}
          className={`border-4 border-white px-5 py-2 font-medium rounded-xl ${purchasedPlayers.length >= 6 ? "bg-white text-gray-500" : "bg-[#E7FE29]"}`}
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
