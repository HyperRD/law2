import React, { useState, useEffect } from 'react';
import { Container } from '@/src/components/ui/Container';
import { Logo } from './Logo';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import { Menu, X } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio', id: 'inicio' },
  { label: 'Servicios', href: '#servicios', id: 'servicios' },
  { label: 'Empresas e Inversionistas', href: '#empresas-inversionistas', id: 'empresas-inversionistas' },
  { label: 'La Firma', href: '#la-firma', id: 'la-firma' },
  { label: 'Testimonios', href: '#testimonios', id: 'testimonios' },
  { label: 'Blog', href: '#blog', id: 'blog' },
  { label: 'Contacto', href: '#contacto', id: 'contacto' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>('inicio');

  // Detect scroll state with hysteresis
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle link click & close mobile menu
  const handleNavClick = (id: string, href: string) => {
    setActiveItem(id);
    setMobileMenuOpen(false);

    // Smooth navigation anchor handling
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappHref = WHATSAPP_CONFIG.getUrl();

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? 'h-[72px] bg-[#FFFFFF]/95 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(6,36,70,0.06)] border-b border-[#062446]/8'
            : 'h-[84px] sm:h-[88px] bg-[#FFFFFF] border-b border-[#062446]/5'
        }
      `}
    >
      <Container size="default" className="h-full flex items-center justify-between">
        {/* ÁREA IZQUIERDA: Logo Lawcrest Legal Group */}
        <div className="flex items-center shrink-0 pr-4">
          <Logo
            variant="dark"
            onClick={() => handleNavClick('inicio', '#inicio')}
          />
        </div>

        {/* ÁREA CENTRO: Menú Principal Desktop / Laptop */}
        <nav
          className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 2xl:gap-8 h-full"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id, item.href);
                }}
                className={`
                  group relative py-2 font-sans font-medium text-xs lg:text-[13px] xl:text-[14px]
                  tracking-normal whitespace-nowrap transition-colors duration-200 select-none
                  ${isActive ? 'text-[#C89A32]' : 'text-[#062446] hover:text-[#C89A32]'}
                `}
              >
                <span>{item.label}</span>

                {/* Indicador de página activa o hover sutil con dorado #C89A32 */}
                <span
                  className={`
                    absolute bottom-0 left-0 w-full h-[2px] bg-[#C89A32] transition-transform duration-200 ease-out origin-left
                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 opacity-80'}
                  `}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        {/* ÁREA DERECHA: Botón CTA Desktop / Laptop */}
        <div className="hidden lg:flex items-center pl-4 shrink-0">
          <a
            href={whatsappHref}
            target={whatsappHref.startsWith('http') ? '_blank' : '_self'}
            rel={whatsappHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`
              relative inline-flex items-center justify-center font-sans font-medium
              text-xs xl:text-[13px] tracking-wider uppercase whitespace-nowrap
              px-5 xl:px-6 py-2.5 min-h-[42px] xl:min-h-[44px]
              rounded-[2px] text-[#FFFFFF] bg-[#062446]
              border border-[#C89A32]/60 hover:border-[#D8B65A]
              hover:bg-[#031A39] active:bg-[#031A39]
              transition-all duration-200 ease-out cursor-pointer
              shadow-xs hover:shadow-sm focus-visible:ring-2 focus-visible:ring-[#C89A32]
            `}
          >
            <span>Solicitar consulta</span>
          </a>
        </div>

        {/* BOTÓN HAMBURGUESA: Mobile / Tablet (< lg) */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 -mr-2 text-[#062446] hover:text-[#C89A32] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89A32] rounded-[2px] transition-colors duration-200 cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.75]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.75]" />
            )}
          </button>
        </div>
      </Container>

      {/* PANEL DESPLEGABLE MOBILE / TABLET */}
      <div
        className={`
          lg:hidden fixed inset-x-0 top-[72px] sm:top-[84px] bottom-0 z-40
          bg-[#062446] text-[#FFFFFF] overflow-y-auto transition-all duration-300 ease-in-out
          ${
            mobileMenuOpen
              ? 'opacity-100 pointer-events-auto translate-y-0'
              : 'opacity-0 pointer-events-none -translate-y-2'
          }
        `}
        style={{
          height: isScrolled ? 'calc(100vh - 72px)' : 'calc(100vh - 84px)',
        }}
      >
        <div className="flex flex-col min-h-full justify-between p-6 sm:p-8 max-w-lg mx-auto">
          {/* Enlaces de Navegación Mobile */}
          <nav className="flex flex-col space-y-1 pt-2">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#D8B65A] mb-4">
              Navegación
            </span>
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id, item.href);
                  }}
                  className={`
                    flex items-center justify-between py-3.5 px-3 rounded-[2px]
                    font-sans text-base transition-colors duration-150 border-b border-[#173C68]/40
                    ${
                      isActive
                        ? 'text-[#FFFFFF] bg-[#031A39] border-l-2 border-l-[#C89A32]'
                        : 'text-[#FFFFFF]/90 hover:text-[#FFFFFF] hover:bg-[#173C68]/30'
                    }
                  `}
                >
                  <span className={isActive ? 'font-medium text-[#D8B65A]' : 'font-normal'}>
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C89A32]" aria-hidden="true" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Sección Inferior Mobile: Botón CTA y Metadatos de la Firma */}
          <div className="pt-8 pb-4 space-y-6">
            <div className="w-full">
              <a
                href={whatsappHref}
                target={whatsappHref.startsWith('http') ? '_blank' : '_self'}
                rel={whatsappHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  w-full flex items-center justify-center font-sans font-medium text-sm
                  tracking-wider uppercase px-6 py-3.5 min-h-[48px] rounded-[2px]
                  text-[#FFFFFF] bg-[#031A39] border border-[#C89A32]
                  hover:bg-[#173C68] active:bg-[#031A39]
                  transition-colors duration-200 cursor-pointer text-center shadow-xs
                `}
              >
                <span>Solicitar consulta</span>
              </a>
            </div>

            <div className="text-center pt-3 border-t border-[#173C68]/50 flex flex-col items-center">
              <Logo
                variant="light"
                className="mb-2"
                onClick={() => setMobileMenuOpen(false)}
              />
              <p className="text-[11px] font-sans text-white/50 tracking-widest uppercase mt-0.5">
                Bávaro–Punta Cana, Rep. Dominicana
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
