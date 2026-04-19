import { useState } from "react";
import Icon from "@/components/ui/icon";

/* ── Изображения ─────────────────────────────────────────── */
const IMG_HERO        = "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/22a2263a-c980-45f9-9041-c10c31fd42a4.jpg";
const IMG_CARE        = "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/ffc4e3ca-5122-46f9-bca1-615ded0ab0d3.jpg";
const IMG_FLATLAY     = "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/ec789850-39d5-47ee-8ab1-bb336e79ff3b.jpg";
const IMG_SHELF       = "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/39cf7c37-bb16-42d1-b9bb-59fb1012c069.jpg";
const IMG_BEFORE_AFTER= "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/fe71aa83-3071-4b4d-979f-2d17561c8fbf.jpg";
const IMG_MONSTERA    = "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/db327530-c5bf-405d-91d3-514e07d67309.jpg";
const IMG_SHELF2      = "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/1779a1d4-7609-4260-891f-d9d530709711.jpg";

/* ── Данные ──────────────────────────────────────────────── */
const modules = [
  { day: "День 1", icon: "Stethoscope", title: "Глубокая диагностика",    desc: "Читаем растение как медкарту, находим причину проблем до того, как начинаем лечить" },
  { day: "День 2", icon: "Sparkles",    title: "Спа-день",                 desc: "Полноценные процедуры для листьев, стебля и корней, а не просто протирание тряпочкой" },
  { day: "День 3", icon: "Sun",         title: "Свет и полив",             desc: "Когда нужен искусственный свет, от метода пальца до весового контроля воды" },
  { day: "День 4", icon: "Layers",      title: "Грунт и пересадка",        desc: "Собираем состав под конкретное растение, пересаживаем так, чтобы оно расцвело" },
  { day: "День 5", icon: "FlaskConical",title: "Удобрения",                desc: "Вся правда про NPK и народные подкормки, что реально работает, а что маркетинг" },
  { day: "День 6", icon: "Bug",         title: "Болезни и вредители",      desc: "Опознать, вылечить, больше не впустить. Полный арсенал против напасти" },
  { day: "День 7", icon: "Leaf",        title: "Размножение и закупка",    desc: "Выращиваем новые растения из листочков бесплатно, плюс где брать выгодно и как реанимировать безнадёжные" },
];

const bonuses = [
  { icon: "FileText", title: "PDF с 7 чек-листами",   desc: "Для печати и использования прямо у растений. Диагностика, уход, полив, пересадка и другие" },
  { icon: "Table",    title: "Excel-журнал",           desc: "7 листов с формулами для ведения дневника растений. Расписание полива, удобрений, заметки" },
  { icon: "BookOpen", title: "Справочник pH и света",  desc: "Подробные данные по 27 популярным растениям, оптимальная кислотность почвы и освещение" },
];

const reviews = [
  { name: "Марина, 41 год",    img: IMG_BEFORE_AFTER, label: "до и после",           text: "Три года убивала фикусы один за другим. После первого урока по диагностике наконец поняла причину. Фикус стоит уже 8 месяцев." },
  { name: "Ольга, 38 лет",    img: IMG_MONSTERA,     label: "монстера через месяц",  text: "Купила монстеру, она начала желтеть через две недели. Прошла курс, применила советы по грунту и свету. Теперь даёт лист каждый месяц." },
  { name: "Светлана, 46 лет", img: IMG_SHELF2,       label: "коллекция после курса", text: "Думала, у меня просто не те растения для квартиры. Оказалось, неправильно подбирала грунт. Теперь 12 здоровых горшков." },
  { name: "Татьяна, 52 года", img: IMG_FLATLAY,      label: "орхидея ожила",         text: "Спасла орхидею, которую уже собиралась выбросить. Урок про диагностику корней открыл глаза. Через три недели вышел новый цветонос." },
  { name: "Наталья, 35 лет",  img: IMG_CARE,         label: "результат за 7 дней",   text: "Смотрела ролики, читала статьи, спрашивала у ИИ. Всё равно не понимала. Здесь наконец-то всё по шагам. Растения перестали умирать." },
];

const faqs = [
  { q: "Я спросил(а) у ИИ про своё растение, но оно всё равно вянет. Почему курс поможет?",
    a: "ИИ даёт общую информацию, но не видит ваше конкретное растение. Курс учит смотреть на растение своими глазами: читать его листья, корни, грунт. Это навык, который остаётся с вами навсегда." },
  { q: "ChatGPT посоветовал один режим полива, другой источник другой. Кому верить?",
    a: "ИИ усредняет информацию из интернета. Курс даёт конкретную методику, проверенную на практике. Вы получаете не «возможно, попробуйте», а чёткий алгоритм под ваш тип растения и ваш дом." },
  { q: "Я уже смотрела ролики на YouTube, читала статьи. Что нового?",
    a: "Разрозненная информация не работает. Здесь всё собрано в 7-дневную последовательность: каждый день одна задача, результат виден сразу. Это не ещё одна статья, а практический курс с логикой." },
  { q: "Подойдёт, если у меня совсем нет опыта?",
    a: "Да. Курс создан для тех, кто уже покупал растения, но они не приживались. Никаких сложных терминов, только практика прямо сегодня." },
  { q: "Сколько времени нужно в день?",
    a: "20–40 минут. Каждый день одна понятная задача. Можно читать с телефона в любое удобное время." },
];

const problems = [
  "Покупаешь красивое растение, и через месяц оно вянет",
  "Не понимаешь, что с ним не так: то ли мало воды, то ли много",
  "Желтеют листья, появляются пятна, ищешь ответы в интернете и запутываешься",
  "Пересаживал(а) и после этого стало только хуже",
  "Уже несколько погубленных, стыдно покупать новые",
];

/* ── Константы цветов ────────────────────────────────────── */
const C = {
  ink:       "#1c2a22",
  forest:    "#243d2f",
  sage:      "#3d6654",
  fern:      "#5f8f72",
  mist:      "#a8c4b0",
  parchment: "#f8f4ee",
  linen:     "#f0eae0",
  sand:      "#e6ddd0",
  stone:     "#c8bfb0",
  gold:      "#b8893a",
  copper:    "#96622a",
  espresso:  "#2e1f10",
} as const;

/* ── Утилиты ─────────────────────────────────────────────── */
const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="font-golos text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: C.fern }}>
    {children}
  </span>
);

const Rule = () => (
  <span className="section-rule" />
);

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-golos overflow-x-hidden" style={{ backgroundColor: C.parchment }}>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
        {/* Фото */}
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="" className="w-full h-full object-cover object-center" />
          {/* Многослойный тёмный градиент — изумрудный, не просто чёрный */}
          <div className="absolute inset-0" style={{ background: `linear-gradient(110deg, ${C.ink}f0 0%, ${C.forest}cc 45%, ${C.forest}55 75%, transparent 100%)` }} />
          <div className="absolute inset-0 texture-grain" />
        </div>

        {/* Тонкая золотая линия сверху */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}60, transparent)` }} />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-20 pt-32 md:py-32">
          {/* Бейдж */}
          <div className="inline-flex items-center gap-2.5 mb-10 animate-fade-up"
            style={{ background: `${C.gold}22`, border: `1px solid ${C.gold}50`, borderRadius: 99, padding: '6px 18px' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.gold }} />
            <span className="font-golos text-xs tracking-widest uppercase" style={{ color: C.sand }}>Онлайн-курс · 7 уроков · Доступ навсегда</span>
          </div>

          {/* Заголовок */}
          <h1 className="font-cormorant font-bold leading-[0.92] mb-7 animate-fade-up-delay-1"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', color: '#fff' }}>
            не вянь,<br />
            <em style={{ color: C.mist, fontStyle: 'italic' }}>красавчик!</em>
          </h1>

          <p className="font-golos text-lg md:text-xl max-w-lg mb-3 animate-fade-up-delay-2 leading-relaxed"
            style={{ color: `${C.sand}e0` }}>
            За 7 дней практики приведи свои растения в порядок и узнай, как ухаживать за ними дальше
          </p>
          <p className="font-golos text-sm mb-12 animate-fade-up-delay-2"
            style={{ color: `${C.stone}99` }}>
            Для новичков и любителей, у которых есть растения, но они «не приживаются»
          </p>

          {/* Кнопки */}
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <button
              className="group font-golos font-semibold text-base px-8 py-3.5 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{ background: C.gold, color: '#fff', borderRadius: 10, letterSpacing: '0.02em',
                       boxShadow: `0 4px 24px ${C.gold}50` }}
              onMouseEnter={e => { e.currentTarget.style.background = C.copper; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.gold; }}
            >
              <span className="flex items-center gap-2">
                Начать за 7 дней
                <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              className="font-golos text-sm px-7 py-3.5 transition-all duration-300"
              style={{ border: `1px solid ${C.stone}55`, color: `${C.sand}cc`, borderRadius: 10 }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${C.mist}80`; e.currentTarget.style.color = C.sand; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = `${C.stone}55`; e.currentTarget.style.color = `${C.sand}cc`; }}
            >
              Посмотреть программу ↓
            </button>
          </div>

          {/* Статистика */}
          <div className="flex gap-10 mt-16 animate-fade-up-delay-3">
            {[
              { num: "7",  label: "дней практики" },
              { num: "3",  label: "бонуса в подарок" },
              { num: "5",  label: "отзывов учениц" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-cormorant font-bold" style={{ fontSize: '2.4rem', color: C.mist, lineHeight: 1 }}>{num}</div>
                <div className="font-golos text-xs mt-1" style={{ color: `${C.stone}80` }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Нижний fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${C.parchment})` }} />
      </section>

      {/* ════════════════════════════════════════
          PROBLEM
      ════════════════════════════════════════ */}
      <section className="py-28 relative" style={{ backgroundColor: C.parchment }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Текст */}
            <div>
              <Label>Узнаёшь себя?</Label>
              <Rule />
              <h2 className="font-cormorant font-bold leading-tight mb-10" style={{ fontSize: 'clamp(2.4rem,5vw,3.5rem)', color: C.espresso }}>
                Растения вянут,<br />
                <em style={{ color: C.copper }}>а ты не знаешь почему</em>
              </h2>

              <ul className="space-y-4 mb-10">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${C.copper}18`, border: `1px solid ${C.copper}30` }}>
                      <Icon name="Minus" size={10} style={{ color: C.copper } as React.CSSProperties} />
                    </span>
                    <span className="font-golos text-base leading-relaxed" style={{ color: C.espresso }}>{p}</span>
                  </li>
                ))}
              </ul>

              {/* Акцентная цитата */}
              <div className="relative pl-6" style={{ borderLeft: `2px solid ${C.gold}` }}>
                <p className="font-cormorant text-2xl md:text-3xl font-semibold italic leading-snug" style={{ color: C.sage }}>
                  Это не потому что у тебя «нет таланта» к растениям.
                </p>
                <p className="font-cormorant text-2xl md:text-3xl font-semibold italic leading-snug mt-1" style={{ color: C.espresso }}>
                  Просто тебя никто не научил правильно.
                </p>
              </div>
            </div>

            {/* Фото */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img src={IMG_FLATLAY} alt="" className="w-full h-full object-cover" />
              </div>
              {/* Декоративная рамка-сдвиг */}
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl -z-10"
                style={{ border: `1px solid ${C.gold}40`, borderRadius: 16 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SOLUTION
      ════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: C.forest }}>
        <div className="absolute inset-0 texture-grain opacity-50" />
        {/* Тонкие золотые линии */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}40, transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}30, transparent)` }} />

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Label style={{ color: `${C.mist}aa` } as React.CSSProperties}>Решение</Label>
              <Rule />
              <h2 className="font-cormorant font-bold text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.4rem,5vw,3.5rem)' }}>
                Методика<br />
                <em style={{ color: C.mist }}>7-дневной</em><br />
                перезагрузки
              </h2>
              <p className="font-golos text-base leading-relaxed mb-5" style={{ color: `${C.sand}cc` }}>
                Каждый день одна конкретная задача. Никакой теории ради теории. Ты сразу работаешь с реальными растениями у себя дома.
              </p>
              <p className="font-golos text-base leading-relaxed" style={{ color: `${C.sand}cc` }}>
                Через неделю ты видишь результат: растения живые, ты понимаешь, что им нужно, и знаешь, как действовать дальше.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                {[
                  { icon: "Clock",       text: "20–40 мин. в день" },
                  { icon: "Infinity",    text: "Доступ навсегда" },
                  { icon: "CheckSquare", text: "Практические задания" },
                  { icon: "Smartphone",  text: "Читай с телефона" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${C.mist}18`, border: `1px solid ${C.mist}25` }}>
                      <Icon name={icon} size={15} style={{ color: C.mist } as React.CSSProperties} />
                    </span>
                    <span className="font-golos text-sm" style={{ color: `${C.sand}bb` }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Фото с цитатой */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={IMG_CARE} alt="" className="w-full h-80 md:h-[420px] object-cover" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.ink}cc 0%, transparent 55%)` }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <p className="font-cormorant text-lg italic text-white leading-snug">
                      "Наконец-то поняла, почему мой фикус постоянно сбрасывал листья"
                    </p>
                    <p className="font-golos text-xs mt-1.5" style={{ color: `${C.mist}` }}>ученица курса</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 text-white rounded-xl px-4 py-2.5 shadow-xl"
                style={{ background: C.gold, border: `1px solid ${C.gold}` }}>
                <div className="font-cormorant text-3xl font-bold leading-none">7</div>
                <div className="font-golos text-[10px] uppercase tracking-widest mt-0.5" style={{ color: `${C.parchment}cc` }}>дней</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROGRAM
      ════════════════════════════════════════ */}
      <section className="py-28 relative" style={{ backgroundColor: C.linen }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <Label>Программа курса</Label>
            <Rule />
            <h2 className="font-cormorant font-bold leading-tight" style={{ fontSize: 'clamp(2.2rem,5vw,3.2rem)', color: C.espresso }}>
              7 уроков, <em style={{ color: C.sage }}>от диагностики</em><br />до размножения
            </h2>
          </div>

          <div className="space-y-2">
            {modules.map((m, i) => (
              <div key={i}
                className="flex items-center gap-5 px-6 py-4 rounded-xl transition-all duration-200 group cursor-default"
                style={{ background: C.parchment, border: `1px solid ${C.sand}` }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${C.fern}50`; e.currentTarget.style.boxShadow = `0 2px 16px ${C.ink}08`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.sand; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${C.forest}10` }}>
                  <Icon name={m.icon} size={16} style={{ color: C.forest } as React.CSSProperties} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-golos text-[11px] font-semibold uppercase tracking-wider shrink-0" style={{ color: C.fern }}>{m.day}</span>
                    <h3 className="font-cormorant text-lg font-bold truncate" style={{ color: C.espresso }}>{m.title}</h3>
                  </div>
                  <p className="font-golos text-sm leading-relaxed mt-0.5" style={{ color: `${C.espresso}80` }}>{m.desc}</p>
                </div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-cormorant text-xs font-bold"
                  style={{ background: C.sand, color: C.sage }}>{i + 1}</div>
              </div>
            ))}
          </div>

          {/* Фото-баннер */}
          <div className="mt-14 rounded-2xl overflow-hidden relative h-52 shadow-xl">
            <img src={IMG_SHELF} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${C.forest}cc 0%, ${C.forest}40 55%, transparent 100%)` }} />
            <div className="absolute left-8 top-1/2 -translate-y-1/2">
              <p className="font-cormorant text-2xl italic text-white leading-snug">
                после 7 дней курса<br />ты видишь разницу
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          BONUSES
      ════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: C.parchment }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <Label>Бесплатно в подарок</Label>
            <Rule />
            <h2 className="font-cormorant font-bold leading-tight" style={{ fontSize: 'clamp(2.2rem,5vw,3.2rem)', color: C.espresso }}>
              Три бонуса, которые<br />
              <em style={{ color: C.copper }}>останутся с тобой</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((b, i) => (
              <div key={i}
                className="relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 group"
                style={{ background: '#fff', border: `1px solid ${C.sand}`, boxShadow: `0 1px 3px ${C.ink}06` }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 40px ${C.ink}12`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 1px 3px ${C.ink}06`; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${C.copper}12` }}>
                  <Icon name={b.icon} size={22} style={{ color: C.copper } as React.CSSProperties} />
                </div>
                <h3 className="font-cormorant text-2xl font-bold mb-2" style={{ color: C.espresso }}>{b.title}</h3>
                <p className="font-golos text-sm leading-relaxed" style={{ color: `${C.espresso}70` }}>{b.desc}</p>

                {/* Золотой уголок */}
                <div className="absolute top-5 right-5 font-golos text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{ background: `${C.gold}15`, color: C.gold, border: `1px solid ${C.gold}30` }}>
                  бонус
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          REVIEWS
      ════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        <div className="absolute inset-0 texture-grain opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}35, transparent)` }} />

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <Label style={{ color: `${C.mist}99` } as React.CSSProperties}>Отзывы учениц</Label>
            <Rule />
            <h2 className="font-cormorant font-bold text-white leading-tight" style={{ fontSize: 'clamp(2.2rem,5vw,3.2rem)' }}>
              Они уже <em style={{ color: C.mist }}>спасли свои растения</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i}
                className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5"
                style={{ background: `${C.forest}55`, border: `1px solid ${C.sage}30`,
                         backdropFilter: 'blur(8px)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${C.mist}40`; e.currentTarget.style.boxShadow = `0 12px 40px ${C.ink}40`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${C.sage}30`; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Фото */}
                <div className="relative h-44 overflow-hidden">
                  <img src={r.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.ink}88 0%, transparent 60%)` }} />
                  <div className="absolute bottom-3 left-3">
                    <span className="font-golos text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ background: `${C.parchment}15`, color: C.mist, backdropFilter: 'blur(8px)', border: `1px solid ${C.mist}30` }}>
                      {r.label}
                    </span>
                  </div>
                </div>

                {/* Текст */}
                <div className="p-5 flex-1 flex flex-col gap-3">
                  {/* Звёзды */}
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <span key={s} style={{ color: C.gold, fontSize: 13 }}>★</span>
                    ))}
                  </div>
                  <p className="font-golos text-sm leading-relaxed flex-1 italic" style={{ color: `${C.sand}d0` }}>
                    «{r.text}»
                  </p>
                  <p className="font-golos text-xs font-semibold" style={{ color: C.mist }}>{r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <section className="py-28 relative" style={{ backgroundColor: C.linen }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-14">
            <Label>Вопросы и ответы</Label>
            <Rule />
            <h2 className="font-cormorant font-bold" style={{ fontSize: 'clamp(2.2rem,5vw,3rem)', color: C.espresso }}>
              Часто спрашивают
            </h2>
          </div>

          <div className="space-y-2">
            {faqs.map((f, i) => (
              <div key={i}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{ background: C.parchment, border: `1px solid ${openFaq === i ? C.fern + '50' : C.sand}` }}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-golos font-semibold text-sm leading-relaxed" style={{ color: C.espresso }}>{f.q}</span>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${openFaq === i ? 'rotate-45' : ''}`}
                    style={{ background: openFaq === i ? C.sage : C.sand }}>
                    <Icon name="Plus" size={13} style={{ color: openFaq === i ? '#fff' : C.sage } as React.CSSProperties} />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-3 font-golos text-sm leading-relaxed"
                    style={{ color: `${C.espresso}75`, borderTop: `1px solid ${C.sand}` }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: C.forest }}>
        <div className="absolute inset-0 texture-grain opacity-40" />
        {/* Декоративные круги */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full animate-float pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.mist}0c 0%, transparent 70%)` }} />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${C.gold}08 0%, transparent 70%)` }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}40, transparent)` }} />

        <div className="max-w-2xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 mb-10 rounded-full px-4 py-1.5"
            style={{ background: `${C.mist}18`, border: `1px solid ${C.mist}30` }}>
            <Icon name="Leaf" size={13} style={{ color: C.mist } as React.CSSProperties} />
            <span className="font-golos text-xs uppercase tracking-widest" style={{ color: C.mist }}>Старт сразу после оплаты</span>
          </div>

          <h2 className="font-cormorant font-bold text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 5rem)' }}>
            Пора перестать<br />
            <em style={{ color: C.mist }}>терять растения</em>
          </h2>

          <p className="font-golos text-base mb-12 max-w-md mx-auto leading-relaxed"
            style={{ color: `${C.sand}bb` }}>
            Один раз разобраться, и растения перестают погибать. Через 7 дней ты увидишь разницу.
          </p>

          {/* Ценовой блок */}
          <div className="inline-flex flex-col items-center rounded-2xl px-10 py-8 mb-10"
            style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${C.gold}30`, backdropFilter: 'blur(16px)' }}>
            <div className="font-golos text-sm mb-1 line-through" style={{ color: `${C.stone}60` }}>2 490 ₽</div>
            <div className="font-cormorant font-bold text-white" style={{ fontSize: '4rem', lineHeight: 1 }}>1 250 ₽</div>
            <div className="font-golos text-sm mt-2" style={{ color: C.mist }}>Курс + все 3 бонуса</div>
          </div>

          {/* Кнопка */}
          <div className="flex flex-col items-center gap-4">
            <button
              className="group w-full max-w-xs font-golos font-bold text-lg flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{ background: C.gold, color: '#fff', borderRadius: 12, padding: '16px 40px',
                       boxShadow: `0 6px 32px ${C.gold}45` }}
              onMouseEnter={e => { e.currentTarget.style.background = C.copper; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.gold; }}
            >
              Купить курс
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-1.5 font-golos text-xs" style={{ color: `${C.stone}60` }}>
              <Icon name="Shield" size={12} />
              Оплата картой. Безопасно и быстро
            </div>
          </div>

          {/* Включено */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["PDF-чек-листы", "Excel-журнал", "Справочник растений"].map(item => (
              <div key={item} className="flex items-center gap-1.5 font-golos text-xs" style={{ color: `${C.sand}66` }}>
                <Icon name="Check" size={12} style={{ color: `${C.mist}99` } as React.CSSProperties} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="py-10 text-center relative" style={{ backgroundColor: C.espresso }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${C.gold}30, transparent)` }} />
        <p className="font-cormorant text-2xl italic mb-1" style={{ color: C.mist }}>не вянь, красавчик!</p>
        <p className="font-golos text-xs" style={{ color: `${C.stone}50` }}>Онлайн-курс по уходу за комнатными растениями</p>
      </footer>
    </div>
  );
}
