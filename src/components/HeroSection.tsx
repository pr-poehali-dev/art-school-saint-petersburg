import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Background Rectangle */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <img
          src="https://cdn.poehali.dev/files/8b08cf6b-b2d5-4322-80ee-b046fd7f5c8e.png"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-20 right-20 opacity-30 animate-pulse">
        <img
          src="https://cdn.poehali.dev/files/7c3bcb22-11f3-4319-9bad-1677416f8519.png"
          alt=""
          className="w-24 h-24"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="absolute bottom-32 left-16 opacity-20 animate-pulse">
        <img
          src="https://cdn.poehali.dev/files/095d64f8-f610-488f-bc87-6b9f16a4d871.png"
          alt=""
          className="w-16 h-16"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=128&h=128&fit=crop&crop=center"
              alt="Школа рисования Акварель"
              className="w-32 h-32 animate-fade-in rounded-full"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
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
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=130&fit=crop&crop=center"
                alt="Работы учеников"
                className="w-48 h-32 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-amber-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=130&fit=crop&crop=center"
                alt="Работы учеников"
                className="w-48 h-32 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
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
