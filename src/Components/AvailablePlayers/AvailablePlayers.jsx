import React, { use } from "react";
import AvailablePlayer from "../AvailablePlayer/AvailablePlayer";

const AvailablePlayers = ({ playersPromise, availableBalance, setAvailableBalance }) => {
  const players = use(playersPromise);
  return (
    <div className="container mx-auto px-8 md:px-16">
      <div className="mt-8 grid grid-cols-1 place-items-center md:grid-cols-3 gap-6">
        {players.map((player) => (
          <AvailablePlayer
            key={player.playerId}
            player={player}
            availableBalance ={availableBalance}
            setAvailableBalance={setAvailableBalance}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
