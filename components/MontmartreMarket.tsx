import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, ChevronDown, ChevronUp } from 'lucide-react';
import nanoBananaIntroImg from '../nano_banana_intro.png'; // Ensure image path corresponds to project root

interface Stall {
    id: string;
    name: string;
    nameKo: string;
    type: string;
    typeIcon: string;
    awningColor: string;
    awningStripe: string;
    bodyColor: string;
    highlight: string;
    desc: string;
    location: string;
    rating?: number;
    link?: string;
    priceLevel?: number;
    isKorean?: boolean;
}

const stalls: Stall[] = [
    { id: 'masil', name: 'Masil', nameKo: '마실', type: '한식 숯불구이', typeIcon: '🥩', awningColor: '#F4A6A0', awningStripe: '#E8817A', bodyColor: '#FFF0EE', highlight: '#E8817A', desc: '올티가스 교민 사이 부동의 1위 숯불 갈비 맛집', location: 'Oranbo Drive', rating: 4.7, priceLevel: 2, link: 'https://www.facebook.com/MasilCharcoalGrillRestaurant', isKorean: true },
    { id: 'jumong', name: 'Jumong', nameKo: '주몽', type: '한식 BBQ', typeIcon: '🍖', awningColor: '#C3B1E1', awningStripe: '#A68DCB', bodyColor: '#F3EEFF', highlight: '#A68DCB', desc: '푸짐한 인심과 찐 한국의 맛, 된장찌개 일품', location: 'Pearl Drive', rating: 4.5, priceLevel: 2, isKorean: true },
    { id: 'doma', name: 'Doma', nameKo: '도마', type: '일식 (한국인 운영)', typeIcon: '🍣', awningColor: '#A8D8EA', awningStripe: '#7EC8E3', bodyColor: '#EDF7FC', highlight: '#7EC8E3', desc: '신선한 회와 초밥, 교민 사이 "찐맛집"', location: 'Pearl Plaza 2F', rating: 4.6, priceLevel: 2, isKorean: true },
    { id: 'sachunsung', name: 'Sa Chun Sung', nameKo: '사천성', type: '한국식 중화요리', typeIcon: '🥟', awningColor: '#FFD3B6', awningStripe: '#FFBB91', bodyColor: '#FFF5ED', highlight: '#FFBB91', desc: '탕수육과 짬뽕이 일품, 펄 플라자의 양대산맥', location: 'Pearl Plaza 2F', rating: 4.4, priceLevel: 2, isKorean: true },
    { id: 'seoulpharmacy', name: 'Seoul Pharmacy', nameKo: '서울약국', type: '한인 약국', typeIcon: '💊', awningColor: '#A8E6CF', awningStripe: '#8FD9BA', bodyColor: '#F5FCFA', highlight: '#66CC99', desc: '올티가스 지역 배달 가능! 친절한 건강 상담과 안심 약 조제', location: 'Ortigas Center', rating: 4.9, priceLevel: 2, isKorean: true, link: 'https://www.facebook.com/search/top/?q=Seoul%20Pharmacy%20Ortigas' },
    { id: 'kingkong', name: 'King Kong', nameKo: '킹콩 부대찌개', type: '부대찌개 전문', typeIcon: '🍲', awningColor: '#B5EAD7', awningStripe: '#8ED1B8', bodyColor: '#EEFCF5', highlight: '#8ED1B8', desc: '밥·라면 무한리필, 아이들이 사랑하는 맛', location: 'SM Megamall 3F', rating: 4.5, priceLevel: 1, isKorean: true },
    { id: 'sarang', name: 'Sarang', nameKo: '사랑', type: '전통 한식 (AIC 골드)', typeIcon: '🥘', awningColor: '#FFB7C5', awningStripe: '#FF9DB5', bodyColor: '#FFF0F3', highlight: '#FF9DB5', desc: '불고기 전골과 샤브샤브, 정갈한 한식의 정석', location: 'AIC Gold Tower', rating: 4.5, priceLevel: 2, isKorean: true, link: 'https://www.facebook.com/search/top/?q=Sarang%20Korean%20Restaurant%20Ortigas' },
    { id: 'u2sojubang', name: 'U2 Soju Bang', nameKo: 'U2 소주방', type: '실내포차 & 한식', typeIcon: '🍶', awningColor: '#D4A5FF', awningStripe: '#BF87F0', bodyColor: '#F5ECFF', highlight: '#BF87F0', desc: '얼큰한 닭도리탕이 일품! 늦은 밤까지 열려있는 사랑방', location: 'AIC Grande Tower', rating: 4.7, priceLevel: 2, isKorean: true, link: 'https://www.facebook.com/search/top/?q=U2%20Soju%20Bang%20Ortigas' },
    { id: 'gangwon', name: 'Gangwon Food', nameKo: '강원푸드', type: '손만두 & 샤브샤브', typeIcon: '🥟', awningColor: '#FF6B6B', awningStripe: '#E05555', bodyColor: '#FFF0F0', highlight: '#E05555', desc: '직접 빚은 손만두와 따뜻한 샤브샤브, Garnet Road의 숨은 맛집', location: 'OCAI Bldg, Garnet Rd', rating: 4.8, priceLevel: 2, isKorean: true, link: 'https://www.facebook.com/search/top/?q=Gangwon%20Food%20House%20Ortigas' },
    { id: 'sonamumart', name: 'Sonamu Mart', nameKo: '소나무마트', type: '한국 식품점', typeIcon: '🛒', awningColor: '#9FD5D1', awningStripe: '#7CC0BA', bodyColor: '#EEF9F8', highlight: '#7CC0BA', desc: '신선한 야채와 정육, 다양한 반찬을 만날 수 있는 곳', location: 'Ortigas Center', rating: 4.5, priceLevel: 2, isKorean: true, link: 'https://www.facebook.com/search/top/?q=Sonamu%20Mart%20Ortigas' },
    { id: 'haneulmart', name: 'Haneul Mart', nameKo: '하늘마트', type: '한국 식품점', typeIcon: '🏪', awningColor: '#A0C4FF', awningStripe: '#81B0F0', bodyColor: '#EEF4FF', highlight: '#81B0F0', desc: '그랜드 에메랄드 1층, 24시간 운영되는 한인 마트', location: 'Grand Emerald Tower', rating: 4.6, priceLevel: 2, isKorean: true, link: 'https://www.facebook.com/haneulmartortigas/' },
    { id: 'alexlee', name: 'Alex Lee', nameKo: '럭셔리 렌트 & 골프', type: '골프 투어 / 렌트', typeIcon: '⛳', awningColor: '#C9E4C5', awningStripe: '#A8D4A2', bodyColor: '#F0F9EE', highlight: '#A8D4A2', desc: '한국인 기사님 직접 운전, 공항픽업 & 골프레슨', location: 'Metro Manila', link: '#/golf-tour' },
];

const StripedAwning: React.FC<{ color: string; stripe: string; width?: number }> = ({
    color,
    stripe,
    width = 200,
}) => {
    const stripeWidth = 14;
    const numStripes = Math.ceil(width / stripeWidth);
    return (
        <svg
            viewBox={`0 0 ${width} 38`}
            className="w-full"
            style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.12))' }}
            preserveAspectRatio="none"
        >
            <defs>
                <clipPath id={`scallop-${color.replace('#', '')}`}>
                    <rect x="0" y="0" width={width} height="28" />
                    {Array.from({ length: Math.ceil(width / 20) }, (_, i) => (
                        <circle key={i} cx={i * 20 + 10} cy="28" r="10" />
                    ))}
                </clipPath>
            </defs>
            <g clipPath={`url(#scallop-${color.replace('#', '')})`}>
                <rect x="0" y="0" width={width} height="38" fill={color} />
                {Array.from({ length: numStripes }, (_, i) =>
                    i % 2 === 0 ? null : (
                        <rect
                            key={i}
                            x={i * stripeWidth}
                            y="0"
                            width={stripeWidth}
                            height="38"
                            fill={stripe}
                            opacity="0.5"
                        />
                    )
                )}
            </g>
        </svg>
    );
};

const MarketStall: React.FC<{
    stall: Stall;
    index: number;
    side: 'left' | 'right';
}> = ({ stall, index, side }) => {
    const isRight = side === 'right';
    return (
        <motion.div
            initial={{ opacity: 0, x: isRight ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="w-full"
        >
            <a
                href={stall.link || '#'}
                target={stall.link?.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="block group cursor-pointer"
            >
                <div className="relative -mb-1">
                    <StripedAwning color={stall.awningColor} stripe={stall.awningStripe} />
                    <div
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-md text-[10px] font-bold tracking-wide text-white shadow-md whitespace-nowrap z-10"
                        style={{ backgroundColor: stall.highlight }}
                    >
                        {stall.typeIcon} {stall.type}
                    </div>
                </div>
                <div
                    className="rounded-b-2xl border-2 pt-5 pb-3 px-4 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 relative overflow-hidden"
                    style={{
                        backgroundColor: stall.bodyColor,
                        borderColor: stall.awningColor,
                    }}
                >
                    {stall.isKorean && (
                        <div className="absolute top-1 right-2 text-[10px]">🇰🇷</div>
                    )}
                    <h4
                        className="font-extrabold text-[15px] leading-tight mb-0.5"
                        style={{ color: stall.highlight }}
                    >
                        {stall.nameKo}
                    </h4>
                    <p className="text-[11px] font-semibold text-gray-400 tracking-wide mb-1.5">
                        {stall.name}
                    </p>
                    <p className="text-[11px] text-gray-600 leading-snug mb-2 line-clamp-2">
                        {stall.desc}
                    </p>
                    <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1 text-[10px] text-gray-400">
                            <MapPin className="w-3 h-3" />
                            <span className="truncate max-w-[80px]">{stall.location}</span>
                        </div>
                        {stall.rating && (
                            <div className="flex items-center gap-0.5 text-[10px]">
                                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                <span className="font-bold text-gray-600">{stall.rating}</span>
                            </div>
                        )}
                    </div>
                    {stall.priceLevel && (
                        <div className="mt-1 text-[10px] text-gray-400">
                            {'₱'.repeat(stall.priceLevel)}{'·'.repeat(3 - stall.priceLevel)}
                        </div>
                    )}
                </div>
            </a>
        </motion.div>
    );
};

const StringLights: React.FC = () => (
    <svg className="absolute top-0 left-0 w-full h-12 pointer-events-none z-20" preserveAspectRatio="none">
        <defs>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <path
            d="M 0 6 Q 50 22, 100 8 Q 150 -4, 200 14 Q 250 28, 300 6 Q 350 -6, 400 16 Q 450 30, 500 8 Q 550 -4, 600 14 Q 650 28, 700 6 Q 750 -8, 800 16 Q 850 30, 900 8 Q 950 -4, 1000 14"
            fill="none"
            stroke="#8B7355"
            strokeWidth="1.5"
            opacity="0.4"
        />
        {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900].map((x, i) => {
            const colors = ['#FFE4B5', '#FFD1DC', '#B5EAD7', '#C3B1E1', '#A8D8EA', '#FDFD96', '#FFB7C5'];
            const y = 6 + Math.sin(x * 0.02) * 12;
            return (
                <g key={i} filter="url(#glow)">
                    <line x1={x} y1={y} x2={x} y2={y + 6} stroke="#8B7355" strokeWidth="1" opacity="0.5" />
                    <circle cx={x} cy={y + 9} r="3.5" fill={colors[i % colors.length]} opacity="0.9" />
                    <circle cx={x} cy={y + 9} r="1.5" fill="white" opacity="0.6" />
                </g>
            );
        })}
    </svg>
);

const BustlingCrowd: React.FC = () => {
    // 80 characters consisting of full-body adults, 20 children, and 10 pets varying in scale, positions and bouncing delays
    const people = [
        { e: '🚶‍♂️', t: '4%', l: '43%', s: 1, d: 0.2 },
        { e: '🚶‍♀️', t: '5%', l: '54%', s: 0.9, d: 1.1 },
        { e: '🏃', t: '7%', l: '48%', s: 0.85, d: 2.3 },
        { e: '💃', t: '9%', l: '35%', s: 1.1, d: 0.5 },
        { e: '🚶', t: '11%', l: '62%', s: 0.95, d: 1.8 },
        { e: '🏃‍♀️', t: '13%', l: '45%', s: 0.9, d: 3.1 },
        { e: '🕺', t: '15%', l: '52%', s: 1.05, d: 0.8 },
        { e: '🏌️‍♂️', t: '17%', l: '30%', s: 0.8, d: 2.5 },
        { e: '🚶‍♀️', t: '19%', l: '68%', s: 0.95, d: 1.2 },
        { e: '🧍', t: '21%', l: '49%', s: 1, d: 0.4 },
        { e: '🚴', t: '23%', l: '42%', s: 1.1, d: 2.1 },
        { e: '🏃', t: '25%', l: '58%', s: 0.85, d: 3.5 },
        { e: '🚶‍♂️', t: '27%', l: '38%', s: 0.9, d: 1.7 },
        { e: '🏌️‍♀️', t: '29%', l: '55%', s: 0.95, d: 0.9 },
        { e: '💃', t: '31%', l: '70%', s: 1.05, d: 2.8 },
        { e: '🏃‍♀️', t: '33%', l: '46%', s: 0.8, d: 1.4 },
        { e: '🏃‍♂️', t: '35%', l: '51%', s: 0.95, d: 3.2 },
        { e: '🚶', t: '37%', l: '33%', s: 0.85, d: 0.6 },
        { e: '🧍‍♀️', t: '39%', l: '65%', s: 1, d: 2.2 },
        { e: '🚴‍♀️', t: '41%', l: '44%', s: 1.1, d: 1.5 },
        { e: '🚶‍♂️', t: '43%', l: '55%', s: 0.9, d: 0.3 },
        { e: '🕺', t: '45%', l: '48%', s: 1.05, d: 2.9 },
        { e: '🏃', t: '48%', l: '38%', s: 0.8, d: 1.1 },
        { e: '🚶‍♀️', t: '50%', l: '62%', s: 0.95, d: 3.6 },
        { e: '🧍‍♂️', t: '52%', l: '50%', s: 1.0, d: 0.7 },
        { e: '🚴', t: '54%', l: '45%', s: 1.15, d: 2.4 },
        { e: '🏃‍♀️', t: '56%', l: '54%', s: 0.85, d: 1.8 },
        { e: '💃', t: '58%', l: '28%', s: 1.05, d: 0.9 },
        { e: '🚶', t: '60%', l: '66%', s: 0.9, d: 2.6 },
        { e: '🏌️‍♂️', t: '63%', l: '47%', s: 0.8, d: 3.4 },
        { e: '🚶‍♂️', t: '65%', l: '52%', s: 0.95, d: 1.3 },
        { e: '🧍', t: '67%', l: '42%', s: 1, d: 0.5 },
        { e: '🏃‍♂️', t: '69%', l: '58%', s: 0.85, d: 2.7 },
        { e: '🚶‍♀️', t: '71%', l: '49%', s: 0.9, d: 1.6 },
        { e: '🕺', t: '74%', l: '35%', s: 1.05, d: 3.8 },
        { e: '🏃‍♀️', t: '76%', l: '60%', s: 0.8, d: 0.2 },
        { e: '🚶', t: '78%', l: '25%', s: 0.75, d: 1.9 },
        { e: '🏃', t: '80%', l: '75%', s: 0.8, d: 3.3 },
        { e: '🧍‍♂️', t: '82%', l: '28%', s: 0.85, d: 0.8 },
        { e: '🚶‍♀️', t: '84%', l: '78%', s: 0.9, d: 2.2 },
        { e: '🚴‍♀️', t: '86%', l: '40%', s: 0.8, d: 1.5 },
        { e: '🏃‍♂️', t: '88%', l: '80%', s: 0.75, d: 3.7 },
        { e: '🧍', t: '90%', l: '26%', s: 0.85, d: 0.4 },
        { e: '🚶‍♂️', t: '92%', l: '72%', s: 0.9, d: 2.5 },
        { e: '💃', t: '94%', l: '44%', s: 0.8, d: 1.2 },
        { e: '🏃‍♀️', t: '95%', l: '82%', s: 0.75, d: 3.1 },
        { e: '🏌️‍♀️', t: '96%', l: '30%', s: 0.85, d: 0.9 },
        { e: '🚶', t: '97%', l: '65%', s: 0.9, d: 2.8 },
        { e: '🧍‍♀️', t: '98%', l: '85%', s: 0.8, d: 1.7 },
        { e: '🏃', t: '99%', l: '50%', s: 0.75, d: 0.6 },

        // --- 20 Children ---
        { e: '👧', t: '6%', l: '40%', s: 0.7, d: 1.3 },
        { e: '👦', t: '10%', l: '58%', s: 0.75, d: 2.1 },
        { e: '🧒', t: '14%', l: '42%', s: 0.7, d: 0.4 },
        { e: '👶', t: '18%', l: '50%', s: 0.6, d: 3.2 },
        { e: '👧', t: '22%', l: '65%', s: 0.75, d: 1.7 },
        { e: '👦', t: '26%', l: '35%', s: 0.7, d: 0.9 },
        { e: '🧒', t: '30%', l: '52%', s: 0.7, d: 2.8 },
        { e: '👧', t: '34%', l: '40%', s: 0.75, d: 1.1 },
        { e: '👦', t: '38%', l: '60%', s: 0.7, d: 0.5 },
        { e: '👶', t: '42%', l: '47%', s: 0.65, d: 2.4 },
        { e: '🧒', t: '46%', l: '55%', s: 0.7, d: 3.6 },
        { e: '👧', t: '50%', l: '38%', s: 0.75, d: 1.5 },
        { e: '👦', t: '54%', l: '65%', s: 0.7, d: 0.3 },
        { e: '🧒', t: '58%', l: '45%', s: 0.75, d: 2.9 },
        { e: '👧', t: '62%', l: '50%', s: 0.7, d: 1.8 },
        { e: '👶', t: '66%', l: '55%', s: 0.6, d: 0.7 },
        { e: '👦', t: '70%', l: '40%', s: 0.75, d: 3.3 },
        { e: '🧒', t: '74%', l: '62%', s: 0.7, d: 2.2 },
        { e: '👧', t: '78%', l: '48%', s: 0.75, d: 1.4 },
        { e: '👦', t: '82%', l: '52%', s: 0.7, d: 0.6 },

        // --- 10 Dogs & Cats ---
        { e: '🐶', t: '8%', l: '60%', s: 0.6, d: 1.0 },
        { e: '🐈', t: '16%', l: '38%', s: 0.65, d: 2.6 },
        { e: '🐕', t: '24%', l: '50%', s: 0.6, d: 0.8 },
        { e: '🐱', t: '32%', l: '68%', s: 0.65, d: 3.4 },
        { e: '🦮', t: '40%', l: '42%', s: 0.6, d: 1.9 },
        { e: '🐈‍⬛', t: '48%', l: '58%', s: 0.65, d: 0.2 },
        { e: '🐶', t: '56%', l: '35%', s: 0.6, d: 2.1 },
        { e: '🐕', t: '64%', l: '65%', s: 0.6, d: 3.7 },
        { e: '🐱', t: '72%', l: '46%', s: 0.65, d: 1.3 },
        { e: '🐈', t: '80%', l: '54%', s: 0.65, d: 0.5 },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {people.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute text-xl origin-bottom"
                    style={{ top: p.t, left: p.l, scale: p.s, opacity: 0.85 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.2 + (i % 2) * 0.3, repeat: Infinity, delay: p.d, ease: "easeInOut" }}
                >
                    {p.e}
                </motion.div>
            ))}
        </div>
    );
};

const MontmartreMarket: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const leftStalls = stalls.filter((_, i) => i % 2 === 0);
    const rightStalls = stalls.filter((_, i) => i % 2 === 1);

    const visibleLeft = expanded ? leftStalls : leftStalls.slice(0, 3);
    const visibleRight = expanded ? rightStalls : rightStalls.slice(0, 3);

    return (
        <div className="relative w-full my-12 overflow-hidden bg-transparent">
            {/* ── TITLE SECTION ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-6"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-bold uppercase tracking-widest mb-3 shadow-sm">
                    🎨 Montmartre d'Ortigas
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
                    올티가스 마켓 거리
                </h2>
                <p className="text-sm text-gray-500 font-medium">
                    나노바나나와 함께하는 맛집 & 마트 산책 🍌
                </p>
            </motion.div>

            {/* ── STREET CONTAINER ── */}
            <div
                className="relative rounded-3xl overflow-hidden pt-14 pb-8 px-3 md:px-6 shadow-md border border-amber-100"
                style={{
                    background: 'linear-gradient(180deg, #FFF8F0 0%, #FDEBD0 30%, #F5E6CC 60%, #E8D5B7 100%)',
                }}
            >
                <StringLights />

                {/* Decorative Lamp Posts */}
                <div className="absolute top-12 left-4 md:left-8 w-1 h-[85%] rounded-full opacity-20"
                    style={{ background: 'linear-gradient(180deg, #8B7355, #D4A574)' }}
                />
                <div className="absolute top-12 right-4 md:right-8 w-1 h-[85%] rounded-full opacity-20"
                    style={{ background: 'linear-gradient(180deg, #8B7355, #D4A574)' }}
                />

                <BustlingCrowd />

                <div className="relative max-w-2xl mx-auto">
                    {/* Cobblestone Center Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-10 md:w-16 z-0">
                        <div
                            className="w-full h-full opacity-20 rounded-full"
                            style={{
                                background: `repeating-conic-gradient(#B8977E 0% 25%, #D4B896 0% 50%) 0 0 / 12px 12px`,
                            }}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10 flex justify-center -mt-2 mb-4"
                    >
                        <div className="relative">
                            <img
                                src={nanoBananaIntroImg}
                                alt="NanoBanana Guide"
                                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-3 border-white shadow-lg object-cover"
                            />
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-[9px] font-bold text-amber-700 px-2 py-0.5 rounded-full shadow whitespace-nowrap border border-amber-200">
                                🍌 Guide
                            </div>
                        </div>
                    </motion.div>

                    {/* ZIPPER LAYOUT: alternating left-right stalls */}
                    <div className="grid grid-cols-2 gap-x-8 md:gap-x-14 gap-y-5 relative z-10">
                        <div className="space-y-5">
                            {visibleLeft.map((stall, i) => (
                                <MarketStall key={stall.id} stall={stall} index={i} side="left" />
                            ))}
                        </div>

                        <div className="space-y-5 pt-10 md:pt-14">
                            {visibleRight.map((stall, i) => (
                                <MarketStall key={stall.id} stall={stall} index={i} side="right" />
                            ))}
                        </div>
                    </div>

                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="relative z-10 flex justify-center mt-4"
                        >
                            <div className="bg-white/80 backdrop-blur-sm text-[11px] text-gray-500 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                                🍌 여기까지 둘러보셨군요! 맛있는 곳 많죠? ✨
                            </div>
                        </motion.div>
                    )}
                </div>

                <div className="flex justify-center mt-6 relative z-10">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm text-sm font-semibold text-gray-700 shadow-md hover:shadow-lg transition-all border border-gray-200 hover:bg-white group"
                    >
                        {expanded ? (
                            <>
                                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                접기
                            </>
                        ) : (
                            <>
                                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                더 많은 가게 보기 ({stalls.length - 6}개 더)
                            </>
                        )}
                    </button>
                </div>

                <div className="absolute top-20 left-[10%] text-xl opacity-30 rotate-12 pointer-events-none">🌸</div>
                <div className="absolute top-40 right-[15%] text-lg opacity-25 -rotate-6 pointer-events-none">🌷</div>
                <div className="absolute bottom-20 left-[20%] text-xl opacity-20 rotate-45 pointer-events-none">🌺</div>
                <div className="absolute bottom-32 right-[25%] text-lg opacity-25 rotate-12 pointer-events-none">🎨</div>
                <div className="absolute top-60 left-[5%] text-sm opacity-20 pointer-events-none">☕</div>
                <div className="absolute top-[55%] right-[8%] text-sm opacity-20 pointer-events-none">🥖</div>
            </div>
        </div>
    );
};

export default MontmartreMarket;
