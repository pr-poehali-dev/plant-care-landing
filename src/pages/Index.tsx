import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_HERO = "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/22a2263a-c980-45f9-9041-c10c31fd42a4.jpg";
const IMG_CARE = "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/ffc4e3ca-5122-46f9-bca1-615ded0ab0d3.jpg";
const IMG_FLATLAY = "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/ec789850-39d5-47ee-8ab1-bb336e79ff3b.jpg";
const IMG_SHELF = "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/39cf7c37-bb16-42d1-b9bb-59fb1012c069.jpg";

const modules = [
  { day: "День 1", icon: "Stethoscope", title: "Глубокая диагностика", desc: "Читаем растение как медкарту, находим причину проблем до того, как начинаем лечить" },
  { day: "День 2", icon: "Sparkles", title: "Спа-день", desc: "Полноценные процедуры для листьев, стебля и корней, а не просто протирание тряпочкой" },
  { day: "День 3", icon: "Sun", title: "Свет и полив", desc: "Когда нужен искусственный свет, от метода пальца до весового контроля воды" },
  { day: "День 4", icon: "Layers", title: "Грунт и пересадка", desc: "Собираем состав под конкретное растение, пересаживаем так, чтобы оно расцвело" },
  { day: "День 5", icon: "FlaskConical", title: "Удобрения", desc: "Вся правда про NPK и народные подкормки, что реально работает, а что маркетинг" },
  { day: "День 6", icon: "Bug", title: "Болезни и вредители", desc: "Опознать, вылечить, больше не впустить. Полный арсенал против напасти" },
  { day: "День 7", icon: "Leaf", title: "Размножение и закупка", desc: "Выращиваем новые растения из листочков бесплатно, плюс где брать выгодно и как реанимировать безнадёжные" },
];

const bonuses = [
  { icon: "FileText", title: "PDF с 7 чек-листами", desc: "Для печати и использования прямо у растений. Диагностика, уход, полив, пересадка и другие" },
  { icon: "Table", title: "Excel-журнал", desc: "7 листов с формулами для ведения дневника растений. Расписание полива, удобрений, заметки" },
  { icon: "BookOpen", title: "Справочник pH и света", desc: "Подробные данные по 27 популярным растениям, оптимальная кислотность почвы и освещение" },
];

const faqs = [
  {
    q: "Я спросил(а) у ИИ про своё растение, но оно всё равно вянет. Почему курс поможет?",
    a: "ИИ даёт общую информацию, но не видит ваше конкретное растение. Курс учит смотреть на растение своими глазами: читать его листья, корни, грунт. Это навык, который остаётся с вами навсегда.",
  },
  {
    q: "ChatGPT посоветовал мне один режим полива, а другой источник другой. Кому верить?",
    a: "ИИ усредняет информацию из интернета. Курс даёт конкретную методику, проверенную на практике. Вы получаете не «возможно, попробуйте», а чёткий алгоритм под ваш тип растения и ваш дом.",
  },
  {
    q: "Я уже смотрела ролики на YouTube, читала статьи. Что нового?",
    a: "Разрозненная информация не работает. Здесь всё собрано в 7-дневную последовательность: каждый день одна задача, результат виден сразу. Это не ещё одна статья, а практический курс с логикой.",
  },
  {
    q: "Подойдёт, если у меня совсем нет опыта?",
    a: "Да. Курс создан для тех, кто уже покупал растения, но они не приживались. Никаких сложных терминов, только текст с фотографиями и практика прямо сегодня.",
  },
  {
    q: "Сколько времени нужно в день?",
    a: "20–40 минут. Каждый день одна понятная задача с текстом и фото. Можно читать с телефона в любое удобное время.",
  },
  {
    q: "Как получить доступ к курсу?",
    a: "После оплаты на почту придёт письмо со ссылкой. Курс открывается в браузере, никаких приложений скачивать не нужно.",
  },
];

const problems = [
  "Покупаешь красивое растение, и через месяц оно вянет",
  "Не понимаешь, что с ним не так: то ли мало воды, то ли много",
  "Желтеют листья, появляются пятна, ищешь ответы в интернете и запутываешься",
  "Пересаживал(а) — и после этого стало только хуже",
  "Уже несколько погубленных, стыдно покупать новые",
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-plant-cream font-golos overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMG_HERO} alt="Зелёные растения" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, #1e3a2f f0 40%, #1e3a2f99 65%, transparent 100%)' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-plant-deep/95 via-plant-deep/65 to-transparent" />
          <div className="absolute inset-0 texture-grain" />
        </div>

        <div className="absolute top-10 right-16 w-28 h-28 rounded-full blur-2xl animate-float" style={{ background: 'rgba(90,158,120,0.15)' }} />
        <div className="absolute bottom-20 right-1/3 w-16 h-16 rounded-full blur-xl animate-float" style={{ background: 'rgba(184,115,51,0.12)', animationDelay: '2s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-sm font-golos mb-8 animate-fade-up backdrop-blur-sm" style={{ background: 'rgba(184,115,51,0.18)', borderColor: 'rgba(184,115,51,0.35)', color: '#ede4d3' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#b87333' }} />
            Онлайн-курс · 7 уроков · Доступ навсегда
          </div>

          <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-white leading-[0.95] mb-6 animate-fade-up-delay-1">
            не вянь,<br />
            <span className="italic" style={{ color: '#5a9e78' }}>красавчик!</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-xl mb-4 animate-fade-up-delay-2 font-golos" style={{ color: 'rgba(237,228,211,0.9)' }}>
            За 7 дней практики приведи свои растения в порядок и узнай, как ухаживать за ними дальше
          </p>

          <p className="text-base mb-10 animate-fade-up-delay-2" style={{ color: 'rgba(237,228,211,0.55)' }}>
            Для новичков и любителей, у которых уже есть растения, но они «не приживаются»
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <button className="group relative font-golos font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white" style={{ background: '#b87333' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#a0522d')}
              onMouseLeave={e => (e.currentTarget.style.background = '#b87333')}
            >
              <span className="flex items-center gap-2">
                Начать за 7 дней
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="border px-8 py-4 rounded-2xl transition-all duration-300 font-golos" style={{ color: 'rgba(237,228,211,0.8)', borderColor: 'rgba(237,228,211,0.25)' }}>
              Посмотреть программу ↓
            </button>
          </div>

          <div className="flex gap-10 mt-14 animate-fade-up-delay-3">
            {[
              { num: "7", label: "дней практики" },
              { num: "10", label: "модулей курса" },
              { num: "3", label: "бонуса в подарок" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-cormorant text-4xl font-bold" style={{ color: '#5a9e78' }}>{num}</div>
                <div className="text-sm mt-1" style={{ color: 'rgba(237,228,211,0.5)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 relative" style={{ background: '#f7f3ed' }}>
        <div className="absolute inset-0 leaf-bg" />
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-golos text-sm font-semibold uppercase tracking-widest" style={{ color: '#2e5e47' }}>Узнаёшь себя?</span>
              <h2 className="font-cormorant text-5xl md:text-6xl font-bold mt-3 mb-8 leading-tight" style={{ color: '#3b2a1a' }}>
                Растения вянут,<br /><span className="italic" style={{ color: '#a0522d' }}>а ты не знаешь почему</span>
              </h2>
              <div className="space-y-3">
                {problems.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(160,82,45,0.12)' }}>
                      <Icon name="X" size={12} className="" style={{ color: '#a0522d' } as React.CSSProperties} />
                    </span>
                    <p className="font-golos" style={{ color: '#3b2a1a' }}>{p}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg font-cormorant italic" style={{ color: 'rgba(59,42,26,0.5)' }}>
                Это не потому что у тебя «нет таланта» к растениям.<br />
                Просто тебя никто не научил правильно.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img src={IMG_FLATLAY} alt="Растения и уход" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,58,47,0.4) 0%, transparent 60%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#1e3a2f' }}>
        <div className="absolute inset-0 texture-grain opacity-40" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(90,158,120,0.08)' }} />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(184,115,51,0.06)' }} />

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-golos text-sm font-semibold uppercase tracking-widest" style={{ color: 'rgba(90,158,120,0.8)' }}>Решение</span>
              <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
                Методика<br /><span className="italic" style={{ color: '#5a9e78' }}>7-дневной</span><br />перезагрузки
              </h2>
              <p className="text-lg font-golos mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Каждый день одна конкретная задача. Никакой теории ради теории. Ты сразу работаешь с реальными растениями у себя дома.
              </p>
              <p className="text-lg font-golos leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Через неделю ты видишь результат: растения живые, ты понимаешь, что им нужно, и знаешь, как действовать дальше.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: "Clock", text: "20–40 мин. в день" },
                  { icon: "FileText", text: "Текст с фотографиями" },
                  { icon: "Infinity", text: "Доступ навсегда" },
                  { icon: "CheckSquare", text: "Практические задания" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(90,158,120,0.2)' }}>
                      <Icon name={icon} size={16} style={{ color: '#5a9e78' } as React.CSSProperties} />
                    </span>
                    <span className="font-golos text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMG_CARE} alt="Уход за растениями" className="w-full h-80 md:h-96 object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,58,47,0.7) 0%, transparent 60%)' }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl p-4 border" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.15)' }}>
                    <p className="text-white font-cormorant text-xl italic">"Наконец-то поняла, почему мой фикус постоянно сбрасывал листья"</p>
                    <p className="text-sm mt-1 font-golos" style={{ color: 'rgba(255,255,255,0.5)' }}>ученица курса</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 text-white rounded-2xl px-4 py-3 shadow-lg" style={{ background: '#b87333' }}>
                <div className="font-cormorant text-3xl font-bold">7</div>
                <div className="font-golos text-xs">дней</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="py-24 relative" style={{ background: '#f7f3ed' }}>
        <div className="absolute inset-0 leaf-bg opacity-40" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <span className="font-golos text-sm font-semibold uppercase tracking-widest" style={{ color: '#2e5e47' }}>Программа курса</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold mt-3" style={{ color: '#3b2a1a' }}>
              7 уроков, <span className="italic" style={{ color: '#2e5e47' }}>от диагностики</span><br />до размножения
            </h2>
          </div>

          <div className="space-y-2">
            {modules.map((m, i) => (
              <div key={i} className="flex items-center gap-5 rounded-2xl px-6 py-4 border transition-all duration-200 hover:shadow-md group" style={{ background: 'white', borderColor: '#ede4d3' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(46,94,71,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#ede4d3'; }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors" style={{ background: 'rgba(30,58,47,0.08)' }}>
                  <Icon name={m.icon} size={17} style={{ color: '#1e3a2f' } as React.CSSProperties} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3">
                    <span className="font-golos text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: '#2e5e47' }}>{m.day}</span>
                    <h3 className="font-cormorant text-lg font-bold truncate" style={{ color: '#3b2a1a' }}>{m.title}</h3>
                  </div>
                  <p className="font-golos text-sm leading-relaxed mt-0.5" style={{ color: 'rgba(59,42,26,0.6)' }}>{m.desc}</p>
                </div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-cormorant text-xs font-bold" style={{ background: '#ede4d3', color: '#2e5e47' }}>{i + 1}</div>
              </div>
            ))}
          </div>

          {/* Photo break */}
          <div className="mt-14 rounded-3xl overflow-hidden shadow-lg relative h-56">
            <img src={IMG_SHELF} alt="Растения на полке" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(30,58,47,0.6) 0%, transparent 60%)' }} />
            <div className="absolute left-8 top-1/2 -translate-y-1/2">
              <p className="font-cormorant text-3xl italic text-white">после 7 дней курса<br />ты видишь разницу</p>
            </div>
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#ede4d3' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-golos text-sm font-semibold uppercase tracking-widest" style={{ color: '#a0522d' }}>Бесплатно в подарок</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold mt-3" style={{ color: '#3b2a1a' }}>
              Три бонуса, которые<br /><span className="italic" style={{ color: '#a0522d' }}>останутся с тобой</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((b, i) => (
              <div key={i} className="relative bg-white rounded-3xl p-8 border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group" style={{ borderColor: '#ede4d3' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors" style={{ background: 'rgba(160,82,45,0.1)' }}>
                  <Icon name={b.icon} size={24} style={{ color: '#a0522d' } as React.CSSProperties} />
                </div>
                <h3 className="font-cormorant text-2xl font-bold mb-3" style={{ color: '#3b2a1a' }}>{b.title}</h3>
                <p className="font-golos text-sm leading-relaxed" style={{ color: 'rgba(59,42,26,0.65)' }}>{b.desc}</p>
                <div className="absolute top-4 right-4 text-white text-xs font-golos font-semibold px-3 py-1 rounded-full" style={{ background: '#a0522d' }}>
                  Бонус
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative" style={{ background: '#f7f3ed' }}>
        <div className="absolute inset-0 leaf-bg" />
        <div className="max-w-3xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <span className="font-golos text-sm font-semibold uppercase tracking-widest" style={{ color: '#2e5e47' }}>Вопросы и ответы</span>
            <h2 className="font-cormorant text-5xl font-bold mt-3" style={{ color: '#3b2a1a' }}>
              Часто спрашивают
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border rounded-2xl overflow-hidden transition-colors" style={{ borderColor: '#ede4d3' }}>
                <button
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-golos font-semibold" style={{ color: '#3b2a1a' }}>{f.q}</span>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${openFaq === i ? 'rotate-45' : ''}`}
                    style={{ background: openFaq === i ? '#2e5e47' : '#ede4d3' }}>
                    <Icon name="Plus" size={14} style={{ color: openFaq === i ? 'white' : '#2e5e47' } as React.CSSProperties} />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 font-golos leading-relaxed border-t pt-4 text-sm" style={{ color: 'rgba(59,42,26,0.7)', borderColor: '#ede4d3' }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden" style={{ background: '#1e3a2f' }}>
        <div className="absolute inset-0 texture-grain opacity-30" />
        <div className="absolute top-0 left-1/4 text-[180px] opacity-[0.04] select-none pointer-events-none leading-none">🌿</div>
        <div className="absolute bottom-0 right-1/4 text-[140px] opacity-[0.04] select-none pointer-events-none leading-none">🍃</div>
        <div className="absolute top-10 right-10 w-36 h-36 rounded-full blur-3xl animate-float" style={{ background: 'rgba(90,158,120,0.1)' }} />
        <div className="absolute bottom-10 left-10 w-28 h-28 rounded-full blur-2xl animate-float" style={{ background: 'rgba(184,115,51,0.08)', animationDelay: '3s' }} />

        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 border rounded-full px-5 py-2 text-sm font-golos mb-8" style={{ background: 'rgba(90,158,120,0.15)', borderColor: 'rgba(90,158,120,0.3)', color: '#5a9e78' }}>
            <Icon name="Leaf" size={14} />
            Старт сразу после оплаты
          </div>

          <h2 className="font-cormorant text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Пора перестать<br />
            <span className="italic" style={{ color: '#5a9e78' }}>терять растения</span>
          </h2>

          <p className="text-xl font-golos mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Один раз разобраться, и растения перестают погибать. Через 7 дней ты увидишь разницу.
          </p>

          <div className="inline-flex flex-col items-center rounded-3xl px-10 py-8 mb-8 border" style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.12)' }}>
            <div className="text-sm font-golos mb-1 line-through" style={{ color: 'rgba(255,255,255,0.35)' }}>2 490 ₽</div>
            <div className="font-cormorant text-6xl font-bold text-white mb-1">1 250 ₽</div>
            <div className="text-sm font-golos" style={{ color: '#5a9e78' }}>Курс + все 3 бонуса</div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              className="group w-full max-w-sm font-golos font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 text-white"
              style={{ background: '#b87333' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#a0522d')}
              onMouseLeave={e => (e.currentTarget.style.background = '#b87333')}
            >
              Купить курс
              <Icon name="ArrowRight" size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm font-golos flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <Icon name="Shield" size={14} />
              Оплата картой. Безопасно и быстро
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {["7 уроков текстом", "PDF-чек-листы", "Excel-журнал", "Справочник растений"].map((item) => (
              <div key={item} className="flex items-center gap-2 font-golos text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <Icon name="Check" size={14} style={{ color: '#5a9e78', flexShrink: 0 } as React.CSSProperties} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center" style={{ background: '#3b2a1a' }}>
        <p className="font-cormorant text-2xl italic mb-2" style={{ color: '#5a9e78' }}>не вянь, красавчик!</p>
        <p className="text-sm font-golos" style={{ color: 'rgba(255,255,255,0.25)' }}>Онлайн-курс по уходу за комнатными растениями</p>
      </footer>
    </div>
  );
}
