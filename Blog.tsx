import React, { useState } from 'react';
import { Container } from '@/src/components/ui/Container';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import blogImgRealEstate from '@/src/assets/images/lawcrest_blog_real_estate_1791473791752.jpg';
import blogImgRealEstate600 from '@/src/assets/images/lawcrest_blog_real_estate-600.jpg';
import blogImgCorporate from '@/src/assets/images/lawcrest_blog_corporate_1791473820154.jpg';
import blogImgCorporate600 from '@/src/assets/images/lawcrest_blog_corporate-600.jpg';
import blogImgContracts from '@/src/assets/images/lawcrest_blog_contracts_1791473845675.jpg';
import blogImgContracts600 from '@/src/assets/images/lawcrest_blog_contracts-600.jpg';
import { X, ArrowRight, Clock, Calendar, Bookmark } from 'lucide-react';

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  image: string;
  image600: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'adquisicion-inmobiliaria-punta-cana',
    category: 'Derecho Inmobiliario',
    date: 'Octubre 2026',
    readTime: '5 min de lectura',
    title: 'Claves jurídicas para la adquisición segura de inmuebles en Punta Cana',
    excerpt:
      'Aspectos esenciales de debida diligencia registral, verificación de cargas y formalidades notariales indispensables antes de suscribir promesas de compraventa en República Dominicana.',
    keyTakeaways: [
      'Certificación de estado jurídico del inmueble emitida por el Registro de Títulos.',
      'Verificación del cumplimiento de cargas impositivas ante la DGII.',
      'Revisión minuciosa de cláusulas de penalidad y plazos de entrega en proyectos en desarrollo.',
    ],
    content: [
      'La inversión inmobiliaria en la zona turística y residencial de Bávaro y Punta Cana continúa posicionándose como uno de los destinos más atractivos de la región del Caribe. No obstante, garantizar la solidez jurídica de cada operación requiere una investigación legal previa rigurosa.',
      'El proceso de debida diligencia legal inmobiliaria no se limita a constatar la existencia física del inmueble. Implica comprobar la titularidad legítima en el Registro de Títulos competente, la inexistencia de gravámenes, hipotecas o litigios en curso, así como la correspondencia exacta entre la designación catastral y el plano aprobado.',
      'Asimismo, para compradores extranjeros e inversionistas institucionales, es indispensable estructurar de forma adecuada el régimen fiscal aplicable, aprovechando los incentivos previstos por la normativa dominicana cuando aplique, y asegurando contratos redactados con equilibrio y salvaguardas claras.',
    ],
    image: blogImgRealEstate,
    image600: blogImgRealEstate600,
  },
  {
    id: 'inversion-extranjera-sociedades-rd',
    category: 'Derecho Corporativo',
    date: 'Septiembre 2026',
    readTime: '6 min de lectura',
    title: 'Estructuración societaria para inversionistas extranjeros en República Dominicana',
    excerpt:
      'Ventajas y consideraciones estratégicas para constituir sociedades de responsabilidad limitada (SRL) o sociedades anónimas simplificadas (SAS) al operar en el país.',
    keyTakeaways: [
      'Igualdad de derechos y garantías para inversionistas extranjeros según la Ley 16-95.',
      'Elección estratégica entre SRL y SAS según la estructura de gobierno corporativo.',
      'Cumplimiento continuo en materia de beneficiario final y registro mercantil.',
    ],
    content: [
      'El marco normativo de la República Dominicana consagra el principio de no discriminación, garantizando a los inversionistas extranjeros los mismos derechos y deberes que a los nacionales para la realización de actividades comerciales y la adquisición de activos.',
      'La elección del vehículo societario adecuado representa el primer paso para proteger el patrimonio y facilitar la gobernanza de la empresa. Las Sociedades de Responsabilidad Limitada (SRL) ofrecen simplicidad operativa y protección patrimonial idónea para negocios familiares y proyectos medianos, mientras que las Sociedades Anónimas Simplificadas (SAS) otorgan mayor flexibilidad estatutaria para asociaciones con múltiples inversionistas.',
      'En Lawcrest Legal Group asesoramos en la constitución ágil de entidades comerciales, redacción de pactos de accionistas y cumplimiento normativo integral ante las autoridades locales.',
    ],
    image: blogImgCorporate,
    image600: blogImgCorporate600,
  },
  {
    id: 'debida-diligencia-contratos-comerciales',
    category: 'Contratos & Estrategia',
    date: 'Septiembre 2026',
    readTime: '4 min de lectura',
    title: 'Mitigación de riesgos en contratos comerciales y acuerdos de desarrollo',
    excerpt:
      'Cómo diseñar contratos preventivos que anticipen escenarios de conflicto, definan mecanismos de resolución de disputas y resguarden el flujo de inversiones.',
    keyTakeaways: [
      'Definición precisa de hitos de cumplimiento y garantías de ejecución.',
      'Inclusión de cláusulas de fuerza mayor adaptadas a la realidad del mercado.',
      'Mecanismos ágiles de mediación y arbitraje para resolución efectiva de disputas.',
    ],
    content: [
      'Un contrato bien diseñado no debe redactarse pensando únicamente en la concreción del negocio, sino previendo con claridad los mecanismos de solución ante imprevistos o incumplimientos.',
      'En los acuerdos vinculados al desarrollo de proyectos, contrataciones de obra y alianzas estratégicas, la ambigüedad en los plazos, penalidades o condiciones resolutorias suele ser el detonante de litigios prolongados. La prevención legal permite ahorrar recursos y preservar las relaciones comerciales.',
      'Acompañamos a nuestros clientes en la redacción, análisis y negociación de instrumentos contractuales blindados, velando por que cada acuerdo refleje con exactitud la voluntad de las partes bajo estricto apego a la ley dominicana.',
    ],
    image: blogImgContracts,
    image600: blogImgContracts600,
  },
];

export const Blog: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const whatsappHref = WHATSAPP_CONFIG.getUrl();

  return (
    <section
      id="blog"
      aria-label="Artículos y Actualidad Jurídica - Lawcrest Legal Group"
      className="relative w-full bg-[#FFFFFF] text-[#062446] py-20 sm:py-24 lg:py-28 border-b border-[#062446]/8 scroll-mt-20 overflow-hidden"
    >
      <Container size="default">
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="w-5 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
            <span className="font-sans font-semibold text-xs tracking-[0.24em] text-[#173C68] uppercase">
              ACTUALIDAD JURÍDICA & CRITERIOS
            </span>
          </div>

          <h2 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl lg:text-[44px] leading-[1.16] tracking-tight mb-4 [text-wrap:balance]">
            Análisis y perspectivas legales para decisiones informadas
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed font-normal">
            Compartimos criterios jurídicos sobre el entorno inmobiliario, corporativo y de inversión en República Dominicana.
          </p>
        </div>

        {/* CUADRÍCULA DE ARTÍCULOS (Sin marcos decorativos, fotos limpias de alta resolución) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-[#F7F7F5] border border-[#062446]/10 flex flex-col justify-between group hover:border-[#C89A32]/60 transition-colors duration-200 shadow-2xs hover:shadow-xs"
            >
              <div>
                {/* Imagen del artículo: limpia y sin marcos */}
                <div className="relative overflow-hidden aspect-[16/9] w-full bg-[#031A39]">
                  <img
                    src={post.image}
                    srcSet={`${post.image600} 600w, ${post.image} 1200w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 bg-[#062446]/90 text-[10px] font-sans font-semibold tracking-widest text-[#D8B65A] uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Contenido del artículo */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-[11px] font-sans text-[#062446]/60 mb-3 select-none">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C89A32]" />
                      {post.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C89A32]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#062446] tracking-tight mb-3 group-hover:text-[#C89A32] transition-colors duration-200 leading-snug">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#062446]/75 leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Botón de lectura */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => setActiveArticle(post)}
                  className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-wider text-[#062446] uppercase group-hover:text-[#C89A32] transition-colors duration-200 cursor-pointer"
                >
                  <span>Leer artículo</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* MODAL LECTOR DE ARTÍCULO COMPLETO */}
        {activeArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#031A39]/80 backdrop-blur-xs overflow-y-auto"
            onClick={() => setActiveArticle(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-[#FFFFFF] text-[#062446] p-6 sm:p-10 lg:p-12 shadow-2xl my-8 max-h-[90vh] overflow-y-auto border border-[#C89A32]/40"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cierre */}
              <button
                onClick={() => setActiveArticle(null)}
                aria-label="Cerrar artículo"
                className="absolute top-5 right-5 p-2 text-[#062446]/70 hover:text-[#062446] hover:bg-[#F7F7F5] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Encabezado del artículo */}
              <div className="mb-6 border-b border-[#062446]/10 pb-6">
                <div className="flex items-center gap-3 text-xs font-sans text-[#C89A32] font-semibold tracking-wider uppercase mb-3">
                  <span>{activeArticle.category}</span>
                  <span>·</span>
                  <span className="text-[#062446]/60 font-normal">{activeArticle.date}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#062446] font-medium tracking-tight leading-tight mb-4">
                  {activeArticle.title}
                </h2>

                <p className="font-sans text-sm sm:text-base text-[#062446]/80 leading-relaxed font-normal italic">
                  {activeArticle.excerpt}
                </p>
              </div>

              {/* Imagen del artículo en el modal */}
              <div className="relative overflow-hidden aspect-[16/9] w-full mb-8 bg-[#031A39]">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Puntos clave / Checklist */}
              <div className="p-5 sm:p-6 bg-[#F7F7F5] border-l-2 border-l-[#C89A32] mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Bookmark className="w-4 h-4 text-[#C89A32]" />
                  <span className="font-sans font-semibold text-xs tracking-wider uppercase text-[#062446]">
                    Aspectos Clave a Considerar
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm font-sans text-[#062446]/80">
                  {activeArticle.keyTakeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C89A32] font-bold leading-none mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cuerpo del artículo */}
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#062446]/85 leading-relaxed mb-8">
                {activeArticle.content.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              {/* Pie del modal con llamado a la acción directo */}
              <div className="pt-6 border-t border-[#062446]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#F7F7F5] p-5">
                <div>
                  <span className="block font-serif text-base text-[#062446] font-medium">
                    ¿Desea asesoría legal sobre este tema?
                  </span>
                  <span className="block font-sans text-xs text-[#062446]/60">
                    Lawcrest Legal Group · Bávaro · Punta Cana
                  </span>
                </div>
                <a
                  href={whatsappHref}
                  target={whatsappHref.startsWith('http') ? '_blank' : '_self'}
                  rel={whatsappHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="
                    inline-flex items-center justify-center font-sans font-semibold text-xs
                    tracking-wider uppercase px-6 py-3 bg-[#062446] text-white hover:bg-[#031A39]
                    border border-[#C89A32] transition-colors cursor-pointer text-center
                  "
                >
                  Consultar sobre este caso
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
