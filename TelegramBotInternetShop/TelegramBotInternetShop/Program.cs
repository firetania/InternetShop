using System;
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
        // ПЕРЕД ЗАПУСКОМ ВСТАВИТЬ ТОКЕН
        private static string token = <здесь вставить токен бота>;
        private static TelegramBotClient client;

        static void Main(string[] args)
        {
            client = new TelegramBotClient(token);

            client.StartReceiving(Update, Error);

            Console.ReadLine();
        }

        async static Task Update(ITelegramBotClient botClient, Update update, CancellationToken token)
        {
            var message = update.Message;
            string messageForOneTimePassword = "getcode";

            if (message != null)
            {
                if (message.Text == messageForOneTimePassword)
                {
                    string oneTimePassword = "";
                    var rand = new Random();
                    for (int ctr = 0; ctr <= 4; ctr++)
                        oneTimePassword += rand.Next(10).ToString();

                    Console.WriteLine(update.Message.Text);
                    await client.SendTextMessageAsync(update.Message.Chat.Id, "Here's your code " + oneTimePassword);
                }
                else
                {
                    Console.WriteLine(update.Message.Text);
                    await client.SendTextMessageAsync(update.Message.Chat.Id, "Sorry, the command is wrong. Please, enter the existing one.");
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
