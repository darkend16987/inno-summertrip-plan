"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bolt, 
  Search, 
  PlayCircle, 
  MapPin, 
  SlidersHorizontal,
  Mail,
  Globe
} from 'lucide-react';
import { TRIPS, Trip } from '@/constants/trips';

export default function Home() {
  const [budgetFilter, setBudgetFilter] = useState<'all' | 'low' | 'high'>('all');
  const [monthFilter, setMonthFilter] = useState<'ALL' | 'APR' | 'MAY' | 'JUN'>('ALL');
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrips = TRIPS.filter(trip => {
    const matchesSearch = trip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         trip.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Simple budget logic for demonstration
    const priceNum = trip.budget.includes('10M') ? 10 : (trip.budget.includes('18M') ? 18 : 20);
    const matchesBudget = budgetFilter === 'all' || 
                         (budgetFilter === 'low' && priceNum <= 15) || 
                         (budgetFilter === 'high' && priceNum > 15);
                         
    return matchesSearch && matchesBudget;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-bg-light/80 backdrop-blur-md border-b-4 border-charcoal px-6 md:px-16 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="bg-primary p-2 neo-border rounded-lg"
              >
                <Bolt className="w-6 h-6 text-charcoal fill-charcoal" />
              </motion.div>
              <h2 className="text-charcoal text-2xl font-black tracking-tighter uppercase italic font-display">
                INNO SUMMER
              </h2>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              {['Chuyến đi', 'Đội nhóm', 'Lịch trình'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-charcoal text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex bg-white border-2 border-charcoal rounded-xl px-4 py-1.5 items-center gap-2">
              <Search className="w-5 h-5 text-charcoal" />
              <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                className="bg-transparent border-none focus:outline-none text-sm font-medium w-40"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-accent-red text-white font-black px-6 py-2 rounded-xl neo-border neo-shadow-hover transition-all cursor-pointer">
              THAM GIA NGAY
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-16 py-12">
        {/* Hero Section */}
        <section className="relative mb-20 overflow-hidden rounded-3xl border-4 border-charcoal bg-white p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="relative z-10 flex-1 space-y-8">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-block bg-charcoal text-primary px-4 py-1 font-black text-sm tracking-widest uppercase transform -rotate-2"
            >
              Summer 2026 Edition
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-charcoal uppercase font-display"
            >
              CHỌN HÀNH TRÌNH <span className="text-primary italic">MÙA HÈ</span> CỦA BẠN
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-charcoal/70 max-w-xl font-medium leading-tight"
            >
              Cuộc đua kỳ thú giữa các team Inno. Trải nghiệm những vùng đất mới, nạp đầy năng lượng cho những mục tiêu bứt phá sắp tới!
            </motion.p>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <button className="bg-primary text-charcoal text-xl font-black px-10 py-5 rounded-2xl neo-border neo-shadow-lg hover:bg-white transition-all hover:-translate-y-1 cursor-pointer uppercase">
                Khám Phá Ngay
              </button>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-charcoal bg-gray-200 bg-cover bg-center"
                      style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i+20})` }}
                    />
                  ))}
                </div>
                <span className="font-black text-charcoal text-sm">
                  +500 người đã bình chọn
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotate: 10 }}
            animate={{ scale: 1, opacity: 1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative z-10 w-full md:w-2/5 aspect-square bg-primary neo-border rounded-3xl overflow-hidden neo-shadow-lg"
          >
            <img 
              src="/images/bali.png" 
              alt="Bali Illustration" 
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer group">
              <PlayCircle className="w-24 h-24 text-white group-hover:scale-110 transition-transform" />
            </div>
          </motion.div>
        </section>

        {/* Filter Bar */}
        <section className="mb-12 sticky top-28 z-40">
          <div className="bg-white neo-border p-4 rounded-2xl flex flex-wrap items-center justify-between gap-6 neo-shadow">
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <span className="font-black uppercase text-[10px] tracking-[0.2em] text-charcoal/40">Ngân sách</span>
                <div className="flex bg-bg-light p-1 rounded-xl border-2 border-charcoal">
                  <button 
                    onClick={() => setBudgetFilter('low')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${budgetFilter === 'low' ? 'bg-primary text-charcoal' : 'text-charcoal/40'}`}
                  >
                    Dưới 15M
                  </button>
                  <button 
                    onClick={() => setBudgetFilter('high')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${budgetFilter === 'high' ? 'bg-primary text-charcoal' : 'text-charcoal/40'}`}
                  >
                    Trên 15M
                  </button>
                  <button 
                    onClick={() => setBudgetFilter('all')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${budgetFilter === 'all' ? 'bg-primary text-charcoal' : 'text-charcoal/40'}`}
                  >
                    Tất cả
                  </button>
                </div>
              </div>

              <div className="h-8 w-[2px] bg-charcoal/10 hidden md:block"></div>

              <div className="flex items-center gap-3">
                <span className="font-black uppercase text-[10px] tracking-[0.2em] text-charcoal/40">Tháng</span>
                <div className="flex gap-2">
                  {['APR', 'MAY', 'JUN', 'ALL'].map((m) => (
                    <button 
                      key={m}
                      onClick={() => setMonthFilter(m as any)}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl border-2 border-charcoal font-bold text-xs transition-all cursor-pointer ${monthFilter === m ? 'bg-charcoal text-white' : 'hover:bg-primary'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-charcoal font-black hover:text-primary transition-colors cursor-pointer">
              <SlidersHorizontal className="w-5 h-5" />
              <span className="uppercase tracking-widest text-xs">Lọc thêm</span>
            </button>
          </div>
        </section>

        {/* Trip Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTrips.map((trip, idx) => (
              <TripCard key={trip.id} trip={trip} index={idx} />
            ))}
          </AnimatePresence>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t-4 border-charcoal bg-charcoal text-white px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 neo-border rounded-lg">
                <Bolt className="w-6 h-6 text-charcoal fill-charcoal" />
              </div>
              <h2 className="text-2xl font-black tracking-tighter uppercase italic font-display">
                INNO SUMMER
              </h2>
            </div>
            <p className="max-w-xs text-white/60 font-medium text-sm leading-relaxed">
              Cổng thông tin chính thức cho những chuyến đi hè đầy năng lượng. Những hành trình được thiết kế cho những tâm hồn không mệt mỏi.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-widest text-primary text-xs">Khám phá</h4>
              <ul className="space-y-3 text-sm font-bold text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Tất cả chuyến đi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Điểm đến</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nhà tổ chức</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-widest text-primary text-xs">Hỗ trợ</h4>
              <ul className="space-y-3 text-sm font-bold text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">An toàn</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-widest text-primary text-xs">Kết nối</h4>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-xl border-2 border-white/20 flex items-center justify-center hover:bg-primary hover:border-charcoal hover:text-charcoal transition-all cursor-pointer">
                  <Mail className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-xl border-2 border-white/20 flex items-center justify-center hover:bg-primary hover:border-charcoal hover:text-charcoal transition-all cursor-pointer">
                  <Globe className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
          © 2026 INNO SUMMER TRIP. DEVELOPED BY ADVANCED AGENT.
        </div>
      </footer>
    </div>
  );
}

function TripCard({ trip, index }: { trip: Trip; index: number }) {
  const Icon = trip.organizerIcon;

  const themeClasses: Record<string, string> = {
    white: 'bg-white text-charcoal',
    red: 'bg-accent-red text-white',
    orange: 'bg-primary text-charcoal',
    charcoal: 'bg-charcoal text-white'
  };

  const badgeClasses: Record<string, string> = {
    red: 'bg-accent-red text-white',
    yellow: 'bg-primary text-charcoal',
    white: 'bg-white text-charcoal',
    charcoal: 'bg-charcoal text-white'
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className={`group neo-border rounded-2xl overflow-hidden flex flex-col transition-all neo-shadow-hover ${themeClasses[trip.cardTheme || 'white']}`}
    >
      <div className="relative h-64 overflow-hidden border-b-4 border-charcoal">
        <img 
          src={trip.image} 
          alt={trip.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {trip.badge && (
          <div className={`absolute top-4 left-4 text-[10px] font-black uppercase px-3 py-1 neo-border ${badgeClasses[trip.badgeType || 'yellow']}`}>
            {trip.badge}
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-white text-charcoal text-[10px] font-black uppercase px-3 py-1 neo-border">
          {trip.duration}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-black uppercase leading-tight font-display">{trip.title}</h3>
          <span className={`text-lg font-black ${trip.cardTheme === 'white' ? 'text-primary' : 'text-inherit'}`}>
            {trip.budget}
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-6 opacity-60 font-bold text-[10px] uppercase tracking-wider">
          <MapPin className="w-3 h-3" />
          <span>{trip.location}</span>
        </div>

        <div className="space-y-4 flex-1">
          <div className={`flex items-center justify-between p-3 rounded-xl border-2 ${trip.cardTheme === 'white' ? 'bg-bg-light border-charcoal/5' : 'bg-white/10 border-white/10'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full border-2 border-charcoal flex items-center justify-center ${trip.cardTheme === 'red' ? 'bg-white' : 'bg-primary'}`}>
                <Icon className={`w-4 h-4 ${trip.cardTheme === 'red' ? 'text-accent-red' : 'text-charcoal'}`} />
              </div>
              <span className="text-xs font-bold">{trip.team}</span>
            </div>
            <span className="text-[8px] font-black opacity-40 uppercase tracking-widest">Organizer</span>
          </div>
          
          <p className="text-xs font-medium leading-relaxed opacity-80 line-clamp-3">
            {trip.description}
          </p>
        </div>

        <button className={`mt-6 w-full py-4 font-black uppercase tracking-widest text-xs rounded-xl transition-all neo-border cursor-pointer ${
          trip.cardTheme === 'white' ? 'bg-charcoal text-white hover:bg-primary hover:text-charcoal' : 
          trip.cardTheme === 'red' ? 'bg-white text-charcoal hover:bg-charcoal hover:text-white' :
          trip.cardTheme === 'orange' ? 'bg-charcoal text-white hover:bg-white hover:text-charcoal' :
          'bg-primary text-charcoal hover:bg-white'
        }`}>
          Xem chi tiết
        </button>
      </div>
    </motion.div>
  );
}
