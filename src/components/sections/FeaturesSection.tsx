import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FeaturesSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  isVisible: boolean;
}

const FeaturesSection = ({ sectionRef, isVisible }: FeaturesSectionProps) => {
  const features = [
    {
      icon: "Factory",
      title: "Прямые поставки",
      description: "Работаем напрямую с заводом-производителем без посредников"
    },
    {
      icon: "BadgePercent",
      title: "Цена ниже на 30-40%",
      description: "Экономия за счет отсутствия наценок рекламных агентств"
    },
    {
      icon: "Sparkles",
      title: "Офсетная печать",
      description: "Профессиональная печать с точной цветопередачей"
    },
    {
      icon: "ShieldCheck",
      title: "Качество гарантировано",
      description: "Заводское ламинирование и контроль качества"
    },
    {
      icon: "FileCheck",
      title: "Полный пакет документов",
      description: "Договор, счет, акт выполненных работ"
    },
    {
      icon: "Zap",
      title: "Быстрые сроки",
      description: "Производство от 7 рабочих дней"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-12 sm:py-16 lg:py-20 bg-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-secondary">
            Почему выбирают нас
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Преимущества работы с производителем напрямую
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: isVisible ? 'scale-in 0.5s ease-out forwards' : 'none',
                opacity: isVisible ? 1 : 0
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={feature.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-secondary">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
