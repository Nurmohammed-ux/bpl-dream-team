import React from 'react';

const CardContainerHeader = ({ toggle, setToggle, purchasedPlayers }) => {
    return (
        <div className="container mx-auto my-10 px-8 md:px-16 flex justify-between items-center">
        <h3 className="font-bold">
          {toggle
            ? "Available Players"
            : `Selected Players (${purchasedPlayers.length}/6)`}
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
            Selected<span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>
    );
};

export default CardContainerHeader;