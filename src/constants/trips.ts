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
    description: 'Khám phá và lựa chọn hành trình chân ái dành cho mùa hè của bạn. Tận hưởng gió biển và hải sản tươi ngon cùng anh chị em INNOer.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=800',
    badge: 'TOP RELAX',
    badgeType: 'yellow',
    organizerIcon: Coffee,
    cardTheme: 'white'
  },
  {
    id: '2',
    team: 'Team Phiến quân',
    title: 'Hùng Vĩ Trùng Khánh',
    location: 'Trùng Khánh, Trung Quốc',
    duration: 'Tháng 6',
    month: 6,
    budgetVal: 20,
    budgetLabel: '20 củ',
    description: 'Chinh phục thành phố của những cây cầu và sương mù. Trải nghiệm văn hóa và ẩm thực cay nồng đặc sắc cùng đội Phiến Quân.',
    image: 'https://images.unsplash.com/photo-1541542684-d95a141d24fc?auto=format&fit=crop&q=80&w=800',
    badge: 'ADVENTURE',
    badgeType: 'red',
    organizerIcon: Map,
    cardTheme: 'white'
  },
  {
    id: '3',
    team: 'Team MEP',
    title: 'Lệ Giang Cổ Trấn',
    location: 'Vân Nam, Trung Quốc',
    duration: 'Tháng 6',
    month: 6,
    budgetVal: 18,
    budgetLabel: '18 củ',
    description: 'Lạc bước vào không gian cổ kính của Lệ Giang. Tìm về những giá trị văn hóa lâu đời và phong cảnh hữu tình.',
    image: 'https://images.unsplash.com/photo-1540324151478-f3d3d6396860?auto=format&fit=crop&q=80&w=800',
    badge: 'CULTURAL',
    badgeType: 'white',
    organizerIcon: Camera,
    cardTheme: 'red'
  },
  {
    id: '4',
    team: 'Team AS3',
    title: 'Biển Xứ Quảng',
    location: 'Quảng Nam - Lý Sơn',
    duration: 'Tháng 5',
    month: 5,
    budgetVal: 10,
    budgetLabel: '10 củ',
    description: 'Đến với thiên đường biển đảo miền Trung. Nước trong vắt, nắng vàng rực rỡ và những kỉ niệm khó quên tại Lý Sơn.',
    image: 'https://images.unsplash.com/photo-1559592413-7ece35b462f7?auto=format&fit=crop&q=80&w=800',
    badge: 'ISLAND VIBE',
    badgeType: 'yellow',
    organizerIcon: Waves,
    cardTheme: 'white'
  },
  {
    id: '5',
    team: 'Team ss1,2,3,5',
    title: 'Quy Nhơn Rực Nắng',
    location: 'Bình Định - Phú Yên',
    duration: 'Tháng 4',
    month: 4,
    budgetVal: 10,
    budgetLabel: '10 củ',
    description: 'Mùa hè bắt đầu sớm với hành trình Quy Nhơn - Phú Yên. Những ghềnh đá hùng vĩ và bãi biển nguyên sơ đang chờ đón.',
    image: 'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?auto=format&fit=crop&q=80&w=800',
    badge: 'BEACH PARTY',
    badgeType: 'charcoal',
    organizerIcon: Sun,
    cardTheme: 'orange'
  },
  {
    id: '6',
    team: 'Team 360Home',
    title: 'Chữa Lành Tại Bali',
    location: 'Ubud, Indonesia',
    duration: 'Tháng 5',
    month: 5,
    budgetVal: 25,
    budgetLabel: 'trên 15 củ',
    description: 'Tìm lại sự cân bằng tại Bali thơ mộng. Trải nghiệm những vùng đất, văn hoá và con người mới cùng anh chị em INNOer.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    badge: 'SOUL CARE',
    badgeType: 'red',
    organizerIcon: Flame,
    cardTheme: 'charcoal'
  }
];
