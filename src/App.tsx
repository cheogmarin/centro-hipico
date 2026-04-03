import { useState, FormEvent } from 'react';
import { 
  ShieldCheck, 
  Heart, 
  Users, 
  ChevronRight, 
  Download, 
  Star, 
  MessageCircle,
  Phone,
  Accessibility,
  Award,
  Calendar,
  Compass,
  X,
  Quote,
  Clock,
  MapPin,
  Euro,
  Info,
  Baby,
  Smile,
  Rocket,
  Trophy,
  Landmark,
  TrendingUp,
  Sun,
  Trees,
  Utensils,
  Leaf,
  Menu,
  FileText,
  Shield,
  FileCheck,
  Lock,
  Send,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { RatingWidget } from './components/RatingWidget';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#essenza", label: "L'Essenza" },
    { href: "#servizi", label: "Servizi" },
    { href: "#inclusione", label: "Inclusione" },
    { href: "#prenota", label: "Documentazione" },
    { href: "#posizione", label: "Dove Siamo" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden border border-stone-100 shadow-sm">
            <img 
              src="https://i.ibb.co/SXbw4DV4/hip-logo-tejido.png" 
              alt="Centro Ippico Gli Arcacci Logo" 
              className="w-full h-full object-contain p-1"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-stone-900 leading-tight uppercase tracking-wider">Gli Arcacci</h1>
            <p className="text-[10px] text-stone-500 font-medium tracking-widest uppercase">Roma Nord • FISE 3501686</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-emerald-800 transition-colors">
              {link.label}
            </a>
          ))}
          <a 
            href="#prenota"
            className="bg-emerald-900 text-white px-6 py-2.5 rounded-full hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20"
          >
            Prenota Ora
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2 text-stone-600 hover:text-emerald-900 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-stone-600 hover:text-emerald-900 transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#prenota"
                onClick={() => setIsOpen(false)}
                className="bg-emerald-900 text-white px-6 py-4 rounded-2xl font-bold text-center hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20 mt-2"
              >
                Prenota Ora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="essenza" className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://i.ibb.co/dsvW1HRB/parallax.png" 
          alt="Agro Romano Parallax" 
          className="w-full h-[120%] object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-6 tracking-widest uppercase">
            <ShieldCheck className="w-5 h-5" />
            <span>Affiliazione Ufficiale FISE & CONI</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-8">
            Donde el bienestar del caballo es <span className="italic text-emerald-900">nuestra prioridad.</span>
          </h2>
          <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-xl">
            Ubicados en el corazón del Agro Romano, transformamos la equitación en una experiencia etológica, inclusiva y de alto rigor técnico.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#servizi"
              className="bg-emerald-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-emerald-900/30"
            >
              Scopri i Programmi <ChevronRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-3 px-6 py-4 bg-stone-100 rounded-full border border-stone-200">
              <Users className="w-5 h-5 text-stone-500" />
              <span className="text-sm font-bold text-stone-700 italic">Partner SIULP (Polizia)</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://i.ibb.co/Qjz89WWd/hip1mj.png" 
              alt="Cavallo Gli Arcacci" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl border border-stone-100 max-w-[240px]">
            <p className="text-stone-900 font-serif text-xl italic mb-1">"Pensione in Paddock"</p>
            <p className="text-stone-500 text-xs leading-relaxed">Filosofía etológica: libertad y socialización para el bienestar real.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, tag, onDetailsClick }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-900 group-hover:text-white transition-colors">
      <Icon className="w-7 h-7" />
    </div>
    <span className="text-[10px] font-bold tracking-widest text-emerald-800 uppercase mb-2 block">{tag}</span>
    <h3 className="text-2xl font-serif text-stone-900 mb-4">{title}</h3>
    <p className="text-stone-600 text-sm leading-relaxed mb-6">{desc}</p>
    <button 
      onClick={onDetailsClick}
      className="text-emerald-900 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
    >
      Dettagli <ChevronRight className="w-4 h-4" />
    </button>
  </motion.div>
);

const Services = ({ onTrekkingDetailsClick, onScuolaPonyDetailsClick, onSaltoDetailsClick, onCentriEstiviDetailsClick }: { onTrekkingDetailsClick: () => void, onScuolaPonyDetailsClick: () => void, onSaltoDetailsClick: () => void, onCentriEstiviDetailsClick: () => void }) => (
  <section id="servizi" className="py-24 bg-stone-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-serif text-stone-900 mb-6">Esperienze d'Eccellenza</h2>
        <p className="text-stone-600">Desde la primera monta hasta la competición nacional, cubrimos cada etapa del viaje ecuestre.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard 
          icon={Heart}
          tag="Sviluppo"
          title="Scuola Pony"
          desc="Desarrollo cognitivo y emocional para niños a partir de los 4 años en un entorno seguro."
          onDetailsClick={onScuolaPonyDetailsClick}
        />
        <ServiceCard 
          icon={Award}
          tag="Agonismo"
          title="Salto Ostacoli"
          desc="Entrenamiento técnico avanzado bajo la normativa oficial FISE para jinetes competitivos."
          onDetailsClick={onSaltoDetailsClick}
        />
        <ServiceCard 
          icon={Compass}
          tag="Avventura"
          title="Trekking 6h"
          desc="Explora la topografía volcánica del Agro Romano en rutas guiadas de larga distancia."
          onDetailsClick={onTrekkingDetailsClick}
        />
        <ServiceCard 
          icon={Calendar}
          tag="Estate"
          title="Centri Estivi"
          desc="Inmersión total en la naturaleza y el mundo del caballo durante las vacaciones escolares."
          onDetailsClick={onCentriEstiviDetailsClick}
        />
      </div>
    </div>
  </section>
);

const Inclusion = ({ onOpenManifesto }: { onOpenManifesto: () => void }) => (
  <section id="inclusione" className="py-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-stone-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
          <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center mb-8 text-white">
            <Accessibility className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-serif text-white mb-8 leading-tight">
            Equitazione per Tutti: <br />
            <span className="text-emerald-400 italic">Inclusione senza barriere.</span>
          </h2>
          <p className="text-stone-400 text-lg mb-10 leading-relaxed">
            Crediamo fermamente que el caballo sea un derecho universal. Nuestros programas de accesibilidad total están diseñados para integrar a cada individuo, sin importar sus capacidades físicas o cognitivas.
          </p>
          <ul className="space-y-4 mb-10">
            {['Accesso facilitato', 'Istruttori specializzati', 'Programmi su misura'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white font-medium">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
          <button 
            onClick={onOpenManifesto}
            className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-stone-900 transition-all w-fit"
          >
            Scopri i Proyectos Sociales
          </button>
        </div>
        <div className="lg:w-1/2 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&q=80&w=1000" 
            alt="Inclusione ecuestre" 
            className="absolute inset-0 w-full h-full object-cover grayscale-0 lg:grayscale lg:hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const BookingSection = ({ onOpenDocs, onOpenBooking }: { onOpenDocs: () => void, onOpenBooking: () => void }) => (
  <section id="prenota" className="py-24 bg-stone-50 border-t border-stone-200">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-serif text-stone-900 mb-8">Inizia il tuo Viaggio</h2>
      <p className="text-stone-600 mb-12">
        Scarica la modulistica necesaria y reserva tu primera lección de prueba. Nuestro equipo te contactará en 24 horas.
      </p>
      <div className="grid sm:grid-cols-3 gap-6">
        <button 
          onClick={onOpenDocs}
          className="flex items-center justify-between p-6 bg-white rounded-2xl border border-stone-200 hover:border-emerald-800 transition-all group"
        >
          <div className="text-left">
            <p className="text-xs font-bold text-emerald-800 uppercase mb-1">Documentazione</p>
            <p className="text-stone-900 font-bold">Waiver & Privacy</p>
          </div>
          <Download className="w-6 h-6 text-stone-400 group-hover:text-emerald-800" />
        </button>
        <a 
          href="tel:+393467523646"
          className="flex items-center justify-between p-6 bg-white rounded-2xl border border-stone-200 hover:border-emerald-800 transition-all group"
        >
          <div className="text-left">
            <p className="text-xs font-bold text-emerald-800 uppercase mb-1">Contatto Diretto</p>
            <p className="text-stone-900 font-bold">+39 346 7523646</p>
          </div>
          <Phone className="w-6 h-6 text-stone-400 group-hover:text-emerald-800" />
        </a>
        <button 
          onClick={onOpenBooking}
          className="flex items-center justify-between p-6 bg-emerald-900 text-white rounded-2xl hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20"
        >
          <div className="text-left">
            <p className="text-xs font-bold text-emerald-200 uppercase mb-1">Prenotazione</p>
            <p className="font-bold">Prima Lezione</p>
          </div>
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  </section>
);

const BrandShowcase = () => (
  <section className="py-24 bg-white border-t border-stone-100">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full mx-auto flex items-center justify-center overflow-hidden border border-stone-100 shadow-xl mb-8">
        <img 
          src="https://i.ibb.co/SXbw4DV4/hip-logo-tejido.png" 
          alt="Centro Ippico Gli Arcacci Logo" 
          className="w-full h-full object-contain p-4"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="space-y-2">
        <p className="text-stone-900 font-bold text-lg md:text-xl">© 2026 Centro Ippico Gli Arcacci A.S.D.</p>
        <p className="text-stone-500 font-medium">
          Via Cassia, Roma Nord • <a href="tel:+393467523646" className="hover:text-emerald-900 transition-colors">+39 346 7523646</a>
        </p>
      </div>
    </div>
  </section>
);

const Footer = ({ onOpenLegal }: { onOpenLegal: (type: 'privacy' | 'terms' | 'cookies') => void }) => (
  <footer className="bg-stone-50 py-8 border-t border-stone-200">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-stone-400 uppercase tracking-widest">
        <button onClick={() => onOpenLegal('privacy')} className="hover:text-stone-900 transition-colors">Privacy Policy</button>
        <button onClick={() => onOpenLegal('terms')} className="hover:text-stone-900 transition-colors">Termini & Condizioni</button>
        <button onClick={() => onOpenLegal('cookies')} className="hover:text-stone-900 transition-colors">Cookies</button>
        <span className="text-stone-300">FISE 3501686</span>
      </div>
    </div>
  </footer>
);

const LocationSection = () => (
  <section id="posizione" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-serif text-stone-900 mb-6">Dove Siamo</h2>
        <p className="text-stone-600 italic">"Nel cuore del Agro Romano, un'oasi di pace a pochi passi dalla città."</p>
      </div>
      <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-stone-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3819.031407498131!2d12.3413263!3d42.0670083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f437d346a2faf%3A0xd4865ce1c2c712df!2sCentro%20Ippico%20Gli%20Arcacci!5e1!3m2!1ses-419!2sve!4v1775182865556!5m2!1ses-419!2sve" 
          width="100%" 
          height="500" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Centro Ippico Gli Arcacci Location"
        ></iframe>
      </div>
    </div>
  </section>
);

const ManifestoModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl p-8 md:p-16"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-stone-400" />
          </button>

          <div className="max-w-2xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-emerald-800 font-bold text-xs tracking-widest uppercase mb-4 block">Manifesto Sociale</span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                "La Grandeza del Logro Sufrido y Compartido"
              </h2>
            </div>

            <div className="space-y-12 text-stone-600 leading-relaxed">
              <p className="text-lg italic font-serif border-l-4 border-emerald-800 pl-6 py-2">
                En el Centro Ippico Gli Arcacci A.S.D., entendemos que la equitación no es un privilegio de pocos, sino una escuela de vida para todos. Nuestra ubicación en el corazón del Agro Romano no es solo un paisaje, es nuestro compromiso con la tierra y con quienes la habitan.
              </p>

              <div className="grid gap-8">
                <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider">Nuestros Pilares Sociales:</h3>
                
                <div className="space-y-4">
                  <h4 className="text-emerald-900 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Inclusión sin Barreras:
                  </h4>
                  <p className="text-sm">
                    Creemos en un deporte sin límites. Por ello, hemos diseñado nuestras instalaciones con accesibilidad total. Desde la entrada hasta los picaderos, cada rincón de Gli Arcacci está listo para recibir a personas con diversidad funcional, convirtiendo al caballo en el mejor puente hacia la superación personal.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-emerald-900 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Compromiso con las Instituciones (Convenio SIULP):
                  </h4>
                  <p className="text-sm">
                    Honramos a quienes sirven. A través de nuestro acuerdo con el Sindicato de Policía (SIULP), facilitamos el acceso a la cultura ecuestre para las familias de los agentes, ofreciendo tarifas sociales que promueven la unión familiar y el descanso activo bajo el rigor de la FISE.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-emerald-900 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Escuela de Valores y Etología:
                  </h4>
                  <p className="text-sm">
                    Nuestros programas para jóvenes y los Centros Estivales no solo enseñan a montar. Enseñamos respeto. Al promover la pensión en paddock, mostramos a las nuevas generaciones que el bienestar del animal está por encima del ego del jinete. Aquí se aprende empatía, responsabilidad y disciplina.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-emerald-900 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Turismo Sostenible y Patrimonio:
                  </h4>
                  <p className="text-sm">
                    Con nuestras rutas de 6 horas por el territorio volcánico, rescatamos la historia del Agro Romano. Fomentamos un "Slow Tourism" que apoya a la economía local y preserva el entorno natural que nos vio nacer en 2014.
                  </p>
                </div>
              </div>

              <div className="pt-12 border-t border-stone-100 text-center">
                <Quote className="w-10 h-10 text-emerald-800/20 mx-auto mb-6" />
                <p className="text-xl font-serif text-stone-900 italic mb-12">
                  "En Gli Arcacci, el éxito no se mide en trofeos, sino en la sonrisa de un niño que supera su miedo y en el respeto mutuo entre el hombre y el caballo."
                </p>
                <button 
                  onClick={onClose}
                  className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-xl"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const TrekkingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl p-8 md:p-16"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-stone-400" />
          </button>

          <div className="max-w-2xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-emerald-800 font-bold text-xs tracking-widest uppercase mb-4 block">Experiencia Signature</span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                Trekking Signature: 6 Horas en el Agro Romano
              </h2>
            </div>

            <div className="space-y-12 text-stone-600 leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                  <Compass className="w-6 h-6 text-emerald-800" />
                  La Experiencia
                </h3>
                <p className="text-lg leading-relaxed">
                  Sumérgete en una travesía ecuestre que combina deporte, historia y naturaleza virgen. Partiendo desde nuestra sede, recorreremos senderos de toba volcánica inaccesibles para vehículos, explorando el corazón del Agro Romano Norte.
                </p>
              </div>

              <div className="grid gap-8">
                <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider">Lo que incluye:</h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                    <h4 className="text-emerald-900 font-bold mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Ruta Panorámica
                    </h4>
                    <p className="text-sm">6 horas de cabalgata guiada por jinetes certificados (estándar FISE).</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                    <h4 className="text-emerald-900 font-bold mb-2 flex items-center gap-2">
                      <Heart className="w-4 h-4" /> Almuerzo Rural (Km 0)
                    </h4>
                    <p className="text-sm">Parada en un agroturismo local para disfrutar de un menú tradicional romano con productos de la zona.</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                    <h4 className="text-emerald-900 font-bold mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" /> Seguridad Total
                    </h4>
                    <p className="text-sm">Equipamiento profesional completo y seguro de actividad incluido.</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                    <h4 className="text-emerald-900 font-bold mb-2 flex items-center gap-2">
                      <Accessibility className="w-4 h-4" /> Bienestar Animal
                    </h4>
                    <p className="text-sm">Tiempos de descanso programados para hidratación y recuperación de los caballos.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider">Detalles Técnicos:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-emerald-800" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Dificultad</p>
                      <p className="text-sm">Adaptable (Principiantes a Expertos).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-800" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Punto de Encuentro</p>
                      <p className="text-sm">Via del Fosso degli Arcacci 74, Roma.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                      <Euro className="w-5 h-5 text-emerald-800" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Tarifas</p>
                      <p className="text-sm">General: €75 | Especial SIULP: €65 (Acreditación).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex gap-4 items-start">
                <Info className="w-6 h-6 text-emerald-800 shrink-0" />
                <p className="text-sm text-emerald-900">
                  <span className="font-bold">Nota:</span> Se recomienda ropa cómoda y calzado cerrado. Disponibilidad sujeta a condiciones climáticas para garantizar la seguridad.
                </p>
              </div>

              <div className="pt-12 border-t border-stone-100 text-center">
                <button 
                  onClick={onClose}
                  className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-xl"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const ScuolaPonyModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl p-8 md:p-16"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-stone-400" />
          </button>

          <div className="max-w-2xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-emerald-800 font-bold text-xs tracking-widest uppercase mb-4 block">Pedagogía Ecuestre</span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                Scuola Pony: Crecer en Libertad
              </h2>
              <p className="mt-6 text-lg italic text-stone-500 font-serif">
                "Donde el juego se convierte en disciplina y la amistad en un vínculo eterno."
              </p>
            </div>

            <div className="space-y-12 text-stone-600 leading-relaxed">
              <p className="text-lg leading-relaxed">
                Nuestra escuela de pony no es solo una clase de equitación; es un proyecto educativo diseñado para niños desde los 4 años. En Gli Arcacci, el pony no es una herramienta, es un compañero de crecimiento.
              </p>

              <div className="grid gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Smile className="w-6 h-6 text-emerald-800" />
                    1. El Método: "Aprender Jugando"
                  </h3>
                  <p className="text-sm">Utilizamos una metodología basada en el respeto etológico y la psicomotricidad.</p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-emerald-900 font-bold mb-2">Vínculo Afectivo</h4>
                      <p className="text-sm">Antes de montar, el niño aprende a cepillar, alimentar y cuidar a su pony. Esto desarrolla la empatía y la responsabilidad.</p>
                    </div>
                    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-emerald-900 font-bold mb-2">Equilibrio y Coordinación</h4>
                      <p className="text-sm">A través de juegos en pista, los niños mejoran su postura, tono muscular y confianza en sí mismos.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-800" />
                    2. Seguridad y Profesionalidad (Garantía FISE)
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Instructores Certificados:</span> Clases impartidas por técnicos de la Federación Italiana de Deportes Ecuestres (FISE).</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Equipamiento Adaptado:</span> Ponies seleccionados por su carácter dócil y equipo de seguridad (cascos y protectores) de última generación.</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Instalaciones Protegidas:</span> Picaderos específicos para niños, lejos del tránsito de caballos mayores.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-emerald-800" />
                    3. Programas Disponibles
                  </h3>
                  <div className="grid gap-4">
                    {['Bautismo Ecuestre: Una primera toma de contacto de 30 minutos para perder el miedo.', 
                      'Cursos Trimestrales: Progresión técnica desde la base hasta los primeros saltos.', 
                      'Centri Estivales (Campus): Inmersión total durante las vacaciones escolares (de lunes a viernes).'].map((text, i) => (
                      <div key={i} className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 text-sm">
                        {text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Info className="w-6 h-6 text-emerald-800" />
                    4. Datos Clave para Padres
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Edad</p>
                      <p className="text-lg font-bold text-stone-900">A partir de 4 años</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Duración</p>
                      <p className="text-lg font-bold text-stone-900">45 a 60 minutos</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Beneficio SIULP</p>
                      <p className="text-lg font-bold text-emerald-800">Descuento Especial</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-stone-100 text-center">
                <Quote className="w-10 h-10 text-emerald-800/20 mx-auto mb-6" />
                <p className="text-xl font-serif text-stone-900 italic mb-12">
                  "No enseñamos a montar ponies, formamos a los jinetes y ciudadanos del mañana bajo los valores del Agro Romano."
                </p>
                <button 
                  onClick={onClose}
                  className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-xl"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const SaltoOstacoliModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl p-8 md:p-16"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-stone-400" />
          </button>

          <div className="max-w-2xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-emerald-800 font-bold text-xs tracking-widest uppercase mb-4 block">Agonismo FISE</span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                Salto Ostacoli: La Disciplina del Vuelo
              </h2>
              <p className="mt-6 text-lg italic text-stone-500 font-serif">
                "Técnica, coraje y una conexión perfecta en cada batida."
              </p>
            </div>

            <div className="space-y-12 text-stone-600 leading-relaxed">
              <p className="text-lg leading-relaxed">
                El Salto de Obstáculos es la disciplina reina de la equitación moderna. En Gli Arcacci, preparamos a jinetes y caballos para alcanzar su máximo potencial deportivo, combinando el rigor de la FISE con una preparación física y mental integral.
              </p>

              <div className="grid gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Award className="w-6 h-6 text-emerald-800" />
                    1. Entrenamiento de Alto Rendimiento
                  </h3>
                  <p className="text-sm">Nuestro programa de salto se enfoca en la progresión lógica y segura del binomio.</p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-emerald-900 font-bold mb-2">Lavoro in Piano (Doma)</h4>
                      <p className="text-sm">La base de todo salto es el control. Trabajamos la elasticidad, el ritmo y la impulsión antes de enfrentar la barra.</p>
                    </div>
                    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-emerald-900 font-bold mb-2">Gimnasia de Salto</h4>
                      <p className="text-sm">Ejercicios de líneas y combinaciones para mejorar la técnica de batida y el gesto del caballo en el aire.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-800" />
                    2. Preparación para la Competición
                  </h3>
                  <p className="text-sm">Formamos parte activa del circuito de concursos de la Federación Italiana de Deportes Ecuestres (FISE).</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Patentes y Licencias:</span> Te acompañamos en el proceso de obtención de patentes (A, B, G1, G2) para competir oficialmente.</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Asistencia en Concurso:</span> Coaching personalizado a pie de pista durante los eventos regionales en el Lazio.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Landmark className="w-6 h-6 text-emerald-800" />
                    3. Instalaciones de Vanguardia
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-emerald-900 font-bold mb-2">Picadero de Arena Silícea</h4>
                      <p className="text-sm">Suelo técnico con drenaje perfecto para proteger los tendones del caballo durante la recepción.</p>
                    </div>
                    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-emerald-900 font-bold mb-2">Parque de Obstáculos Completo</h4>
                      <p className="text-sm">Material de competición reglamentario para simular recorridos reales de concurso.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Info className="w-6 h-6 text-emerald-800" />
                    4. Detalles del Programa
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Público</p>
                      <p className="text-sm font-bold text-stone-900">Intermedio / Avanzado</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Caballos</p>
                      <p className="text-sm font-bold text-stone-900">Escuela o Propios</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Frecuencia</p>
                      <p className="text-sm font-bold text-stone-900">Individual o Grupal</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-stone-100">
                  <div className="flex flex-col items-center text-center p-4">
                    <Rocket className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Nivel</p>
                    <p className="text-xs font-bold text-stone-900">Intermedio / Avanzado</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Trophy className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Objetivo</p>
                    <p className="text-xs font-bold text-stone-900">Competición FISE</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Landmark className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Suelo</p>
                    <p className="text-xs font-bold text-stone-900">Arena Técnica</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <TrendingUp className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Progreso</p>
                    <p className="text-xs font-bold text-stone-900">Plan Personalizado</p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-stone-100 text-center">
                <Quote className="w-10 h-10 text-emerald-800/20 mx-auto mb-6" />
                <p className="text-xl font-serif text-stone-900 italic mb-12">
                  "No saltamos barreras, superamos límites. Nuestra filosofía se basa en que un caballo feliz y bien musculado es el que mejor salta."
                </p>
                <button 
                  onClick={onClose}
                  className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-xl"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const CentriEstiviModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl p-8 md:p-16"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-stone-400" />
          </button>

          <div className="max-w-2xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-emerald-800 font-bold text-xs tracking-widest uppercase mb-4 block">Inmersión Total</span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                Centri Estivi: Verano en la Naturaleza
              </h2>
              <p className="mt-6 text-lg italic text-stone-500 font-serif">
                "Más que un campamento, una aventura educativa en el Agro Romano."
              </p>
            </div>

            <div className="space-y-12 text-stone-600 leading-relaxed">
              <p className="text-lg leading-relaxed">
                Cuando las escuelas cierran, Gli Arcacci abre sus puertas para ofrecer una experiencia de inmersión total. Nuestros centros estivos están diseñados para que los niños y jóvenes (de 4 a 16 años) cambien las pantallas por el contacto directo con el caballo y la vida rural.
              </p>

              <div className="grid gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Clock className="w-6 h-6 text-emerald-800" />
                    1. Un Día Típico en Gli Arcacci
                  </h3>
                  <p className="text-sm">El programa está equilibrado entre la instrucción deportiva y la recreación:</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: 'Mañana Ecuestre', desc: 'Clases de equitación adaptadas al nivel de cada niño.' },
                      { title: 'Talleres de Etología', desc: 'Aprender a ensillar, limpiar y entender al caballo.' },
                      { title: 'Juegos de Grupo', desc: 'Actividades al aire libre que fomentan el trabajo en equipo.' },
                      { title: 'Almuerzo Saludable', desc: 'Menús equilibrados pensados para el gasto energético.' }
                    ].map((item, i) => (
                      <div key={i} className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                        <h4 className="text-emerald-900 font-bold mb-1">{item.title}</h4>
                        <p className="text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Leaf className="w-6 h-6 text-emerald-800" />
                    2. Educación Ambiental y Respeto
                  </h3>
                  <p className="text-sm">
                    Aprovechamos nuestra ubicación única para realizar senderismo educativo por los alrededores del foso volcánico, enseñando a los niños a identificar la flora y fauna local y la importancia de preservar el patrimonio del Agro Romano.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-800" />
                    3. Seguridad y Tranquilidad para los Padres
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                      <p className="font-bold text-stone-900 text-sm mb-1">Personal Cualificado</p>
                      <p className="text-xs">Animadores y técnicos FISE presentes siempre.</p>
                    </div>
                    <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                      <p className="font-bold text-stone-900 text-sm mb-1">Seguro Deportivo</p>
                      <p className="text-xs">Cobertura completa para actividades ecuestres.</p>
                    </div>
                    <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                      <p className="font-bold text-stone-900 text-sm mb-1">Flexibilidad</p>
                      <p className="text-xs">Entrada desde las 8:30 AM para logística familiar.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Info className="w-6 h-6 text-emerald-800" />
                    4. Información de Interés
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Periodo:</span> Semanas de Junio, Julio y Septiembre.</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Edades:</span> De 4 a 16 años (divididos por grupos de edad).</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Beneficio Especial:</span> Descuento exclusivo para hijos de miembros del SIULP y descuentos por hermanos o semanas consecutivas.</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-stone-100">
                  <div className="flex flex-col items-center text-center p-4">
                    <Calendar className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Temporada</p>
                    <p className="text-xs font-bold text-stone-900">Junio - Septiembre</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Sun className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Horario</p>
                    <p className="text-xs font-bold text-stone-900">Jornada Completa</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Award className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Actividad</p>
                    <p className="text-xs font-bold text-stone-900">Equitación Diaria</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Trees className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Entorno</p>
                    <p className="text-xs font-bold text-stone-900">100% Aire Libre</p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-stone-100 text-center">
                <Quote className="w-10 h-10 text-emerald-800/20 mx-auto mb-6" />
                <p className="text-xl font-serif text-stone-900 italic mb-12">
                  "Ofrecemos un verano donde el niño vuelve a casa cansado, feliz y con un nuevo mejor amigo de cuatro patas."
                </p>
                <button 
                  onClick={onClose}
                  className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-xl"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const DocumentationModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl p-8 md:p-16"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-stone-400" />
          </button>

          <div className="max-w-2xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-emerald-800 font-bold text-xs tracking-widest uppercase mb-4 block">Waiver & Privacy</span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                Documentazione e Trasparenza
              </h2>
              <p className="mt-6 text-lg italic text-stone-500 font-serif">
                "Tu seguridad y privacidad son nuestra prioridad institucional."
              </p>
            </div>

            <div className="space-y-12 text-stone-600 leading-relaxed">
              <p className="text-lg leading-relaxed">
                Para participar en nuestras actividades hípicas y sociales, es necesario completar y conocer la siguiente documentación oficial. Puedes descargar los formularios o solicitarlos en nuestra secretaría.
              </p>

              <div className="grid gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <FileText className="w-6 h-6 text-emerald-800" />
                    1. Scarico di Responsabilità (Waiver)
                  </h3>
                  <p className="text-sm">Dado que la equitación es considerada una actividad de riesgo deportivo, este documento es obligatorio para todos los jinetes:</p>
                  <div className="grid gap-4">
                    {[
                      { title: 'Autorización de Menores', desc: 'Consentimiento firmado por padres o tutores para la Escuela Pony y Centros Estivos.' },
                      { title: 'Certificado Médico', desc: 'Recordatorio de la obligatoriedad del certificado médico de aptitud deportiva (no agonística o agonística según el nivel).' },
                      { title: 'Aceptación de Riesgo', desc: 'Declaración de conocimiento de las normas de seguridad en pista y durante el Trekking de 6 horas.' }
                    ].map((item, i) => (
                      <div key={i} className="p-5 bg-stone-50 rounded-2xl border border-stone-100 flex justify-between items-center group cursor-pointer hover:border-emerald-800 transition-all">
                        <div>
                          <h4 className="text-emerald-900 font-bold mb-1">{item.title}</h4>
                          <p className="text-xs">{item.desc}</p>
                        </div>
                        <Download className="w-5 h-5 text-stone-400 group-hover:text-emerald-800 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Lock className="w-6 h-6 text-emerald-800" />
                    2. Informativa sulla Privacy (GDPR)
                  </h3>
                  <p className="text-sm">En cumplimiento con el Reglamento UE 2016/679, informamos sobre el tratamiento de tus datos:</p>
                  <div className="grid gap-4">
                    {[
                      { title: 'Finalidad', desc: 'Gestión de inscripciones, seguros federativos (FISE) y comunicación de horarios/eventos.' },
                      { title: 'Derechos de Imagen', desc: 'Consentimiento específico para la publicación de fotos de actividades deportivas en nuestras redes sociales (fundamental para los Centri Estivi).' },
                      { title: 'Protección de Datos', desc: 'Tus datos nunca serán cedidos a terceros ajenos a la federación o servicios de emergencia en caso de necesidad.' }
                    ].map((item, i) => (
                      <div key={i} className="p-5 bg-stone-50 rounded-2xl border border-stone-100 flex justify-between items-center group cursor-pointer hover:border-emerald-800 transition-all">
                        <div>
                          <h4 className="text-emerald-900 font-bold mb-1">{item.title}</h4>
                          <p className="text-xs">{item.desc}</p>
                        </div>
                        <Download className="w-5 h-5 text-stone-400 group-hover:text-emerald-800 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                      <Shield className="w-6 h-6 text-emerald-800" />
                      3. Convenzione SIULP
                    </h3>
                    <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex justify-between items-center group cursor-pointer hover:border-emerald-800 transition-all">
                      <p className="text-sm">Presentación del carnet de afiliación vigente para aplicar los descuentos del 11% al 20% en programas seleccionados.</p>
                      <Download className="w-5 h-5 text-emerald-800/40 group-hover:text-emerald-800 transition-colors shrink-0 ml-4" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                      <FileCheck className="w-6 h-6 text-emerald-800" />
                      4. Regolamento Interno ASD
                    </h3>
                    <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex justify-between items-center group cursor-pointer hover:border-emerald-800 transition-all">
                      <p className="text-sm">Normas de convivencia en el paddock y caballerizas. Uso obligatorio de casco (Cap) y protección de espalda.</p>
                      <Download className="w-5 h-5 text-emerald-800/40 group-hover:text-emerald-800 transition-colors shrink-0 ml-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-stone-100 text-center">
                <Quote className="w-10 h-10 text-emerald-800/20 mx-auto mb-6" />
                <p className="text-xl font-serif text-stone-900 italic mb-12">
                  "La trasparenza è il primo passo verso una comunità sicura e unita."
                </p>
                <button 
                  onClick={onClose}
                  className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-xl"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const BookingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.error(error));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl p-8 md:p-16"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 hover:bg-stone-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-stone-400" />
            </button>

            <div className="max-w-2xl mx-auto">
              {!submitted ? (
                <>
                  <div className="mb-12 text-center">
                    <span className="text-emerald-800 font-bold text-xs tracking-widest uppercase mb-4 block">Prenotazione</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                      Prenota la tua Prima Lezione
                    </h2>
                    <p className="mt-6 text-lg italic text-stone-500 font-serif">
                      "El primer paso hacia el binomio perfecto comienza aquí."
                    </p>
                  </div>

                  <div className="space-y-12 text-stone-600 leading-relaxed">
                    <p className="text-lg leading-relaxed">
                      En el Centro Ippico Gli Arcacci, tu primera experiencia está diseñada para ser segura, educativa y emocionante. No importa si nunca has tocado un caballo o si buscas retomar la equitación deportiva.
                    </p>

                    <div className="grid gap-12">
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                          <Star className="w-6 h-6 text-emerald-800" />
                          1. ¿En qué consiste la Primera Lección? (Il Battesimo della Sella)
                        </h3>
                        <p className="text-sm font-bold text-emerald-900">Duración: 45 - 60 minutos.</p>
                        <ul className="space-y-3">
                          {[
                            'Breve introducción etológica (conocer al caballo).',
                            'Preparación y cepillado (crear el vínculo).',
                            'Sesión en pista: Equilibrio, posición y primeros comandos de dirección.',
                            'Objetivo: Evaluar el nivel del jinete y asignar el grupo o programa más adecuado.'
                          ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                          <ShieldCheck className="w-6 h-6 text-emerald-800" />
                          2. Lo que necesitas traer:
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                            <h4 className="text-emerald-900 font-bold mb-2">Tú traes:</h4>
                            <ul className="text-xs space-y-2">
                              <li>• Pantalones largos cómodos</li>
                              <li>• Calzado cerrado (botas o zapatillas suela lisa)</li>
                            </ul>
                          </div>
                          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                            <h4 className="text-emerald-900 font-bold mb-2">Nosotros proporcionamos:</h4>
                            <ul className="text-xs space-y-2">
                              <li>• Casco (Cap) homologado</li>
                              <li>• Protector de espalda (si es necesario)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 pt-12 border-t border-stone-100">
                        <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                          <Send className="w-6 h-6 text-emerald-800" />
                          3. Formulario de Reserva Inteligente
                        </h3>
                        
                        <form 
                          name="prenotazione-lezione" 
                          method="POST" 
                          data-netlify="true"
                          onSubmit={handleSubmit}
                          className="grid gap-6"
                        >
                          <input type="hidden" name="form-name" value="prenotazione-lezione" />
                          
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Nombre del Jinete</label>
                              <input 
                                required 
                                name="nombre"
                                type="text" 
                                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:border-emerald-800 outline-none transition-all"
                                placeholder="Ej: Mario Rossi"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Edad</label>
                              <input 
                                required 
                                name="edad"
                                type="number" 
                                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:border-emerald-800 outline-none transition-all"
                                placeholder="Ej: 8"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Nivel de Experiencia</label>
                            <div className="grid sm:grid-cols-3 gap-3">
                              {['Nunca he montado', 'Principiante', 'Avanzado'].map((lvl) => (
                                <label key={lvl} className="flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-2xl cursor-pointer hover:border-emerald-800 transition-all">
                                  <input type="radio" name="nivel" value={lvl} required className="accent-emerald-800" />
                                  <span className="text-sm font-medium">{lvl}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Programa de Interés</label>
                              <select 
                                name="programa"
                                required
                                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:border-emerald-800 outline-none transition-all appearance-none"
                              >
                                <option value="">Selecciona un programa</option>
                                <option value="Escuela Pony">Escuela Pony</option>
                                <option value="Salto">Salto</option>
                                <option value="Trekking">Trekking</option>
                                <option value="Centros Estivos">Centros Estivos</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Fecha y Hora Preferida</label>
                              <input 
                                required 
                                name="fecha_hora"
                                type="datetime-local" 
                                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:border-emerald-800 outline-none transition-all"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-stone-400">¿Eres miembro del SIULP?</label>
                            <div className="flex gap-6">
                              {['Sí', 'No'].map((opt) => (
                                <label key={opt} className="flex items-center gap-3 cursor-pointer">
                                  <input type="radio" name="siulp" value={opt} required className="accent-emerald-800" />
                                  <span className="text-sm font-medium">{opt}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <button 
                            type="submit"
                            className="mt-6 bg-emerald-900 text-white px-12 py-5 rounded-full font-bold hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/30 flex items-center justify-center gap-3"
                          >
                            Invia Richiesta <Send className="w-5 h-5" />
                          </button>
                        </form>
                      </div>
                    </div>

                    <div className="pt-12 border-t border-stone-100 text-center">
                      <button 
                        onClick={onClose}
                        className="text-stone-400 font-bold hover:text-stone-900 transition-colors"
                      >
                        Annulla
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-10 h-10 text-emerald-800" />
                  </div>
                  <h2 className="text-3xl font-serif text-stone-900 mb-4">Richiesta Inviata!</h2>
                  <p className="text-stone-600 mb-12 max-w-md mx-auto">
                    Grazie per aver scelto Gli Arcacci. Il nostro team ti contatterà entro 24 ore per confermare la tua prima lezione.
                  </p>
                  <button 
                    onClick={onClose}
                    className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all"
                  >
                    Torna alla Home
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const LegalModal = ({ isOpen, onClose, type }: { isOpen: boolean, onClose: () => void, type: 'privacy' | 'terms' | 'cookies' | null }) => {
  interface LegalContent {
    title: string;
    icon: any;
    text: string;
    details?: {
      title: string;
      items: string[];
    }[];
  }

  const content: Record<'privacy' | 'terms' | 'cookies', LegalContent> = {
    privacy: {
      title: "Política de Privacidad (GDPR)",
      icon: Shield,
      text: "Tus datos están protegidos según el Reg. UE 2016/679. Solo los usamos para la gestión deportiva y seguros."
    },
    terms: {
      title: "Términos y Condiciones de Uso - ASD Gli Arcacci",
      icon: FileText,
      text: "Al acceder a nuestras instalaciones o contratar nuestros servicios (Trekking, Escuela o Salto), el usuario acepta las siguientes normas de la Asociación:",
      details: [
        {
          title: "1. Requisitos de Salud y Seguridad",
          items: [
            "Certificado Médico: Es obligatorio presentar un certificado médico de aptitud deportiva vigente para realizar cualquier actividad ecuestre regular.",
            "Equipamiento Obligatorio: Por normativa FISE, es estrictamente obligatorio el uso de casco (cap) homologado y calzado adecuado. El centro se reserva el derecho de prohibir la monta a quien no cumpla estas medidas.",
            "Peso y Edad: Para garantizar el bienestar animal y la seguridad del jinete, existen límites de peso y edad mínima (4 años) según la actividad."
          ]
        },
        {
          title: "2. Política de Cancelación (Prenotazioni)",
          items: [
            "Aviso Previo: Las clases o rutas de Trekking canceladas con menos de 24 horas de antelación no serán reembolsables ni recuperables, salvo causa de fuerza mayor justificada.",
            "Condiciones Climáticas: En caso de lluvia extrema o alertas meteorológicas en el Agro Romano, el centro podrá reprogramar la actividad para garantizar la seguridad de jinetes y caballos."
          ]
        },
        {
          title: "3. Conducta en el Recinto",
          items: [
            "Bienestar Animal: Cualquier maltrato físico o verbal hacia los caballos resultará en la expulsión inmediata del centro sin derecho a reembolso.",
            "Supervisión: Los menores de edad deben estar bajo la supervisión de un adulto en todo momento, excepto cuando estén bajo la tutela directa de un instructor en pista."
          ]
        },
        {
          title: "4. Seguros y Responsabilidad",
          items: [
            "Afiliación FISE: Todos nuestros alumnos deben contar con la licencia federativa vigente, la cual incluye el seguro de accidentes deportivo obligatorio.",
            "Exención de Responsabilidad: El centro no se hace responsable por la pérdida o daño de objetos personales dentro de las instalaciones o en el estacionamiento accesible."
          ]
        },
        {
          title: "5. Beneficios Sociales (SIULP)",
          items: [
            "Los descuentos y convenios sociales son personales e intransferibles. Se requerirá la validación de la identidad y pertenencia al sindicato mediante carnet oficial en la primera sesión."
          ]
        }
      ]
    },
    cookies: {
      title: "Cookies",
      icon: Info,
      text: "Este sitio utiliza cookies técnicas mínimas para mejorar tu experiencia de navegación."
    }
  };

  const active = type ? content[type] : null;

  return (
    <AnimatePresence>
      {isOpen && active && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl p-8 md:p-12"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-stone-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-stone-400" />
            </button>

            <div className="text-left">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <active.icon className="w-8 h-8 text-emerald-800" />
              </div>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">{active.title}</h2>
              <p className="text-stone-600 leading-relaxed mb-8">{active.text}</p>
              
              {active.details && (
                <div className="space-y-8 mb-8">
                  {active.details.map((section, i) => (
                    <div key={i} className="space-y-3">
                      <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j} className="text-sm text-stone-500 leading-relaxed flex gap-3">
                            <div className="w-1 h-1 bg-emerald-500 rounded-full mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-center">
                <button 
                  onClick={onClose}
                  className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all"
                >
                  Entendido
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [isTrekkingOpen, setIsTrekkingOpen] = useState(false);
  const [isScuolaPonyOpen, setIsScuolaPonyOpen] = useState(false);
  const [isSaltoOpen, setIsSaltoOpen] = useState(false);
  const [isCentriEstiviOpen, setIsCentriEstiviOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean, type: 'privacy' | 'terms' | 'cookies' | null }>({
    isOpen: false,
    type: null
  });

  const openLegal = (type: 'privacy' | 'terms' | 'cookies') => {
    setLegalModal({ isOpen: true, type });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Services 
          onTrekkingDetailsClick={() => setIsTrekkingOpen(true)} 
          onScuolaPonyDetailsClick={() => setIsScuolaPonyOpen(true)}
          onSaltoDetailsClick={() => setIsSaltoOpen(true)}
          onCentriEstiviDetailsClick={() => setIsCentriEstiviOpen(true)}
        />
        <Inclusion onOpenManifesto={() => setIsManifestoOpen(true)} />
        <div id="feedback" className="bg-stone-50 py-12">
          <RatingWidget />
        </div>
        <LocationSection />
        <BookingSection 
          onOpenDocs={() => setIsDocsOpen(true)} 
          onOpenBooking={() => setIsBookingOpen(true)}
        />
        <BrandShowcase />
      </main>
      <Footer onOpenLegal={openLegal} />
      <ManifestoModal isOpen={isManifestoOpen} onClose={() => setIsManifestoOpen(false)} />
      <TrekkingModal isOpen={isTrekkingOpen} onClose={() => setIsTrekkingOpen(false)} />
      <ScuolaPonyModal isOpen={isScuolaPonyOpen} onClose={() => setIsScuolaPonyOpen(false)} />
      <SaltoOstacoliModal isOpen={isSaltoOpen} onClose={() => setIsSaltoOpen(false)} />
      <CentriEstiviModal isOpen={isCentriEstiviOpen} onClose={() => setIsCentriEstiviOpen(false)} />
      <DocumentationModal isOpen={isDocsOpen} onClose={() => setIsDocsOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <LegalModal 
        isOpen={legalModal.isOpen} 
        type={legalModal.type} 
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })} 
      />
    </div>
  );
}
