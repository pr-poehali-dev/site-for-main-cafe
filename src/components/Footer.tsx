import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 border-2 border-green-400"></div>
              <h3 className="text-xl font-bold">MineCraft Сервер</h3>
            </div>
            <p className="text-gray-400">
              Лучший русский сервер Minecraft с дружелюбным сообществом и
              уникальными возможностями.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Серверы</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Выживание
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Креатив
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мини-игры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Анархия
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Правила
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Техподдержка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Баг-репорты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Связь с нами</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
                <span>Discord</span>
              </a>
              <a
                href="https://t.me/+QgiLIa1gFRY4Y2Iy"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Send" size={16} />
                <span>Telegram</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Youtube" size={16} />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MineCraft Сервер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
