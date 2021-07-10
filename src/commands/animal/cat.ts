import * as DJS from "discord.js";
import fetch from "node-fetch";
import Command from "../../structures/Command";
import Bot from "../../structures/Bot";

export default class CatCommand extends Command {
  constructor(bot: Bot) {
    super(bot, {
      name: "cat",
      description: "Shows a picture of a cat",
      category: "animal",
    });
  }

  async execute(_: Bot, message: DJS.Message) {
    try {
      const data = await fetch("https://nekos.life/api/v2/img/meow").then((res) => res.json());

      const embed = new DJS.MessageEmbed().setImage(data.url);

      return message.channel.send({ embeds: [embed] });
    } catch (err) {
      console.error(err);
      return message.channel.send("An unexpected error occurred");
    }
  }
}
