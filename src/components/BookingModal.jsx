import React, { useState } from 'react';
import { X, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SITE_CONFIG.services[0]?.name || '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-espresso-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in text-stone-900">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-gold-400/40 my-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gold-700">
            {SITE_CONFIG.businessName}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-stone-900 mt-1">
            Reserve Your Appointment
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Choose your preferred treatment and timing. No advance payment required.
          </p>
        </div>

        {formSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-2xl text-stone-900">Booking Request Received!</h4>
            <p className="text-xs text-stone-600 max-w-sm mx-auto">
              Thank you, {formData.name || 'Guest'}. Our spa manager will call or WhatsApp you shortly to confirm your slot for {formData.service}.
            </p>
            <button
              onClick={() => {
                setFormSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-espresso-900 text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-gold-700 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sneha Sharma"
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-stone-300 focus:border-gold-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-stone-300 focus:border-gold-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Select Treatment
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-stone-300 focus:border-gold-500 outline-none bg-white"
                >
                  {SITE_CONFIG.services.map((svc) => (
                    <option key={svc.id} value={svc.name}>
                      {svc.name} ({svc.duration}) - {SITE_CONFIG.currencySymbol}{svc.price}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-stone-300 focus:border-gold-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-stone-300 focus:border-gold-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                Special Requests / Notes
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention any physical tightness or focus areas..."
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-stone-300 focus:border-gold-500 outline-none"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                type="submit"
                className="w-full py-3 bg-espresso-950 hover:bg-gold-700 text-white font-semibold text-xs uppercase tracking-[0.2em] rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                Submit Reservation Request
              </button>

              <a
                href={SITE_CONFIG.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 border border-stone-300 hover:border-gold-500 text-stone-700 text-xs font-semibold uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open External Google Booking Form
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
