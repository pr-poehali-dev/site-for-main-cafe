import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-green-600 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-800 border-2 border-green-400"></div>
            <h1 className="text-2xl font-bold text-white font-montserrat">
              MineCraft Сервер
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-white hover:text-green-200 transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-white hover:text-green-200 transition-colors"
            >
              О сервере
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-green-200 transition-colors"
            >
              Скриншоты
            </a>
            <a
              href="#donate"
              className="text-white hover:text-green-200 transition-colors"
            >
              Донат
            </a>
            <a
              href="#rules"
              className="text-white hover:text-green-200 transition-colors"
            >
              Правила
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              className="bg-white text-green-600 border-white hover:bg-green-50"
            >
              <Icon name="Users" size={16} />
              Онлайн: 247
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Подключиться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
