import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServerInfo = () => {
  const servers = [
    {
      name: "Выживание",
      description:
        "Классический сервер выживания с экономикой и защитой территорий",
      players: "156/200",
      status: "online",
      ip: "survival.minecraft-server.ru",
    },
    {
      name: "Креатив",
      description: "Безграничное творчество в креативном режиме",
      players: "67/100",
      status: "online",
      ip: "creative.minecraft-server.ru",
    },
    {
      name: "Мини-игры",
      description: "SkyWars, BedWars, Murder Mystery и другие PvP режимы",
      players: "24/50",
      status: "online",
      ip: "games.minecraft-server.ru",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Наши серверы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выбери подходящий сервер и погрузись в удивительный мир Minecraft
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {servers.map((server, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-green-600">
                    {server.name}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-500">
                      {server.players}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{server.description}</p>
                <div className="bg-gray-100 p-3 rounded mb-4">
                  <code className="text-sm text-gray-700">{server.ip}</code>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Icon name="ExternalLink" size={16} />
                  Подключиться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Как начать играть?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Download" size={24} className="text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">1. Скачай клиент</h4>
              <p className="text-gray-600">
                Установи Minecraft или используй наш лаунчер
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Server" size={24} className="text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">2. Добавь сервер</h4>
              <p className="text-gray-600">
                Используй IP адрес нужного сервера
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Play" size={24} className="text-yellow-600" />
              </div>
              <h4 className="font-semibold mb-2">3. Играй и развивайся</h4>
              <p className="text-gray-600">
                Исследуй мир и находи новых друзей
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerInfo;
