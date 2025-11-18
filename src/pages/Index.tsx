import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-secondary">Эвакуатор Краснодар</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <a href="tel:+79890251414" className="text-xl font-semibold text-primary hover:text-primary/80 transition-colors">
            +7 (989) 025-14-14
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Эвакуация авто <span className="text-primary">24/7</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Быстрая подача от 15 минут. Работаем круглосуточно без выходных по всему городу
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 hover-scale">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать эвакуатор
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 hover-scale">
                  Узнать цену
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/26e8ca01-0621-4d0c-8099-596545095012/files/9308cfc8-e3dc-4c89-b348-64c52642644a.jpg" 
                alt="Эвакуатор" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12">Эвакуируем любые виды транспорта</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Car", title: "Легковые автомобили", desc: "Седаны, хэтчбеки, универсалы" },
              { icon: "Truck", title: "Грузовые авто", desc: "Микроавтобусы, фургоны, грузовики" },
              { icon: "Bike", title: "Мототехника", desc: "Мотоциклы, квадроциклы, скутеры" }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow hover-scale">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Прозрачные цены</h2>
          <p className="text-center text-muted-foreground mb-12">Без скрытых комиссий и доплат</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "По городу", price: "от 2 500 ₽", features: ["До 10 км", "Подача за 15-20 мин", "Легковые авто"] },
              { title: "За город", price: "от 50 ₽/км", features: ["От 10 км", "Безопасная перевозка", "Все виды авто"], popular: true },
              { title: "Грузовой", price: "от 4 000 ₽", features: ["До 5 тонн", "Специальная техника", "Опытные водители"] }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative hover:shadow-xl transition-shadow ${plan.popular ? 'border-primary border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold text-center mb-2">{plan.title}</h3>
                  <div className="text-4xl font-bold text-center text-primary mb-6">{plan.price}</div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 hover-scale" variant={plan.popular ? "default" : "outline"}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Почему выбирают нас</h2>
          <p className="text-center text-muted-foreground mb-12">Надежность и качество с 2015 года</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "Clock", title: "24/7", desc: "Работаем круглосуточно" },
              { icon: "Zap", title: "Быстро", desc: "Подача от 15 минут" },
              { icon: "Shield", title: "Надежно", desc: "Застрахованы все риски" },
              { icon: "Users", title: "Опыт", desc: "Более 5000 выездов" }
            ].map((adv, idx) => (
              <div key={idx} className="text-center hover-scale">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={adv.icon as any} size={36} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{adv.title}</h3>
                <p className="text-muted-foreground">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Алексей М.", text: "Быстро приехали, аккуратно погрузили машину. Водитель вежливый, цена как договаривались. Рекомендую!", rating: 5 },
              { name: "Ирина К.", text: "Вызывала ночью, приехали через 20 минут. Профессионалы своего дела, всё прошло отлично!", rating: 5 },
              { name: "Дмитрий П.", text: "Уже не первый раз пользуюсь их услугами. Всегда довожу машину в целости и сохранности. Спасибо!", rating: 5 }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
            <p className="text-center text-muted-foreground mb-12">Ответим на все вопросы и примем заказ</p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <a href="tel:+79890251414" className="text-primary hover:underline">+7 (989) 025-14-14</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@evacuator.ru" className="text-primary hover:underline">info@evacuator.ru</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Краснодар</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Круглосуточно, 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Оставьте заявку</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel" 
                        placeholder="Телефон" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Комментарий" 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full hover-scale">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={28} className="text-primary" />
              <span className="text-xl font-bold">Эвакуатор Краснодар</span>
            </div>
            <p className="text-sm">© 2024 Эвакуатор Краснодар. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" className="hover:text-primary transition-colors">
                <Icon name="Send" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}