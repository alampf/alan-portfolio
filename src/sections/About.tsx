import { FaCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa6';

const highlights = [
  {
    icon: FaCode,
    title: 'Código limpio',
    description:
      'Escribo código sostenible y escalable preparado para el futuro.',
  },
  {
    icon: FaRocket,
    title: 'Rendimiento',
    description:
      'Optimizar el rendimiento técnico para garantizar experiencias de usuario fluidas e instantáneas.',
  },
  {
    icon: FaUsers,
    title: 'Colaboración',
    description:
      'Trabajar de manera colaborativa en equipos de desarrollo para transformar conceptos en soluciones reales.',
  },
  {
    icon: FaLightbulb,
    title: 'Innovación',
    description:
      'Comprometido con el aprendizaje continuo y adopción de últimas tendencias tecnológicas. ',
  },
];

export default function About() {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                Sobre mí
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
              Modelando el futuro digital,{' '}
              <span className='font-serif italic font-normal text-white'>
                componente a componente.
              </span>
            </h2>
            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                Soy un desarrollador de software enfocado en la creación de
                productos digitales que mezclan la innovación y alto
                rendimiento. Mi trayectoria comenzó por la curiosidad de
                comprender la arquitectura web, lo que hoy se ha consolidado un
                dominio sólido de tecnologías frontend modernas y desarrollo
                multiplataforma.
              </p>
              <p>
                Durante mi trayectoria como desarrollador he trabajado con
                Angular y TypeScript, desarrollando interfaces web dinámicas,
                hasta complejas aplicaciones web institucionales. Mi objetivo
                actualmente es expandir mi ecosistema de aprendizaje hacia el
                desarrollo web y móvil, equilibrando la rigurosidad técnica con
                atención minuciosa a la interfaz de usuario (UI) y experiencia
                de usuario (UX).
              </p>
              <p>
                Siempre estoy en constante evolución, me mantengo actualizado al
                día explorando el nuevo ecosistema tecnológico y sumando valor a
                la comunidad de desarrolladores locales.
              </p>
            </div>
            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium italic text-foreground'>
                "Mi misión es crear productos digitales que destaquen por su
                usabilidad, fiabilidad y rigor técnico: soluciones intuitivas
                que los usuarios disfruten utilizar y arquitecturas limpias que
                los equipos de desarrollo puedan escalar con facilidad."
              </p>
            </div>
          </div>
          {/* Right Column Highlights */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className='glass p-6 rounded-2xl animate-fade-in'
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                  <item.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                <p className='text-sm text-muted-foreground'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
