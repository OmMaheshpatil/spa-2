/**
 * ============================================================================
 * OM LUXURY SPA & WELLNESS - CENTRALIZED CLIENT CONFIGURATION (TEMPLATE #2)
 * ============================================================================
 */

export const SITE_CONFIG = {
  // Brand Identity
  businessName: "OM LUXURY SPA & WELLNESS",
  tagline: "Where serenity meets body renewal.",
  city: "Thane",
  locationBadge: "Thane",
  
  // Contact Details
  phone: "+91 77384 17257",
  whatsappNumber: "917738417257", // No spaces or + sign
  email: "hello@omluxuryspa.com",
  address: "Thane, Maharashtra",
  
  // External Integration URLs
  googleMapsUrl: "https://maps.google.com/?q=Thane+Maharashtra",
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-demo-form/viewform?embedded=true",
  
  // Social Media Links
  instagramUrl: "https://instagram.com/omluxuryspa_demo",
  facebookUrl: "https://facebook.com/omluxuryspa_demo",

  // Currency & Business Details
  currencySymbol: "₹",
  
  // Floating Offer Widget (Bottom-Left)
  offerWidget: {
    agentName: "Dishu",
    agentStatus: "Online now",
    badge: "Special Offer Today!",
    title: "UPTO 35% OFF",
    subtitle: "on all services",
    buttonText: "🎁 Claim Offer & Book Now",
    whatsappMessage: "Hi OM Luxury Spa, I am interested in the UPTO 35% OFF special offer. Please share today's availability."
  },

  // Hero Carousel Slides
  heroSlides: [
    {
      id: 1,
      titlePrefix: "Best Spa in",
      titleHighlight: "Thane",
      description: "Slow down, breathe deeper and reconnect with yourself. Discover thoughtful wellness experiences created to restore your body, mind and everyday balance.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85",
      ctaText: "Explore Treatments"
    },
    {
      id: 2,
      titlePrefix: "Best Services",
      titleHighlight: "Available",
      description: "Leave the everyday behind and enjoy a peaceful wellness experience designed to relax your body, refresh your mind and restore your natural sense of balance.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=85",
      ctaText: "View Signature Treatments"
    },
    {
      id: 3,
      titlePrefix: "Signature Wellness",
      titleHighlight: "Rituals",
      description: "Experience pure therapeutic indulgence with our Swedish, Deep Tissue, Thai, Jacuzzi, and Aromatherapy massage experiences.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=85",
      ctaText: "Book Your Slot Today"
    }
  ],

  // Opening Hours
  openingHours: [
    { days: "Monday – Sunday", hours: "10:00 AM – 10:00 PM" }
  ],

  // Trust Stats Bar
  heroStats: [
    { number: "10,000+", label: "Happy Guests" },
    { number: "5,000+", label: "Wellness Sessions" },
    { number: "98%", label: "Guest Satisfaction" }
  ],

  // Services List with Inline Call & WhatsApp Actions
  services: [
    {
      id: "swedish-massage",
      name: "Swedish Massage",
      duration: "60–90 min",
      price: 2499,
      category: "Massages",
      popular: true,
      description: "Soothing full-body Swedish stroke therapy using organic warm oils to relieve stress and muscle tension.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "deep-tissue-massage",
      name: "Deep Tissue Massage",
      duration: "60–90 min",
      price: 2999,
      category: "Massages",
      popular: true,
      description: "Intense pressure therapy targeting chronic muscle tightness, sports strain, and postural fatigue.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "aromatherapy-massage",
      name: "Aromatherapy Massage",
      duration: "60 min",
      price: 2799,
      category: "Massages",
      popular: false,
      description: "Custom essential oil blends infused with gentle rhythmic massage to calm your sensory nervous system.",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "thai-massage",
      name: "Thai Massage",
      duration: "60–90 min",
      price: 3199,
      category: "Therapies",
      popular: false,
      description: "Ancient assisted stretching and point pressure therapy to awaken body flexibility and vital energy.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "jacuzzi-massage",
      name: "Jacuzzi Massage",
      duration: "60–90 min",
      price: 3999,
      category: "Hydrotherapy",
      popular: true,
      description: "Hydrotherapeutic warm water jet massage combined with soothing neck and shoulder relaxation.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "couples-massage",
      name: "Couples Massage",
      duration: "60–90 min",
      price: 5499,
      category: "Packages",
      popular: true,
      description: "Side-by-side aromatherapy massage in a private romantic suite complete with foot ritual and herbal tea.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
    }
  ],

  // Special Offers Section
  offers: [
    {
      id: 1,
      title: "Relaxation Ritual Package",
      badge: "POPULAR",
      discount: "35% OFF",
      description: "Full body Swedish massage (60 min) + Foot reflexology + Organic tea infusion.",
      originalPrice: 4500,
      offerPrice: 2899,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Premium Spa Escape",
      badge: "SIGNATURE",
      discount: "30% OFF",
      description: "Deep tissue tension relief + Signature facial care + Private Jacuzzi hydrotherapy.",
      originalPrice: 6500,
      offerPrice: 4499,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Gallery Photos
  gallery: [
    {
      id: 1,
      title: "Luxury Reception Lounge",
      category: "SPA INTERIORS",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Therapeutic Massage Suite",
      category: "TREATMENTS",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Hydrotherapy Jacuzzi Suite",
      category: "SPA INTERIORS",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      title: "Botanical Skincare Room",
      category: "WELLNESS",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      title: "Candlelit Relaxation Corridor",
      category: "AMBIENCE",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 6,
      title: "Aromatherapy Essential Oil Lounge",
      category: "WELLNESS",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80"
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      quote: "One of the best spa experiences in Thane. The atmosphere is serene and the therapists are exceptionally skilled.",
      author: "Sneha R.",
      role: "Thane Resident",
      rating: 5
    },
    {
      id: 2,
      quote: "The Deep Tissue massage completely relieved my neck and back tightness. Highly recommend OM Luxury Spa!",
      author: "Vikram P.",
      role: "Regular Visitor",
      rating: 5
    },
    {
      id: 3,
      quote: "Clean, luxurious, and peaceful. The WhatsApp booking process was instant and super convenient.",
      author: "Kavita M.",
      role: "Guest",
      rating: 5
    }
  ]
};
