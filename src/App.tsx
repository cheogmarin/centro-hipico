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
            Dove il benessere del cavallo è <span className="italic text-emerald-900">la nostra priorità.</span>
          </h2>
          <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-xl">
            Situati nel cuore dell'Agro Romano, trasformiamo l'equitazione in un'esperienza etologica, inclusiva e di alto rigore tecnico.
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
            <p className="text-stone-500 text-xs leading-relaxed">Filosofia etologica: libertà e socializzazione per un benessere reale.</p>
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
        <p className="text-stone-600">Dalla prima monta alla competizione nazionale, copriamo ogni tappa del viaggio equestre.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard 
          icon={Heart}
          tag="Sviluppo"
          title="Scuola Pony"
          desc="Sviluppo cognitivo ed emotivo per bambini dai 4 anni in un ambiente sicuro."
          onDetailsClick={onScuolaPonyDetailsClick}
        />
        <ServiceCard 
          icon={Award}
          tag="Agonismo"
          title="Salto Ostacoli"
          desc="Allenamento tecnico avanzato secondo la normativa ufficiale FISE per cavalieri competitivi."
          onDetailsClick={onSaltoDetailsClick}
        />
        <ServiceCard 
          icon={Compass}
          tag="Avventura"
          title="Trekking 6h"
          desc="Esplora la topografia vulcanica dell'Agro Romano in percorsi guidati di lunga distanza."
          onDetailsClick={onTrekkingDetailsClick}
        />
        <ServiceCard 
          icon={Calendar}
          tag="Estate"
          title="Centri Estivi"
          desc="Immersione totale nella natura e nel mondo del cavallo durante le vacanze scolastiche."
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
            Crediamo fermamente che il cavallo sia un diritto universale. I nostri programmi di accessibilità totale sono progettati per integrare ogni individuo, indipendentemente dalle capacità fisiche o cognitive.
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
            Scopri i Progetti Sociali
          </button>
        </div>
        <div className="lg:w-1/2 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&q=80&w=1000" 
            alt="Inclusione ecuestre" 
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
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
        Scarica la modulistica necessaria e prenota la tua prima lezione di prova. Il nostro team ti contatterà entro 24 ore.
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
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3819.031407498131!2d12.3413263!3d42.0670083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f437d346a2faf%3A0xd4865ce1c2c712df!2sCentro%20Ippico%20Gli%20Arcacci!5e1!3m2!1sit!2sit!4v1775182865556!5m2!1sit!2sit" 
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
                "La Grandezza del Traguardo Sudato e Condiviso"
              </h2>
            </div>
 
            <div className="space-y-12 text-stone-600 leading-relaxed">
              <p className="text-lg italic font-serif border-l-4 border-emerald-800 pl-6 py-2">
                Presso il Centro Ippico Gli Arcacci A.S.D., comprendiamo che l'equitazione non è un privilegio di pochi, ma una scuola di vita per tutti. La nostra posizione nel cuore dell'Agro Romano non è solo un paesaggio, è il nostro impegno verso la terra e verso chi la abita.
              </p>
 
              <div className="grid gap-8">
                <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider">I Nostri Pilastri Sociali:</h3>
                
                <div className="space-y-4">
                  <h4 className="text-emerald-900 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Inclusione senza Barriere:
                  </h4>
                  <p className="text-sm">
                    Crediamo in uno sport senza limiti. Per questo, abbiamo progettato le nostre strutture con accessibilità totale. Dall'ingresso ai campi, ogni angolo di Gli Arcacci è pronto ad accogliere persone con diversità funzionale, rendendo il cavallo il miglior ponte verso il superamento personale.
                  </p>
                </div>
 
                <div className="space-y-4">
                  <h4 className="text-emerald-900 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Impegno con le Istituzioni (Convenzione SIULP):
                  </h4>
                  <p className="text-sm">
                    Onoriamo chi serve. Attraverso il nostro accordo con il Sindacato di Polizia (SIULP), facilitiamo l'accesso alla cultura equestre per le famiglie degli agenti, offrendo tariffe sociali che promuovono l'unione familiare e il riposo attivo sotto il rigore della FISE.
                  </p>
                </div>
 
                <div className="space-y-4">
                  <h4 className="text-emerald-900 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Scuola di Valori ed Etologia:
                  </h4>
                  <p className="text-sm">
                    I nostri programmi per giovani e i Centri Estivi non insegnano solo a montare. Insegniamo il rispetto. Promuovendo la pensione in paddock, mostriamo alle nuove generazioni che il benessere dell'animale è al di sopra dell'ego del cavaliere. Qui si impara empatia, responsabilità e disciplina.
                  </p>
                </div>
 
                <div className="space-y-4">
                  <h4 className="text-emerald-900 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Turismo Sostenibile e Patrimonio:
                  </h4>
                  <p className="text-sm">
                    Con i nostri percorsi di 6 ore nel territorio vulcanico, recuperiamo la storia dell'Agro Romano. Promuoviamo uno "Slow Tourism" che sostiene l'economia locale e preserva l'ambiente naturale che ci ha visto nascere nel 2014.
                  </p>
                </div>
              </div>
 
              <div className="pt-12 border-t border-stone-100 text-center">
                <Quote className="w-10 h-10 text-emerald-800/20 mx-auto mb-6" />
                <p className="text-xl font-serif text-stone-900 italic mb-12">
                  "A Gli Arcacci, il successo non si misura in trofei, ma nel sorriso di un bambino che supera la sua paura e nel rispetto reciproco tra l'uomo e il cavallo."
                </p>
                <button 
                  onClick={onClose}
                  className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-xl"
                >
                  Chiudi
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
              <span className="text-emerald-800 font-bold text-xs tracking-widest uppercase mb-4 block">Esperienza Signature</span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                Trekking Signature: 6 Ore nell'Agro Romano
              </h2>
            </div>
 
            <div className="space-y-12 text-stone-600 leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                  <Compass className="w-6 h-6 text-emerald-800" />
                  L'Esperienza
                </h3>
                <p className="text-lg leading-relaxed">
                  Immergiti in una traversata equestre che combina sport, storia e natura incontaminata. Partendo dalla nostra sede, percorreremo sentieri di tufo vulcanico inaccessibili ai veicoli, esplorando il cuore dell'Agro Romano Nord.
                </p>
              </div>
 
              <div className="grid gap-8">
                <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider">Cosa include:</h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                    <h4 className="text-emerald-900 font-bold mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Percorso Panoramico
                    </h4>
                    <p className="text-sm">6 ore di cavalcata guidata da cavalieri certificati (standard FISE).</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                    <h4 className="text-emerald-900 font-bold mb-2 flex items-center gap-2">
                      <Heart className="w-4 h-4" /> Pranzo Rurale (Km 0)
                    </h4>
                    <p className="text-sm">Sosta in un agriturismo locale per gustare un menù tradizionale romano con prodotti della zona.</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                    <h4 className="text-emerald-900 font-bold mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" /> Sicurezza Totale
                    </h4>
                    <p className="text-sm">Equipaggiamento professionale completo e assicurazione attività inclusa.</p>
                  </div>
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                    <h4 className="text-emerald-900 font-bold mb-2 flex items-center gap-2">
                      <Accessibility className="w-4 h-4" /> Benessere Animale
                    </h4>
                    <p className="text-sm">Tempi di riposo programmati per l'idratazione e il recupero dei cavalli.</p>
                  </div>
                </div>
              </div>
 
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider">Dettagli Tecnici:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-emerald-800" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Difficoltà</p>
                      <p className="text-sm">Adattabile (Principianti a Esperti).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-800" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Punto di Incontro</p>
                      <p className="text-sm">Via del Fosso degli Arcacci 74, Roma.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                      <Euro className="w-5 h-5 text-emerald-800" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Tariffe</p>
                      <p className="text-sm">Generale: €75 | Speciale SIULP: €65 (Accreditamento).</p>
                    </div>
                  </div>
                </div>
              </div>
 
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex gap-4 items-start">
                <Info className="w-6 h-6 text-emerald-800 shrink-0" />
                <p className="text-sm text-emerald-900">
                  <span className="font-bold">Nota:</span> Si consiglia abbigliamento comodo e calzature chiuse. Disponibilità soggetta a condizioni climatiche per garantire la sicurezza.
                </p>
              </div>
 
              <div className="pt-12 border-t border-stone-100 text-center">
                <button 
                  onClick={onClose}
                  className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-xl"
                >
                  Chiudi
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
              <span className="text-emerald-800 font-bold text-xs tracking-widest uppercase mb-4 block">Pedagogia Equestre</span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                Scuola Pony: Crescere in Libertà
              </h2>
              <p className="mt-6 text-lg italic text-stone-500 font-serif">
                "Dove il gioco diventa disciplina e l'amicizia un legame eterno."
              </p>
            </div>
 
            <div className="space-y-12 text-stone-600 leading-relaxed">
              <p className="text-lg leading-relaxed">
                La nostra scuola pony non è solo una lezione di equitazione; è un progetto educativo pensato per i bambini dai 4 anni. A Gli Arcacci, il pony non è uno strumento, è un compagno di crescita.
              </p>
 
              <div className="grid gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Smile className="w-6 h-6 text-emerald-800" />
                    1. Il Metodo: "Imparare Giocando"
                  </h3>
                  <p className="text-sm">Utilizziamo una metodologia basata sul rispetto etologico e la psicomotricità.</p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-emerald-900 font-bold mb-2">Legame Affettivo</h4>
                      <p className="text-sm">Prima di montare, il bambino impara a spazzolare, nutrire e prendersi cura del suo pony. Questo sviluppa empatia e responsabilità.</p>
                    </div>
                    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-emerald-900 font-bold mb-2">Equilibrio e Coordinazione</h4>
                      <p className="text-sm">Attraverso giochi in pista, i bambini migliorano la postura, il tono muscolare e la fiducia in se stessi.</p>
                    </div>
                  </div>
                </div>
 
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-800" />
                    2. Sicurezza e Professionalità (Garanzia FISE)
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Istruttori Certificati:</span> Lezioni tenute da tecnici della Federazione Italiana Sport Equestri (FISE).</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Equipaggiamento Adattato:</span> Pony selezionati per il loro carattere docile e attrezzatura di sicurezza (cap e corpetti) di ultima generazione.</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Strutture Protette:</span> Campi specifici per bambini, lontano dal transito dei cavalli più grandi.</span>
                    </li>
                  </ul>
                </div>
 
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-emerald-800" />
                    3. Programmi Disponibili
                  </h3>
                  <div className="grid gap-4">
                    {['Battesimo Equestre: Un primo contatto di 30 minuti per superare la paura.', 
                      'Corsi Trimestrali: Progressione tecnica dalla base fino ai primi salti.', 
                      'Centri Estivi (Campus): Immersione totale durante le vacanze scolastiche (dal lunedì al venerdì).'].map((text, i) => (
                      <div key={i} className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 text-sm">
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
 
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Info className="w-6 h-6 text-emerald-800" />
                    4. Dati Chiave per i Genitori
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Età</p>
                      <p className="text-lg font-bold text-stone-900">Dai 4 anni</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Durata</p>
                      <p className="text-lg font-bold text-stone-900">45 a 60 minuti</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Vantaggio SIULP</p>
                      <p className="text-lg font-bold text-emerald-800">Sconto Speciale</p>
                    </div>
                  </div>
                </div>
              </div>
 
              <div className="pt-12 border-t border-stone-100 text-center">
                <Quote className="w-10 h-10 text-emerald-800/20 mx-auto mb-6" />
                <p className="text-xl font-serif text-stone-900 italic mb-12">
                  "Non insegniamo a montare i pony, formiamo i cavalieri e i cittadini di domani secondo i valori dell'Agro Romano."
                </p>
                <button 
                  onClick={onClose}
                  className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-xl"
                >
                  Chiudi
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
                Salto Ostacoli: La Disciplina del Volo
              </h2>
              <p className="mt-6 text-lg italic text-stone-500 font-serif">
                "Tecnica, coraggio e una connessione perfetta in ogni battuta."
              </p>
            </div>
 
            <div className="space-y-12 text-stone-600 leading-relaxed">
              <p className="text-lg leading-relaxed">
                Il Salto Ostacoli è la disciplina regina dell'equitazione moderna. A Gli Arcacci, prepariamo cavalieri e cavalli per raggiungere il loro massimo potenziale sportivo, combinando il rigore della FISE con una preparazione fisica e mentale integrale.
              </p>
 
              <div className="grid gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Award className="w-6 h-6 text-emerald-800" />
                    1. Allenamento di Alto Rendimento
                  </h3>
                  <p className="text-sm">Il nostro programma di salto si focalizza sulla progressione logica e sicura del binomio.</p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-emerald-900 font-bold mb-2">Lavoro in Piano (Doma)</h4>
                      <p className="text-sm">La base di ogni salto è il controllo. Lavoriamo sull'elasticità, il ritmo e l'impulso prima di affrontare la barriera.</p>
                    </div>
                    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-emerald-900 font-bold mb-2">Ginnastica di Salto</h4>
                      <p className="text-sm">Esercizi di linee e combinazioni per migliorare la tecnica di battuta e il gesto del cavallo in aria.</p>
                    </div>
                  </div>
                </div>
 
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-800" />
                    2. Preparazione per la Competizione
                  </h3>
                  <p className="text-sm">Facciamo parte attiva del circuito di concorsi della Federazione Italiana Sport Equestri (FISE).</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Patenti e Licenze:</span> Ti accompagniamo nel processo di ottenimento delle patenti (A, B, G1, G2) per competere ufficialmente.</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Assistenza in Concorso:</span> Coaching personalizzato a bordo campo durante gli eventi regionali nel Lazio.</span>
                    </li>
                  </ul>
                </div>
 
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Landmark className="w-6 h-6 text-emerald-800" />
                    3. Strutture all'Avanguardia
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-emerald-900 font-bold mb-2">Campo in Sabbia Silicea</h4>
                      <p className="text-sm">Suolo tecnico con drenaggio perfetto per proteggere i tendini del cavallo durante la ricezione.</p>
                    </div>
                    <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-emerald-900 font-bold mb-2">Parco Ostacoli Completo</h4>
                      <p className="text-sm">Materiale da competizione regolamentare per simulare percorsi reali di concorso.</p>
                    </div>
                  </div>
                </div>
 
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Info className="w-6 h-6 text-emerald-800" />
                    4. Dettagli del Programma
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Pubblico</p>
                      <p className="text-sm font-bold text-stone-900">Intermedio / Avanzato</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Cavalli</p>
                      <p className="text-sm font-bold text-stone-900">Scuola o Propri</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">Frequenza</p>
                      <p className="text-sm font-bold text-stone-900">Individuale o Gruppo</p>
                    </div>
                  </div>
                </div>
 
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-stone-100">
                  <div className="flex flex-col items-center text-center p-4">
                    <Rocket className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Livello</p>
                    <p className="text-xs font-bold text-stone-900">Intermedio / Avanzato</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Trophy className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Obiettivo</p>
                    <p className="text-xs font-bold text-stone-900">Competizione FISE</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Landmark className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Suolo</p>
                    <p className="text-xs font-bold text-stone-900">Sabbia Tecnica</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <TrendingUp className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Progresso</p>
                    <p className="text-xs font-bold text-stone-900">Piano Personalizzato</p>
                  </div>
                </div>
              </div>
 
              <div className="pt-12 border-t border-stone-100 text-center">
                <Quote className="w-10 h-10 text-emerald-800/20 mx-auto mb-6" />
                <p className="text-xl font-serif text-stone-900 italic mb-12">
                  "Non saltiamo barriere, superiamo limiti. La nostra filosofia si basa sul fatto che un cavallo felice e ben muscolato è quello che salta meglio."
                </p>
                <button 
                  onClick={onClose}
                  className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-xl"
                >
                  Chiudi
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
              <span className="text-emerald-800 font-bold text-xs tracking-widest uppercase mb-4 block">Immersione Totale</span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                Centri Estivi: Estate nella Natura
              </h2>
              <p className="mt-6 text-lg italic text-stone-500 font-serif">
                "Più di un campo, un'avventura educativa nell'Agro Romano."
              </p>
            </div>
 
            <div className="space-y-12 text-stone-600 leading-relaxed">
              <p className="text-lg leading-relaxed">
                Quando le scuole chiudono, Gli Arcacci apre le sue porte per offrire un'esperienza di immersione totale. I nostri centri estivi sono progettati affinché i bambini e i giovani (dai 4 ai 16 anni) cambino gli schermi con il contatto diretto con il cavallo e la vita rurale.
              </p>
 
              <div className="grid gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Clock className="w-6 h-6 text-emerald-800" />
                    1. Una Giornata Tipica a Gli Arcacci
                  </h3>
                  <p className="text-sm">Il programma è equilibrato tra l'istruzione sportiva e la ricreazione:</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: 'Mattina Equestre', desc: 'Lezioni di equitazione adattate al livello di ogni bambino.' },
                      { title: 'Laboratori di Etologia', desc: 'Imparare a sellare, pulire e capire il cavallo.' },
                      { title: 'Giochi di Gruppo', desc: 'Attività all\'aria aperta che favoriscono il lavoro di squadra.' },
                      { title: 'Pranzo Salutare', desc: 'Menù equilibrati pensati per il dispendio energetico.' }
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
                    2. Educazione Ambientale e Rispetto
                  </h3>
                  <p className="text-sm">
                    Sfruttiamo la nostra posizione unica per realizzare trekking educativi nei dintorni del fosso vulcanico, insegnando ai bambini a identificare la flora e la fauna locale e l'importanza di preservare il patrimonio dell'Agro Romano.
                  </p>
                </div>
 
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-800" />
                    3. Sicurezza e Tranquillità per i Genitori
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                      <p className="font-bold text-stone-900 text-sm mb-1">Personale Qualificato</p>
                      <p className="text-xs">Animatori e tecnici FISE presenti sempre.</p>
                    </div>
                    <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                      <p className="font-bold text-stone-900 text-sm mb-1">Assicurazione Sportiva</p>
                      <p className="text-xs">Copertura completa per attività equestri.</p>
                    </div>
                    <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                      <p className="font-bold text-stone-900 text-sm mb-1">Flessibilità</p>
                      <p className="text-xs">Ingresso dalle 8:30 AM per logistica familiare.</p>
                    </div>
                  </div>
                </div>
 
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <Info className="w-6 h-6 text-emerald-800" />
                    4. Informazioni di Interesse
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Periodo:</span> Settimane di Giugno, Luglio e Settembre.</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Età:</span> Dai 4 ai 16 anni (divisi per gruppi di età).</span>
                    </li>
                    <li className="flex gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                      <span><span className="font-bold text-stone-900">Vantaggio Speciale:</span> Sconto esclusivo per figli di membri del SIULP e sconti per fratelli o settimane consecutive.</span>
                    </li>
                  </ul>
                </div>
 
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-stone-100">
                  <div className="flex flex-col items-center text-center p-4">
                    <Calendar className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Stagione</p>
                    <p className="text-xs font-bold text-stone-900">Giugno - Settembre</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Sun className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Orario</p>
                    <p className="text-xs font-bold text-stone-900">Giornata Intera</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Award className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Attività</p>
                    <p className="text-xs font-bold text-stone-900">Equitazione Quotidiana</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Trees className="w-8 h-8 text-emerald-800 mb-2" />
                    <p className="text-[10px] font-bold uppercase text-stone-400">Ambiente</p>
                    <p className="text-xs font-bold text-stone-900">100% Aria Aperta</p>
                  </div>
                </div>
              </div>
 
              <div className="pt-12 border-t border-stone-100 text-center">
                <Quote className="w-10 h-10 text-emerald-800/20 mx-auto mb-6" />
                <p className="text-xl font-serif text-stone-900 italic mb-12">
                  "Offriamo un'estate dove il bambino torna a casa stanco, felice e con un nuovo migliore amico a quattro zampe."
                </p>
                <button 
                  onClick={onClose}
                  className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-xl"
                >
                  Chiudi
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
                "La tua sicurezza e privacy sono la nostra priorità istituzionale."
              </p>
            </div>
 
            <div className="space-y-12 text-stone-600 leading-relaxed">
              <p className="text-lg leading-relaxed">
                Per partecipare alle nostre attività ippiche e sociali, è necessario completare e conoscere la seguente documentazione ufficiale. Puoi scaricare i moduli o richiederli nella nostra segreteria.
              </p>
 
              <div className="grid gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                    <FileText className="w-6 h-6 text-emerald-800" />
                    1. Scarico di Responsabilità (Waiver)
                  </h3>
                  <p className="text-sm">Dato che l'equitazione è considerata un'attività di rischio sportivo, questo documento è obbligatorio per tutti i cavalieri:</p>
                  <div className="grid gap-4">
                    {[
                      { title: 'Autorizzazione Minori', desc: 'Consenso firmato da genitori o tutori per la Scuola Pony e Centri Estivi.' },
                      { title: 'Certificato Medico', desc: 'Promemoria dell\'obbligatorietà del certificato medico di idoneità sportiva (non agonistica o agonistica a seconda del livello).' },
                      { title: 'Accettazione del Rischio', desc: 'Dichiarazione di conoscenza delle norme di sicurezza in pista e durante il Trekking di 6 ore.' }
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
                  <p className="text-sm">In conformità con il Regolamento UE 2016/679, informiamo sul trattamento dei tuoi dati:</p>
                  <div className="grid gap-4">
                    {[
                      { title: 'Finalità', desc: 'Gestione delle iscrizioni, assicurazioni federative (FISE) e comunicazione di orari/eventi.' },
                      { title: 'Diritti di Immagine', desc: 'Consenso specifico per la pubblicazione di foto di attività sportive sui nostri social media (fondamentale per i Centri Estivi).' },
                      { title: 'Protezione dei Dati', desc: 'I tuoi dati non saranno mai ceduti a terzi estranei alla federazione o ai servizi di emergenza in caso di necessità.' }
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
                      <p className="text-sm">Presentazione della tessera di affiliazione vigente per applicare gli sconti dall'11% al 20% su programmi selezionati.</p>
                      <Download className="w-5 h-5 text-emerald-800/40 group-hover:text-emerald-800 transition-colors shrink-0 ml-4" />
                    </div>
                  </div>
 
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                      <FileCheck className="w-6 h-6 text-emerald-800" />
                      4. Regolamento Interno ASD
                    </h3>
                    <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex justify-between items-center group cursor-pointer hover:border-emerald-800 transition-all">
                      <p className="text-sm">Norme di convivenza nel paddock e nelle scuderie. Uso obbligatorio del casco (Cap) e protezione della schiena.</p>
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
                  Chiudi
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
                      "Il primo passo verso il binomio perfetto inizia qui."
                    </p>
                  </div>

                  <div className="space-y-12 text-stone-600 leading-relaxed">
                    <p className="text-lg leading-relaxed">
                      Al Centro Ippico Gli Arcacci, la tua prima esperienza è progettata per essere sicura, educativa ed emozionante. Non importa se non hai mai toccato un cavallo o se cerchi di riprendere l'equitazione sportiva.
                    </p>

                    <div className="grid gap-12">
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                          <Star className="w-6 h-6 text-emerald-800" />
                          1. In cosa consiste la Prima Lezione? (Il Battesimo della Sella)
                        </h3>
                        <p className="text-sm font-bold text-emerald-900">Durata: 45 - 60 minuti.</p>
                        <ul className="space-y-3">
                          {[
                            'Breve introduzione etologica (conoscere il cavallo).',
                            'Preparazione e spazzolatura (creare il legame).',
                            'Sessione in pista: Equilibrio, posizione e primi comandi di direzione.',
                            'Obiettivo: Valutare il livello del cavaliere e assegnare il gruppo o programma più adatto.'
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
                          2. Cosa devi portare:
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                            <h4 className="text-emerald-900 font-bold mb-2">Tu porti:</h4>
                            <ul className="text-xs space-y-2">
                              <li>• Pantaloni lunghi comodi</li>
                              <li>• Calzature chiuse (stivali o scarpe con suola liscia)</li>
                            </ul>
                          </div>
                          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                            <h4 className="text-emerald-900 font-bold mb-2">Noi forniamo:</h4>
                            <ul className="text-xs space-y-2">
                              <li>• Casco (Cap) omologato</li>
                              <li>• Protezione per la schiena (se necessaria)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 pt-12 border-t border-stone-100">
                        <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider flex items-center gap-3">
                          <Send className="w-6 h-6 text-emerald-800" />
                          3. Modulo di Prenotazione Intelligente
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
                              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Nome del Cavaliere</label>
                              <input 
                                required 
                                name="nombre"
                                type="text" 
                                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:border-emerald-800 outline-none transition-all"
                                placeholder="Es: Mario Rossi"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Età</label>
                              <input 
                                required 
                                name="edad"
                                type="number" 
                                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:border-emerald-800 outline-none transition-all"
                                placeholder="Es: 8"
                              />
                            </div>
                          </div>
 
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Livello di Esperienza</label>
                            <div className="grid sm:grid-cols-3 gap-3">
                              {['Mai montato', 'Principiante', 'Avanzato'].map((lvl) => (
                                <label key={lvl} className="flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-2xl cursor-pointer hover:border-emerald-800 transition-all">
                                  <input type="radio" name="nivel" value={lvl} required className="accent-emerald-800" />
                                  <span className="text-sm font-medium">{lvl}</span>
                                </label>
                              ))}
                            </div>
                          </div>
 
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Programma di Interesse</label>
                              <select 
                                name="programa"
                                required
                                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:border-emerald-800 outline-none transition-all appearance-none"
                              >
                                <option value="">Seleziona un programma</option>
                                <option value="Scuola Pony">Scuola Pony</option>
                                <option value="Salto">Salto</option>
                                <option value="Trekking">Trekking</option>
                                <option value="Centri Estivi">Centri Estivi</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Data e Ora Preferita</label>
                              <input 
                                required 
                                name="fecha_hora"
                                type="datetime-local" 
                                className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:border-emerald-800 outline-none transition-all"
                              />
                            </div>
                          </div>
 
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Sei membro del SIULP?</label>
                            <div className="flex gap-6">
                              {['Sì', 'No'].map((opt) => (
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
      title: "Informativa sulla Privacy (GDPR)",
      icon: Shield,
      text: "I tuoi dati sono protetti secondo il Reg. UE 2016/679. Li utilizziamo esclusivamente per la gestione sportiva e assicurativa."
    },
    terms: {
      title: "Termini e Condizioni d'Uso - ASD Gli Arcacci",
      icon: FileText,
      text: "Accedendo alle nostre strutture o contrattando i nostri servizi (Trekking, Scuola o Salto), l'utente accetta le seguenti norme dell'Associazione:",
      details: [
        {
          title: "1. Requisiti di Salute e Sicurezza",
          items: [
            "Certificato Medico: È obbligatorio presentare un certificato medico di idoneità sportiva in corso di validità per svolgere qualsiasi attività equestre regolare.",
            "Attrezzatura Obbligatoria: Per normativa FISE, è strettamente obbligatorio l'uso del casco (cap) omologato e di calzature adeguate. Il centro si riserva il diritto di vietare la monta a chi non rispetti tali misure.",
            "Peso ed Età: Per garantire il benessere animale e la sicurezza del cavaliere, esistono limiti di peso ed età minima (4 anni) a seconda dell'attività."
          ]
        },
        {
          title: "2. Politica di Cancellazione (Prenotazioni)",
          items: [
            "Preavviso: Le lezioni o i percorsi di Trekking cancellati con meno di 24 ore di preavviso non saranno rimborsabili né recuperabili, salvo cause di forza maggiore giustificate.",
            "Condizioni Climatiche: In caso di pioggia estrema o allerta meteo nell'Agro Romano, il centro potrà riprogrammare l'attività per garantire la sicurezza di cavalieri e cavalli."
          ]
        },
        {
          title: "3. Condotta nel Centro",
          items: [
            "Benessere Animale: Qualsiasi maltrattamento fisico o verbale verso i cavalli comporterà l'espulsione immediata dal centro senza diritto a rimborso.",
            "Supervisione: I minori devono essere sempre sotto la supervisione di un adulto, tranne quando sono sotto la tutela diretta di un istruttore in pista."
          ]
        },
        {
          title: "4. Assicurazioni e Responsabilità",
          items: [
            "Affiliazione FISE: Tutti i nostri allievi devono essere in possesso della licenza federale in corso di validità, che include l'assicurazione obbligatoria contro gli infortuni sportivi.",
            "Esonero di Responsabilità: Il centro non è responsabile per la perdita o il danneggiamento di oggetti personali all'interno delle strutture o nel parcheggio accessibile."
          ]
        },
        {
          title: "5. Benefici Sociali (SIULP)",
          items: [
            "Gli sconti e le convenzioni sociali sono personali e intrasferibili. Sarà richiesta la convalida dell'identità e dell'appartenenza al sindacato tramite tessera ufficiale durante la prima sessione."
          ]
        }
      ]
    },
    cookies: {
      title: "Cookie",
      icon: Info,
      text: "Questo sito utilizza cookie tecnici minimi per migliorare la tua esperienza di navigazione."
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
                  Ho capito
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
