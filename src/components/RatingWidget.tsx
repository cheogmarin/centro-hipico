import React, { useState, useEffect } from 'react';
import { Star, Send, ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/NoEpWyHnc84o6bFQ7";
const STORAGE_KEY = 'gli_arcacci_rating';

export const RatingWidget: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');

  // Cargar estado inicial desde localStorage
  useEffect(() => {
    const savedRating = localStorage.getItem(STORAGE_KEY);
    if (savedRating) {
      const r = parseInt(savedRating, 10);
      setRating(r);
      if (r >= 4) setIsLocked(true);
    }
  }, []);

  const handleRatingClick = (value: number) => {
    // Regla de Oro: Si ya votó 1-3, solo puede votar 4 o 5.
    // Si ya votó 4-5, está bloqueado.
    if (isLocked) return;
    if (rating > 0 && rating < 4 && value <= rating) return;

    setRating(value);
    localStorage.setItem(STORAGE_KEY, value.toString());

    if (value >= 4) {
      setIsLocked(true);
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = "circoloippicogliarcacci@gmail.com";
    const subject = encodeURIComponent(`Feedback Gli Arcacci - ${rating} Estrellas`);
    const body = encodeURIComponent(comment);
    
    // Abrir cliente de correo
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
    setFeedbackSent(true);
  };

  const isStarDisabled = (value: number) => {
    if (isLocked) return true;
    if (rating > 0 && rating < 4) {
      return value <= 3; // Bloquea 1, 2 y 3 si ya hubo un voto bajo
    }
    return false;
  };

  return (
    <section className="w-full max-w-2xl mx-auto p-8 md:p-12 bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 my-12">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-serif text-stone-900 mb-3">Tu opinión nos hace crecer</h3>
        <p className="text-stone-500 text-sm italic">"La excelencia se construye escuchando a nuestros jinetes."</p>
      </div>

      {/* Estrellas */}
      <div className="flex justify-center gap-4 mb-10">
        {[1, 2, 3, 4, 5].map((star) => {
          const disabled = isStarDisabled(star);
          const active = (hoverRating || rating) >= star;
          
          return (
            <button
              key={star}
              disabled={disabled}
              onMouseEnter={() => !disabled && setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => handleRatingClick(star)}
              className={`relative p-2 transition-all duration-300 ${
                disabled ? 'opacity-30 cursor-not-allowed scale-90' : 'hover:scale-110 cursor-pointer'
              }`}
            >
              <Star 
                size={42} 
                strokeWidth={1.5}
                className={`transition-colors duration-300 ${
                  active ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-stone-300'
                }`}
              />
              {disabled && rating > 0 && rating < 4 && star <= rating && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[1px] bg-stone-400 rotate-45 opacity-50" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {/* Segmento Interno (1-3 estrellas) */}
        {rating > 0 && rating < 4 && !feedbackSent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-6"
          >
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200">
              <p className="text-stone-700 text-sm leading-relaxed">
                <strong>Lamentamos que tu experiencia no haya sido perfecta.</strong> Tu mensaje será enviado directamente a <strong>circoloippicogliarcacci@gmail.com</strong> para resolver cualquier inconveniente.
              </p>
            </div>
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <textarea
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Cuéntanos cómo podemos mejorar. Tu mensaje se enviará a circoloippicogliarcacci@gmail.com"
                className="w-full p-5 bg-white border border-stone-200 rounded-2xl text-stone-900 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all min-h-[120px]"
              />
              <button 
                type="submit"
                className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-colors"
              >
                <Send size={18} /> Enviar a circoloippicogliarcacci@gmail.com
              </button>
            </form>
          </motion.div>
        )}

        {/* Mensaje de Feedback Enviado */}
        {feedbackSent && rating < 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center p-8 bg-emerald-50 rounded-2xl border border-emerald-100"
          >
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-emerald-900 font-bold mb-2">Gracias por ayudarnos a mejorar</h4>
            <p className="text-emerald-700 text-sm">Tu mensaje ha sido preparado para enviarse a <strong>circoloippicogliarcacci@gmail.com</strong>. Por favor, asegúrate de completar el envío en tu aplicación de correo.</p>
          </motion.div>
        )}

        {/* Segmento Público (4-5 estrellas) */}
        {rating >= 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-10 bg-[#D4AF37]/5 rounded-[2rem] border border-[#D4AF37]/20"
          >
            <div className="mb-6 inline-flex p-4 bg-[#D4AF37]/10 rounded-full">
              <Award className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <h4 className="text-2xl font-serif text-stone-900 mb-4">¡Gracias por tu confianza!</h4>
            <p className="text-stone-600 text-sm mb-8 leading-relaxed">
              Tu valoración positiva es el mejor reconocimiento para nuestro equipo y nuestros caballos. ¿Nos ayudas compartiéndolo en Google?
            </p>
            <button 
              onClick={() => window.open(GOOGLE_MAPS_URL, '_blank')}
              className="w-full bg-[#D4AF37] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-lg shadow-[#D4AF37]/20"
            >
              Publicar reseña oficial en Google <ExternalLink size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Award = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
