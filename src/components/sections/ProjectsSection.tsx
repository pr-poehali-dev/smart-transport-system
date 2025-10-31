import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">Реализованные проекты</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg animate-fade-in">Примеры наших успешных решений</p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="Folder" className="text-primary" size={24} />
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Code" size={16} />
                  <span>{project.tech}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
