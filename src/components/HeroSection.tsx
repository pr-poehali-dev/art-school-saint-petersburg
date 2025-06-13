import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Background Rectangle */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <img
          src="https://cdn.poehali.dev/files/f90b8f2d-5b36-4d18-b838-4b2f7e1f0a8d.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-20 right-20 opacity-30 animate-pulse">
        <img
          src="https://cdn.poehali.dev/files/095d64f8-f610-488f-bc87-6b9f16a4d871.png"
          alt=""
          className="w-24 h-24"
        />
      </div>
      <div className="absolute bottom-32 left-16 opacity-20 animate-pulse">
        <img
          src="https://cdn.poehali.dev/files/d7f4f8a2-8b3e-4c9f-a1d2-3e5f6a7b8c9d.png"
          alt=""
          className="w-16 h-16"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://cdn.poehali.dev/files/6a2b4f91-3c5d-4e7f-8a9b-1c2d3e4f5a6b.png"
              alt="Школа рисования Акварель"
              className="w-32 h-32 animate-fade-in"
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

          {/* Gallery Preview */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="relative group">
              <img
                src="https://cdn.poehali.dev/files/2a8f4b1e-5c9d-4f7a-8b3e-1d2c3f4a5b6c.png"
                alt="Работы учеников"
                className="w-48 h-32 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-amber-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <img
                src="https://cdn.poehali.dev/files/7e3f8a2d-9b4c-4e6f-8a1d-2c3f4a5b6c7d.png"
                alt="Работы учеников"
                className="w-48 h-32 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-amber-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
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
