const getPlayerListFromLocalStorage = () => {
  const playersIdListString = localStorage.getItem("playersList");
  if (playersIdListString) {
    const storedPlayersList = JSON.parse(playersIdListString);
    return storedPlayersList;
  }
  return [];
};

const removePlayersIdFromLocalStorage = (playerId) => {
  const storedPlayersIdList = getPlayerListFromLocalStorage();
  const remainingPlayersId = storedPlayersIdList.filter(
    (pId) => pId !== playerId,
  );
  localStorage.setItem("playersList", JSON.stringify(remainingPlayersId));
};

const addPlayersListToLocalStorage = (playerId) => {
  const playersIdList = getPlayerListFromLocalStorage();
  playersIdList.push(playerId);
  localStorage.setItem("playersList", JSON.stringify(playersIdList));
};

export {
  getPlayerListFromLocalStorage as getStoredId,
  addPlayersListToLocalStorage as addStoredId,
  removePlayersIdFromLocalStorage as removeStoredId,
};
