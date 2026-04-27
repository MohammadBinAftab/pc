import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Users, Video, Award, ArrowRight, CheckCircle2, ChevronRight, Mail } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// --- DATA ---
const stats = [
  { label: 'YouTube Subscribers', value: '1.9M+', icon: <Video className="w-6 h-6 text-brand-primary" />, color: 'bg-red-50' },
  { label: 'Daily Views', value: '10M', icon: <TrendingUp className="w-6 h-6 text-brand-accent" />, color: 'bg-orange-50' },
  { label: 'Instagram Followers', value: '366k', icon: <Users className="w-6 h-6 text-pink-500" />, color: 'bg-pink-50' },
  { label: 'Facebook Followers', value: '180k', icon: <Users className="w-6 h-6 text-blue-500" />, color: 'bg-blue-50' },
];

const brands = [
  { name: 'Flipkart', logo: '/logos/flipkart.png' },
  { name: 'Country Delight', logo: '/logos/country-delight.png' },
  { name: 'Hamdard', logo: '/logos/hamdard.png' },
  { name: 'Usha Cooks', logo: '/logos/usha-cooks.png' },
  { name: 'Nestasia', logo: '/logos/nestasia.png' },
  { name: 'Dominos', logo: '/logos/dominos.png' },
];

const caseStudies = [
  {
    title: 'Festive Season Sales Blast',
    brand: 'Flipkart',
    logo: '/logos/flipkart.png',
    results: [
      { metric: '₹16 Lacs+', label: 'Direct Sales Generated' },
      { metric: '1 Month', label: 'Campaign Duration' },
      { metric: '300%', label: 'ROI Estimate' }
    ],
    description: 'We integrated top-selling kitchen appliances seamlessly into our festive recipe series, driving high-intent traffic directly to Flipkart during their biggest sale event.',
    isComingSoon: false,
  },
  {
    title: 'Premium Cookware Launch',
    brand: 'Nestasia',
    logo: '/logos/nestasia.png',
    results: [
      { metric: 'TBA', label: 'Impressions' },
      { metric: 'TBA', label: 'Conversions' },
    ],
    description: 'A dedicated, aesthetic-focused recipe video showcasing the elegance and utility of Nestasia\'s new cookware line.',
    isComingSoon: true,
  },
  {
    title: 'Daily Dairy Integration',
    brand: 'Country Delight',
    logo: '/logos/country-delight.png',
    results: [
      { metric: 'TBA', label: 'New Subscribers' },
      { metric: 'TBA', label: 'Reach' },
    ],
    description: 'A 60-second integrated placement demonstrating the freshness of Country Delight milk in traditional Indian sweets.',
    isComingSoon: true,
  }
];

const viewsData = [
  { month: 'Oct', views: 210 },
  { month: 'Nov', views: 245 },
  { month: 'Dec', views: 280 },
  { month: 'Jan', views: 260 },
  { month: 'Feb', views: 290 },
  { month: 'Mar', views: 310 },
];

const demoData = [
  { name: '18-24', value: 25 },
  { name: '25-34', value: 45 },
  { name: '35-44', value: 20 },
  { name: '45+', value: 10 },
];
const COLORS = ['#e65c00', '#f2c14e', '#2e4034', '#a3b18a'];


// --- ANIMATION VARIANTS ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};


// --- COMPONENTS ---
export default function App() {
  const [scrolled, setScrolled] = useState(false);

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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-heading font-black text-brand-secondary">
            Poonam's <span className="text-brand-primary">Cookery</span>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-brand-secondary hover:text-brand-primary font-medium transition-colors">About</a>
            <a href="#analytics" className="text-brand-secondary hover:text-brand-primary font-medium transition-colors">Analytics</a>
            <a href="#case-studies" className="text-brand-secondary hover:text-brand-primary font-medium transition-colors">Case Studies</a>
          </div>
          <a href="#contact" className="bg-brand-primary hover:bg-[#cc5200] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Work With Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100 via-transparent to-transparent opacity-70 -z-10"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-brand-primary font-semibold text-sm mb-6">
                <Award className="w-4 h-4" /> Maa-Beti Duo
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-heading font-black leading-tight mb-6 text-brand-secondary">
                We turn recipes into <span className="text-brand-primary">revenue</span> for brands.
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-brand-muted mb-8 leading-relaxed text-balance">
                Partner with one of India's most trusted culinary creators. We deliver massive reach, authentic engagement, and measurable ROI.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <a href="#analytics" className="bg-brand-secondary hover:bg-black text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  View Portfolio <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <p className="text-sm font-semibold text-brand-muted uppercase tracking-wider mb-1">Total Audience Network</p>
                    <h3 className="text-4xl font-black font-heading text-brand-secondary">12.4M+</h3>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={viewsData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                      <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Line type="monotone" dataKey="views" stroke="#e65c00" strokeWidth={4} dot={false} activeDot={{r: 8}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent rounded-full opacity-20 blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-primary rounded-full opacity-10 blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-12 border-y border-gray-200 bg-white overflow-hidden relative">
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <p className="text-center text-sm font-semibold text-brand-muted uppercase tracking-widest mb-10">Trusted by industry leaders</p>
        
        <div className="marquee-container w-full">
          {/* We duplicate the array to create a seamless loop */}
          <div className="animate-marquee flex items-center min-w-max gap-16 md:gap-24 px-8">
            {[...brands, ...brands, ...brands].map((brand, idx) => (
              <div key={idx} className="flex items-center gap-2 group transition-transform duration-300 hover:scale-110">
                 <img src={brand.logo} alt={brand.name} className="h-16 md:h-24 object-contain" onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.nextElementSibling?.classList.remove('hidden');
                 }}/>
                 <span className="hidden font-heading font-black text-2xl md:text-3xl text-brand-secondary">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Josh Talks Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.a 
              href="https://www.youtube.com/watch?v=tIT0HfUJP2Q"
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer block"
            >
              <img src="https://img.youtube.com/vi/tIT0HfUJP2Q/maxresdefault.jpg" alt="Poonam speaking at Josh Talks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity group-hover:bg-black/50">
                <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(230,92,0,0.5)]">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-brand-secondary flex items-center gap-2 text-sm shadow-md">
                Featured on <span className="text-red-600 font-black tracking-tight text-lg leading-none">JOSH<span className="text-black">TALKS</span></span>
              </div>
            </motion.a>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeIn} className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4">The Creator</motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl mb-6">Authentic cooking that resonates.</motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-brand-muted mb-6">
                Hi, I'm Poonam. What started as a simple passion for sharing authentic family recipes has grown into a community of millions. Our content is focused on accessible, delicious, and highly engaging food that connects deeply with Indian households.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-brand-muted mb-8">
                Our audience trusts us because we keep it real. When we recommend a product or ingredient, our viewers don't just watch—they take action.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex gap-4">
                <div className="bg-white px-6 py-4 rounded-2xl shadow-soft border border-orange-50 flex-1">
                  <div className="text-3xl font-black font-heading text-brand-primary mb-1">500+</div>
                  <div className="text-sm font-semibold text-brand-secondary">Recipes Shared</div>
                </div>
                <div className="bg-white px-6 py-4 rounded-2xl shadow-soft border border-orange-50 flex-1">
                  <div className="text-3xl font-black font-heading text-brand-primary mb-1">High</div>
                  <div className="text-sm font-semibold text-brand-secondary">Engagement Rate</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-24 px-6 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Massive Reach. Real Influence.</h2>
            <p className="text-xl text-brand-muted">Data-driven results that prove our ability to capture attention and drive conversions.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="bg-brand-light p-6 rounded-3xl border border-gray-100 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black font-heading text-brand-secondary mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-brand-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-brand-light p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Monthly Viewership Growth</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={viewsData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Bar dataKey="views" fill="#f2c14e" radius={[6, 6, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-brand-light p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Audience Age</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={demoData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {demoData.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                {demoData.map((entry, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                    {entry.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 px-6 bg-brand-light relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 rounded-l-[100px] -z-10"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Proven Results.</h2>
            <p className="text-xl text-brand-muted max-w-2xl">Don't just take our word for it. See how we've helped leading brands achieve their marketing goals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className={`rounded-3xl border ${study.isComingSoon ? 'bg-white/50 border-dashed border-gray-300 opacity-80' : 'bg-white shadow-soft border-gray-100'} p-8 relative overflow-hidden group`}
              >
                {study.isComingSoon && (
                  <div className="absolute top-6 right-6 bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Coming Soon
                  </div>
                )}
                
                <div className="mb-6 h-12 flex items-center">
                  <img src={study.logo} alt={study.brand} className={`max-h-10 object-contain ${study.isComingSoon ? 'grayscale opacity-50' : ''}`} onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}/>
                  <span className={`hidden font-heading font-bold text-xl ${study.isComingSoon ? 'text-gray-400' : 'text-brand-secondary'}`}>{study.brand}</span>
                </div>
                
                <h3 className={`text-2xl mb-4 ${study.isComingSoon ? 'text-gray-600' : 'text-brand-secondary'}`}>{study.title}</h3>
                <p className={`mb-8 line-clamp-3 ${study.isComingSoon ? 'text-gray-400' : 'text-brand-muted'}`}>{study.description}</p>
                
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  {study.results.map((result, rIdx) => (
                    <div key={rIdx} className="flex justify-between items-end">
                      <span className={`text-sm font-semibold ${study.isComingSoon ? 'text-gray-400' : 'text-brand-muted'}`}>{result.label}</span>
                      <span className={`font-heading font-black text-xl ${study.isComingSoon ? 'text-gray-500' : 'text-brand-primary'}`}>{result.metric}</span>
                    </div>
                  ))}
                </div>

                {!study.isComingSoon && (
                  <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors">
                    Plan similar campaign <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Packages Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl mb-4">Ways to Collaborate</h2>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto mb-16">Tailored integration packages designed to meet your specific marketing objectives.</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Package 1 */}
            <div className="bg-brand-light rounded-3xl p-8 border border-gray-100 text-left hover:shadow-soft transition-all">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Video className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-2xl mb-2">Dedicated Video</h3>
              <p className="text-brand-muted mb-6 h-12">An 8-10 minute recipe video centered entirely around your product.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> <span className="text-sm font-medium">Deep product showcase</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> <span className="text-sm font-medium">High viewer retention</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> <span className="text-sm font-medium">Links in description & pinned</span></li>
              </ul>
            </div>
            
            {/* Package 2 */}
            <div className="bg-brand-secondary rounded-3xl p-8 border border-gray-100 text-left shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-2xl mb-2 text-white">Integrated Placement</h3>
              <p className="text-gray-300 mb-6 h-12">A seamless 60-90s shoutout within our regular high-performing recipes.</p>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" /> <span className="text-sm font-medium">Natural, authentic feel</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" /> <span className="text-sm font-medium">Massive view counts</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" /> <span className="text-sm font-medium">Cost-effective ROI</span></li>
              </ul>
            </div>

            {/* Package 3 */}
            <div className="bg-brand-light rounded-3xl p-8 border border-gray-100 text-left hover:shadow-soft transition-all">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Play className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-2xl mb-2">Shorts & Reels</h3>
              <p className="text-brand-muted mb-6 h-12">Fast-paced vertical content optimized for virality and discovery.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> <span className="text-sm font-medium">Cross-platform (YT, IG, FB)</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> <span className="text-sm font-medium">Trend-driven formats</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> <span className="text-sm font-medium">Quick turnaround</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-brand-light border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-[40px] shadow-soft overflow-hidden grid md:grid-cols-2">
            <div className="p-12 md:p-16 bg-brand-secondary text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
              <h2 className="text-4xl md:text-5xl mb-6 text-white relative z-10">Let's grow your brand.</h2>
              <p className="text-gray-300 text-lg mb-10 relative z-10">Ready to tap into an audience of millions? Drop us a line and let's create a campaign that drives real results.</p>
              
              <div className="space-y-6 relative z-10">
                <a href="mailto:poonambusiness85@gmail.com" className="flex items-center gap-4 text-xl font-medium hover:text-brand-accent transition-colors">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  poonambusiness85@gmail.com
                </a>
              </div>
            </div>
            
            <div className="p-12 md:p-16">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-brand-secondary mb-2">Brand / Company Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" placeholder="e.g. Flipkart" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-secondary mb-2">Work Email</label>
                  <input type="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-secondary mb-2">Campaign Goals</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none" placeholder="Tell us what you want to achieve..."></textarea>
                </div>
                <button className="w-full bg-brand-primary hover:bg-[#cc5200] text-white font-bold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  Send Inquiry <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-6">
          <a href="#" className="text-2xl font-heading font-black text-brand-secondary mb-4 inline-block">
            Poonam's <span className="text-brand-primary">Cookery</span>
          </a>

          <p className="text-brand-muted text-sm">&copy; {new Date().getFullYear()} Poonam's Cookery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
