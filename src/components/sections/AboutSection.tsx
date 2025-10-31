import { Card } from '@/components/ui/card';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Мы специализируемся на обслуживании и модернизации интеллектуальных транспортных систем, 
              предоставляя полный спектр услуг от проектирования до технической поддержки.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Наша команда профессионалов имеет многолетний опыт работы с серверной инфраструктурой, 
              разработкой ПО и внедрением решений для умного города.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </Card>
            </div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://cdn.poehali.dev/projects/569c5b05-ebf0-4c51-9f53-ae3af326fcc3/files/b5c34a4f-deae-4b03-a7d4-0f78e6e3ad0a.jpg" 
              alt="Team Work"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
