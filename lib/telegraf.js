import { Telegraf } from "telegraf";
import config from "./config";

const bot = new Telegraf(config.telegramBotToken);

export default bot;
