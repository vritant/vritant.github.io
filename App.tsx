
import React, { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';
import { BIO_MARKDOWN, EXPERIENCES, ARTICLES, HOBBIES, FEATURED_PROJECT, EDUCATION, ACHIEVEMENTS } from './constants';

const SimpleMarkdown: React.FC<{ content: string; small?: boolean }> = ({ content, small }) => {
  const lines = content.split('\n');
  return (
    <div className={small ? "space-y-4" : "space-y-6"}>
      {lines.map((line, i) => {
        if (line.startsWith('# ')) return (
          <h1 key={i} className={`${small ? "text-3xl lg:text-4xl" : "text-5xl lg:text-7xl"} font-black mb-4 tracking-tighter leading-[0.85] text-white uppercase brand-font`}>
            {line.replace('# ', '')}
          </h1>
        );
        if (line.trim() === '') return null;
        
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={i} className={`${small ? "text-base lg:text-lg" : "text-xl lg:text-2xl"} text-white font-light leading-snug`}>
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} className="text-white font-bold">{part.slice(2, -2)}</strong>;
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

  return (
    <div className="max-w-[1600px] mx-auto space-y-3 py-2 px-4 md:py-4 md:px-8 pb-16">
      
      {/* Row 1: Intro (40%) & Professional Journey / Education (30% each) */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1.5fr] gap-3 items-stretch">
        {/* Intro Tile (40%) */}
        <div className="slide-card p-4 lg:p-6 flex flex-col justify-center bg-[#111111] border-indigo-500/10">
          <SimpleMarkdown content={BIO_MARKDOWN} small />
          <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-slate-800/50">
            <a 
              href="https://linkedin.com/in/vritant" 
              target="_blank" 
              className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all shadow-xl"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:adarshvritant@gmail.com" 
              className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919881122114" 
              className="w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all"
              title="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Journey Card (30%) */}
        <div className="slide-card px-4 lg:px-8 pt-4 lg:pt-8 pb-3 lg:pb-4 flex flex-col justify-between bg-[#141414]">
          <div className="flex justify-between items-start mb-5">
            <h3 className="text-2xl lg:text-3xl font-black brand-font leading-[0.9] text-white uppercase tracking-tighter">
              Professional<br/>Journey.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-0.5 mt-3 lg:mt-4">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="flex gap-2 group cursor-default items-center py-1 border-b border-white/[0.03] last:border-0 lg:border-0">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col">
                    <span className="text-white font-black text-[13px] lg:text-[15px] uppercase tracking-tight leading-tight group-hover:text-indigo-400 transition-colors truncate">
                      {exp.role}
                    </span>
                    <div className="flex items-center gap-x-1.5 mt-0.5">
                      <span className="text-white font-bold text-[11px] uppercase tracking-widest truncate">
                        {exp.company}
                      </span>
                      <div className="w-0.5 h-0.5 rounded-full bg-slate-800 shrink-0"></div>
                      <span className="text-white font-black text-[9px] tabular-nums tracking-widest uppercase shrink-0">
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
        <div className="slide-card p-4 lg:p-6 flex flex-col justify-between bg-[#0f0f0f]">
          <div>
            <h3 className="text-2xl lg:text-3xl font-black brand-font mb-5 leading-[0.9] text-white uppercase tracking-tighter">
              Academic<br/>Foundations.
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex flex-col group">
                  <div className="flex justify-between items-start mb-0.5">
                    <div className="space-y-0.5">
                      <h4 className="text-white font-black text-[13px] lg:text-[15px] uppercase tracking-tight leading-tight group-hover:text-indigo-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="text-white font-bold text-[11px] uppercase tracking-widest truncate">
                        {edu.school}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 py-1 px-2 bg-white/5 rounded border border-white/5 w-fit mt-1">
                    <Award size={8} className="text-amber-500" />
                    <span className="text-[8px] text-white font-bold uppercase tracking-widest">
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
          className="md:col-span-6 slide-card featured-bmc-card p-4 lg:p-10 relative overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 group"
        >
          <div className="md:col-span-2 flex flex-col justify-center space-y-4 z-10">
            <h3 className="text-2xl lg:text-4xl font-black brand-font text-white uppercase tracking-tighter leading-none">
              {FEATURED_PROJECT.name}
            </h3>
            <p className="text-sm text-white leading-relaxed font-light">
              {FEATURED_PROJECT.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {FEATURED_PROJECT.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-zinc-900 rounded-md text-[7px] font-black uppercase tracking-widest text-indigo-300 border border-zinc-800"
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
              className="w-full rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-2 bg-zinc-900/90 text-white px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest border border-zinc-700/80 transition-all group-hover:border-zinc-400/80 group-hover:bg-zinc-900/95">
                Explore <ArrowUpRight size={16} className="text-white" />
              </div>
            </div>
          </div>
        </a>

        {/* Writing Cards (Right Half) */}
        <div className="md:col-span-6 flex flex-col gap-3">
          <div className="flex justify-between items-end">
            <h3 className="text-2xl lg:text-3xl font-black brand-font text-white uppercase tracking-tighter leading-[0.9]">
              Articles.
            </h3>
            <a
              href="https://linkedin.com/in/vritant"
              target="_blank"
              className="text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-1 transition-colors"
            >
              Archive <ChevronRight size={12} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
            {ARTICLES.slice(0, 2).map((article, i) => (
              <a key={i} href={article.link} target="_blank" className="block group h-full">
                <div className="slide-card p-4 lg:p-5 bg-[#141414] flex flex-col h-full">
                  <div className="aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden mb-4 border border-zinc-800 relative">
                    <img
                      src={article.imageUrl}
                      className="w-full h-full object-cover"
                      alt={article.title}
                    />
                    <div className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                  <h4 className="font-black text-white group-hover:text-indigo-400 group-hover:underline text-lg leading-tight transition-colors mb-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-auto">
                    <p className="text-[9px] text-indigo-500 uppercase font-black tracking-widest">
                      {article.platform}
                    </p>
                    <p className="text-[9px] text-white uppercase font-black tracking-widest">
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
      <div className="slide-card overflow-hidden bg-[#111111]">
        <button 
          onClick={() => setShowHobbies(!showHobbies)}
          className="w-full p-4 lg:p-10 flex items-center justify-between group hover:bg-zinc-800/10 transition-all text-left"
        >
          <div>
            <h3 className="text-2xl lg:text-4xl font-black brand-font text-white uppercase tracking-tighter leading-none">Personal Archetypes.</h3>
            <p className="text-[8px] lg:text-[10px] text-white mt-2 font-black uppercase tracking-[0.6em] max-w-lg">Engineered creativity outside the terminal.</p>
          </div>
          <div className={`h-8 w-8 lg:h-12 lg:w-12 rounded-full border-2 border-white flex items-center justify-center transition-all ${showHobbies ? 'bg-white text-black' : 'group-hover:bg-white group-hover:text-black group-hover:scale-105'}`}>
            {showHobbies ? <Minus size={16} /> : <Plus size={16} />}
          </div>
        </button>

        {showHobbies && (
          <div className="p-4 lg:p-10 bg-black border-t border-zinc-900">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {HOBBIES.map((hobby, i) => (
                <div key={i} className="slide-card p-4 lg:p-5 bg-[#141414] flex flex-col h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-zinc-900 rounded-xl text-indigo-500">
                        {hobby.name.includes('Dungeons') && <Sword size={16} />}
                        {hobby.name.includes('Coffee') && <Coffee size={16} />}
                        {hobby.name.includes('Hydroponics') && <Leaf size={16} />}
                        {hobby.name.includes('Fermentation') && <Beaker size={16} />}
                        {hobby.name.includes('Guitar') && <Music size={16} />}
                      </div>
                      <span className="text-[7px] font-black text-white uppercase tracking-widest">ID:0{i+1}</span>
                    </div>
                    <h4 className="text-xl font-black mb-2 text-white uppercase tracking-tighter leading-none">{hobby.name}</h4>
                    <p className="text-sm text-white leading-relaxed font-light mb-4">{hobby.description}</p>
                  </div>
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 opacity-50 shadow-inner flex items-center justify-center mt-auto">
                    <img src={hobby.imageUrl} className="w-full h-full object-cover" alt={hobby.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-20 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 mt-16 opacity-40 hover:opacity-100 transition-opacity">
         <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <span className="brand-font font-black text-xl text-white uppercase">Vritant Jain</span>
            </div>
            <p className="text-white text-[8px] font-black uppercase tracking-[0.6em]">Portfolio Systems &copy; {new Date().getFullYear()}</p>
         </div>
         
         <div className="flex flex-wrap justify-center gap-8 text-white text-[9px] font-black uppercase tracking-[0.4em]">
            <a href="mailto:adarshvritant@gmail.com" className="hover:text-white transition-colors lowercase tracking-normal font-medium text-xs">adarshvritant@gmail.com</a>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Journey</a>
              <a href="#" className="hover:text-white transition-colors">Products</a>
              <a href="#" className="hover:text-white transition-colors">Lab</a>
            </div>
         </div>
      </footer>

    </div>
  );
};

export default App;
