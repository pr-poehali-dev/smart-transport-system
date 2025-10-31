import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const EquipmentSection = () => {
  return (
    <section id="equipment" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">Оборудование</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg animate-fade-in">Профессиональное оборудование для надежной работы систем</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Server" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg">Серверное оборудование</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Высокопроизводительные серверы для обработки данных и хранения информации транспортных систем</p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Lock" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg">Криптографические шлюзы</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Защита данных и обеспечение безопасного обмена информацией в соответствии с ГОСТ</p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Car" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg">Детекторы транспорта</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Современные детекторы для мониторинга интенсивности и скорости транспортных потоков</p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="TrafficCone" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg">Контроллеры светофоров</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Контроллеры управления светофорными объектами с возможностью адаптивного регулирования</p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="CloudRain" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg">Метеостанции</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Метеорологические станции для мониторинга погодных условий и прогнозирования дорожной обстановки</p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Camera" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg">Обзорные камеры</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Высококачественные камеры видеонаблюдения для контроля дорожной ситуации в режиме реального времени</p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Wifi" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg">Промышленные роутеры</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Надежные роутеры промышленного класса для стабильной связи всех компонентов системы</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
