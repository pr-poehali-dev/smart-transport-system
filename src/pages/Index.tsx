import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorkflowSection } from '@/components/sections/WorkflowSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TechnologiesSection } from '@/components/sections/TechnologiesSection';
import { EquipmentSection } from '@/components/sections/EquipmentSection';
import { ContactsSection } from '@/components/sections/ContactsSection';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
      <Navigation onSectionClick={scrollToSection} />
      
      <HeroSection onContactClick={() => scrollToSection('contacts')} />
      <ServicesSection />
      <WorkflowSection />
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
      <EquipmentSection />
      <ContactsSection onDownloadRequisites={downloadRequisites} />
      
      <Footer />
    </div>
  );
};

export default Index;
