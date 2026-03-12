import { 
  Users, 
  Compass, 
  Anchor, 
  Palette, 
  Music, 
  Mountain,
  Wine
} from 'lucide-react';

export interface Trip {
  id: string;
  team: string;
  title: string;
  location: string;
  duration: string;
  budget: string;
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
    budget: '10M VNĐ',
    description: 'Nghỉ dưỡng nhẹ nhàng, ngân sách tối ưu. Lựa chọn tuyệt vời để xả stress sau những ngày làm việc căng thẳng.',
    image: '/images/vung_tau.png',
    badge: 'BEST VALUE',
    badgeType: 'yellow',
    organizerIcon: Users,
    cardTheme: 'white'
  },
  {
    id: '2',
    team: 'Team Phiến quân',
    title: 'Hành Trình Vạn Lý',
    location: 'Trùng Khánh + Cửu Trại Câu',
    duration: 'Đầu tháng 6/2026',
    budget: '20M+ VNĐ',
    description: 'Tour "hành xác" đúng nghĩa cho ace đam mê dịch chuyển. Xe mở cửa bắt khách dọc đường, trải nghiệm không giới hạn!',
    image: '/images/chongqing.png',
    badge: 'ADVENTURE',
    badgeType: 'red',
    organizerIcon: Compass,
    cardTheme: 'white'
  },
  {
    id: '3',
    team: 'Team MEP',
    title: 'Giấc Mơ Vân Nam',
    location: 'Lệ Giang + Shangrila',
    duration: '3/6 - 7/6',
    budget: '18M VNĐ',
    description: 'Hành trình văn hóa, non-shopping. Khám phá vẻ đẹp cổ kính và hùng vĩ của vùng đất phía Nam Trung Quốc.',
    image: '/images/lijiang.png',
    badge: 'CULTURAL',
    badgeType: 'white',
    organizerIcon: Palette,
    cardTheme: 'red'
  },
  {
    id: '4',
    team: 'Team AS3',
    title: 'Biển Xanh Vẫy Gọi',
    location: 'Quảng Nam + Lý Sơn',
    duration: 'Giữa tháng 5',
    budget: '10M VNĐ',
    description: 'Tour nghỉ dưỡng 5 ngày 4 đêm. Nạp năng lượng với những hòn đảo hoang sơ và làn nước trong vắt.',
    image: '/images/da_nang.png',
    badge: 'HOT CHOICE',
    badgeType: 'yellow',
    organizerIcon: Anchor,
    cardTheme: 'white'
  },
  {
    id: '5',
    team: 'Team ss1,2,3,5',
    title: 'Quy Nhơn Party',
    location: 'Quy Nhơn + Phú Yên',
    duration: '13/4 - 17/4',
    budget: '10M VNĐ',
    description: 'Tranh thủ đi xả sớm! Đảm bảo nhậu bét nhè, vui quên lối về cùng liên quân ss.',
    image: '/images/quy_nhon.png',
    badge: 'EARLY BIRD',
    badgeType: 'charcoal',
    organizerIcon: Music,
    cardTheme: 'orange'
  },
  {
    id: '6',
    team: 'Team 360Home',
    title: 'Ăn, Cầu Nguyện, Yêu',
    location: 'Ubud, Bali',
    duration: 'Tháng 5',
    budget: 'Premium Budget',
    description: 'Hồi sinh tại thiên đường Bali. Tìm lại sự cân bằng giữa tâm hồn và thể chất giữa thiên nhiên xanh mướt.',
    image: '/images/bali.png',
    badge: 'SOUL CARE',
    badgeType: 'red',
    organizerIcon: Wine,
    cardTheme: 'charcoal'
  }
];
