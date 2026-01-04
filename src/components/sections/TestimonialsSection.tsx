import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface TestimonialsSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  isVisible: boolean;
}

const TestimonialsSection = ({ sectionRef, isVisible }: TestimonialsSectionProps) => {
  const testimonials = [
    {
      name: "Алексей Петров",
      company: "Фитнес-клуб Максимум",
      text: "Заказывали дисконтные карты для клиентов. Качество печати отличное, цены ниже чем у агентств в 2 раза! Сроки соблюдены, весь пакет документов получили вовремя.",
      rating: 5
    },
    {
      name: "Марина Сидорова",
      company: "Салон красоты Гармония",
      text: "Сделали пластиковые карты с магнитной полосой для постоянных клиентов. Очень довольны результатом — карты выглядят премиально. Рекомендую!",
      rating: 5
    },
    {
      name: "Дмитрий Козлов",
      company: "Ресторан Подсолнух",
      text: "Работаем с INFINITY CARDS уже второй год. Заказывали карты лояльности несколько раз — всегда быстро, качественно и без проблем. Надежный партнер!",
      rating: 5
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-12 sm:py-16 lg:py-20 bg-muted/30 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-secondary">
            Отзывы наших клиентов
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 200 компаний уже выбрали нас для производства пластиковых карт
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: isVisible ? 'scale-in 0.5s ease-out forwards' : 'none',
                opacity: isVisible ? 1 : 0
              }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-foreground/80 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-secondary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Icon name="Award" size={24} className="text-primary" />
            <span className="text-sm sm:text-base font-semibold text-secondary">
              Средняя оценка 4.9/5 на основе 180+ отзывов
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
