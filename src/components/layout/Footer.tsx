import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon
                  name="CircuitBoard"
                  className="text-primary-foreground"
                  size={20}
                />
              </div>
              <span className="text-xl font-bold text-primary">ITS tech</span>
            </div>
            <p className="text-muted-foreground">
              Надежные IT-решения для вашего бизнеса. Обслуживание ИТС, серверов
              и разработка ПО.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>г. Ростов-на-Дону</p>
              <p>пр. Космонавтов 2/3, офис 4</p>
              <p>Телефон: +7 (961) 430-84-02</p>
              <p>Email: alexeychal@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Интеллектуальные транспортные системы</p>
              <p>Серверное администрирование</p>
              <p>Разработка ПО</p>
              <p>Выездной монтаж</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 ITS tech. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
