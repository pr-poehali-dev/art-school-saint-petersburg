import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "MapPin",
      title: "2 адреса в Петербурге",
      description:
        "Удобные локации в самом центре города: у метро Лиговский проспект и Гостиный двор",
    },
    {
      icon: "Clock",
      title: "Гибкое расписание",
      description:
        "Занятия с 11:00 до 21:00. Выберите удобное время для творчества",
    },
    {
      icon: "Users",
      title: "Профессиональные преподаватели",
      description:
        "Опытные художники с художественным образованием и многолетним стажем",
    },
    {
      icon: "Palette",
      title: "Разнообразие направлений",
      description:
        "Акварель, масло, графика, скетчинг — найдите свой стиль рисования",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создали идеальные условия для развития вашего творческого
            потенциала
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-amber-50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                <Icon
                  name={feature.icon}
                  size={32}
                  className="text-amber-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 font-montserrat">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
