import React from "react";
import deleteImg from "../../assets/frame.png";

const SelectedPlayer = ({ player, handleRemovePlayer, setToggle }) => {
  // console.log(player);
  const { image, name, battingType } = player;
  return (
    <div>
      <div className="flex justify-between items-center border border-gray-200 rounded-2xl p-6 my-4">
        <div className="flex items-center space-x-10">
          <img className="h-18 w-18 rounded-2xl" src={image} alt="Rectangle" />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p>{battingType}</p>
          </div>
        </div>
        <img
          onClick={() => handleRemovePlayer(player)}
          className="btn p-2 rounded-2xl hover:bg-[#E7FE29]"
          src={deleteImg}
          alt="Delete"
        />
      </div>
      <div className="border inline-block mt-12 rounded-xl">
        <button
          onClick={() => setToggle(true)}
          className="bg-[#E7FE29] border-4 border-white px-5 py-2 font-medium rounded-xl"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
