import React from "react";
import SelectedPlayer from "../Components/SelectedPlayer/SelectedPlayer";

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
      (purchasedPlayer) => purchasedPlayer.playerId !== player.playerId
    );
    setPurchasedPlayers(remainingPurchasedPlayer);
    setAvailableBalance((previous) => previous + player.biddingPriceUSD);
  };

  return (
    <div className="container mx-auto my-10 px-8 md:px-16">
      {purchasedPlayers.map((player) => (
        <SelectedPlayer
          key={player.playerId}
          player={player}
          handleRemovePlayer={handleRemovePlayer}
          setToggle={setToggle}
        />
      ))}
    </div>
  );
};

export default SelectedPlayers;
