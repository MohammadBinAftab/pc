import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Play, Mail, MessageCircle, 
  BarChart3, TrendingUp, Users, Video, Camera, Award, Star, Quote, ChevronRight
} from 'lucide-react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

// --- DATA ---
const brands = [
  { name: 'Flipkart', logo: '/logos/flipkart.png' },
  { name: 'Country Delight', logo: '/logos/country-delight.png' },
  { name: 'Hamdard', logo: '/logos/hamdard.png' },
  { name: 'Usha Cooks', logo: '/logos/usha-cook.png' },
  { name: 'Nestasia', logo: '/logos/nestasia.png' },
  { name: 'Dominos', logo: '/logos/dominos.png' },
  { name: 'AGARO', logo: '/logos/agaro.png' },
  { name: 'Pintola', logo: '/logos/pintola.png' },
  { name: 'Troovy', logo: '/logos/troovy.png' },
];

const ageData = [
  { name: '18–24', value: 38.4 },
  { name: '25–34', value: 37.7 },
  { name: '13–17', value: 9.5 },
  { name: '35–44', value: 9.5 },
  { name: 'Others', value: 4.9 },
];

const genderData = [
  { name: 'Female', value: 77.1 },
  { name: 'Male', value: 22.9 },
];

const cityData = [
  { name: 'Delhi', value: 4.6 },
  { name: 'Mumbai', value: 2.8 },
  { name: 'Ahmedabad', value: 2.6 },
  { name: 'Bangalore', value: 2.3 },
];

const testimonials = [
  {
    brand: "Nestasia",
    role: "Marketing Manager",
    quote: "Poonam's content brought our products to life in a way that felt authentic and highly engaging. The campaign delivered exceptional reach and meaningful audience interaction."
  },
  {
    brand: "Hamdard",
    role: "Brand Partnerships Lead",
    quote: "Working with Poonam was seamless and results-driven. Her trusted voice and beautifully crafted videos helped us connect naturally with our target audience."
  }
];

const services = [
  { title: "Instagram Reels", icon: <FaInstagram className="w-6 h-6" /> },
  { title: "YouTube Shorts", icon: <TrendingUp className="w-6 h-6" /> },
  { title: "Dedicated Recipe Videos", icon: <Video className="w-6 h-6" /> },
  { title: "Product Integrations", icon: <Award className="w-6 h-6" /> },
  { title: "UGC Content", icon: <Camera className="w-6 h-6" /> },
  { title: "Story Promotions", icon: <MessageCircle className="w-6 h-6" /> },
  { title: "Event Coverage", icon: <Star className="w-6 h-6" /> },
  { title: "Brand Photography", icon: <Camera className="w-6 h-6" /> }
];

const COLORS = ['#e65c00', '#2e4034', '#f2c14e', '#d1d5db', '#9ca3af'];

// --- ANIMATION VARIANTS ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ brand: '', goals: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brand.trim()) {
      return;
    }
    
    const message = `Hi Poonam's Cookery Team! 👋\n\nI am reaching out from *${formData.brand}*.\n\n*Our Campaign Goals:*\n${formData.goals || "Not specified yet."}\n\nWe would love to request your media kit and discuss potential rates.`;
    const whatsappUrl = `https://wa.me/919477353657?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-text">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-heading font-black text-brand-secondary">
            Poonam's <span className="text-brand-primary">Cookery</span>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-brand-secondary hover:text-brand-primary font-medium transition-colors">About</a>
            <a href="#dashboard" className="text-brand-secondary hover:text-brand-primary font-medium transition-colors">Performance</a>
            <a href="#services" className="text-brand-secondary hover:text-brand-primary font-medium transition-colors">Services</a>
          </div>
          <a href="#contact" className="bg-brand-primary hover:bg-[#cc5200] text-white px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap">
            Work With Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-50 via-transparent to-transparent opacity-80 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-50 via-transparent to-transparent opacity-80 -z-10"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-brand-primary font-semibold text-sm mb-6 shadow-sm">
                <Star className="w-4 h-4 fill-brand-primary" /> Premium Creator Portfolio
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 text-brand-secondary">
                Turning Food Content Into <span className="text-brand-primary italic">High-Performing</span> Brand Campaigns.
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-brand-muted mb-10 leading-relaxed text-balance font-light">
                Aesthetic food storytelling that inspires millions and drives authentic engagement across Instagram and YouTube.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4 mb-20">
                <a href="#contact" className="bg-brand-secondary hover:bg-black text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 text-lg">
                  Book a Campaign <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#dashboard" className="bg-white border-2 border-brand-secondary text-brand-secondary hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all text-lg">
                  View Dashboard
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {[
              { label: 'Total Followers', value: '2.46M+' },
              { label: 'Monthly Views', value: '97M+' },
              { label: 'YouTube Subscribers', value: '19.27L+' },
              { label: 'Female Audience', value: '77.1%' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-soft border border-white text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-secondary mb-2 flex justify-center items-baseline">
                  <span>{stat.value}</span>
                </div>
                <div className="text-sm font-medium text-brand-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-12 border-y border-gray-100 bg-white overflow-hidden relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="marquee-container w-full">
          <div className="animate-marquee flex items-center min-w-max gap-16 md:gap-24 px-8 opacity-80">
            {[...brands, ...brands].map((brand, idx) => (
              <div key={idx} className="flex items-center gap-2 group transition-transform duration-300 hover:scale-110">
                 <img src={brand.logo} alt={brand.name} className={`object-contain ${['Nestasia', 'AGARO', 'Pintola'].includes(brand.name) ? 'h-20 md:h-24 mx-4' : 'h-12 md:h-16'}`} />
                 <span className="hidden font-heading font-bold text-2xl text-brand-secondary">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Introduction */}
      <section id="about" className="py-24 px-6 relative bg-brand-light">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group flex bg-white"
            >
              <img src="/creators/creator.jpg" alt="Maa-Beti Duo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop" }} />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white p-6 rounded-[2rem] shadow-2xl pointer-events-none border border-gray-100">
                  <h3 className="text-3xl font-heading font-bold mb-2 text-brand-secondary">Maa-Beti Duo</h3>
                  <p className="text-brand-muted font-medium">Founders, Poonam's Cookery</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeIn} className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4">The Creators</motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-heading font-bold mb-6 text-brand-secondary">Meet the Maa-Beti Duo</motion.h2>
              <motion.div variants={fadeIn} className="w-20 h-1 bg-brand-primary mb-8 rounded-full"></motion.div>
              
              <motion.p variants={fadeIn} className="text-lg text-brand-muted mb-6 leading-relaxed">
                We are a leading food creator duo known for elegant recipe videos, approachable cooking tutorials, and authentic storytelling. Our content combines visual aesthetics with practical recipes that resonate deeply with home cooks and food lovers across India.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-brand-muted mb-8 leading-relaxed">
                With a highly engaged audience and millions of monthly views, we help brands connect naturally with consumers through trusted recommendations.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm font-medium text-brand-secondary border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" /> Aesthetic Content
                </div>
                <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm font-medium text-brand-secondary border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" /> High Trust
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Dashboard */}
      <section id="dashboard" className="py-24 px-6 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-bl from-orange-50 to-transparent opacity-50 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-brand-secondary">Performance Dashboard</h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">Scale, engagement, and consistent viral reach across all major platforms.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* YouTube Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white shadow-soft border border-gray-100 rounded-[2rem] p-8 hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[100%] -z-10 transition-transform group-hover:scale-110"></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                  <FaYoutube className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-secondary">YouTube</h3>
                  <p className="text-brand-muted text-sm">Primary Engine</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-brand-muted text-sm mb-1">Subscribers</p>
                  <p className="text-3xl font-heading font-bold text-brand-secondary">1.9M+</p>
                </div>
                <div>
                  <p className="text-brand-muted text-sm mb-1">Monthly Views</p>
                  <p className="text-3xl font-heading font-bold text-brand-secondary">~65M+</p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between text-sm">
                  <span className="text-brand-muted">Shorts & Long-Form</span>
                  <span className="text-brand-primary font-semibold">High Retention</span>
                </div>
              </div>
            </motion.div>

            {/* Instagram Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{...fadeIn, hidden: {opacity:0, y:20, transition:{delay: 0.2}}}} className="bg-white shadow-soft border border-gray-100 rounded-[2rem] p-8 hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-[100%] -z-10 transition-transform group-hover:scale-110"></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center">
                  <FaInstagram className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-secondary">Instagram</h3>
                  <p className="text-brand-muted text-sm">Visual Storytelling</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-brand-muted text-sm mb-1">Followers</p>
                  <p className="text-3xl font-heading font-bold text-brand-secondary">370k+</p>
                </div>
                <div>
                  <p className="text-brand-muted text-sm mb-1">Avg. Reel Views</p>
                  <p className="text-3xl font-heading font-bold text-brand-secondary">589K+</p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between text-sm">
                  <span className="text-brand-muted">Engagement</span>
                  <span className="text-brand-primary font-semibold">Above Industry Avg</span>
                </div>
              </div>
            </motion.div>

            {/* Combined Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{...fadeIn, hidden: {opacity:0, y:20, transition:{delay: 0.4}}}} className="bg-gradient-to-br from-brand-primary to-[#ff7a1f] text-white shadow-soft rounded-[2rem] p-8 hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100%] -z-10 transition-transform group-hover:scale-110"></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Combined</h3>
                  <p className="text-orange-100 text-sm">Total Footprint</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-orange-100 text-sm mb-1">Total Followers</p>
                  <p className="text-4xl font-heading font-bold text-white">2.46M+</p>
                </div>
                <div>
                  <p className="text-orange-100 text-sm mb-1">Monthly Impressions</p>
                  <p className="text-4xl font-heading font-bold text-white">97M+</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audience Demographics */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-brand-secondary">Audience Demographics</h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">Connecting with a highly engaged, young, urban female audience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Age */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-brand-light rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-brand-secondary flex items-center gap-2"><Users className="w-5 h-5 text-brand-primary"/> Age Distribution</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={ageData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {ageData.map((_entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <RechartsTooltip formatter={(value) => `${value}%`} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-y-3 mt-4 text-sm font-medium">
                {ageData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                    {item.name}: {item.value}%
                  </div>
                ))}
              </div>
              <p className="text-xs text-brand-muted mt-6 italic">Strong reach among 18-34 demographic (76.1%).</p>
            </motion.div>

            {/* Gender */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-brand-light rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-brand-secondary flex items-center gap-2"><Users className="w-5 h-5 text-brand-primary"/> Gender Split</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={genderData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      <Cell fill="#e65c00" />
                      <Cell fill="#2e4034" />
                    </Pie>
                    <RechartsTooltip formatter={(value) => `${value}%`} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-8 mt-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
                  Female: 77.1%
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-secondary"></div>
                  Male: 22.9%
                </div>
              </div>
              <p className="text-xs text-brand-muted mt-6 text-center italic">Massive female-first household decision maker audience.</p>
            </motion.div>

            {/* Cities */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-brand-light rounded-3xl p-8 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-8 text-brand-secondary flex items-center gap-2"><TrendingUp className="w-5 h-5 text-brand-primary"/> Top Cities</h3>
              <div className="space-y-6 flex-grow">
                {cityData.map((city, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>{city.name}</span>
                      <span className="text-brand-primary">{city.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: `${(city.value / 4.6) * 100}%` }} transition={{ duration: 1, delay: idx * 0.1 }}
                        className="bg-brand-secondary h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-brand-muted mt-8 italic">Dominant presence across tier-1 urban centers.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YouTube Powerhouse */}
      <section className="py-24 px-6 bg-brand-light relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="md:w-1/2">
              <motion.div variants={fadeIn} className="flex items-center gap-2 text-red-600 font-bold tracking-wider uppercase text-sm mb-4">
                <FaYoutube className="w-6 h-6" /> Platform Deep-Dive
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-heading font-bold mb-6 text-brand-secondary">YouTube: A Powerful Growth Engine</motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-brand-muted mb-8 leading-relaxed">
                Our YouTube channel isn't just about massive scale—it's about incredibly deep audience retention and a proven ability to push products natively within highly-watched content.
              </motion.p>
              
              <div className="space-y-4">
                {[
                  { title: "Shorts Performance", value: "6.3 Crore Views (Last 28 Days)" },
                  { title: "Long-Form Views", value: "1.1 Lakh+ (Last 28 Days)" },
                  { title: "Avg. Watch Retention", value: "2 Mins 37 Secs+" }
                ].map((stat, idx) => (
                  <motion.div key={idx} variants={fadeIn} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                    <span className="font-medium text-brand-secondary">{stat.title}</span>
                    <span className="font-bold text-brand-primary">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="md:w-1/2 relative">
              <a href="https://www.youtube.com/shorts/qEnhMi9D3bk" target="_blank" rel="noreferrer" className="block aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative bg-black group cursor-pointer">
                <img src="https://img.youtube.com/vi/qEnhMi9D3bk/maxresdefault.jpg" alt="YouTube Growth" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-all shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                    <Play className="w-8 h-8 fill-white text-white" />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                   <div className="bg-white/90 backdrop-blur p-4 rounded-xl flex items-center gap-4">
                     <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center"><FaYoutube className="w-6 h-6"/></div>
                     <div>
                       <p className="font-bold text-brand-secondary">Trending #1</p>
                       <p className="text-sm text-brand-muted">Consistent viral recipe formats</p>
                     </div>
                   </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured In / Achievements */}
      <section className="py-24 px-6 bg-brand-light relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-soft border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
            <motion.div variants={fadeIn} className="md:w-1/2 w-full">
              <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl relative bg-black group">
                <img src="https://img.youtube.com/vi/tIT0HfUJP2Q/maxresdefault.jpg" alt="Josh Talks" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a href="https://www.youtube.com/watch?v=tIT0HfUJP2Q" target="_blank" rel="noreferrer" className="w-20 h-20 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-2 hover:scale-110 transition-all shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                    <Play className="w-8 h-8 fill-white text-white" />
                  </a>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">
                    Featured Speaker
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="md:w-1/2">
              <div className="flex items-center gap-2 text-brand-primary font-bold tracking-wider uppercase text-sm mb-4">
                <Award className="w-6 h-6" /> Milestone Achievement
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-brand-secondary">Josh Talks Feature</h2>
              <p className="text-lg text-brand-muted mb-8 leading-relaxed">
                Poonam's inspiring journey of turning a passion for cooking into a massive digital empire was recently featured on Josh Talks, inspiring millions of women across India to pursue their dreams.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://www.youtube.com/watch?v=tIT0HfUJP2Q" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-[#cc5200] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
                  Watch the Full Talk <Play className="w-4 h-4 fill-white" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Viral Content Showcase */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-brand-secondary">Top Performing Content</h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto mb-16">Creating viral moments that command attention.</p>
          </motion.div>

          <div className="bg-brand-light rounded-[3rem] p-8 md:p-12 shadow-soft border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
            {/* Reel Mockup */}
            <div className="w-full md:w-[350px] shrink-0 relative rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-[9/16]">
               <img src="/reel-thumbnail.png" alt="Viral Reel Thumbnail" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                 <a href="https://www.instagram.com/reel/DIOjbeZS7Hp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer" className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-medium border border-white/40 flex items-center gap-2 hover:bg-white/30 transition-colors">
                   <FaInstagram className="w-5 h-5" /> Watch on Instagram
                 </a>
               </div>
            </div>

            {/* Metrics */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Views', value: '44M+' },
                { label: 'Likes', value: '1.3M' },
                { label: 'Saves', value: '630k' },
                { label: 'Shares', value: '970k' }
              ].map((stat, idx) => (
                <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-2">{stat.value}</div>
                  <div className="text-brand-secondary font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section id="services" className="py-24 px-6 bg-brand-light">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-brand-secondary">Services Offered</h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">Comprehensive content solutions for forward-thinking brands.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center gap-4 group"
              >
                <div className="w-16 h-16 bg-orange-50 text-brand-primary rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-brand-secondary">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Brands Love Working With Us */}
      <section className="py-24 px-6 bg-brand-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[100px] opacity-20 -mr-40 -mt-40"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Why Brands Choose Poonam's Cookery</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We don't just create videos; we engineer brand moments that build trust and drive action among our highly loyal audience.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-[#cc5200] text-white px-8 py-4 rounded-full font-semibold transition-all">
                Let's Collaborate <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
              {[
                "Organic Integrations", "High Audience Trust", "Aesthetic Content", 
                "Strong Engagement", "Family-Friendly Audience", "Cross-Platform Visibility", "Authentic Storytelling"
              ].map((point, idx) => (
                <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" />
                  <span className="font-medium text-lg">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-brand-secondary">Client Testimonials</h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">What marketing leaders say about working with us.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-brand-light p-10 rounded-[2.5rem] relative">
                <Quote className="absolute top-8 right-8 w-16 h-16 text-brand-primary opacity-10" />
                <p className="text-xl text-brand-secondary font-medium leading-relaxed mb-8 relative z-10 italic">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                    <img src={`/logos/${test.brand.toLowerCase().replace(' ', '-')}.png`} alt={test.brand} className="w-10 h-10 object-contain" onError={(e) => e.currentTarget.style.display='none'} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary text-lg">{test.brand}</h4>
                    <p className="text-sm text-brand-muted">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-brand-light border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-[40px] shadow-soft overflow-hidden grid md:grid-cols-2">
            <div className="p-8 sm:p-12 md:p-16 bg-brand-secondary text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
              <h2 className="text-4xl md:text-5xl mb-6 text-white relative z-10 font-heading font-bold">Let's Create Something Delicious Together.</h2>
              <p className="text-gray-300 text-lg mb-10 relative z-10">Partner with Poonam's Cookery to craft visually stunning campaigns that inspire millions and drive measurable results.</p>
              
              <div className="space-y-6 relative z-10">
                <a href="mailto:vpoonam529@gmail.com" className="flex items-center gap-3 md:gap-4 text-sm sm:text-base md:text-xl font-medium hover:text-brand-accent transition-colors">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="truncate">vpoonam529@gmail.com</span>
                </a>
                <a href="https://wa.me/919477353657" target="_blank" rel="noreferrer" className="flex items-center gap-3 md:gap-4 text-base md:text-xl font-medium hover:text-brand-accent transition-colors">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-green-500/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                  </div>
                  <span>+91 94773 53657</span>
                </a>
              </div>
            </div>
            
            <div className="p-8 sm:p-12 md:p-16">
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-brand-secondary mb-2">Brand / Company Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.brand}
                    onChange={(e) => setFormData({...formData, brand: e.target.value})}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" 
                    placeholder="E.g., Flipkart" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-secondary mb-2">Campaign Goals</label>
                  <textarea 
                    rows={4} 
                    value={formData.goals}
                    onChange={(e) => setFormData({...formData, goals: e.target.value})}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none" 
                    placeholder="Tell us what you want to achieve..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-primary hover:bg-[#cc5200] text-white font-bold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  Request Media Kit & Rates <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-6">
          <a href="#" className="text-2xl font-heading font-black text-brand-secondary mb-6 inline-block">
            Poonam's <span className="text-brand-primary">Cookery</span>
          </a>
          <p className="text-brand-muted text-sm">&copy; {new Date().getFullYear()} Poonam's Cookery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
