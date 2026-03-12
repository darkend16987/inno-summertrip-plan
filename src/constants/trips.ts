import { 
  Users, 
  Compass, 
  Anchor, 
  Palette, 
  Music, 
  Mountain,
  Wine,
  Camera,
  Map,
  Waves,
  Coffee,
  Sun,
  Flame
} from 'lucide-react';

export interface Trip {
  id: string;
  team: string;
  title: string;
  location: string;
  duration: string;
  month: number; // 4, 5, 6, 7
  budgetVal: number; // For filtering
  budgetLabel: string; // e.g. "10 củ"
  description: string;
  image: string;
  badge?: string;
  badgeType?: 'red' | 'yellow' | 'white' | 'charcoal';
  organizerIcon: any;
  cardTheme?: 'white' | 'red' | 'orange' | 'charcoal';
  contact: {
    name: string;
    phone: string;
  };
  itineraryUrl?: string;
  note?: string;
}

export const TRIPS: Trip[] = [
  {
    id: '1',
    team: 'Team QS',
    title: 'Vũng Tàu Chilling',
    location: 'Vũng Tàu, Việt Nam',
    duration: 'Tháng 6',
    month: 6,
    budgetVal: 10,
    budgetLabel: '10 củ',
    description: 'Đổi không khí văn phòng lấy gió biển mát lành — Vũng Tàu chờ cả team xả hơi! Hải sản tươi rói, nắng vàng ươm và tiếng sóng vỗ đúng kiểu "chill tận linh hồn". Tất cả gói gọn trong 10 củ, không cần suy nghĩ nhiều!',
    image: '/images/Vũng Tàu.webp',
    badge: 'TOP RELAX',
    badgeType: 'yellow',
    organizerIcon: Coffee,
    cardTheme: 'white',
    contact: {
      name: 'Nguyễn Quang Huy',
      phone: '0969087360'
    }
  },
  {
    id: '2',
    team: 'Team Phiến quân',
    title: 'Trùng Khánh – Thành Đô – Cửu Trại Câu',
    location: 'Trùng Khánh, Trung Quốc',
    duration: 'Đầu tháng 6/2026',
    month: 6,
    budgetVal: 20,
    budgetLabel: '~20 củ',
    description: 'Tour liên quân hùng hổ: Trùng Khánh phồn hoa, Thành Đô gấu trúc dễ thương, Cửu Trại Câu hồ nước xanh như ngọc. Loanh quanh 20 củ chưa gồm TIP & vé xem show — thiên về trải nghiệm & dịch chuyển. Xe vẫn mở cửa bắt khách dọc đường, ace nhé! 😄',
    image: '/images/Trùng Khánh.webp',
    badge: 'ADVENTURE',
    badgeType: 'red',
    organizerIcon: Map,
    cardTheme: 'white',
    contact: {
      name: 'anh Tâm',
      phone: '0888002220'
    },
    note: 'Chưa bao gồm TIP và vé xem show'
  },
  {
    id: '3',
    team: 'Team MEP',
    title: 'Lệ Giang – Shangrila',
    location: 'Vân Nam, Trung Quốc',
    duration: '3/6 – 7/6/2026',
    month: 6,
    budgetVal: 18,
    budgetLabel: '18 củ',
    description: 'Lạc vào cổ trấn Lệ Giang nghìn năm tuổi rồi ngược lên Shangrila huyền ảo trong sương. Full combo trọn vẹn 18 củ, không lo chi thêm (trừ shopping 🛍️). Hành trình văn hóa – thiên nhiên đỉnh cao dành cho ai yêu cái đẹp.',
    image: '/images/Lệ Giang.webp',
    badge: 'CULTURAL',
    badgeType: 'white',
    organizerIcon: Camera,
    cardTheme: 'red',
    contact: {
      name: 'anh Đỗ Hoàng Anh',
      phone: '0906280386'
    },
    note: 'Đã full combo, không bao gồm chi phí shopping'
  },
  {
    id: '4',
    team: 'Team AS3',
    title: 'Đà Nẵng – Quảng Nam – Lý Sơn',
    location: 'Đà Nẵng – Quảng Nam – Lý Sơn',
    duration: 'Giữa tháng 5 (5N4Đ)',
    month: 5,
    budgetVal: 10,
    budgetLabel: '10 củ',
    description: 'Nghỉ dưỡng mùa hè chuẩn mực: Đà Nẵng năng động, phố cổ Hội An duyên dáng, rồi vượt sóng ra Lý Sơn — đảo Tỏi đẹp như trong mơ. Đảm bảo 10 củ chơi nhòe 🏝️. Ai thấy hợp thì ghép cùng team nhé!',
    image: '/images/Lý Sơn.webp',
    badge: 'ISLAND VIBE',
    badgeType: 'yellow',
    organizerIcon: Waves,
    cardTheme: 'white',
    contact: {
      name: 'Trần Đức Nhã',
      phone: '0978606297'
    }
  },
  {
    id: '5',
    team: 'Team ss1, ss2, ss3, ss5',
    title: 'Quy Nhơn – Phú Yên',
    location: 'Bình Định – Phú Yên',
    duration: '13/4 – 17/4 (5N4Đ)',
    month: 4,
    budgetVal: 10,
    budgetLabel: '10 củ',
    description: 'Xả sớm, xả mạnh cùng team! Ghềnh Đá Đĩa hoang sơ, Eo Gió hùng vĩ, biển Quy Nhơn xanh ngắt — đảm bảo 10 củ nhậu bét nhè 🍺. Ai muốn tranh thủ đi xả sớm thì joint cùng team nhé!',
    image: '/images/Quy Nhơn.webp',
    badge: 'BEACH PARTY',
    badgeType: 'charcoal',
    organizerIcon: Sun,
    cardTheme: 'orange',
    contact: {
      name: 'Nguyễn Văn Chung',
      phone: '0977805052'
    }
  },
  {
    id: '6',
    team: 'Team 360Home',
    title: 'Ăn, Cầu Nguyện, Yêu tại Bali',
    location: 'Ubud & Seminyak, Bali, Indonesia',
    duration: 'Giữa tháng 5 (5N4Đ)',
    month: 5,
    budgetVal: 11,
    budgetLabel: '9 - 12 củ',
    itineraryUrl: 'https://docs.google.com/document/d/1RmsE0rbc2nFnoGWBrAyll0yJ9zADdy_r/edit?usp=sharing&ouid=112868981147552264639&rtpof=true&sd=true',
    description: 'Kiệt sức vì deadline? Bali chữa lành cho bạn. Ăn ngon giữa ruộng bậc thang Ubud, cầu nguyện tại đền thiêng, và yêu lấy chính mình trước khi quay về chiến đấu. Một hành trình để thực sự Hồi Sinh ✨. Dự kiến tháng 5, 5 ngày 4 đêm.',
    image: '/images/Bali.webp',
    badge: 'SOUL CARE',
    badgeType: 'red',
    organizerIcon: Flame,
    cardTheme: 'charcoal',
    contact: {
      name: 'chị My',
      phone: '0913961048'
    }
  },
  {
    id: '7',
    team: 'Team AS10-LS1',
    title: 'Busan – Seoul – Incheon',
    location: 'Hàn Quốc',
    duration: 'Tháng 5 (6N5Đ)',
    month: 5,
    budgetVal: 16.5,
    budgetLabel: '16 củ 5',
    itineraryUrl: 'https://drive.google.com/file/d/1edzWsUEr6iZMuNvq5O7yFi69wD1rM9Qn/view?usp=sharing',
    description: 'Khám phá xứ sở Kim Chi từ Busan năng động đến Seoul rực rỡ và Incheon hiện đại. Một hành trình 6 ngày 5 đêm trọn vẹn văn hóa, ẩm thực và mua sắm dành cho các tín đồ K-Culture!',
    image: '/images/Busan.webp',
    badge: 'K-STYLE',
    badgeType: 'yellow',
    organizerIcon: Map,
    cardTheme: 'white',
    contact: {
      name: 'Lưu Hương Ly',
      phone: '0853081730'
    }
  },
  {
    id: '8',
    team: 'Team AS10-LS1-AS3',
    title: 'Miền Tây Nam Bộ – Tây Ninh – Sài Gòn',
    location: 'Miền Tây – Tây Ninh – Sài Gòn',
    duration: 'Khởi hành 12/5 (5N4Đ)',
    month: 5,
    budgetVal: 9.7,
    budgetLabel: '9 củ 7',
    itineraryUrl: 'https://docs.google.com/document/d/1-zkJSTOqmhfO2f6iKi-4NM2KUpNqou6G/edit',
    description: 'Hành trình phương Nam rực rỡ: Từ vùng đất thánh Tây Ninh đến sông nước Miền Tây hữu tình và Sài Gòn sôi động. Chốt hạ 9 củ 7 cho 5 ngày 4 đêm ngập tràn tiếng cười và đặc sản!',
    image: '/images/Miền Tây.webp',
    badge: 'VIBE PHƯƠNG NAM',
    badgeType: 'red',
    organizerIcon: Anchor,
    cardTheme: 'white',
    contact: {
      name: 'Đang cập nhật',
      phone: '0978606297'
    }
  }
];
