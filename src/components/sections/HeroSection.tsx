import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Надежные IT-решения для вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Обслуживание интеллектуальных транспортных систем, серверов и разработка программного обеспечения
            </p>
            <Button size="lg" onClick={onContactClick} className="text-lg">
              Начать проект
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
          <div className="animate-slide-in-right">
            <img 
              src="https://cdn.poehali.dev/projects/569c5b05-ebf0-4c51-9f53-ae3af326fcc3/files/0bcc20e4-5864-427c-bf20-c2c1d5196e04.jpg" 
              alt="Tech Infrastructure"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
