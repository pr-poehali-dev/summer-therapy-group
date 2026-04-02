import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/5bc08220-2e4f-45b0-abb4-ce47a6e49500/files/3d5a51fa-a2d5-4a5b-8475-10d4045e561b.jpg";
const POSTER = "https://cdn.poehali.dev/projects/5bc08220-2e4f-45b0-abb4-ce47a6e49500/bucket/805ffb82-8b59-48ae-931c-eb622bd79bc5.jpeg";

const NAV_LINKS = [
  { href: "#about", label: "О группе" },
  { href: "#leaders", label: "Ведущие" },
  { href: "#for-whom", label: "Для кого" },
  { href: "#price", label: "Стоимость" },
  { href: "#contacts", label: "Контакты" },
];

const FOR_WHOM_ITEMS = [
  { icon: "Heart", text: "Вы ищете поддержку и хотите быть услышанными" },
  { icon: "Brain", text: "Хотите лучше понимать себя и свои реакции" },
  { icon: "Users", text: "Вам важен контакт с живыми людьми в безопасной среде" },
  { icon: "Sparkles", text: "Хотите изменить что-то в своей жизни, но не знаете с чего начать" },
  { icon: "Wind", text: "Чувствуете тревогу, усталость или ощущение застревания" },
  { icon: "Leaf", text: "Просто хотите замедлиться и побыть с собой летом" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <section id={id} ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </section>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-golos overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sage-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="font-cormorant text-xl font-medium text-sage-600 tracking-wide">
            🌿 Летняя палитра
          </a>
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-foreground/70 hover:text-sage-600 transition-colors font-golos">
                {l.label}
              </a>
            ))}
            <a href="#contacts" className="bg-primary text-primary-foreground text-sm px-5 py-2 rounded-full hover:bg-sage-600 transition-colors">
              Записаться
            </a>
          </div>
          <button className="md:hidden text-sage-600" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-sage-100 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-foreground/70 hover:text-sage-600 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contacts" onClick={() => setMenuOpen(false)} className="bg-primary text-primary-foreground text-sm px-5 py-2 rounded-full text-center">
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 watercolor-bg" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
          <p className="text-sage-500 font-golos text-sm uppercase tracking-[0.25em] mb-4">
            25–30 июня · Новосибирск
          </p>
          <h1 className="font-cormorant text-6xl md:text-8xl font-light text-foreground leading-tight mb-6">
            Летняя<br /><em className="text-primary not-italic">палитра</em>
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Летняя динамическая психотерапевтическая группа — место, где можно принести любую тему, которая вас волнует
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#about" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-base hover:bg-sage-600 transition-all hover:scale-105">
              Узнать больше
            </a>
            <a href="#contacts" className="border border-primary text-primary px-8 py-3.5 rounded-full text-base hover:bg-primary hover:text-primary-foreground transition-all">
              Записаться
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={28} className="text-sage-400" />
        </div>
      </div>

      {/* POSTER STRIP */}
      <div className="py-16 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <img
              src={POSTER}
              alt="Летняя палитра"
              className="w-64 md:w-80 rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div>
            <p className="font-cormorant text-4xl font-light text-foreground mb-4 leading-snug">
              Эта группа обо всём,<br />что случается в жизни
            </p>
            <p className="text-foreground/60 text-base leading-relaxed mb-6">
              Вы можете принести любую тему — радость и тревогу, отношения и потери, вопросы о себе и о будущем.
              В группе нет правильных тем. Есть только ваш живой опыт и безопасное пространство для его исследования.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-sage-500 font-golos">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                <span>25–30 июня</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Новосибирск</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} />
                <span>Малая группа</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sage-500 text-sm uppercase tracking-widest mb-3">О группе</p>
          <h2 className="font-cormorant text-5xl font-light text-foreground mb-8">Что такое динамическая группа?</h2>
          <div className="leaf-divider w-24 mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: "Shield",
                title: "Безопасное пространство",
                text: "Группа работает по принципам конфиденциальности и взаимного уважения. Всё, что здесь звучит, остаётся внутри.",
              },
              {
                icon: "Zap",
                title: "Живой процесс",
                text: "Динамическая группа — это живой контакт людей. Именно здесь, в отношениях с другими, происходят самые глубокие изменения.",
              },
              {
                icon: "Leaf",
                title: "Летний формат",
                text: "Пять встреч, каждая — новая тема, новый уровень глубины. Компактно, интенсивно, с заботой о каждом участнике.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/70 rounded-2xl p-6 border border-sage-100">
                <div className="w-10 h-10 bg-mint-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name={item.icon} fallback="Leaf" size={20} className="text-primary" />
                </div>
                <h3 className="font-cormorant text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* LEADERS */}
      <Section id="leaders" className="py-20 px-6 bg-sage-50/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sage-500 text-sm uppercase tracking-widest mb-3">Ведущие</p>
            <h2 className="font-cormorant text-5xl font-light text-foreground">Кто проведёт группу</h2>
            <div className="leaf-divider w-24 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Сухорукова Наталья",
                role: "Психотерапевт, ведущая группы",
                desc: "Опыт в индивидуальной и групповой терапии. Работает с тревогой, отношениями, самопониманием. Создаёт пространство, в котором можно быть собой.",
              },
              {
                name: "Воропаева Юлия",
                role: "Психотерапевт, ведущая группы",
                desc: "Специализируется на групповой динамике и телесно-ориентированных подходах. Помогает участникам обнаружить новые ресурсы через контакт с группой.",
              },
            ].map((leader) => (
              <div key={leader.name} className="bg-white rounded-2xl p-8 border border-sage-100 shadow-sm flex gap-6 items-start">
                <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl font-medium mb-1">{leader.name}</h3>
                  <p className="text-sage-500 text-sm mb-3">{leader.role}</p>
                  <p className="text-foreground/60 text-sm leading-relaxed">{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FOR WHOM */}
      <Section id="for-whom" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sage-500 text-sm uppercase tracking-widest mb-3">Для кого</p>
            <h2 className="font-cormorant text-5xl font-light text-foreground">Группа подойдёт, если…</h2>
            <div className="leaf-divider w-24 mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {FOR_WHOM_ITEMS.map((item) => (
              <div key={item.text} className="flex items-start gap-4 bg-white/70 rounded-2xl p-5 border border-sage-100">
                <div className="w-9 h-9 bg-mint-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name={item.icon} fallback="Heart" size={16} className="text-primary" />
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PRICE */}
      <Section id="price" className="py-20 px-6 bg-sage-50/40">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sage-500 text-sm uppercase tracking-widest mb-3">Стоимость</p>
          <h2 className="font-cormorant text-5xl font-light text-foreground mb-4">Участие в группе</h2>
          <div className="leaf-divider w-24 mx-auto mb-12" />

          <div className="bg-white rounded-3xl border border-sage-100 shadow-sm p-10 mb-6">
            <div className="font-cormorant text-7xl font-light text-primary mb-2">—</div>
            <p className="text-foreground/50 text-sm mb-6">Стоимость уточняется — напишите нам</p>
            <div className="space-y-3 text-left max-w-xs mx-auto mb-8">
              {[
                "5 групповых встреч",
                "Опытные ведущие",
                "Малая группа (до 10 человек)",
                "г. Новосибирск, 25–30 июня",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm text-foreground/70">
                  <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <a href="#contacts" className="inline-block bg-primary text-primary-foreground px-10 py-3.5 rounded-full text-base hover:bg-sage-600 transition-all hover:scale-105">
              Записаться
            </a>
          </div>
          <p className="text-foreground/40 text-xs">Количество мест ограничено</p>
        </div>
      </Section>

      {/* CONTACTS */}
      <Section id="contacts" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sage-500 text-sm uppercase tracking-widest mb-3">Контакты</p>
          <h2 className="font-cormorant text-5xl font-light text-foreground mb-4">Запишитесь в группу</h2>
          <div className="leaf-divider w-24 mx-auto mb-10" />

          <div className="bg-white rounded-3xl border border-sage-100 shadow-sm p-10">
            <p className="text-foreground/60 text-base mb-8 leading-relaxed">
              Оставьте заявку и мы свяжемся с вами, ответим на вопросы и расскажем подробнее о группе
            </p>

            <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm text-foreground/60 mb-1.5 block">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Как вас зовут?"
                  className="w-full border border-sage-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary bg-cream/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-foreground/60 mb-1.5 block">Телефон или Telegram</label>
                <input
                  type="text"
                  placeholder="+7 или @username"
                  className="w-full border border-sage-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary bg-cream/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-foreground/60 mb-1.5 block">Вопрос или комментарий (необязательно)</label>
                <textarea
                  rows={3}
                  placeholder="Что хотите спросить или уточнить?"
                  className="w-full border border-sage-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary bg-cream/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl text-base font-medium hover:bg-sage-600 transition-all hover:scale-[1.01]"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-sage-100 text-center">
        <p className="font-cormorant text-lg text-sage-500 mb-1">🌿 Летняя палитра</p>
        <p className="text-foreground/40 text-xs">25–30 июня · Новосибирск</p>
      </footer>
    </div>
  );
}