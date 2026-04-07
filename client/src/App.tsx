import React from 'react';
import { Truck, Wrench, Shield, Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#1A2332] text-white overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#FF8C00] text-white text-sm font-semibold px-6 py-2 rounded-full mb-6"
            >
              <Truck className="w-5 h-5" />
              FINAL MILE INSTALL
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tighter mb-6">
              Expert Installation.<br />
              <span className="text-[#FF8C00]">Done Right.</span>
            </h1>
            
            <p className="max-w-xl text-xl text-gray-300 mb-10">
              Fast, reliable final-mile delivery and professional installation services. 
              Your equipment, installed perfectly — every time.
            </p>

            <div className="flex gap-4">
              <a href="#contact" 
                 className="bg-[#FF8C00] hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105">
                Get a Quote Today
              </a>
              <a href="#services" 
                 className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-lg transition-all">
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12">Services We Deliver</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Final Mile Delivery", desc: "White-glove delivery to your doorstep or job site" },
              { icon: Wrench, title: "Professional Install", desc: "Certified technicians handle setup and configuration" },
              { icon: Shield, title: "Full Service", desc: "Removal of old equipment + recycling included" }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1A2332] p-8 rounded-3xl border border-white/10 hover:border-[#FF8C00]/30 transition-all group"
              >
                <service.icon className="w-12 h-12 text-[#FF8C00] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FF8C00]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold text-[#1A2332] mb-6">Ready for flawless installation?</h2>
          <p className="text-[#1A2332] text-2xl mb-10">Call us now or get an instant quote online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:555-123-4567" 
               className="flex items-center gap-3 bg-[#1A2332] text-white px-10 py-6 rounded-3xl text-2xl font-semibold hover:scale-105 transition-all">
              <Phone className="w-7 h-7" />
              (555) 123-4567
            </a>
            <button className="px-12 py-6 border-2 border-[#1A2332] text-[#1A2332] font-semibold rounded-3xl text-2xl hover:bg-[#1A2332] hover:text-white transition-all">
              Get Instant Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] py-12 text-gray-400">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" /> Serving your area • Licensed & Insured
          </p>
          <p className="mt-6 text-sm">© 2026 Final Mile Install. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
