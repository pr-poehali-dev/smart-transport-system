export const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-4">Этапы работы</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Прозрачный процесс от заявки до запуска</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Консультация</h3>
              <p className="text-muted-foreground text-sm">
                Обсуждаем задачу, анализируем требования и предлагаем оптимальное решение
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Планирование</h3>
              <p className="text-muted-foreground text-sm">
                Составляем техническое задание, смету и график выполнения работ
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Реализация</h3>
              <p className="text-muted-foreground text-sm">
                Выполняем монтаж, настройку и интеграцию оборудования и систем
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-lg mb-2">Поддержка</h3>
              <p className="text-muted-foreground text-sm">
                Обеспечиваем техническую поддержку и сопровождение проектов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
