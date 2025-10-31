import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
    }
  ];

  const projects = [
    {
      title: 'Система мониторинга транспорта',
      description: 'Внедрение комплексной системы отслеживания городского транспорта в реальном времени',
      tech: 'React, PostgreSQL, WebSocket'
    },
    {
      title: 'Корпоративный портал',
      description: 'Разработка внутреннего портала для автоматизации бизнес-процессов',
      tech: 'TypeScript, Node.js, Docker'
    },
    {
      title: 'Облачная инфраструктура',
      description: 'Миграция и настройка серверной инфраструктуры в облако',
      tech: 'AWS, Kubernetes, Terraform'
    }
  ];

  const downloadRequisites = () => {
    const requisites = `
РЕКВИЗИТЫ

Полное наименование: Индивидуальный предприниматель Халецкий Алексей Дмитриевич
Сокращенное наименование: ИП Халецкий А.Д.
Директор: Халецкий Алексей Дмитриевич

ИНН: 616483750316
ОГРНИП: 325619600236862
ОКВЭД: 62.01

Юридический адрес: 344000, Ростовская область, г. Ростов-на-Дону, пр. Ленина 90Е, кв. 22

Расчетный счет: 40802810952740014032
Наименование банка: ЮГО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК
Корсчет: 30101810600000000602
БИК: 616143002

Телефон: +7 (961) 430-84-02
E-mail: alexeychal@gmail.com
    `.trim();

    const blob = new Blob([requisites], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Реквизиты_ИП_Халецкий.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Халецкий.tech</div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Проекты</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Надежные IT-решения для вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Обслуживание интеллектуальных транспортных систем, серверов и разработка программного обеспечения
              </p>
              <Button size="lg" onClick={() => scrollToSection('contacts')} className="text-lg">
                Начать проект
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/569c5b05-ebf0-4c51-9f53-ae3af326fcc3/files/0bcc20e4-5864-427c-bf20-c2c1d5196e04.jpg" 
                alt="Tech Infrastructure"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Полный спектр IT-услуг для вашего бизнеса</p>
          <div className="grid md:grid-cols-3 gap-8">
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

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">О компании</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Мы — команда профессионалов с многолетним опытом в сфере информационных технологий. 
              Специализируемся на комплексном обслуживании интеллектуальных транспортных систем, 
              администрировании серверной инфраструктуры и разработке программного обеспечения.
            </p>
            <p>
              Наш подход — это сочетание передовых технологий, глубокой экспертизы и индивидуального 
              подхода к каждому проекту. Мы гарантируем надежность, безопасность и высокое качество 
              всех реализованных решений.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">проектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Реализованные проекты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Примеры наших успешных решений</p>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Layers" size={16} />
                    <span>{project.tech}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4">Технологии</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Современный стек для надежных решений</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Database" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Backend & База данных</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>Node.js, Python, PHP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>PostgreSQL, MySQL, MongoDB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>Redis, RabbitMQ</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Globe" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Frontend</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>React, Vue.js, Angular</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>TypeScript, JavaScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>HTML5, CSS3, Tailwind</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Cloud" className="text-primary" size={24} />
                  </div>
                  <CardTitle>DevOps & Облако</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>Docker, Kubernetes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>AWS, Yandex Cloud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>CI/CD, GitLab, Jenkins</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <CardTitle>ИТС системы</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>Системы мониторинга транспорта</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>Управление транспортными потоками</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-primary" size={18} />
                    <span>Интеграция с ЦБДД</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=39.738447%2C47.222833&z=17&pt=39.738447,47.222833,pm2rdm"
                width="100%" 
                height="100%" 
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Наш офис</h3>
                  <p className="text-muted-foreground">Ростов-на-Дону, пр. Космонавтов 2/3</p>
                  <p className="text-muted-foreground">2й этаж, офис 4</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                  <a href="tel:+79614308402" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    +7 (961) 430-84-02
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a href="mailto:alexeychal@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    alexeychal@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Сб-Вс: по договоренности</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold mb-2">Халецкий.tech</div>
            <p className="text-sm opacity-80 mb-4">ИП Халецкий А.Д.</p>
            <Button 
              variant="outline" 
              onClick={downloadRequisites}
              className="gap-2"
            >
              <Icon name="Download" size={18} />
              Скачать реквизиты
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-sm opacity-90">
            <div>
              <h3 className="font-semibold mb-3">Реквизиты</h3>
              <div className="space-y-2">
                <p>ИНН: 616483750316</p>
                <p>ОГРНИП: 325619600236862</p>
                <p>ОКВЭД: 62.01</p>
                <p>Расчетный счет: 40802810952740014032</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Банковские реквизиты</h3>
              <div className="space-y-2">
                <p>Банк: ЮГО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</p>
                <p>БИК: 616143002</p>
                <p>Корсчет: 30101810600000000602</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Юридический адрес</h3>
              <p>344000, Ростовская область, г. Ростов-на-Дону, пр. Ленина 90Е, кв. 22</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Фактический адрес</h3>
              <p>Ростов-на-Дону, пр. Космонавтов 2/3, 2й этаж, офис 4</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-secondary-foreground/20">
            <p className="text-sm opacity-80">© 2025 Индивидуальный предприниматель Халецкий Алексей Дмитриевич. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;