import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">TechSolutions</div>
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

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить сообщение
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:alexeychal@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">alexeychal@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium">Телефон</div>
                      <a href="tel:+79614308402" className="text-muted-foreground hover:text-primary transition-colors">+7 (961) 430 84 02</a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="text-lg font-semibold mb-2">TechSolutions</div>
          <p className="text-sm opacity-80">© 2025 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;