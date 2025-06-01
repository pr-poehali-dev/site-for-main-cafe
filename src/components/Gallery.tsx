import { Card } from "@/components/ui/card";

const Gallery = () => {
  const screenshots = [
    {
      url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop",
      title: "Спавн сервера",
      description: "Красивый спавн с порталами к разным мирам",
    },
    {
      url: "https://images.unsplash.com/photo-1566583337811-52de08aa1dd8?w=500&h=300&fit=crop",
      title: "Город игроков",
      description: "Огромный город, построенный сообществом",
    },
    {
      url: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&h=300&fit=crop",
      title: "PvP арена",
      description: "Эпичные битвы в специальной арене",
    },
    {
      url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop",
      title: "Подземелья",
      description: "Опасные данжи с ценными наградами",
    },
    {
      url: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=500&h=300&fit=crop",
      title: "Замок",
      description: "Величественный замок одного из игроков",
    },
    {
      url: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop",
      title: "Ферма",
      description: "Автоматические фермы для ресурсов",
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Скриншоты сервера
          </h2>
          <p className="text-xl text-gray-600">
            Посмотри на удивительные постройки наших игроков
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {screenshot.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
