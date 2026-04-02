import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/5bc08220-2e4f-45b0-abb4-ce47a6e49500/files/3d5a51fa-a2d5-4a5b-8475-10d4045e561b.jpg";

const NAV_LINKS = [
  { href: "#about", label: "О группе" },
  { href: "#leaders", label: "Ведущие" },
  { href: "#for-whom", label: "Для кого" },
  { href: "#price", label: "Стоимость" },
  { href: "#contacts", label: "Контакты" },
];

const ABOUT_CARDS = [
  {
    icon: "Shield",
    title: "Безопасное пространство",
    text: "Можно снять маски, никому не соответствовать, не подбирать идеальные слова — а пробовать говорить о важном.",
  },
  {
    icon: "Flame",
    title: "Живой, настоящий процесс",
    text: "Можно смеяться и плакать, быть живыми и настоящими, говорить о сложном опыте, о боли и о радости.",
  },
  {
    icon: "Leaf",
    title: "Право на конфликт и паузу",
    text: "Можно поспорить и даже поругаться, но остаться вместе — разными, с интересом к этой разности и друг к другу.",
  },
];

const FOR_WHOM_ITEMS = [
  { icon: "Heart", text: "Хотите встретиться с собой и встретиться с другими" },
  { icon: "MessageCircle", text: "Ищете пространство, где не нужно подбирать идеальные слова" },
  { icon: "Users", text: "Хотите попробовать новое в общении, не теряя поддержки" },
  { icon: "Sparkles", text: "Цените искренность и не боитесь сложных чувств" },
  { icon: "Wind", text: "Хотите встретиться с тем, что происходит в вашей жизни прямо сейчас" },
  { icon: "BookOpen", text: "Нужны часы для учёты — 35 часов, эквивалент годичной группы" },
];

const SCHEDULE = [
  { day: "25 июня", label: "День 1", active: true },
  { day: "26 июня", label: "День 2", active: true },
  { day: "27 июня", label: "День 3", active: true },
  { day: "28 июня", label: "Выходной", active: false },
  { day: "29 июня", label: "День 4", active: true },
  { day: "30 июня", label: "День 5", active: true },
];

function useInView(threshold = 0.12) {
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
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="absolute inset-0 watercolor-bg" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
          <p className="text-sage-500 font-golos text-sm uppercase tracking-[0.25em] mb-4">
            25–30 июня · Новосибирск
          </p>
          <h1 className="font-cormorant text-6xl md:text-8xl font-light text-foreground leading-tight mb-6">
            Летняя<br /><em className="text-primary not-italic">палитра</em>
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Летняя динамическая терапевтическая группа — место, где можно принести любую тему, которая вас волнует
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

      {/* INTRO */}
      <div className="py-16 px-6 bg-white/50">
        <div className="max-w-3xl mx-auto">
          <div>
            <p className="font-cormorant text-4xl font-light text-foreground mb-5 leading-snug">
              Эта группа обо всём,<br />что случается в нашей жизни
            </p>
            <p className="text-foreground/65 text-base leading-relaxed mb-4">
              Вы можете приносить любую тему, которая вас волнует.
            </p>
            <p className="text-foreground/65 text-base leading-relaxed mb-6">
              Мы умеем создавать атмосферу группы, в которой многое возможно. Возможно встретиться с собой и встретиться с другими.
            </p>
            <div className="flex flex-wrap gap-5 text-sm text-sage-500 font-golos">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={15} />
                <span>25–30 июня</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={15} />
                <span>11:00–18:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={15} />
                <span>Новосибирск</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="BookOpen" size={15} />
                <span>35 часов</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sage-500 text-sm uppercase tracking-widest mb-3">О группе</p>
            <h2 className="font-cormorant text-5xl font-light text-foreground mb-6">Мы ценим искренность</h2>
            <div className="leaf-divider w-24 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {ABOUT_CARDS.map((item) => (
              <div key={item.title} className="bg-white/70 rounded-2xl p-6 border border-sage-100">
                <div className="w-10 h-10 bg-mint-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name={item.icon} fallback="Leaf" size={20} className="text-primary" />
                </div>
                <h3 className="font-cormorant text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-mint-50 rounded-3xl p-8 md:p-10 border border-mint-100">
            <p className="font-cormorant text-2xl font-light text-foreground mb-4 leading-relaxed">
              «Мы не боимся сложных чувств и поддерживаем право на конфликт, молчание, паузу, ошибку»
            </p>
            <p className="text-foreground/60 text-base leading-relaxed mb-4">
              С нами можно пробовать новое в общении, не теряя поддержки и оставаясь в безопасном пространстве.
              Мы любим группы, нам нравится быть участниками и ведущими, опираясь на профессиональный опыт,
              а ещё — на живой интерес к групповому процессу и друг к другу как коллегам, со-ведущим.
            </p>
            <p className="text-foreground/60 text-base leading-relaxed">
              Если вы ищете пространство, где можно снять маски, никому не соответствовать,
              не подбирать идеальные слова, а пробовать говорить о важном — <strong className="text-foreground/80">возможно, это оно.</strong>
            </p>
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
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Юлия Воропаева",
                phone: "+7 913 746-59-08",
                photo: "https://cdn.poehali.dev/projects/5bc08220-2e4f-45b0-abb4-ce47a6e49500/bucket/399332c8-1cdb-4e8c-aca8-c240da3808bf.jpeg",
                photoPos: "80% 10%",
                creds: [
                  "Аккредитованный гештальт-терапевт",
                  "Семейный системный терапевт",
                  "Супервизор",
                  "Ведущий групп",
                ],
              },
              {
                name: "Наталья Сухорукова",
                phone: "+7 905 957-70-62",
                photo: "https://cdn.poehali.dev/projects/5bc08220-2e4f-45b0-abb4-ce47a6e49500/bucket/399332c8-1cdb-4e8c-aca8-c240da3808bf.jpeg",
                photoPos: "18% 10%",
                creds: [
                  "Аккредитованный гештальт-терапевт",
                  "Ведущий групп",
                  "Семейный системный терапевт",
                ],
              },
            ].map((leader) => (
              <div key={leader.name} className="bg-white rounded-2xl p-8 border border-sage-100 shadow-sm">
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-mint-200">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: leader.photoPos }}
                    />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-2xl font-medium">{leader.name}</h3>
                    <a href={`tel:${leader.phone.replace(/\s/g, "")}`} className="text-sage-500 text-sm hover:text-primary transition-colors">
                      {leader.phone}
                    </a>
                  </div>
                </div>
                <ul className="space-y-2">
                  {leader.creds.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-foreground/60">
                      <Icon name="Check" size={14} className="text-primary flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sage-500 text-sm uppercase tracking-widest mb-3">Стоимость и формат</p>
            <h2 className="font-cormorant text-5xl font-light text-foreground">Участие в группе</h2>
            <div className="leaf-divider w-24 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Price card */}
            <div className="bg-white rounded-3xl border border-sage-100 shadow-sm p-8 flex flex-col">
              <div className="flex-1">
                <p className="text-foreground/50 text-sm uppercase tracking-wider mb-2">Стоимость</p>
                <div className="font-cormorant text-6xl font-light text-primary mb-1">25 000 ₽</div>
                <p className="text-foreground/50 text-sm mb-7">за полный курс — 5 дней, 35 часов</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Эквивалент годичной группы",
                    "Часы идут в учётную запись",
                    "Собеседование перед группой обязательно",
                    "Предоплата для подтверждения места",
                    "Пропуски оплачиваются",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground/65">
                      <Icon name="Check" size={15} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contacts" className="block text-center bg-primary text-primary-foreground py-3.5 rounded-xl text-base font-medium hover:bg-sage-600 transition-all hover:scale-[1.02]">
                Записаться
              </a>
            </div>

            {/* Schedule card */}
            <div className="bg-white rounded-3xl border border-sage-100 shadow-sm p-8">
              <p className="text-foreground/50 text-sm uppercase tracking-wider mb-2">Расписание</p>
              <p className="font-cormorant text-2xl font-light text-foreground mb-1">11:00 — 18:00</p>
              <p className="text-foreground/50 text-sm mb-7">ежедневно, г. Новосибирск</p>
              <div className="grid grid-cols-3 gap-3">
                {SCHEDULE.map((s) => (
                  <div key={s.day} className={`rounded-xl p-3 text-center border ${s.active ? "bg-mint-50 border-mint-200" : "bg-gray-50 border-gray-100"}`}>
                    <p className={`text-xs font-medium mb-0.5 ${s.active ? "text-primary" : "text-foreground/30"}`}>{s.label}</p>
                    <p className={`text-sm ${s.active ? "text-foreground/70" : "text-foreground/25"}`}>{s.day}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-sage-50 rounded-xl border border-sage-100">
                <p className="text-sm text-foreground/60 leading-relaxed">
                  <strong className="text-foreground/80">5 дней с одним выходным</strong> — 35 часов интенсивной работы, эквивалентных годичной группе
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACTS */}
      <Section id="contacts" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sage-500 text-sm uppercase tracking-widest mb-3">Контакты</p>
          <h2 className="font-cormorant text-5xl font-light text-foreground mb-4">Запись в группу</h2>
          <div className="leaf-divider w-24 mx-auto mb-10" />

          <div className="bg-white rounded-3xl border border-sage-100 shadow-sm p-8 md:p-10">
            <p className="text-foreground/60 text-base mb-8 leading-relaxed">
              Перед участием проводится обязательное собеседование. Напишите или позвоните — мы ответим на вопросы и договоримся об удобном времени
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {[
                { name: "Юлия Воропаева", phone: "+7 913 746-59-08", href: "tel:+79137465908" },
                { name: "Наталья Сухорукова", phone: "+7 905 957-70-62", href: "tel:+79059577062" },
              ].map((c) => (
                <a key={c.name} href={c.href} className="flex items-center gap-4 p-4 rounded-2xl border border-sage-100 hover:border-primary hover:bg-mint-50 transition-all group">
                  <div className="w-10 h-10 bg-mint-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Icon name="Phone" size={18} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground/80">{c.name}</p>
                    <p className="text-primary text-sm">{c.phone}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="border-t border-sage-100 pt-6">
              <p className="text-foreground/40 text-xs text-center flex items-center justify-center gap-2">
                <Icon name="MapPin" size={13} />
                г. Новосибирск · 25–30 июня 2025 · 11:00–18:00
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-sage-100 text-center">
        <p className="font-cormorant text-lg text-sage-500 mb-1">🌿 Летняя палитра</p>
        <p className="text-foreground/40 text-xs">25–30 июня · Новосибирск · 11:00–18:00</p>
      </footer>
    </div>
  );
}