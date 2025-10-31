import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">Технологии</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg animate-fade-in">Современный стек для надежных решений</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
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
                  <span>Node.js, Python, Go</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={18} />
                  <span>PostgreSQL, MongoDB, Redis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={18} />
                  <span>REST API, GraphQL, WebSocket</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
                  <span>React, TypeScript, Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={18} />
                  <span>Tailwind CSS, shadcn/ui</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={18} />
                  <span>HTML5, CSS3, Tailwind</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
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

          <Card className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
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
  );
};
