import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <Icon name="Phone" size={20} className="text-accent" />
              Контакты и связь
            </h3>
            <div className="space-y-3 sm:space-y-4 text-white/80">
              <div>
                <div className="text-sm text-white/60 mb-1">Телефон / WhatsApp</div>
                <a 
                  href="tel:+996222308088" 
                  className="text-white hover:text-accent transition-colors"
                >
                  +996 222 308 088
                </a>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Email</div>
                <a 
                  href="mailto:info@infinitycards.kg" 
                  className="text-white hover:text-accent transition-colors"
                >
                  info@infinitycards.kg
                </a>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Юридический адрес</div>
                <p className="text-sm">Кыргызская Республика, г. Бишкек, ул. Федорова, 85</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <Icon name="MapPin" size={20} className="text-accent" />
              Местоположение
            </h3>
            <div className="space-y-3 sm:space-y-4 text-white/80">
              <div>
                <div className="text-sm text-white/60 mb-1">Офис продаж</div>
                <p className="text-sm">г. Бишкек, ул. Юсупа Абдрахманова 249</p>
              </div>
              <div>
                <div className="text-sm text-white/60 mb-1">Режим работы</div>
                <p className="text-sm">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-sm">Сб-Вс: выходной</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <Icon name="CreditCard" size={20} className="text-accent" />
              Продукция
            </h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>Пластиковые карты стандартные</p>
              <p>Карты с магнитной полосой</p>
              <p>Карты с чипом</p>
              <p>Дисконтные карты</p>
              <p>Карты лояльности</p>
              <p>VIP карты с металлизацией</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <Icon name="Info" size={20} className="text-accent" />
              О компании
            </h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>Прямые поставки от завода</p>
              <p>Без наценок агентств</p>
              <p>Цена ниже рынка на 30-40%</p>
              <p>Офсетная печать</p>
              <p>Заводское ламинирование</p>
              <p>Полный пакет документов</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} INFINITY CARDS. Все права защищены.</p>
          <p className="mt-2">Производство пластиковых карт в Кыргызстане</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
