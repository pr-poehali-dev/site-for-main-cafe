import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DonationShop = () => {
  const donationPackages = [
    {
      name: "VIP",
      price: "199₽",
      color: "bg-green-600",
      features: [
        "Префикс [VIP]",
        "Доступ к /fly",
        "Kit VIP каждые 24 часа",
        "Приоритет входа на сервер",
        "Цветной ник",
      ],
    },
    {
      name: "PREMIUM",
      price: "399₽",
      color: "bg-blue-600",
      popular: true,
      features: [
        "Префикс [PREMIUM]",
        "Все привилегии VIP",
        "Доступ к /god",
        "Kit PREMIUM каждые 12 часов",
        "Собственный варп",
        "Неограниченные дома",
      ],
    },
    {
      name: "ELITE",
      price: "699₽",
      color: "bg-purple-600",
      features: [
        "Префикс [ELITE]",
        "Все привилегии PREMIUM",
        "Доступ к креативу",
        "Kit ELITE каждые 6 часов",
        "Создание магазинов",
        "Управление погодой",
      ],
    },
  ];

  return (
    <section id="donate" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4 font-montserrat">
            💎 Поддержи сервер
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Покупая донат, ты помогаешь развитию сервера и получаешь уникальные
            привилегии!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {donationPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative border-2 ${pkg.popular ? "border-yellow-400 shadow-lg scale-105" : "border-stone-300"} hover:shadow-xl transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                    ПОПУЛЯРНЫЙ
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 ${pkg.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}
                >
                  <Icon name="Crown" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-stone-800">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-3xl font-bold text-stone-700">
                  {pkg.price}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 flex-shrink-0"
                      />
                      <span className="text-stone-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${pkg.color} hover:opacity-90 text-white font-bold py-3`}
                  size="lg"
                >
                  <Icon name="ShoppingCart" size={18} />
                  Купить {pkg.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-amber-800 mb-3">
              <Icon name="Gift" size={24} className="inline mr-2" />
              Дополнительные товары
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-stone-800">💰 Игровая валюта</h4>
                <p className="text-stone-600 text-sm">1000 монет = 50₽</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Купить
                </Button>
              </div>
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-stone-800">
                  🏠 Дополнительные дома
                </h4>
                <p className="text-stone-600 text-sm">+5 домов = 100₽</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Купить
                </Button>
              </div>
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-stone-800">
                  🎒 Увеличение инвентаря
                </h4>
                <p className="text-stone-600 text-sm">+18 слотов = 150₽</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Купить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationShop;
