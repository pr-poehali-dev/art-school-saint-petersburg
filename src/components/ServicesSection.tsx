import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Brush",
      title: "Мастер-классы",
      description:
        "Индивидуальные и групповые занятия по различным техникам рисования",
      color: "bg-rose-100 hover:bg-rose-200",
      iconColor: "text-rose-600",
    },
    {
      icon: "Gift",
      title: "Дни рождения",
      description: "Креативные праздники с рисованием для детей и взрослых",
      color: "bg-purple-100 hover:bg-purple-200",
      iconColor: "text-purple-600",
    },
    {
      icon: "Building",
      title: "Корпоративы",
      description: "Тимбилдинг мероприятия и корпоративные арт-вечера",
      color: "bg-blue-100 hover:bg-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: "Heart",
      title: "Девичники",
      description: "Уютные встречи с подругами за рисованием и вином",
      color: "bg-pink-100 hover:bg-pink-200",
      iconColor: "text-pink-600",
    },
    {
      icon: "Coffee",
      title: "Свидания",
      description: "Романтичные арт-свидания для влюбленных пар",
      color: "bg-amber-100 hover:bg-amber-200",
      iconColor: "text-amber-600",
    },
    {
      icon: "Star",
      title: "Изостудия для детей",
      description: "Развивающие занятия для юных художников от 5 до 16 лет",
      color: "bg-green-100 hover:bg-green-200",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            От мастер-классов до праздничных мероприятий — найдите формат,
            который подходит именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.color} border-none transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer`}
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={service.icon}
                    size={32}
                    className={service.iconColor}
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800 font-montserrat">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  className="bg-white hover:bg-gray-50 border-gray-300 text-gray-700 font-medium"
                >
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
