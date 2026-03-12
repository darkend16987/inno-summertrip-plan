"use client";

import React, { useState } from 'react';
import { 
  Bolt, 
  Search, 
  MapPin, 
  Users, 
  Compass, 
  Anchor, 
  Palette, 
  Music, 
  Mountain, 
  SlidersHorizontal,
  PlayCircle,
  Wine,
  Factory
} from 'lucide-react';

// Data from user request
const tripPlans = [
  {
    team: "Team QS",
    destination: "Vũng Tàu",
    time: "Tháng 6",
    budget: "10 triệu",
    description: "Cố gắng trong tầm kinh phí công ty cấp :v",
    image: "https://images.unsplash.com/photo-1589139049439-d8e2467d3f1a?auto=format&fit=crop&q=80&w=800", // Vung Tau vibe
    tag: "Relaxing",
    color: "bg-primary",
    icon: <Users className="text-charcoal" size={20} />,
  },
  {
    team: "Team Phiến quân",
    destination: "Trùng Khánh + Thành Đô + Cửu Trại Câu",
    time: "Đầu tháng 6/2026",
    budget: "20 triệu+",
    description: "Hấp dẫn, thiên về trải nghiệm và dịch chuyển. Xe vẫn mở cửa bắt khách dọc đường ace nhé :)))",
    image: "https://images.unsplash.com/photo-1540608801275-6a57564d13a6?auto=format&fit=crop&q=80&w=800", // Chongqing vibe
    tag: "Adventure",
    color: "bg-accent-red",
    icon: <Compass className="text-white" size={20} />,
    textColor: "text-white"
  },
  {
    team: "Team MEP",
    destination: "Lệ Giang + Shangrila",
    time: "3/6 - 7/6",
    budget: "18 triệu",
    description: "Full combo + non shopping. Khám phá vẻ đẹp hùng vĩ của Vân Nam.",
    image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&q=80&w=800", // Lijiang vibe
    tag: "Cultural",
    color: "bg-purple-500",
    icon: <Palette className="text-white" size={20} />,
    textColor: "text-white"
  },
  {
    team: "Team AS3",
    destination: "Đà Nẵng - Quảng Nam - Lý Sơn",
    time: "Giữa tháng 5",
    budget: "10 triệu",
    description: "Nghỉ dưỡng mùa hè là chính 🏝 Đảm bảo chơi nhòe.",
    image: "https://images.unsplash.com/photo-1559592413-7ece359399fa?auto=format&fit=crop&q=80&w=800", // Da Nang vibe
    tag: "Hot Choice",
    color: "bg-blue-500",
    icon: <Anchor className="text-white" size={20} />,
    textColor: "text-white"
  },
  {
    team: "Team ss1,ss2,ss3,ss5",
    destination: "Quy Nhơn - Phú Yên",
    time: "13/4 - 17/4",
    budget: "10 triệu",
    description: "Đảm bảo nhậu bét nhè. Tranh thủ đi xả sớm thì joint cùng team.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800", // Quy Nhon vibe
    tag: "Trending",
    color: "bg-green-500",
    icon: <Mountain className="text-white" size={20} />,
    textColor: "text-white"
  },
  {
    team: "Team 360Home & Bạn bè",
    destination: "Bali, Indonesia",
    time: "Tháng 5 (5N4Đ)",
    budget: "Dự kiến (Nạp lại năng lượng)",
    description: "Ăn, Cầu Nguyện, Yêu: Hồi Sinh Tại Bali 🌴 Nghỉ ngơi là cách tốt nhất để nạp đầy năng lượng.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", // Bali vibe
    tag: "Soul Care",
    color: "bg-orange-600",
    icon: <Wine className="text-white" size={20} />,
    textColor: "text-white"
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrips = tripPlans.filter(trip => 
    trip.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f8f7f5]/80 backdrop-blur-md border-b-4 border-[#1a1a1a] px-6 md:px-16 py-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 neo-border rounded-lg">
                <Bolt className="text-charcoal font-bold" />
              </div>
              <h2 className="text-charcoal text-2xl font-black tracking-tighter uppercase italic">INNO SUMMER</h2>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-charcoal text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Chuyến đi</a>
              <a href="#" className="text-charcoal text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Đội nhóm</a>
              <a href="#" className="text-charcoal text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Cuộc đua</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex bg-white border-3 border-charcoal rounded-xl px-4 py-1.5 items-center gap-2">
              <Search className="text-charcoal text-xl" size={18} />
              <input 
                type="text" 
                placeholder="Tìm kiếm hành trình..." 
                className="bg-transparent border-none focus:outline-none text-sm font-medium w-40"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-accent-red text-white font-black px-6 py-2 rounded-xl neo-border hover:translate-x-1 hover:translate-y-1 transition-transform">
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-16 py-12">
        {/* Hero Section */}
        <section className="relative mb-20 overflow-hidden rounded-3xl border-4 border-charcoal bg-white p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-red/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 flex-1 space-y-8">
            <div className="inline-block bg-charcoal text-primary px-4 py-1 font-black text-sm tracking-widest uppercase transform -rotate-2">
              Hot Summer 2026
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter text-charcoal uppercase">
              CHỌN HÀNH TRÌNH <span className="text-primary italic">MÙA HÈ</span> CỦA BẠN
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-xl font-medium leading-tight">
              Bình chọn cho "kế hoạch trong mơ" của các team. Đi càng đông, vui càng nhiều, chi phí càng rẻ!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-charcoal text-xl font-black px-10 py-5 rounded-2xl neo-border hover:bg-white transition-colors uppercase">
                BẮT ĐẦU CHỌN
              </button>
              <div className="flex -space-x-4 items-center pl-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-charcoal bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                  </div>
                ))}
                <div className="ml-8 font-black text-charcoal">+500 người đã vote</div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 w-full md:w-1/3 aspect-square bg-primary neo-border rounded-3xl overflow-hidden transform rotate-3 flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-80" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800')"}}></div>
            <div className="relative z-20">
              <PlayCircle className="text-white" size={80} />
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="mb-12 sticky top-28 z-40 bg-background-light py-4">
          <div className="bg-white neo-border p-4 rounded-2xl flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="font-black uppercase text-xs tracking-widest text-charcoal/50 px-2">Ngân sách</span>
                <div className="flex bg-background-light p-1 rounded-xl border-2 border-charcoal">
                  <button className="px-4 py-1.5 rounded-lg text-sm font-bold bg-primary text-charcoal">Dưới 15M</button>
                  <button className="px-4 py-1.5 rounded-lg text-sm font-bold text-charcoal/50 hover:text-charcoal transition-colors">Trên 15M</button>
                </div>
              </div>
              <div className="h-8 w-[2px] bg-charcoal/10 hidden md:block"></div>
              <div className="flex items-center gap-2">
                <span className="font-black uppercase text-xs tracking-widest text-charcoal/50 px-2">Thời gian</span>
                <div className="flex gap-2">
                  {['T4', 'T5', 'T6'].map(month => (
                    <button key={month} className={`w-10 h-10 flex items-center justify-center rounded-xl border-2 border-charcoal font-bold text-sm hover:bg-primary transition-colors ${month === 'T6' ? 'bg-charcoal text-white' : ''}`}>
                      {month}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-charcoal font-black cursor-pointer">
              <SlidersHorizontal size={20} />
              <span className="uppercase tracking-widest text-sm">Lọc thêm</span>
            </div>
          </div>
        </section>

        {/* Trip Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrips.map((trip, idx) => (
            <div key={idx} className={`group ${trip.textColor || 'text-charcoal'} neo-border rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300 bg-white entrance-anim`} style={{animationDelay: `${idx * 0.1}s`}}>
              <div className={`relative h-64 overflow-hidden border-b-4 border-charcoal`}>
                <img src={trip.image} alt={trip.destination} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-accent-red text-white text-xs font-black uppercase px-3 py-1 neo-border">
                  {trip.tag}
                </div>
                <div className="absolute bottom-4 left-4 bg-white text-charcoal text-xs font-black uppercase px-3 py-1 neo-border">
                  {trip.time}
                </div>
              </div>
              
              <div className={`p-6 flex-1 flex flex-col ${trip.color === 'bg-white' ? '' : trip.color}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black uppercase leading-tight line-clamp-2">{trip.destination}</h3>
                </div>
                <div className="flex items-center gap-2 mb-6 font-bold text-sm uppercase opacity-70">
                  <MapPin size={16} />
                  <span>{trip.destination}</span>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between p-3 bg-black/5 rounded-xl border-2 border-black/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border-2 border-charcoal bg-white flex items-center justify-center shrink-0">
                        {trip.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black leading-tight">{trip.team}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Team Organizer</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white/10 rounded-xl border-2 border-black/5">
                    <p className="text-sm font-medium italic">"{trip.description}"</p>
                  </div>

                  <div className="flex items-center justify-between font-black">
                    <span className="text-xs uppercase tracking-widest opacity-60">Budget Dự Kiến</span>
                    <span className="text-xl">{trip.budget}</span>
                  </div>
                </div>

                <button className="mt-6 w-full py-4 bg-charcoal text-white font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-charcoal transition-all neo-border">
                  Xem chi tiết & Lịch trình
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t-4 border-charcoal bg-charcoal text-white px-6 md:px-16 py-12">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 neo-border rounded-lg">
                <Bolt className="text-charcoal font-bold" />
              </div>
              <h2 className="text-2xl font-black tracking-tighter uppercase italic">INNO SUMMER</h2>
            </div>
            <p className="max-w-xs text-white/60 font-medium">
              Join the summer adventure. Choose your team, pack your bags, and make memories.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="font-black uppercase tracking-widest text-primary">Explore</h4>
              <ul className="space-y-2 text-sm font-bold text-white/70">
                <li><a href="#" className="hover:text-white">All Trips</a></li>
                <li><a href="#" className="hover:text-white">Destinations</a></li>
                <li><a href="#" className="hover:text-white">Leaderboard</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-black uppercase tracking-widest text-primary">Support</h4>
              <ul className="space-y-2 text-sm font-bold text-white/70">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-12 pt-12 border-t border-white/10 text-center text-xs font-black uppercase tracking-[0.3em] text-white/30">
          © 2026 INNO SUMMER TRIP. DEVELOPED WITH PASSION.
        </div>
      </footer>
    </>
  );
}
