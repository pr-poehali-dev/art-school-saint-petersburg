import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const locations = [
    {
      name: "Лиговский проспект",
      metro: "м. Лиговский проспект",
      address: "Транспортный пер. 1, 4 эт.",
      icon: "MapPin",
    },
    {
      name: "Невский проспект",
      metro: "м. Гостиный двор",
      address: "Пр. Невский 35, ТЦ Гостиный двор",
      icon: "MapPin",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100 relative">
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 opacity-10">
        <img
          src="https://cdn.poehali.dev/files/095d64f8-f610-488f-bc87-6b9f16a4d871.png"
          alt=""
          className="w-24 h-24"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <img
          src="https://cdn.poehali.dev/files/7c3bcb22-11f3-4319-9bad-1677416f8519.png"
          alt=""
          className="w-16 h-16"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Контакты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Приходите к нам в гости! Два удобных адреса в центре Петербурга
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800 font-montserrat text-center">
                  Связаться с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-xl">
                    <Icon name="Phone" size={24} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Телефон</p>
                    <p className="text-gray-600">8 (812) 628-20-16</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-xl">
                    <Icon name="Clock" size={24} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Время работы</p>
                    <p className="text-gray-600">11:00 - 21:00</p>
                    <p className="text-gray-500 text-sm">ежедневно</p>
                  </div>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 transition-all duration-300 hover:scale-105">
                  Записаться на занятие
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
                        <Icon
                          name={location.icon}
                          size={24}
                          className="text-blue-600"
                        />
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-800 font-montserrat">
                        {location.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-blue-600 font-medium">
                        {location.metro}
                      </p>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                    <Button
                      variant="outline"
                      className="mt-4 w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                    >
                      Показать на карте
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn.poehali.dev/files/095d64f8-f610-488f-bc87-6b9f16a4d871.png"
              alt="Акварель"
              className="w-16 h-16 opacity-60"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <p className="text-gray-600 text-lg">
            Начните свой творческий путь уже сегодня!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
