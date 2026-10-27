import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Briefcase, 
  ShieldCheck, 
  TrendingUp, 
  Landmark, 
  Building2,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { STORY_SLIDES, StorySlide } from '../data/servicesData';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';

export default function StorySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const iconMap: Record<string, React.ElementType> = {
    Briefcase,
    ShieldCheck,
    TrendingUp,
    Landmark,
    Building2,
  };

  // Auto-advance slides every 6.5 seconds unless paused by hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STORY_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSlide = STORY_SLIDES[currentIndex];
  const IconComponent = iconMap[currentSlide.icon] || TrendingUp;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? STORY_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % STORY_SLIDES.length);
  };

  return (
    <section 
      className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-bg-alt to-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Interactive Client Storytelling Slider"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 text-brand-navy font-semibold text-xs uppercase tracking-wider mb-4 border border-brand-gold/30">
            <span>Life Milestones & Advisory Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            Where Does Your Story Begin?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto">
            Financial requirements evolve with every stage of life. Explore how tailored insurance, disciplined SIPs, and property guidance support your immediate priorities.
          </p>
        </div>

        {/* Milestone Indicator Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2 px-2">
          {STORY_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                idx === currentIndex
                  ? 'bg-brand-navy text-white shadow-md scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-brand-gold text-brand-navy text-xs font-bold flex items-center justify-center">
                {idx + 1}
              </span>
              <span className="hidden md:inline">{slide.title.split('&')[0]}</span>
              <span className="md:hidden">Stage {idx + 1}</span>
            </button>
          ))}
        </div>

        {/* Main Storytelling Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
              
              {/* Left Column: Visual Pictorial Stage Showcase (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy to-brand-navy-light text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/30 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/20 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-brand-gold uppercase tracking-wider">
                    {currentSlide.stage}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-gold shadow-inner">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs text-slate-300 font-medium uppercase tracking-wider block mb-1">
                      Recommended Focus
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-snug">
                      {currentSlide.primarySolution}
                    </h3>
                  </div>
                </div>

                <div className="relative z-10 pt-8 border-t border-white/10">
                  <p className="text-xs text-slate-300 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                    <span>Direct advisory support in Prayagraj</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Story Narrative & Practical Steps (7 cols) */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy tracking-tight mb-3">
                    {currentSlide.title}
                  </h3>

                  <p className="text-brand-blue font-medium text-sm sm:text-base mb-4 leading-relaxed">
                    {currentSlide.tagline}
                  </p>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {currentSlide.narrative}
                  </p>

                  {/* Highlights Pictorial representation */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Key Considerations:
                    </p>
                    {currentSlide.keyHighlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Link
                      to={currentSlide.serviceLink}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-blue transition group"
                    >
                      <span>Explore {currentSlide.serviceName}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <a
                    href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, currentSlide.serviceName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-semibold shadow hover:bg-[#20ba59] transition"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white border border-slate-200 text-brand-navy shadow-sm hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
              aria-label="Previous story milestone"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Dots Indicator */}
            <div className="flex items-center gap-2">
              {STORY_SLIDES.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    dotIdx === currentIndex ? 'w-8 bg-brand-navy' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white border border-slate-200 text-brand-navy shadow-sm hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
              aria-label="Next story milestone"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
