
import React, { useState } from 'react';

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', details: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Construir el mensaje de WhatsApp
    const phoneNumber = "50683636725"; // Código de Costa Rica + número
    const message = `Hola, mi nombre es ${formData.name}. Me gustaría consultar sobre: ${formData.details}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Simulamos un pequeño retraso para feedback visual antes de abrir la comunicación
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setStatus('success');
      setFormData({ name: '', details: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 800);
  };

  return (
    <div className="mt-16 p-8 bg-neutral-light border border-primary/5 rounded-sm shadow-sm max-w-lg">
      <h3 className="text-2xl font-serif italic mb-6 text-primary">Agendar Consulta</h3>
      
      {status === 'success' ? (
        <div className="bg-accent/10 border border-accent/20 p-6 rounded-sm text-primary text-sm animate-fade-in-up">
          <p className="font-bold mb-2">¡Consulta enviada con éxito!</p>
          <p className="font-light">Si la ventana de contacto no se abrió automáticamente, puedes llamarnos o escribirnos directamente al 8363-6725.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold text-secondary/60 mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-primary/10 focus:border-accent outline-none transition-colors text-sm font-light"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="details" className="block text-[10px] uppercase tracking-widest font-bold text-secondary/60 mb-2">
              Detalles de la consulta
            </label>
            <textarea
              id="details"
              required
              rows={4}
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-primary/10 focus:border-accent outline-none transition-colors text-sm font-light resize-none"
              placeholder="¿Qué tour te interesa? ¿Para cuántas personas?"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 bg-primary text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-secondary transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === 'sending' ? (
              'Enviando...'
            ) : (
              'Enviar Consulta'
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ConsultationForm;
