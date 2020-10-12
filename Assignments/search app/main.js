const players = ["sachin", "dhoni", "virat", "sehwag", "saurav"];
const h1Handle = document.getElementById("count"); // document.querySelect('#count')
const listHandle = document.getElementById("list");

const searchHandle = (e) => {
  const filteredPlayers = players.filter((player) => {
    return player.includes(e.target.value);
  });

  // clear listItems
  listHandle.innerHTML = "";

  // build list
  buildList(filteredPlayers);
};

const buildList = (players) => {
  h1Handle.textContent = `Listing Players - ${players.length}`;
  players.forEach((player) => {
    const liTag = document.createElement("li");
    liTag.textContent = player;
    listHandle.appendChild(liTag);
  });
};

// build list the first time
buildList(players);
