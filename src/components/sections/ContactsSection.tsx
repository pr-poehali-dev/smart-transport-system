import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ContactsSectionProps {
  onDownloadRequisites: () => void;
}

export const ContactsSection = ({ onDownloadRequisites }: ContactsSectionProps) => {
  return (
    <section id="contacts" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Свяжитесь с нами</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=39.738447%2C47.222833&z=17&pt=39.738447,47.222833,pm2rdm"
              width="100%" 
              height="100%" 
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">344000, Ростовская область, г. Ростов-на-Дону, пр. Ленина 90Е, кв. 22</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={24} />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+79614308402" className="text-primary hover:underline text-lg">+7 (961) 430-84-02</a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={24} />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:alexeychal@gmail.com" className="text-primary hover:underline text-lg">alexeychal@gmail.com</a>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Реквизиты компании</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Полное наименование:</h3>
                <p className="text-muted-foreground">Индивидуальный предприниматель Халецкий Алексей Дмитриевич</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Сокращенное наименование:</h3>
                <p className="text-muted-foreground">ИП Халецкий А.Д.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">ИНН:</h3>
                <p className="text-muted-foreground">616483750316</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">ОГРНИП:</h3>
                <p className="text-muted-foreground">325619600236862</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Расчетный счет:</h3>
                <p className="text-muted-foreground">40802810952740014032</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">БИК:</h3>
                <p className="text-muted-foreground">616143002</p>
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <Button onClick={onDownloadRequisites} variant="outline" size="lg">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать реквизиты
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
