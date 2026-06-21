/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Wrench,
  Flame,
  Calendar,
  Settings,
  Droplet,
  Zap,
  Home,
  MessageSquare
} from 'lucide-react';

import logoImg from './assets/images/dparks_logo_1782061024224.jpg';
import heroBg from './assets/images/hero_boiler_bg_1782061042764.jpg';
import radiatorImg from './assets/images/gallery_radiator_1782061063937.jpg';
import underfloorImg from './assets/images/gallery_underfloor_heating_1782061081406.jpg';
import bathroomImg from './assets/images/gallery_bathroom_1782061098638.jpg';

// Sub-components (could be in separate files for large projects)
// I'll define them here for better visibility in this turn, 
// then move to separate files if App.tsx gets too big.

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border-2 border-amber-500 overflow-hidden">
               <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-tight text-white`}>D.Parks</span>
              <span className={`text-[10px] uppercase tracking-widest font-semibold text-amber-500`}>Plumbing & Heating</span>
            </div>
          </a>

          {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium hover:text-white transition-colors ${isScrolled ? 'text-slate-400' : 'text-white/70'}`}
              >
                {item}
              </a>
            ))}
            <a href="tel:+447597109910" className="btn-primary flex items-center gap-2 text-sm !py-2 !px-5">
              <Phone size={14} />
              07597 109910
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-blue-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
            <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden pt-24 px-6 bg-slate-950"
          >
            <div className="flex flex-col gap-6 text-center">
              {['Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-bold text-white hover:text-amber-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="tel:+447597109910" className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-xl mt-4">
                <Phone size={24} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:h-screen flex items-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Professional Boiler Installation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative z-10 section-padding pt-28 pb-10 md:pt-20 text-white">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500 text-amber-400 px-4 py-1.5 rounded-full text-[10px] md:text-sm font-bold mb-4 md:mb-6">
                <ShieldCheck size={14} className="md:w-4 md:h-4" />
                OVER 15 YEARS EXPERIENCE
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight mb-4 md:mb-6">
                Professional Plumbing & Heating in <span className="text-amber-400">Beverley</span>
              </h1>
              <p className="text-base md:text-xl text-blue-50/80 mb-6 md:mb-10 leading-relaxed max-w-2xl">
                D.Parks Plumbing & Heating provides expert gas, LPG, and plumbing services across East Yorkshire. Trusted, reliable, and always open.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="btn-secondary !px-6 !py-3 md:!px-8 md:!py-4 text-base md:text-lg flex items-center justify-center gap-2"
                >
                  Get a Free Quote
                  <ArrowRight size={18} />
                </button>
                <a 
                  href="tel:+447597109910" 
                  className="btn-outline !px-6 !py-3 md:!px-8 md:!py-4 text-base md:text-lg flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  07597 109910
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { label: 'Gas Safe Registered', icon: ShieldCheck },
                { label: 'LPG Certified', icon: Flame },
                { label: 'Boiler Specialist', icon: Settings },
                { label: '24/7 Support', icon: Clock },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center md:items-start gap-2">
                  <item.icon size={24} className="text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-100/60">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding py-24 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10">
               <img 
                src={underfloorImg} 
                alt="Working on heating system" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-500 rounded-2xl -z-0 hidden md:block" />
            <div className="absolute -top-6 -left-6 bg-slate-900 border-2 border-amber-500 p-8 rounded-2xl shadow-xl z-20 text-white">
              <div className="text-5xl font-black mb-1 text-amber-500">15+</div>
              <div className="text-sm font-bold uppercase tracking-tighter leading-tight text-slate-400">Years of<br />Excellence</div>
            </div>
          </div>
          
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">About Our Company</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Your Local Heating & Gas Experts</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              D.Parks Plumbing & Heating has been serving Beverley, East Yorkshire, and the surrounding areas for over 15 years. We pride ourselves on delivering premium quality workmanship with a personal, reliable touch.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Specialists in Gas & LPG Boiler Repairs',
                'Comprehensive Servicing & Annual Checks',
                'Expert Boiler Installations with Warranty',
                'Local, Family-Run Business Values'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={20} />
                  <span className="font-semibold text-slate-200">{point}</span>
                </div>
              ))}
            </div>
            <a href="tel:+447597109910" className="btn-primary inline-flex items-center gap-2">
              Speak with David
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-900/50 py-24 scroll-mt-20 border-y border-slate-800">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Services</h2>
            <p className="text-lg text-slate-400">
              From emergency repairs to full central heating installations, we cover everything you need to keep your home warm and running smoothly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Boiler Installation', desc: 'Expert installation of high-efficiency boilers with manufacturers\' warranties.', icon: Settings },
              { title: 'Boiler Servicing', desc: 'Comprehensive annual servicing to keep your boiler running safely and efficiently.', icon: Calendar },
              { title: 'Boiler Repairs', desc: 'Fast diagnostic and repair services for all major boiler brands.', icon: Wrench },
              { title: 'Gas & LPG Work', desc: 'Certified to work on both natural gas and LPG systems across residential properties.', icon: Flame },
              { title: 'Central Heating', desc: 'Full heating system design, installation, and radiator upgrades.', icon: Zap },
              { title: 'Emergency Plumbing', desc: '24/7 response for leaks, burst pipes, and urgent plumbing issues.', icon: Droplet },
              { title: 'Radiator Installation', desc: 'Modern and designer radiator installations with efficient pipework.', icon: Home },
              { title: 'Leak Detection', desc: 'Non-invasive leak detection and immediate professional repair.', icon: Droplet },
              { title: 'Bathroom Plumbing', desc: 'Full plumbing installation for luxury and modern bathroom renovations.', icon: Droplet }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-900/80 p-8 rounded-2xl shadow-sm border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 scroll-mt-20">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Showcasing Our Quality</h2>
            </div>
            <button 
               onClick={() => setIsQuoteModalOpen(true)}
               className="btn-primary whitespace-nowrap"
            >
              Start Your Project
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: radiatorImg, title: 'Modern Radiator Upgrade', cat: 'Heating' },
              { img: underfloorImg, title: 'Underfloor Heating Install', cat: 'Heating' },
              { img: bathroomImg, title: 'Luxury Bathroom Renovation', cat: 'Bathrooms' },
              { img: heroBg, title: 'High-Efficiency Boiler', cat: 'Boilers' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">{item.cat}</span>
                  <h4 className="text-white text-xl font-bold">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-blue-950 py-24 scroll-mt-20 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px]" />
        </div>
        
        <div className="section-padding relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Thompson', text: 'David came out on short notice to fix a boiler breakdown. Professional, clean, and resolved it quickly. Highly recommend!', rating: 5, location: 'Beverley' },
              { name: 'Mark Evans', text: 'Excellent service! D.Parks installed a new system. Tidy work and very efficient. Great value too.', rating: 5, location: 'Hull' },
              { name: 'Helen Richards', text: 'Used for annual boiler servicing for 3 years now. Always on time, friendly, and gives great advice.', rating: 5, location: 'Yorkshire' }
            ].map((review, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 p-10 rounded-3xl backdrop-blur-sm">
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[...Array(5)].map((_, i) => <Zap key={i} size={16} className="fill-amber-500" />)}
                </div>
                <p className="text-slate-200 text-lg italic mb-8 leading-relaxed">"{review.text}"</p>
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">{review.name}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Verified Customer • {review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 scroll-mt-20 border-t border-slate-800">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Ready to Discuss Your Project?</h2>
              <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                Whether it's a minor leak or a full heating installation, we're here to help. Reach out via the form, or give us a call directly.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">Call Us Directly</div>
                    <a href="tel:+447597109910" className="text-amber-500 font-semibold hover:underline">+44 7597 109910</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">Email Us</div>
                    <a href="mailto:david.parks1992@hotmail.com" className="text-amber-500 font-semibold hover:underline">david.parks1992@hotmail.com</a>
                  </div>
                </div>
              </div>

              {/* Mock Map Placeholder */}
              <div className="w-full h-64 bg-slate-900/50 rounded-3xl border border-slate-800 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 text-slate-700 group-hover:text-amber-500 transition-colors">
                  <MapPin size={40} />
                  <span className="font-bold uppercase tracking-widest text-[10px]">Managed Local Area: Beverley & East Yorkshire</span>
                </div>
                <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />
              </div>
            </div>

            <div className="bg-slate-900/80 p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! Your message has been sent. We will get back to you shortly.');
                  console.log('Form submitted');
                }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input type="text" required placeholder="Enter your name" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                    <input type="tel" required placeholder="07123 456789" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Service Needed</label>
                  <select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all appearance-none">
                    <option className="bg-slate-900">Boiler Installation</option>
                    <option className="bg-slate-900">Boiler Servicing</option>
                    <option className="bg-slate-900">Boiler Repairs</option>
                    <option className="bg-slate-900">Emergency Plumbing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                  <textarea rows={4} placeholder="How can we help?" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all placeholder:text-slate-600"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-1">
              <a href="#" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center border border-amber-400 overflow-hidden">
                   <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl leading-tight">D.Parks</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-500">Plumbing & Heating</span>
                </div>
              </a>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Your trusted local experts for all plumbing, gas, and heating needs across Beverley and East Yorkshire.
              </p>
              <div className="flex gap-4">
                {/* Social icons could go here */}
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors cursor-pointer">
                  <MessageSquare size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors cursor-pointer">
                  <Phone size={18} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Boiler Installation</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Boiler Servicing</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Emergency Plumbing</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Gas & LPG Work</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Our Work</a></li>
                <li><a href="#testimonials" className="hover:text-amber-500 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <Phone size={18} className="text-amber-500" />
                  <a href="tel:+447597109910">07597 109910</a>
                </li>
                <li className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <Mail size={18} className="text-amber-500" />
                  <a href="mailto:david.parks1992@hotmail.com">david.parks@hotmail.com</a>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <MapPin size={18} className="text-amber-500" />
                  <span>Beverley, East Yorkshire</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
            <p>© {new Date().getFullYear()} D.Parks Plumbing & Heating. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setIsQuoteModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-slate-900 w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <div className="p-8 md:p-12 relative text-white">
                <button 
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400"
                  onClick={() => setIsQuoteModalOpen(false)}
                >
                  <X size={24} />
                </button>
                <h3 className="text-3xl font-bold mb-4">Request a Free Quote</h3>
                <p className="text-slate-400 mb-8">Enter your details and David will get in touch with a professional estimate for your project.</p>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsQuoteModalOpen(false);
                    alert('Request received! David will contact you soon.');
                  }}
                  className="space-y-5"
                >
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Name</label>
                    <input required type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                    <input required type="tel" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Preferred Time to Call</label>
                    <select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-all appearance-none">
                      <option className="bg-slate-900">As soon as possible</option>
                      <option className="bg-slate-900">Morning (8am - 12pm)</option>
                      <option className="bg-slate-900">Afternoon (12pm - 5pm)</option>
                      <option className="bg-slate-900">Evening (5pm - 8pm)</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-lg mt-4">Submit Request</button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating CTA (Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href="tel:+447597109910"
          className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
}
