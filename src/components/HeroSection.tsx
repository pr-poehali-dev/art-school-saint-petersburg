import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Decorative Star */}
      <div className="absolute top-20 right-20 opacity-20 animate-pulse">
        <img
          src="https://cdn.poehali.dev/files/095d64f8-f610-488f-bc87-6b9f16a4d871.png"
          alt="Decorative star"
          className="w-32 h-32"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Star decoration */}
          <div className="flex justify-center mb-8">
            <img
              src="https://cdn.poehali.dev/files/095d64f8-f610-488f-bc87-6b9f16a4d871.png"
              alt="Акварель логотип"
              className="w-20 h-20 animate-fade-in"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 font-montserrat">
            Школа рисования
            <span className="block text-amber-600 mt-2">Акварель</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Откройте мир художественного творчества в сердце Санкт-Петербурга.
            Профессиональные преподаватели, уютная атмосфера, гибкое расписание.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Записаться на урок
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Наши работы
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-amber-600 mb-2">2</div>
              <div className="text-gray-600">адреса в центре города</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                11:00-21:00
              </div>
              <div className="text-gray-600">удобное расписание</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
              <div className="text-gray-600">видов занятий</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background watercolor effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
