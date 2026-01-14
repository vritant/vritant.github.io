
import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Linkedin, 
  Mail, 
  Phone,
  Plus, 
  Minus,
  Coffee,
  Music,
  Leaf,
  Beaker,
  Sword,
  Award,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import { BIO_MARKDOWN, EXPERIENCES, ARTICLES, HOBBIES, FEATURED_PROJECT, EDUCATION, ACHIEVEMENTS } from './constants';

const SimpleMarkdown: React.FC<{ content: string; small?: boolean; isDark: boolean }> = ({ content, small, isDark }) => {
  const lines = content.split('\n');
  const textColor = isDark ? 'text-white' : 'text-black';
  return (
    <div className={small ? "space-y-3 md:space-y-4" : "space-y-5 md:space-y-6"}>
      {lines.map((line, i) => {
        if (line.startsWith('# ')) return (
          <h1 key={i} className={`${small ? "text-2xl md:text-3xl lg:text-4xl" : "text-4xl md:text-5xl lg:text-7xl"} font-black mb-3 md:mb-4 tracking-tighter leading-[0.95] md:leading-[0.85] ${textColor} uppercase brand-font`}>
            {line.replace('# ', '')}
          </h1>
        );
        if (line.trim() === '') return null;
        
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={i} className={`${small ? "text-sm md:text-base lg:text-lg" : "text-lg md:text-xl lg:text-2xl"} ${textColor} font-light leading-snug`}>
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} className={`${textColor} font-bold`}>{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
};

const App: React.FC = () => {
  const [showHobbies, setShowHobbies] = useState(false);
  // Initialize theme from localStorage, default to dark
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme !== 'light';
  });

  useEffect(() => {
    // Set initial body class immediately
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, []);

  useEffect(() => {
    // Update body class and localStorage when theme changes
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const bgCard = isDark ? 'bg-[#111111]' : 'bg-white';
  const bgCard2 = isDark ? 'bg-[#141414]' : 'bg-gray-50';
  const bgCard3 = isDark ? 'bg-[#0f0f0f]' : 'bg-gray-100';
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-slate-800/50' : 'border-gray-300';
  const borderColorDivider = isDark ? 'border-white/[0.03]' : 'border-black/10';
  const iconBg = isDark ? 'bg-white text-black' : 'bg-black text-white';
  const iconBorder = isDark ? 'border-white/20' : 'border-black/20';
  const socialHover = isDark ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white';
  const cardHover = isDark ? 'hover:bg-zinc-800/10' : 'hover:bg-gray-100';
  const tagBg = isDark ? 'bg-zinc-900' : 'bg-gray-200';
  const tagBorder = isDark ? 'border-zinc-800' : 'border-gray-300';
  const tagText = isDark ? 'text-indigo-300' : 'text-indigo-600';
  const expandButton = isDark ? 'bg-white text-black' : 'bg-black text-white';
  const expandButtonHover = isDark ? 'group-hover:bg-white group-hover:text-black' : 'group-hover:bg-black group-hover:text-white';
  const expandBorder = isDark ? 'border-white' : 'border-black';
  const hobbiesBg = isDark ? 'bg-black' : 'bg-gray-50';
  const hobbiesBorder = isDark ? 'border-zinc-900' : 'border-gray-200';
  const footerBorder = isDark ? 'border-white/5' : 'border-black/10';
  const imageBorder = isDark ? 'border-white/10' : 'border-black/10';
  const imageBg = isDark ? 'bg-zinc-900' : 'bg-gray-200';
  const externalLinkBg = isDark ? 'bg-black/60' : 'bg-white/80';
  const achievementBg = isDark ? 'bg-white/5' : 'bg-black/5';
  const achievementBorder = isDark ? 'border-white/5' : 'border-black/5';
  const dotBg = isDark ? 'bg-slate-800' : 'bg-gray-400';

  return (
    <div className="max-w-[1600px] mx-auto space-y-3 py-2 px-3 md:px-8 md:py-4 pb-14 md:pb-16">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 z-50 w-12 h-12 rounded-full ${isDark ? 'bg-white text-black' : 'bg-black text-white'} flex items-center justify-center hover:scale-110 transition-all shadow-xl border-2 ${isDark ? 'border-white/20' : 'border-black/20'}`}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      {/* Row 1: Intro (40%) & Professional Journey / Education (30% each) */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1.5fr] gap-3 items-stretch">
        {/* Intro Tile (40%) */}
        <div className={`slide-card p-3 md:p-4 lg:p-6 flex flex-col justify-center ${bgCard} border-indigo-500/10`}>
          <SimpleMarkdown content={BIO_MARKDOWN} small isDark={isDark} />
          <div className={`flex flex-wrap gap-3 mt-5 pt-4 border-t ${borderColor}`}>
            <a 
              href="https://linkedin.com/in/vritant" 
              target="_blank" 
              className={`w-11 h-11 rounded-full ${iconBg} flex items-center justify-center hover:scale-110 transition-all shadow-xl`}
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:adarshvritant@gmail.com" 
              className={`w-11 h-11 rounded-full border ${iconBorder} ${textColor} flex items-center justify-center ${socialHover} hover:scale-110 transition-all`}
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919881122114" 
              className={`w-11 h-11 rounded-full border ${iconBorder} ${textColor} flex items-center justify-center ${socialHover} hover:scale-110 transition-all`}
              title="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Journey Card (30%) */}
        <div className={`slide-card px-3 md:px-4 lg:px-8 pt-3 md:pt-4 lg:pt-8 pb-3 lg:pb-4 flex flex-col justify-between ${bgCard2}`}>
          <div className="flex justify-between items-start mb-5">
            <h3 className={`text-xl md:text-2xl lg:text-3xl font-black brand-font leading-[0.9] ${textColor} uppercase tracking-tighter`}>
              Professional<br/>Journey.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-0.5 mt-3 lg:mt-4">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className={`flex gap-2 group cursor-default items-center py-1 border-b ${borderColorDivider} last:border-0 lg:border-0`}>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col">
                    <span className={`${textColor} font-black text-[13px] lg:text-[15px] uppercase tracking-tight leading-tight group-hover:text-indigo-400 transition-colors truncate`}>
                      {exp.role}
                    </span>
                    <div className="flex items-center gap-x-1.5 mt-0.5">
                      <span className={`${textColor} font-bold text-[11px] uppercase tracking-widest truncate`}>
                        {exp.company}
                      </span>
                      <div className={`w-0.5 h-0.5 rounded-full ${dotBg} shrink-0`}></div>
                      <span className={`${textColor} font-black text-[9px] tabular-nums tracking-widest uppercase shrink-0`}>
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Foundations Card (30%) */}
        <div className={`slide-card p-3 md:p-4 lg:p-6 flex flex-col justify-between ${bgCard3}`}>
          <div>
            <h3 className={`text-xl md:text-2xl lg:text-3xl font-black brand-font mb-4 md:mb-5 leading-[0.9] ${textColor} uppercase tracking-tighter`}>
              Academic<br/>Foundations.
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex flex-col group">
                  <div className="flex justify-between items-start mb-0.5">
                    <div className="space-y-0.5">
                      <h4 className={`${textColor} font-black text-[12px] md:text-[13px] lg:text-[15px] uppercase tracking-tight leading-tight group-hover:text-indigo-400 transition-colors`}>
                        {edu.degree}
                      </h4>
                      <span className={`${textColor} font-bold text-[11px] uppercase tracking-widest truncate`}>
                        {edu.school}
                      </span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 py-0.5 md:py-1 px-1.5 md:px-2 ${achievementBg} rounded border ${achievementBorder} w-fit mt-1`}>
                    <Award size={8} className="text-amber-500" />
                    <span className={`text-[8px] ${textColor} font-bold uppercase tracking-widest`}>
                      {edu.achievement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Featured Project (Left) & Writing (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
        {/* Featured Project (Left Half) */}
        <a
          href={FEATURED_PROJECT.link}
          className="md:col-span-6 slide-card featured-bmc-card p-3 md:p-4 lg:p-10 relative overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 group"
        >
          <div className="md:col-span-2 flex flex-col justify-center space-y-4 z-10">
            <h3 className={`text-xl md:text-2xl lg:text-4xl font-black brand-font ${textColor} uppercase tracking-tighter leading-none`}>
              {FEATURED_PROJECT.name}
            </h3>
            <p className={`text-xs md:text-sm ${textColor} leading-relaxed font-light`}>
              {FEATURED_PROJECT.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {FEATURED_PROJECT.tags.map(tag => (
                <span
                  key={tag}
                  className={`px-2 py-0.5 ${tagBg} rounded-md text-[7px] font-black uppercase tracking-widest ${tagText} border ${tagBorder}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-1 relative flex items-center justify-center">
            <img
              src={FEATURED_PROJECT.imageUrl}
              alt={FEATURED_PROJECT.name}
              className={`w-full rounded-2xl border ${imageBorder} shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]`}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-2 bg-zinc-900/90 text-white px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest border border-zinc-700/80 transition-all group-hover:border-zinc-400/80 group-hover:bg-zinc-900/95">
                Explore <ArrowUpRight size={16} className="text-white" />
              </div>
            </div>
          </div>
        </a>

        {/* Writing Cards (Right Half) */}
        <div className="md:col-span-6 flex flex-col gap-2.5 md:gap-3">
          <div className="flex justify-between items-end">
            <h3 className={`text-xl md:text-2xl lg:text-3xl font-black brand-font ${textColor} uppercase tracking-tighter leading-[0.9]`}>
              Articles.
            </h3>
            <a
              href="https://linkedin.com/in/vritant"
              target="_blank"
              className={`text-[10px] font-black uppercase tracking-widest ${textColor} flex items-center gap-1 transition-colors`}
            >
              Archive <ChevronRight size={12} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
            {ARTICLES.slice(0, 2).map((article, i) => (
              <a key={i} href={article.link} target="_blank" className="block group h-full">
                <div className={`slide-card p-4 lg:p-5 ${bgCard2} flex flex-col h-full`}>
                  <div className={`aspect-[16/9] ${imageBg} rounded-2xl overflow-hidden mb-4 border ${tagBorder} relative`}>
                    <img
                      src={article.imageUrl}
                      className="w-full h-full object-cover"
                      alt={article.title}
                    />
                    <div className={`absolute top-4 right-4 p-2 ${externalLinkBg} backdrop-blur-md rounded-lg ${textColor} opacity-0 group-hover:opacity-100 transition-all`}>
                      <ExternalLink size={16} />
                    </div>
                  </div>
                  <h4 className={`font-black ${textColor} group-hover:text-indigo-400 group-hover:underline text-lg leading-tight transition-colors mb-2`}>
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-auto">
                    <p className="text-[9px] text-indigo-500 uppercase font-black tracking-widest">
                      {article.platform}
                    </p>
                    <p className={`text-[9px] ${textColor} uppercase font-black tracking-widest`}>
                      {article.date}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Row 4: Personal Archetypes (Full Width) */}
      <div className={`slide-card overflow-hidden ${bgCard}`}>
        <button 
          onClick={() => setShowHobbies(!showHobbies)}
          className={`w-full p-3 md:p-4 lg:p-10 flex items-center justify-between group ${cardHover} transition-all text-left`}
        >
          <div>
            <h3 className={`text-xl md:text-2xl lg:text-4xl font-black brand-font ${textColor} uppercase tracking-tighter leading-none`}>Personal Archetypes.</h3>
            <p className={`text-[8px] lg:text-[10px] ${textColor} mt-2 font-black uppercase tracking-[0.6em] max-w-lg`}>Engineered creativity outside the terminal.</p>
          </div>
          <div className={`h-8 w-8 lg:h-12 lg:w-12 rounded-full border-2 ${expandBorder} flex items-center justify-center transition-all ${showHobbies ? expandButton : `${expandButtonHover} group-hover:scale-105`}`}>
            {showHobbies ? <Minus size={16} /> : <Plus size={16} />}
          </div>
        </button>

        {showHobbies && (
          <div className={`p-3 md:p-4 lg:p-10 ${hobbiesBg} border-t ${hobbiesBorder}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {HOBBIES.map((hobby, i) => (
                <div key={i} className={`slide-card p-3 md:p-4 lg:p-5 ${bgCard2} flex flex-col h-full`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 ${tagBg} rounded-xl text-indigo-500`}>
                        {hobby.name.includes('Dungeons') && <Sword size={16} />}
                        {hobby.name.includes('Coffee') && <Coffee size={16} />}
                        {hobby.name.includes('Hydroponics') && <Leaf size={16} />}
                        {hobby.name.includes('Fermentation') && <Beaker size={16} />}
                        {hobby.name.includes('Guitar') && <Music size={16} />}
                      </div>
                      <span className={`text-[7px] font-black ${textColor} uppercase tracking-widest`}>ID:0{i+1}</span>
                    </div>
                    <h4 className={`text-xl font-black mb-2 ${textColor} uppercase tracking-tighter leading-none`}>{hobby.name}</h4>
                    <p className={`text-sm ${textColor} leading-relaxed font-light mb-4`}>{hobby.description}</p>
                  </div>
                  <div className={`aspect-[16/9] rounded-2xl overflow-hidden ${imageBg} border ${imageBorder} opacity-50 shadow-inner flex items-center justify-center mt-auto`}>
                    <img src={hobby.imageUrl} className="w-full h-full object-cover" alt={hobby.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={`py-20 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10 border-t ${footerBorder} mt-16 opacity-40 hover:opacity-100 transition-opacity`}>
         <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <span className={`brand-font font-black text-xl ${textColor} uppercase`}>Vritant Jain</span>
            </div>
            <p className={`${textColor} text-[8px] font-black uppercase tracking-[0.6em]`}>Portfolio Systems &copy; {new Date().getFullYear()}</p>
         </div>
         
         <div className={`flex flex-wrap justify-center gap-8 ${textColor} text-[9px] font-black uppercase tracking-[0.4em]`}>
            <a href="mailto:adarshvritant@gmail.com" className={`hover:opacity-70 transition-colors lowercase tracking-normal font-medium text-xs`}>adarshvritant@gmail.com</a>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-70 transition-colors">Journey</a>
              <a href="#" className="hover:opacity-70 transition-colors">Products</a>
              <a href="#" className="hover:opacity-70 transition-colors">Lab</a>
            </div>
         </div>
      </footer>

    </div>
  );
};

export default App;
