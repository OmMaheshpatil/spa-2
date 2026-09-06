import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { openWhatsApp, getPhoneLink } from '../utils/whatsapp';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SITE_CONFIG.services[0]?.name || '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 animate-fade-in bg-espresso-950 min-h-screen text-stone-200">
      
      {/* Header */}
      <section className="bg-espresso-900 text-white py-16 px-4 text-center border-b border-stone-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            RESERVATIONS & ENQUIRIES
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide">
            Contact Concierge
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Reach out directly via phone or WhatsApp for instant reservation assistance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-espresso-900 rounded-3xl p-8 border border-stone-800 shadow-xl space-y-6">
              <h2 className="font-serif text-2xl text-white border-b border-stone-800 pb-3">
                Spa Concierge Details
              </h2>

              <ul className="space-y-5 text-xs text-stone-300">
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-espresso-950 text-gold-400 flex items-center justify-center shrink-0 border border-gold-400/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-stone-500 text-[10px] uppercase tracking-wider">Phone Reservation</span>
                    <a href={getPhoneLink()} className="text-sm font-medium text-white hover:text-gold-400">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-stone-500 text-[10px] uppercase tracking-wider">WhatsApp Instant Chat</span>
                    <button
                      onClick={() => openWhatsApp()}
                      className="text-sm font-medium text-emerald-400 hover:underline text-left block"
                    >
                      Click to WhatsApp ({SITE_CONFIG.whatsappNumber})
                    </button>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-espresso-950 text-gold-400 flex items-center justify-center shrink-0 border border-gold-400/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-stone-500 text-[10px] uppercase tracking-wider">Email Concierge</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm font-medium text-white hover:text-gold-400">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-espresso-950 text-gold-400 flex items-center justify-center shrink-0 border border-gold-400/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-stone-500 text-[10px] uppercase tracking-wider">Sanctuary Address</span>
                    <p className="text-xs text-stone-300 leading-relaxed font-medium mt-0.5">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <a
                  href={getPhoneLink()}
                  className="py-3 px-4 bg-gold-400 hover:bg-gold-500 text-espresso-950 text-xs font-bold uppercase tracking-wider rounded-xl text-center transition-colors flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Phone className="w-3.5 h-3.5 fill-espresso-950" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-espresso-950 hover:bg-stone-800 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider rounded-xl text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-gold-400" />
                  <span>MAPS</span>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-espresso-900 rounded-3xl p-8 border border-stone-800 space-y-4">
              <h3 className="font-serif text-xl text-gold-400 border-b border-stone-800 pb-2">
                Opening Hours
              </h3>
              <ul className="space-y-3 text-xs text-stone-300">
                {SITE_CONFIG.openingHours.map((sched, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span className="font-medium text-white">{sched.days}</span>
                    <span className="text-gold-400">{sched.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-espresso-900 rounded-3xl p-8 sm:p-10 border border-stone-800 shadow-xl space-y-6">
              
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gold-400">
                  RESERVATION REQUEST
                </span>
                <h2 className="font-serif text-3xl text-white mt-1">
                  Book Your Appointment
                </h2>
                <p className="text-xs text-stone-400 mt-1 font-light">
                  Submit your preference below or open our dedicated Google Form.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-espresso-950 rounded-2xl p-8 border border-stone-800">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl text-white">Request Received!</h3>
                  <p className="text-xs text-stone-300 max-w-md mx-auto">
                    Thank you, {formData.name || 'Guest'}. We have received your booking request for {formData.service}. Our spa manager will call or WhatsApp you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-gold-400 text-espresso-950 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-gold-500 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sneha Sharma"
                      className="w-full px-4 py-3 text-xs rounded-xl bg-espresso-950 border border-stone-800 text-white focus:border-gold-400 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 text-xs rounded-xl bg-espresso-950 border border-stone-800 text-white focus:border-gold-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sneha@example.com"
                        className="w-full px-4 py-3 text-xs rounded-xl bg-espresso-950 border border-stone-800 text-white focus:border-gold-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-300 mb-1">
                      Select Service / Package
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-xs rounded-xl bg-espresso-950 border border-stone-800 text-white focus:border-gold-400 outline-none"
                    >
                      {SITE_CONFIG.services.map((svc) => (
                        <option key={svc.id} value={svc.name}>
                          {svc.name} ({svc.duration}) - {SITE_CONFIG.currencySymbol}{svc.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-300 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-xs rounded-xl bg-espresso-950 border border-stone-800 text-white focus:border-gold-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-300 mb-1">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-xs rounded-xl bg-espresso-950 border border-stone-800 text-white focus:border-gold-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-300 mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify any physical tightness or focus areas..."
                      className="w-full px-4 py-3 text-xs rounded-xl bg-espresso-950 border border-stone-800 text-white focus:border-gold-400 outline-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-espresso-950 font-bold text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      SUBMIT APPOINTMENT REQUEST
                    </button>

                    <a
                      href={SITE_CONFIG.googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 border border-stone-800 hover:border-gold-400 text-stone-300 text-xs font-semibold uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-gold-400" />
                      OPEN GOOGLE BOOKING FORM
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Google Maps Visual Embed Frame Placeholder */}
        <div className="bg-espresso-900 rounded-3xl p-6 border border-stone-800 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="font-serif text-xl text-white">Sanctuary Location Map</h3>
              <p className="text-xs text-stone-400">{SITE_CONFIG.address}</p>
            </div>
            <a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gold-400 text-espresso-950 text-xs font-bold uppercase tracking-wider rounded-full transition-colors flex items-center gap-2"
            >
              <Navigation className="w-3.5 h-3.5" />
              Open Google Maps Directions
            </a>
          </div>

          <div className="w-full h-80 rounded-2xl bg-espresso-950 relative overflow-hidden flex items-center justify-center text-center p-6 border border-stone-800">
            <div className="space-y-3 max-w-md z-10 text-white">
              <MapPin className="w-10 h-10 text-gold-400 mx-auto animate-bounce" />
              <h4 className="font-serif text-xl text-white">{SITE_CONFIG.businessName}</h4>
              <p className="text-xs text-stone-300 font-light">{SITE_CONFIG.address}</p>
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gold-400 text-espresso-950 font-bold text-[11px] uppercase tracking-wider rounded-full hover:brightness-110"
              >
                Click to Navigate via Google Maps
              </a>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-900/80 to-espresso-950 opacity-90" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default ContactPage;
