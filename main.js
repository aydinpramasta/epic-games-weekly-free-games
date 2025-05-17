import { getCurrentWeekDatesStartingThursday } from "./lib/helper.js";

const response = await fetch(
  "https://raw.githubusercontent.com/josephmate/EpicFreeGamesList/refs/heads/main/epic_free_games.json"
);

const freeGames = await response.json();
const currentWeekFreeGames = freeGames.filter((game) =>
  getCurrentWeekDatesStartingThursday().includes(game.freeDate)
);

console.log(currentWeekFreeGames);
