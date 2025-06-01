import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-400 to-green-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Добро пожаловать в наш
          <span className="block text-yellow-300">Minecraft мир!</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Присоединяйся к лучшему русскому серверу Minecraft! Постройки,
          приключения, дружелюбное сообщество ждут тебя.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
          >
            <Icon name="Play" size={20} />
            Начать играть
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/20 text-white border-white hover:bg-white/30 px-8 py-4 text-lg"
          >
            <Icon name="Download" size={20} />
            Скачать клиент
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
            <div className="text-2xl font-bold">247</div>
            <div className="text-sm">Игроков онлайн</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm">Лет работы</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
            <div className="text-2xl font-bold">10+</div>
            <div className="text-sm">Мини-игр</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
