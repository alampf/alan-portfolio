import AnimatedBorderButton from '@/components/AnimatedBorderButton';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    title: 'SIIUTTLAX',
    description:
      'Plataforma web integral desarrollada para la Universidad Tecnológica de Tlaxcala, orientada a optimizar la gestión administrativa, docente y de la comunidad estudiantil mediante la centralización de procesos y servicios institucionales.',
    image: `${baseUrl}projects/siiuttlax.webp`,
    tags: [
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'Django',
      'REST API',
      'PostgreSQL',
    ],
    link: '#',
    github: 'https://github.com/alampf/Frontend-SIIUT',
  },
  {
    title: 'Sistema Punto de Venta',
    description:
      'Sistema de punto de venta orientado a pequeños y medianos negocios, diseñado para centralizar la gestión de productos, inventario, proveedores, compras, ventas, caja y reportes.',
    image: `${baseUrl}projects/pos_demo.webp`,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Django', 'PostgreSQL'],
    link: 'https://pos-demo-license.onrender.com/',
    github: 'https://github.com/alampf/pos-demo-license.git',
  },
  {
    title: 'Sabix Delivery',
    description:
      'Aplicación móvil de delivery que permite a los clientes explorar establecimientos, gestionar pedidos y dar seguimiento al proceso de entrega mediante una experiencia sencilla e intuitiva.',
    image: `${baseUrl}projects/sabix_delivery.webp`,
    tags: ['Flutter', 'Dart', 'PostgreSQL', 'FastAPI'],
    link: '#',
    github: '#',
  },
  {
    title: 'HiveBot',
    description:
      'Sistema IoT para la automatización y monitoreo de la alimentación de abejas, integrado con una aplicación móvil que permite supervisar comederos y consultar información en tiempo real.',
    image: `${baseUrl}projects/hivebot.webp`,
    tags: ['Flutter', 'Dart', 'Firebase', 'HTML5', 'CSS3', 'Python', 'Django'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      {/* Bg Glows */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            Trabajo destacado
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Proyectos que{' '}
            <span className='font-serif italic font-normal text-white'>
              marcan la diferencia.
            </span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            Una selección de mi trabajo reciente: aplicaciones web complejas y
            herramientas innovadoras que resuelven problemas reales.
          </p>
        </div>
        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className='relative overflow-hidden aspect-video'>
                <img
                  loading='lazy'
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='aboslute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60' />
                {/* Overlay Links */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a
                    href={project.link}
                    className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                  >
                    <ArrowUpRight className='w-5 h-5' />
                  </a>
                  <a
                    target='_blank'
                    href={project.github}
                    className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                  >
                    <FaGithub className='w-5 h-5' />
                  </a>
                </div>
              </div>
              {/* Content Projects */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
                    {project.title}
                  </h3>
                  <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all' />
                </div>
                <p className='text-muted-foreground text-sm'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All CTA */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <AnimatedBorderButton>
            Ver todos los proyectos
            <ArrowUpRight className='w-5 h-5' />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
}
