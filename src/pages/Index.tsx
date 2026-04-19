import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/22a2263a-c980-45f9-9041-c10c31fd42a4.jpg";
const CARE_IMG = "https://cdn.poehali.dev/projects/1f312611-88f0-4b4f-9a03-d7e5a41285bc/files/ffc4e3ca-5122-46f9-bca1-615ded0ab0d3.jpg";

const modules = [
  { day: "День 1", icon: "Stethoscope", title: "Глубокая диагностика", desc: "Читаем растение как медкарту — находим причину проблем до того, как начинаем лечить" },
  { day: "День 2", icon: "Sparkles", title: "Спа-день", desc: "Полноценные процедуры для листьев, стебля и корней — не просто протирание тряпочкой" },
  { day: "День 3", icon: "Sun", title: "Искусственный свет", desc: "Когда без него растения не выживут — выбираем, устанавливаем, настраиваем" },
  { day: "День 4", icon: "Droplets", title: "Полив", desc: "От метода пальца до весового контроля — поливаем так, чтобы не залить и не засушить" },
  { day: "День 5", icon: "Layers", title: "Идеальный грунт", desc: "Собираем состав под конкретное растение — pH, дренаж, структура" },
  { day: "День 6", icon: "Shovel", title: "Пересадка без стресса", desc: "Правильные горшки, сроки, техника — пересадка, после которой растение расцветает" },
  { day: "День 7", icon: "FlaskConical", title: "Удобрения", desc: "Вся правда про NPK и народные подкормки — что реально работает, а что маркетинг" },
  { day: "Модуль 8", icon: "Bug", title: "Болезни и вредители", desc: "Опознать, вылечить, больше не впустить — полный арсенал против напасти" },
  { day: "Модуль 9", icon: "Leaf", title: "Размножение", desc: "Выращиваем новые растения из листочков бесплатно — черенки, детки, деление" },
  { day: "Модуль 10", icon: "ShoppingBag", title: "Где брать выгодно", desc: "Лучшие источники + реанимация безнадёжных — приводим в чувство «погибающие» экземпляры" },
];

const bonuses = [
  { icon: "FileText", title: "PDF с 7 чек-листами", desc: "Для печати и использования прямо у растений — диагностика, уход, полив, пересадка и другие" },
  { icon: "Table", title: "Excel-журнал", desc: "7 листов с формулами для ведения дневника растений — расписание полива, удобрений, заметки" },
  { icon: "BookOpen", title: "Справочник pH и света", desc: "Подробные данные по 27 популярным растениям — оптимальная кислотность почвы и освещение" },
];

const faqs = [
  { q: "Подойдёт, если у меня нет опыта?", a: "Да, курс создан именно для тех, кто уже покупал растения, но они «не приживались». Никаких сложных терминов — только практика." },
  { q: "Сколько времени нужно в день?", a: "20–40 минут. Каждый день — одна понятная задача. Можно совмещать с обычным ритмом жизни." },
  { q: "Что если я пропущу день?", a: "Всё в записи — доступ без ограничений по времени. Возвращайтесь в любой день и продолжайте с того места, где остановились." },
  { q: "Какой результат гарантирован?", a: "Через 7 дней практики ваши растения придут в порядок, а вы будете точно знать, что и когда делать дальше. Никакой теории ради теории." },
  { q: "Нужно ли покупать какие-то инструменты?", a: "Нет специальных закупок. Большинство советов работают с тем, что уже есть дома. Если что-то потребуется — будут бюджетные альтернативы." },
  { q: "Как получить доступ к курсу?", a: "После оплаты на почту придёт письмо со ссылкой. Курс открывается в браузере — никаких приложений скачивать не нужно." },
];

const problems = [
  "Покупаешь красивое растение — и через месяц оно вянет",
  "Не понимаешь, что с ним не так: то ли мало воды, то ли много",
  "Желтеют листья, появляются пятна — ищешь ответы в интернете и запутываешься",
  "Пересаживал(а) — и после этого стало только хуже",
  "Уже несколько погубленных — стыдно покупать новые",
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-plant-cream font-golos overflow-x-hidden">

      {/* ——— HERO ——— */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Зелёные растения" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-plant-deep/90 via-plant-deep/70 to-plant-deep/20" />
          <div className="absolute inset-0 texture-grain" />
        </div>

        <div className="absolute top-12 right-12 w-32 h-32 rounded-full bg-plant-light/20 blur-2xl animate-float" />
        <div className="absolute bottom-24 right-1/3 w-20 h-20 rounded-full bg-plant-ochre/15 blur-xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 bg-plant-ochre/20 border border-plant-ochre/40 text-plant-sand rounded-full px-4 py-1.5 text-sm font-golos mb-8 animate-fade-up backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-plant-ochre animate-pulse" />
            Онлайн-курс · 10 модулей · Доступ навсегда
          </div>

          <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-white leading-[0.95] mb-6 animate-fade-up-delay-1">
            не вянь,<br />
            <span className="italic text-plant-light">красавчик!</span>
          </h1>

          <p className="text-plant-sand/90 text-xl md:text-2xl max-w-xl mb-4 animate-fade-up-delay-2 font-golos">
            За 7 дней практики приведи свои растения в порядок и узнай, как ухаживать за ними дальше
          </p>

          <p className="text-plant-sand/60 text-base mb-10 animate-fade-up-delay-2">
            Для новичков и любителей, у которых уже есть растения, но они «не приживаются»
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <button className="group relative bg-plant-ochre hover:bg-plant-terracotta text-white font-golos font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-plant-ochre/30">
              <span className="flex items-center gap-2">
                Начать за 7 дней
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="text-plant-sand/80 hover:text-white border border-plant-sand/30 hover:border-plant-sand/60 px-8 py-4 rounded-2xl transition-all duration-300 font-golos">
              Посмотреть программу ↓
            </button>
          </div>

          <div className="flex gap-8 mt-14 animate-fade-up-delay-3">
            {[
              { num: "7", label: "дней практики" },
              { num: "10", label: "модулей курса" },
              { num: "3", label: "бонуса в подарок" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-cormorant text-4xl font-bold text-plant-light">{num}</div>
                <div className="text-plant-sand/60 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— PROBLEM ——— */}
      <section className="py-24 bg-plant-cream relative">
        <div className="absolute inset-0 leaf-bg" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-plant-mid font-golos text-sm font-semibold uppercase tracking-widest">Узнаёшь себя?</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-plant-bark mt-3 leading-tight">
              Растения вянут, <br /><span className="italic text-plant-terracotta">а ты не знаешь почему</span>
            </h2>
          </div>

          <div className="grid gap-4 max-w-2xl mx-auto">
            {problems.map((p, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/70 backdrop-blur-sm border border-plant-sand rounded-2xl p-5 hover:border-plant-mid/40 hover:bg-white transition-all duration-300 group">
                <span className="w-8 h-8 rounded-full bg-plant-terracotta/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-plant-terracotta/25 transition-colors">
                  <Icon name="X" size={14} className="text-plant-terracotta" />
                </span>
                <p className="text-plant-bark font-golos">{p}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-plant-bark/60 text-lg font-cormorant italic">
              Это не потому что у тебя «нет таланта» к растениям.<br />
              Просто тебя никто не научил правильно.
            </p>
          </div>
        </div>
      </section>

      {/* ——— SOLUTION ——— */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2d5a27 0%, #3d6e32 50%, #2d5a27 100%)' }}>
        <div className="absolute inset-0 texture-grain opacity-50" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-plant-light/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-plant-ochre/10 blur-3xl" />

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-plant-light/80 font-golos text-sm font-semibold uppercase tracking-widest">Решение</span>
              <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
                Методика <br /><span className="italic text-plant-light">7-дневной</span> <br />перезагрузки
              </h2>
              <p className="text-white/75 text-lg font-golos mb-6 leading-relaxed">
                Каждый день — одна конкретная задача. Никакой теории ради теории. Ты сразу работаешь с реальными растениями у себя дома.
              </p>
              <p className="text-white/75 text-lg font-golos leading-relaxed">
                Через неделю ты видишь результат — растения живые, ты понимаешь, что им нужно, и знаешь, как действовать дальше.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: "Clock", text: "20–40 мин. в день" },
                  { icon: "Play", text: "Уроки в видеоформате" },
                  { icon: "Infinity", text: "Доступ навсегда" },
                  { icon: "MessageCircle", text: "Практические задания" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-white/80">
                    <span className="w-8 h-8 rounded-lg bg-plant-light/20 flex items-center justify-center shrink-0">
                      <Icon name={icon} size={16} className="text-plant-light" />
                    </span>
                    <span className="font-golos text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={CARE_IMG} alt="Уход за растениями" className="w-full h-80 md:h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-plant-deep/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <p className="text-white font-cormorant text-xl italic">"Наконец-то поняла, почему мой фикус постоянно сбрасывал листья"</p>
                    <p className="text-white/60 text-sm mt-1 font-golos">— ученица курса</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-plant-ochre text-white rounded-2xl px-4 py-3 shadow-lg">
                <div className="font-cormorant text-3xl font-bold">7</div>
                <div className="font-golos text-xs">дней</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— PROGRAM ——— */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 leaf-bg opacity-50" />
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-plant-mid font-golos text-sm font-semibold uppercase tracking-widest">Программа курса</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-plant-bark mt-3">
              10 модулей — <span className="italic text-plant-mid">от диагностики</span><br />до размножения
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {modules.map((m, i) => (
              <div key={i} className="group relative bg-plant-cream border border-plant-sand rounded-2xl p-6 hover:border-plant-mid/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-plant-deep/10 group-hover:bg-plant-deep/20 flex items-center justify-center shrink-0 transition-colors">
                    <Icon name={m.icon} size={20} className="text-plant-deep" />
                  </div>
                  <div>
                    <div className="font-golos text-xs text-plant-mid font-semibold uppercase tracking-wider mb-1">{m.day}</div>
                    <h3 className="font-cormorant text-xl font-bold text-plant-bark mb-2">{m.title}</h3>
                    <p className="text-plant-bark/65 text-sm font-golos leading-relaxed">{m.desc}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-plant-sand/50 flex items-center justify-center group-hover:bg-plant-mid/20 transition-colors">
                  <span className="font-cormorant text-xs font-bold text-plant-mid">{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— BONUSES ——— */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #f5f0e8 0%, #e8dcc8 100%)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-plant-terracotta font-golos text-sm font-semibold uppercase tracking-widest">Бесплатно в подарок</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-plant-bark mt-3">
              Три бонуса, которые<br /><span className="italic text-plant-terracotta">останутся с тобой</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((b, i) => (
              <div key={i} className="relative bg-white rounded-3xl p-8 border border-plant-sand shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-2xl bg-plant-terracotta/10 group-hover:bg-plant-terracotta/20 flex items-center justify-center mb-6 transition-colors">
                  <Icon name={b.icon} size={24} className="text-plant-terracotta" />
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-plant-bark mb-3">{b.title}</h3>
                <p className="text-plant-bark/65 font-golos text-sm leading-relaxed">{b.desc}</p>
                <div className="absolute top-4 right-4 bg-plant-terracotta text-white text-xs font-golos font-semibold px-3 py-1 rounded-full">
                  Бонус
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className="py-24 bg-plant-cream relative">
        <div className="absolute inset-0 leaf-bg" />
        <div className="max-w-3xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-plant-mid font-golos text-sm font-semibold uppercase tracking-widest">Вопросы и ответы</span>
            <h2 className="font-cormorant text-5xl font-bold text-plant-bark mt-3">
              Часто спрашивают
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-plant-sand rounded-2xl overflow-hidden hover:border-plant-mid/40 transition-colors">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-golos font-semibold text-plant-bark group-hover:text-plant-deep transition-colors">{f.q}</span>
                  <span className={`w-8 h-8 rounded-full bg-plant-sand flex items-center justify-center shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45 bg-plant-mid' : ''}`}>
                    <Icon name="Plus" size={16} className={openFaq === i ? 'text-white' : 'text-plant-mid'} />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-plant-bark/70 font-golos leading-relaxed border-t border-plant-sand/50 pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2d5a27 0%, #4a7c3f 60%, #2d5a27 100%)' }}>
        <div className="absolute inset-0 texture-grain" />
        <div className="absolute top-0 left-1/4 text-[200px] opacity-5 select-none pointer-events-none leading-none">🌿</div>
        <div className="absolute bottom-0 right-1/4 text-[160px] opacity-5 select-none pointer-events-none leading-none">🍃</div>
        <div className="absolute top-12 right-12 w-40 h-40 rounded-full bg-plant-light/10 blur-3xl animate-float" />
        <div className="absolute bottom-12 left-12 w-32 h-32 rounded-full bg-plant-ochre/10 blur-2xl animate-float" style={{ animationDelay: '3s' }} />

        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-plant-light/20 border border-plant-light/30 text-plant-light rounded-full px-5 py-2 text-sm font-golos mb-8">
            <Icon name="Leaf" size={14} />
            Старт сразу после оплаты
          </div>

          <h2 className="font-cormorant text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Пора перестать<br />
            <span className="italic text-plant-light">терять растения</span>
          </h2>

          <p className="text-white/70 text-xl font-golos mb-10 max-w-xl mx-auto leading-relaxed">
            Один раз разобраться — и растения перестают погибать. Через 7 дней ты увидишь разницу.
          </p>

          <div className="inline-flex flex-col items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl px-10 py-8 mb-8">
            <div className="text-white/50 text-sm font-golos mb-1 line-through">4 990 ₽</div>
            <div className="font-cormorant text-6xl font-bold text-white mb-1">2 490 ₽</div>
            <div className="text-plant-light text-sm font-golos">Курс + все 3 бонуса</div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button className="group w-full max-w-sm bg-plant-ochre hover:bg-plant-terracotta text-white font-golos font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-plant-ochre/30 flex items-center justify-center gap-3">
              Купить курс
              <Icon name="ArrowRight" size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-white/40 text-sm font-golos flex items-center gap-2">
              <Icon name="Shield" size={14} />
              Оплата картой — безопасно и быстро
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {["10 видеомодулей", "PDF-чек-листы", "Excel-журнал", "Справочник растений"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/70 font-golos text-sm">
                <Icon name="Check" size={14} className="text-plant-light shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— FOOTER ——— */}
      <footer className="bg-plant-bark py-10 text-center">
        <p className="font-cormorant text-2xl italic text-plant-light mb-2">не вянь, красавчик!</p>
        <p className="text-white/30 text-sm font-golos">Онлайн-курс по уходу за комнатными растениями</p>
      </footer>
    </div>
  );
}