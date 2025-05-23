import { getCurrentWeekDatesStartingThursday } from "./lib/helper.js";
import bot from "./lib/telegraf.js";
import config from "./lib/config.js";

const response = await fetch(
  "https://raw.githubusercontent.com/josephmate/EpicFreeGamesList/refs/heads/main/epic_free_games.json"
);

const freeGames = await response.json();
const currentWeekFreeGames = freeGames.filter((game) =>
  getCurrentWeekDatesStartingThursday().includes(game.freeDate)
);

const message =
  currentWeekFreeGames.length > 0
    ? `Current week free games: \n\n${currentWeekFreeGames
        .map((game) => `${game.gameTitle} - ${game.epicStoreLink}`)
        .join("\n")}`
    : "No free games available for the current week.";

await bot.telegram.sendMessage(config.telegramChatId, message);
