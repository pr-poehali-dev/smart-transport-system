import Icon from '@/components/ui/icon';

interface NavigationProps {
  onSectionClick: (id: string) => void;
}

export const Navigation = ({ onSectionClick }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="CircuitBoard" className="text-primary-foreground" size={20} />
            </div>
            <span className="text-2xl font-bold text-primary">ITS tech</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => onSectionClick('hero')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => onSectionClick('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => onSectionClick('about')} className="hover:text-primary transition-colors">О компании</button>
            <button onClick={() => onSectionClick('projects')} className="hover:text-primary transition-colors">Проекты</button>
            <button onClick={() => onSectionClick('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
