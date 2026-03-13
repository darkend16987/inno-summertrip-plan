"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bolt,
  Search, 
  MapPin, 
  SlidersHorizontal,
  Mail,
  Globe,
  X,
  Calendar,
  Wallet,
  ArrowRight,
  Info,
  FileText,
  Youtube,
  Plane
} from 'lucide-react';
import { TRIPS, Trip } from '@/constants/trips';

export default function Home() {
  const [budgetFilter, setBudgetFilter] = useState<'all' | 'under10' | '10-15' | 'over15'>('all');
  const [monthFilter, setMonthFilter] = useState<number | 'all'>('all');
  const [destinationFilter, setDestinationFilter] = useState<'all' | 'domestic' | 'international'>('all');
  const [sortOrder, setSortOrder] = useState<'early' | 'late' | 'cheap' | 'expensive'>('early');
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredTrips = TRIPS
    .filter(trip => {
      const matchesSearch = trip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           trip.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           trip.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesBudget = true;
      if (budgetFilter === 'under10') matchesBudget = trip.budgetVal < 10;
      if (budgetFilter === '10-15') matchesBudget = trip.budgetVal >= 10 && trip.budgetVal <= 15;
      if (budgetFilter === 'over15') matchesBudget = trip.budgetVal > 15;

      const matchesMonth = monthFilter === 'all' || trip.month === monthFilter;
      
      const matchesDestination = destinationFilter === 'all' || 
                               (destinationFilter === 'domestic' && !trip.isInternational) ||
                               (destinationFilter === 'international' && trip.isInternational);
                           
      return matchesSearch && matchesBudget && matchesMonth && matchesDestination;
    })
    .sort((a, b) => {
      if (sortOrder === 'early') return a.month - b.month;
      if (sortOrder === 'late') return b.month - a.month;
      if (sortOrder === 'cheap') return a.budgetVal - b.budgetVal;
      if (sortOrder === 'expensive') return b.budgetVal - a.budgetVal;
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col font-sans bg-bg-light relative overflow-hidden">
      {/* Plane Reveal Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-primary flex items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ x: '-150%', y: '0%' }}
              animate={{ x: '150%', y: '0%' }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-40 h-[4px] bg-white rounded-full opacity-30"></div>
                <Plane className="w-24 h-24 text-white fill-white rotate-45" />
              </div>
              <img 
                src="/images/Logo.png" 
                alt="Inno Logo" 
                className="h-12 w-auto object-contain brightness-0 invert opacity-80" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-charcoal px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Company Logo */}
            <img
              src="/images/Logo.png"
              alt="Inno Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="border-l-2 border-charcoal/10 pl-4 py-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">OUR SUMMER PLAN PORTAL</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex bg-white border-2 border-charcoal rounded-xl px-4 py-1.5 items-center gap-2">
              <Search className="w-4 h-4 text-charcoal/40" />
              <input 
                type="text" 
                placeholder="Tìm chuyến đi..." 
                className="bg-transparent border-none focus:outline-none text-xs font-bold w-32"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-accent-red text-white text-[10px] font-black px-5 py-2.5 rounded-xl border-2 border-charcoal poster-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer uppercase">
              Tham gia ngay
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-12">
        {/* Hero Section */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-flex items-center bg-charcoal text-primary px-3 py-0.5 font-black text-[10px] tracking-widest uppercase self-start rounded transform -rotate-1"
            >
              Summer 2026 Choice
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black uppercase italic flex flex-col gap-0 md:gap-1"
            >
              {/* Line 1: HÀNH TRÌNH */}
              <div className="flex flex-wrap text-charcoal leading-[0.9]">
                {"HÀNH TRÌNH".split(" ").map((word, wordIdx, words) => (
                  <span key={wordIdx} className="inline-flex whitespace-nowrap">
                    {word.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ 
                          y: -15, 
                          rotate: i % 2 === 0 ? 5 : -5,
                          color: "#f49d25"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="inline-block cursor-default"
                      >
                        {char}
                      </motion.span>
                    ))}
                    {wordIdx < words.length - 1 && <span className="w-[0.3em]"></span>}
                  </span>
                ))}
              </div>

              {/* Line 2: MÙA HÈ */}
              <div className="flex flex-wrap text-charcoal leading-[0.9]">
                {"MÙA HÈ".split(" ").map((word, wordIdx, words) => (
                  <span key={wordIdx} className="inline-flex whitespace-nowrap">
                    {word.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ 
                          y: -15, 
                          rotate: i % 2 === 0 ? 5 : -5,
                          color: "#f49d25"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="inline-block cursor-default"
                      >
                        {char}
                      </motion.span>
                    ))}
                    {wordIdx < words.length - 1 && <span className="w-[0.3em]"></span>}
                  </span>
                ))}
              </div>

              {/* Line 3: CHÂN ÁI */}
              <div className="flex flex-wrap text-primary leading-[0.9]">
                {"CHÂN ÁI".split(" ").map((word, wordIdx, words) => (
                  <span key={wordIdx} className="inline-flex whitespace-nowrap">
                    {word.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ 
                          y: -15, 
                          rotate: i % 2 === 0 ? -5 : 5,
                          color: "#181511"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="inline-block cursor-default"
                      >
                        {char}
                      </motion.span>
                    ))}
                    {wordIdx < words.length - 1 && <span className="w-[0.3em]"></span>}
                  </span>
                ))}
              </div>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-charcoal/80 max-w-2xl font-bold leading-tight"
            >
              Khám phá và lựa chọn hành trình chân ái dành cho mùa hè của bạn. Trải nghiệm những vùng đất, văn hóa và con người mới cùng anh chị em INNOer.
            </motion.p>
          </div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="bg-primary p-6 rounded-2xl border-4 border-charcoal poster-shadow hover-tilt">
              <p className="text-xl font-black leading-tight italic">"Làm hết sức, chơi hết mình — Live, Eat & Play cùng INNO SUMMER TRIP!" 🌴</p>
            </div>
          </motion.div>
        </section>

        {/* Filter Bar */}
        <section className="mb-12 sticky top-24 z-40 bg-bg-light/80 backdrop-blur-sm py-4">
          <div className="bg-white border-4 border-charcoal p-4 rounded-xl flex flex-wrap items-center justify-between gap-6 poster-shadow">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="font-black uppercase text-[10px] tracking-widest text-charcoal/40">Địa điểm</span>
                <div className="flex bg-bg-light p-0.5 rounded-lg border-2 border-charcoal">
                  {[
                    { id: 'all', label: 'Tất cả' },
                    { id: 'domestic', label: 'Việt Nam' },
                    { id: 'international', label: 'Nước ngoài' }
                  ].map((btn) => (
                    <button 
                      key={btn.id}
                      onClick={() => setDestinationFilter(btn.id as any)}
                      className={`px-3 py-1 rounded-md text-[10px] font-black transition-all cursor-pointer ${destinationFilter === btn.id ? 'bg-primary text-charcoal' : 'text-charcoal/40'}`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-6 w-[2px] bg-charcoal/10 hidden md:block"></div>

              <div className="flex items-center gap-3">
                <span className="font-black uppercase text-[10px] tracking-widest text-charcoal/40">Ngân sách</span>
                <div className="flex bg-bg-light p-0.5 rounded-lg border-2 border-charcoal">
                  {[
                    { id: 'all', label: 'Tất cả' },
                    { id: 'under10', label: '< 10' },
                    { id: '10-15', label: '10-15' },
                    { id: 'over15', label: '> 15' }
                  ].map((btn) => (
                    <button 
                      key={btn.id}
                      onClick={() => setBudgetFilter(btn.id as any)}
                      className={`px-3 py-1 rounded-md text-[10px] font-black transition-all cursor-pointer ${budgetFilter === btn.id ? 'bg-primary text-charcoal' : 'text-charcoal/40'}`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-6 w-[2px] bg-charcoal/10 hidden lg:block"></div>

              <div className="flex items-center gap-3">
                <span className="font-black uppercase text-[10px] tracking-widest text-charcoal/40">Tháng</span>
                <div className="flex gap-2">
                  {[4, 5, 6, 7, 'all'].map((m) => (
                    <button 
                      key={m}
                      onClick={() => setMonthFilter(m as any)}
                      className={`px-2 h-8 flex items-center justify-center rounded-lg border-2 border-charcoal font-black text-[10px] transition-all cursor-pointer ${monthFilter === m ? 'bg-charcoal text-white shadow-none translate-x-0.5 translate-y-0.5' : 'bg-white hover:bg-primary'}`}
                    >
                      {m === 'all' ? 'All' : `T.${m}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group/sort">
              <button className="flex items-center gap-2 text-charcoal font-black hover:text-primary transition-colors cursor-pointer group">
                <SlidersHorizontal className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                <span className="uppercase tracking-widest text-[10px]">Sắp xếp</span>
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border-4 border-charcoal rounded-xl shadow-[8px_8px_0px_0px_#181511] opacity-0 invisible group-hover/sort:opacity-100 group-hover/sort:visible transition-all z-50 overflow-hidden">
                {[
                  { id: 'early', label: 'Thời gian: Sớm nhất', icon: Calendar },
                  { id: 'late', label: 'Thời gian: Muộn nhất', icon: Calendar },
                  { id: 'cheap', label: 'Budget: Ít nhất', icon: Wallet },
                  { id: 'expensive', label: 'Budget: Nhiều nhất', icon: Wallet }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSortOrder(item.id as any)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase text-left hover:bg-primary transition-colors border-b-2 last:border-b-0 border-charcoal/5 ${sortOrder === item.id ? 'bg-primary/20' : ''}`}
                  >
                    <item.icon className="w-3 h-3" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trip Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredTrips.map((trip, idx) => (
              <TripCard 
                key={trip.id} 
                trip={trip} 
                index={idx} 
                onSelect={setSelectedTrip}
              />
            ))}
          </AnimatePresence>
        </section>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedTrip && (
          <TripModal trip={selectedTrip} onClose={() => setSelectedTrip(null)} />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="mt-20 border-t-4 border-charcoal bg-charcoal text-white px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white/10 p-3 border-2 border-white/20 rounded-xl backdrop-blur-sm">
              <img 
                src="/images/Logo.png" 
                alt="Inno Logo White" 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-primary font-black uppercase text-[10px] tracking-widest mb-1">Fuel Your Soul</p>
              <p className="text-xl font-black italic border-l-4 border-primary pl-4 py-1">
                "Work Hard, Play Harder — Fuel Your Soul with INNO Summer Adventures!" 🚀
              </p>
            </div>
          </div>
          
          <div className="text-center md:text-right space-y-4">
            <p className="opacity-40 text-[10px] font-bold uppercase tracking-[0.4em]">Designed by Inno Design Team © 2026</p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a 
                href="https://www.facebook.com/groups/congdonginno" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-xl border-2 border-white/10 hover:bg-primary hover:text-charcoal hover:scale-110 transition-all group"
              >
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href="https://www.youtube.com/@innojsctv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-xl border-2 border-white/10 hover:bg-accent-red hover:border-accent-red hover:scale-110 transition-all group"
              >
                <Youtube className="w-5 h-5 group-hover:scale-125 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TripCard({ trip, index, onSelect }: { trip: Trip; index: number; onSelect: (t: Trip) => void }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col h-full cursor-pointer"
      onClick={() => onSelect(trip)}
    >
      <div className="bg-white border-4 border-charcoal rounded-xl overflow-hidden flex flex-col h-full poster-shadow hover-tilt transition-all">
        {/* Card Header (Image) */}
        <div className="relative h-56 overflow-hidden border-b-4 border-charcoal">
          <img 
            src={trip.image} 
            alt={trip.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 blur-[0.5px] group-hover:blur-0"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <div className={`text-[10px] font-black uppercase px-2 py-0.5 rounded border-2 border-charcoal bg-white shadow-[2px_2px_0px_0px_#181511]`}>
              Tháng {trip.month}
            </div>
            {trip.badge && (
              <div className={`text-[8px] font-black uppercase px-2 py-0.5 rounded border-2 border-charcoal shadow-[2px_2px_0px_0px_#181511] ${
                trip.badgeType === 'red' ? 'bg-accent-red text-white' : 
                trip.badgeType === 'yellow' ? 'bg-primary text-charcoal' : 'bg-charcoal text-white'
              }`}>
                {trip.badge}
              </div>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-black uppercase leading-none italic">{trip.title}</h3>
              <div className="bg-primary px-3 py-1 border-2 border-charcoal rounded-md -rotate-3 transition-transform group-hover:rotate-0 flex-shrink-0">
                <span className="text-sm font-black italic whitespace-nowrap">{trip.budgetLabel}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 opacity-50">
              <MapPin className="w-3 h-3" />
              <span className="text-[10px] font-black uppercase tracking-widest">{trip.location}</span>
            </div>
          </div>

          <p className="text-xs font-bold leading-relaxed opacity-70 line-clamp-2 italic">
            "{trip.description}"
          </p>

          <div className="mt-auto pt-4 flex items-center justify-between border-t-2 border-charcoal/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-charcoal bg-primary flex items-center justify-center text-xs font-black">
                {trip.team.substring(5, 7) || 'I'}
              </div>
              <span className="text-[10px] font-black uppercase">{trip.team}</span>
            </div>
            <div className="bg-charcoal text-white p-1 rounded-full border border-white/20">
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TripModal({ trip, onClose }: { trip: Trip; onClose: () => void }) {
  const Icon = trip.organizerIcon;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-bg-light w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border-4 border-charcoal flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white border-2 border-charcoal rounded-full flex items-center justify-center hover:bg-accent-red hover:text-white transition-all cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side: Visual */}
        <div className="md:w-1/2 min-h-[300px] relative border-b-4 md:border-b-0 md:border-r-4 border-charcoal">
          <img 
            src={trip.image} 
            alt={trip.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10">
            <span className="bg-primary px-4 py-1 border-2 border-charcoal rounded font-black text-sm uppercase italic">INNO Summer Trip</span>
            <h2 className="text-5xl font-black text-white uppercase italic leading-none mt-4 drop-shadow-xl">
              {trip.title}
            </h2>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="md:w-1/2 p-10 flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 border-2 border-charcoal rounded-xl shadow-[4px_4px_0px_0px_#181511]">
              <Calendar className="w-5 h-5 text-accent-red mb-2" />
              <p className="text-[10px] font-black uppercase opacity-40">Thời gian</p>
              <p className="text-sm font-black">{trip.duration}</p>
            </div>
            <div className="bg-white p-4 border-2 border-charcoal rounded-xl shadow-[4px_4px_0px_0px_#181511]">
              <Wallet className="w-5 h-5 text-primary mb-2" />
              <p className="text-[10px] font-black uppercase opacity-40">Ngân sách</p>
              <p className="text-sm font-black">~{trip.budgetLabel}</p>
            </div>
          </div>

          <div className="space-y-4 relative itinerary-line pl-10">
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-6 h-6 bg-primary border-2 border-charcoal rounded-full flex items-center justify-center">
                <Info className="w-3 h-3 text-white" />
              </div>
              <p className="text-[10px] font-black uppercase text-primary tracking-widest leading-none">Mô tả hành trình</p>
              <h4 className="text-lg font-black uppercase mt-1 mb-2 italic">Trải nghiệm nét mới lạ</h4>
              <p className="text-xs font-bold leading-relaxed opacity-70 italic">
                {trip.description}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 border-2 border-charcoal rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full border-2 border-charcoal flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-charcoal" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-black uppercase opacity-40 leading-none mb-1">Ban tổ chức</p>
              <p className="font-black uppercase">{trip.team}</p>
            </div>
            {trip.itineraryUrl ? (
              <a 
                href={trip.itineraryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white px-4 py-2 border-2 border-charcoal rounded-xl font-black text-[10px] uppercase poster-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer flex-shrink-0"
              >
                <FileText className="w-4 h-4" />
                Lịch trình
              </a>
            ) : (
              <button className="flex items-center gap-2 bg-white px-4 py-2 border-2 border-charcoal rounded-xl font-black text-[10px] uppercase opacity-50 cursor-not-allowed flex-shrink-0">
                <FileText className="w-4 h-4" />
                Lịch trình
              </button>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-charcoal text-white p-6 border-2 border-charcoal rounded-xl">
            <p className="text-[10px] font-black uppercase opacity-50 leading-none mb-3 tracking-widest">Liên hệ để đăng ký</p>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-black text-lg leading-none">{trip.contact.name}</p>
                <p className="text-primary font-black text-xl mt-1">{trip.contact.phone}</p>
              </div>
              <div className="flex flex-col gap-2">
                <a 
                  href={`tel:${trip.contact.phone}`}
                  className="bg-primary text-charcoal px-4 py-2 rounded-xl border-2 border-white/20 font-black text-[11px] uppercase text-center hover:scale-105 transition-all"
                >
                  📞 Gọi ngay
                </a>
                <a 
                  href={`https://zalo.me/${trip.contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white px-4 py-2 rounded-xl border-2 border-white/20 font-black text-[11px] uppercase text-center hover:bg-white/20 transition-all"
                >
                  💬 Zalo
                </a>
              </div>
            </div>
          </div>

          <button className="w-full bg-accent-red text-white py-6 rounded-2xl border-4 border-charcoal text-2xl font-black uppercase italic shadow-[8px_8px_0px_0px_#181511] hover:scale-[1.02] transition-all cursor-pointer active:scale-95 active:shadow-none">
            THAM GIA NGAY!
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
