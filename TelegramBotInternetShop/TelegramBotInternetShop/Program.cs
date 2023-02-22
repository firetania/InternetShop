using System;
using System.Collections.Generic;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Telegram.Bot;
using Telegram.Bot.Args;
using Telegram.Bot.Types;
using Telegram.Bot.Types.Enums;

namespace TelegramBotInternetShop
{
    class Program
    {
        private static string token = "";
        private static string tokenFilePath = "D:/Универ/8 семестр/Веб-разработка/Не для комитов/TelegramBotNotepadShopToken.txt";

        private static TelegramBotClient client;

        private static Dictionary<string, string> commands = new Dictionary<string, string>()
        {
            {"getcode", "получить одноразовый пароль" },
            {"readcommands", "просмотреть доступные команды" }
        };

        static void Main(string[] args)
        {
            using (StreamReader sr = new StreamReader(tokenFilePath))
            {
                token = sr.ReadLine();
            }

            client = new TelegramBotClient(token);

            client.StartReceiving(Update, Error);

            Console.ReadLine();
        }

        async static Task Update(ITelegramBotClient botClient, Update update, CancellationToken token)
        {
            var message = update.Message;

            if (message != null)
            {
                if (commands.ContainsKey(message.Text))
                {
                    switch (message.Text)
                    {
                        case "getcode":
                            {
                                string oneTimePassword = "";
                                var rand = new Random();
                                for (int ctr = 0; ctr <= 4; ctr++)
                                    oneTimePassword += rand.Next(10).ToString();

                                Console.WriteLine(update.Message.Text);
                                await client.SendTextMessageAsync(update.Message.Chat.Id, "Ваш код для входа " + oneTimePassword);
                                break;
                            }
                        case "readcommands":
                            {
                                string outStr = "";
                                foreach (KeyValuePair<string, string> kvp in commands)
                                {
                                    outStr += kvp.Key + " - " + kvp.Value + "\n";
                                }
                                Console.WriteLine(update.Message.Text);
                                await client.SendTextMessageAsync(update.Message.Chat.Id, outStr);

                                break;
                            }
                    }
                }
                else
                {
                    string outStr = "Неверная команда. Введите одну из доступных:\n";
                    foreach (KeyValuePair<string, string> kvp in commands)
                    {
                        outStr += kvp.Key + " - " + kvp.Value + "\n";
                    }
                    Console.WriteLine(update.Message.Text);
                    await client.SendTextMessageAsync(update.Message.Chat.Id, outStr);
                }
            }

            Console.WriteLine("Bot works");
        }

        private static Task Error(ITelegramBotClient arg1, Exception arg2, CancellationToken arg3)
        {
            throw new NotImplementedException();
        }
    }
}
