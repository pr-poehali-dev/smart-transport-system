import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Network',
    title: 'Интеллектуальные транспортные системы',
    description: 'Обслуживание и модернизация ИТС, внедрение современных решений для управления транспортными потоками'
  },
  {
    icon: 'Server',
    title: 'Серверное администрирование',
    description: 'Настройка, мониторинг и техническая поддержка серверной инфраструктуры 24/7'
  },
  {
    icon: 'Code',
    title: 'Разработка программного обеспечения',
    description: 'Создание надежных корпоративных решений и веб-приложений под ключ'
  },
  {
    icon: 'Wrench',
    title: 'Выездной монтаж оборудования',
    description: 'Монтаж и настройка оконечного оборудования на объекте с последующим подключением к ЦОД заказчика'
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Полный спектр IT-услуг для вашего бизнеса</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
