import React from 'react';
import { BookOpen, Users, Award, Globe, ShieldCheck, MapPin, ShoppingBag, Utensils, Home, Wifi, Rocket, Atom, Telescope, Church, Dumbbell, HeartPulse, Tag, Brain, Database, Cpu, TrendingUp, Mic } from 'lucide-react';
import { CurriculumItem, CostItem, VisaCostItem, LivingInfoItem, FAQItem, FeatureItem, BlogPost, CarrotItem } from './types';
import class1on1Img from './class-1on1.png';
import classGroupImg from './class-group.png';
import blog10Img from './blog-10.png';
import blog9Img from './blog-9.png';
import blog8Img from './blog-8.png';
import blog6Img from './blog-6.png';
import blog5Img from './blog-5.png';
import blog3Img from './blog-3.png';
import nanobananaSkatingImg from './nanobanana-skating.png';
import nanobananaAceWaterSpaImg from './nanobanana-acewaterspa.png';
import blogEmeraldWeekendImg from './blog-emerald-weekend.png';
import blogTobysEstateImg from './tobys-estate-brunch.png';
import blogTobysEstateMothersImg from './tobys-estate-mothers.png';
import starbucksPearlImg from './starbucks-pearl.png';
import starbucksPodiumInteriorImg from './starbucks-podium-interior.png';
import starbucksMeditationImg from './starbucks-meditation.png';
import starbucksCapitolImg from './starbucks-capitol-commons.png';
import starbucksCyberscapeImg from './starbucks-cyberscape.png';
import starbucksGlasTowerImg from './starbucks-glas-tower.png';

// --- Icons Map (To share across languages) ---
export const ICONS = {
  BookOpen: <BookOpen className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Atom: <Atom className="w-6 h-6" />,
  Telescope: <Telescope className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Mic: <Mic className="w-6 h-6" />
};

// --- General Info (Shared) ---
export const ACADEMY_INFO = {
  name: "아이캔 올티가스 캠프 (ICAN Ortigas Camp)",
  location: "16F Strata 100 Building, Emerald Ave, Ortigas Center, Pasig City",
  coordinates: { lat: 14.5869, lng: 121.0628 }, // Strata 100 Coordinates
  contacts: {
    phone: "070-7014-2233",
    localPhone: "0945-479-9556",
    kakao: "icanacademy",
    email: "icanacademy@naver.com",
    web: "www.icanacademy.com"
  }
};

// --- OltiCarrot Data (Mock) ---
export const CARROT_ITEMS: CarrotItem[] = [
  {
    id: '1',
    title: '5학년 수학 문제집 (새상품)',
    category: 'Book',
    price: 300,
    currency: 'PHP',
    location: 'Strata 100 McDonald\'s',
    time: '10 mins ago',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop',
    likes: 2,
    chats: 1,
    seller: 'Joy Mom',
    sellerKakaoId: 'joymom123',
    description: '아이 수학 문제집을 잘못 사서 내놓습니다. 펼쳐보지도 않은 새 책입니다.',
    status: 'sale',
    temperature: 37.2
  },
  {
    id: '2',
    title: '샤오미 선풍기 팝니다 (1달 사용)',
    category: 'Electronics',
    price: 800,
    currency: 'PHP',
    location: 'Strata 100 McDonald\'s',
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop',
    likes: 5,
    chats: 3,
    seller: 'Happy Daddy',
    sellerKakaoId: 'happydad88',
    description: '한 달 정도 사용했는데 성능 좋습니다. 박스 풀셋입니다.',
    status: 'reserved',
    temperature: 36.5
  },
  {
    id: '3',
    title: '아이패드 에어 4세대 + 펜슬',
    category: 'Digital',
    price: 25000,
    currency: 'PHP',
    location: 'Strata 100 McDonald\'s',
    time: '1 day ago',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=400&auto=format&fit=crop',
    likes: 12,
    chats: 6,
    seller: 'Student A',
    sellerKakaoId: 'stustu_a',
    description: '공부용으로 쓰던 아이패드입니다. 기스 조금 있지만 화면은 깨끗해요.',
    status: 'sale',
    temperature: 40.5
  },
  {
    id: '4',
    title: '나이키 키즈 운동화 (200mm)',
    category: 'Clothing',
    price: 1200,
    currency: 'PHP',
    location: 'Strata 100 McDonald\'s',
    time: '3 days ago',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop',
    likes: 1,
    chats: 0,
    seller: 'Mina',
    sellerKakaoId: 'mina_mom',
    description: '사이즈가 금방 작아져서 몇 번 못 신었습니다. 상태 A급입니다.',
    status: 'sold',
    temperature: 36.5
  },
  {
    id: '5',
    title: '쿠쿠 밥솥 6인용 (한국 가져온 것)',
    category: 'Kitchen',
    price: 3000,
    currency: 'PHP',
    location: 'Strata 100 McDonald\'s',
    time: '5 mins ago',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=400&auto=format&fit=crop',
    likes: 8,
    chats: 4,
    seller: 'CookMaster',
    sellerKakaoId: 'chef_lee',
    description: '한국에서 직접 가져온 쿠쿠 밥솥입니다. 변압기 필요 없습니다 (220V).',
    status: 'sale',
    temperature: 38.0
  },
  {
    id: '6',
    title: '🍌 나노바나나 AI 마스코트 인형 (한정판)',
    category: 'Digital',
    price: 0,
    currency: 'PHP',
    location: 'Strata 100 McDonald\'s',
    time: 'Just now',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=400&auto=format&fit=crop',
    likes: 15,
    chats: 8,
    seller: 'NanoBanana Team',
    sellerKakaoId: 'nanobanana_ai',
    description: '아이캔 캠프의 귀여운 AI 마스코트, 나노바나나입니다! 🍌✨\n\n아이들의 영어 학습을 도와주는 친절한 AI 친구예요. 이 인형은 캠프 수료 기념 한정판으로, 나눔으로 드립니다.\n\n올티가스 직거래 환영, 쿨거래 가능해요!',
    status: 'sale',
    temperature: 42.0
  }
];


// --- Blog Data (Roy House) ---
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-15',
    title: "새벽 5시의 기적? ☕️ 올티가스 스타벅스 명당 & 오픈시간 총정리!",
    excerpt: "새벽 묵상과 모닝 커피를 사랑하는 분들을 위한 특급 정보! 24시간 불이 꺼지지 않는 곳부터, 호텔급 인테리어의 리저브 매장까지. 올티가스 스벅 대동여지도를 공개합니다.",
    content: `
      <p>안녕하세요! 스타벅스 닉네임 <strong>'로이맘'</strong>, 로이 하우스입니다. 🌿</p><br/>
      <p>저는 하루 중 가장 좋아하는 시간이 바로 모두가 잠든 <strong>새벽 5시</strong>예요. 따뜻한 아메리카노 한 잔과 함께 다이어리를 정리하고 말씀을 묵상하는 그 고요한 시간이 없으면 하루를 시작할 에너지가 안 생기더라고요.</p>
      <p>그래서 저처럼 <strong>'새벽형 인간'</strong>이신 학부모님들을 위해, 제가 두 발로 뛰어 완성한 <strong><올티가스 스타벅스 대동여지도></strong>를 공개합니다. 5시, 6시에 여는 곳? 모두 찾았습니다! (저장은 필수! ⭐)</p><br/>

      <img src="${starbucksMeditationImg}" class="w-full rounded-2xl my-6 shadow-sm" alt="Early morning meditation with coffee" />

      <h3 class="text-xl font-bold mb-2">1. 🌙 24시간 잠들지 않는 곳 (새벽 5시 OK!)</h3>
      <p>언제 가도 열려 있는 든든한 24시간 매장들입니다. 새벽 5시 묵상은 물론, 밤샘 공부도 문제없어요.</p>
      
      <div class="mb-4">
        <h4 class="font-bold text-lg text-ican-600">📍 펄 플라자 (Pearl Plaza) 점</h4>
        <p>올티가스 센터 중심부에서 가장 접근성이 좋은 24시간 매장입니다. 2층 규모라 자리도 넉넉해요.</p>
        <ul class="list-disc ml-5 text-sm text-gray-600">
          <li><strong>위치:</strong> Pearl Plaza, Pearl Dr (SM 메가몰 B동 건너편)</li>
          <li><strong>특징:</strong> 새벽에도 공부하는 학생들과 직장인들로 적당한 활기가 있어 무섭지 않아요. 야외 테이블에서 맞는 새벽 공기가 일품!</li>
        </ul>
      </div>

      <div class="mb-4">
        <h4 class="font-bold text-lg text-ican-600">📍 이스트 텍타이트 (East Tektite) 점</h4>
        <p>증권가 건물 1층에 있어 층고가 높고 쾌적합니다. 비교적 덜 붐비는 숨은 명소예요.</p>
         <ul class="list-disc ml-5 text-sm text-gray-600">
          <li><strong>위치:</strong> Exchange Road, Tektite Towers West Tower (산 미구엘 본사 근처)</li>
        </ul>
      </div>

       <div class="mb-6">
        <h4 class="font-bold text-lg text-ican-600">📍 메트로워크 (Metrowalk) 점</h4>
        <p>상업 지구 내에 있어 주차도 편하고, 주변이 밝아서 안전합니다.</p>
         <ul class="list-disc ml-5 text-sm text-gray-600">
          <li><strong>위치:</strong> Metrowalk Complex, Meralco Avenue</li>
        </ul>
      </div>

      <img src="${starbucksPearlImg}" class="w-full rounded-2xl my-6 shadow-sm" alt="Starbucks Pearl Plaza Exterior" />

      <h3 class="text-xl font-bold mb-2">2. 🌅 새벽 6시 전후 오픈 (상쾌한 아침 산책)</h3>
      <p>공원 산책과 함께 모닝 커피를 즐길 수 있는 최고의 코스입니다.</p>

      <div class="mb-4">
        <h4 class="font-bold text-lg text-ican-600">📍 캐피톨 커먼스 (Capitol Commons) 리저브 & 드라이브 스루</h4>
        <p><strong>"공원 뷰 맛집 + 주말 24시간의 반전!"</strong></p>
        <p>새벽 조깅하시는 분들에게 강추! 바로 앞 공원을 바라보며 마시는 커피는 꿀맛입니다. 보통 오전 6시쯤 열지만, <strong>금/토요일은 24시간</strong> 운영하기도 하니 주말 새벽 묵상 장소로 딱이죠.</p>
         <ul class="list-disc ml-5 text-sm text-gray-600">
          <li><strong>위치:</strong> Capitol Commons Park, Meralco Ave (에스탄시아 몰 앞)</li>
          <li><strong>추천:</strong> 통유리로 들어오는 아침 햇살이 정말 예술입니다. ☀️</li>
        </ul>
      </div>
      
      <img src="${starbucksCapitolImg}" class="w-full rounded-2xl my-6 shadow-sm" alt="Starbucks Capitol Commons with Park View" />

      <div class="mb-6">
        <h4 class="font-bold text-lg text-ican-600">📍 올티가스 익스텐션 (Ortigas Ext) 점</h4>
        <p>로이 하우스에서 차로 조금 이동해야 하지만, <strong>오전 6시 칼오픈</strong> 하는 부지런한 매장입니다. 드라이브 스루라 픽업하기도 편해요.</p>
      </div>

      <h3 class="text-xl font-bold mb-2">3. ✨ (번외) 시설 & 분위기 끝판왕</h3>
      <p><strong>더 포디움 리저브 (The Podium Reserve)</strong>: 오픈은 8시 반으로 늦지만, 인테리어와 커피 맛은 올티가스 최고! (호텔 라운지 급)</p>
      <img src="${starbucksPodiumInteriorImg}" class="w-full rounded-2xl my-6 shadow-sm" alt="Starbucks Reserve Interior" />
      
      <h3 class="text-xl font-bold mb-2">4. ☕️ 로이맘's Pick: 나만 알고 싶은 아지트</h3>
      <p>제가 개인적으로 가장 애정하는 매장 두 곳을 살짝 공개합니다. (소문내지 마세요! 🤫)</p>
      
      <div class="mb-6">
        <h4 class="font-bold text-lg text-ican-600">📍 사이버스케이프 알파 (Cyberscape Alpha) 점</h4>
        <p><strong>"새벽 5시 30분의 아늑함"</strong></p>
        <p>로빈슨 사이버스케이프 알파 건물 1층에 위치해 있어요. 우드 톤의 따뜻한 인테리어가 정말 아늑해서 새벽 묵상하기에 그만입니다. 보통 오전 5시 30분에 열어서, 5시 오픈을 놓쳤을 때 가기 딱 좋아요.</p>
        <img src="${starbucksCyberscapeImg}" class="w-full rounded-2xl my-4 shadow-sm" alt="Starbucks Cyberscape Alpha Interior" />
        <ul class="list-disc ml-5 text-sm text-gray-600">
          <li><strong>위치:</strong> Garnet Rd (Sapphire Rd 사이), Robinsons Cyberscape Alpha</li>
          <li><strong>오픈:</strong> 평일 오전 5:30 (주말은 변동 가능하니 확인 필수!)</li>
        </ul>
      </div>

      <div class="mb-6">
        <h4 class="font-bold text-lg text-ican-600">📍 글라스 타워 (GLAS Tower) 점</h4>
        <p><strong>"통유리로 쏟아지는 아침 햇살 맛집"</strong></p>
        <p>모던하고 세련된 분위기를 좋아하신다면 여기만 한 곳이 없죠. 층고가 높고 전면이 유리라 개방감이 엄청나요. 오전 7시 오픈이라 아침형 인간보다는 '아침 출근/등교형 인간'에게 추천!</p>
        <img src="${starbucksGlasTowerImg}" class="w-full rounded-2xl my-4 shadow-sm" alt="Starbucks GLAS Tower Exterior" />
        <ul class="list-disc ml-5 text-sm text-gray-600">
          <li><strong>위치:</strong> Opal Rd corner Ruby Rd, GLAS Tower</li>
          <li><strong>오픈:</strong> 오전 7:00 (여유로운 아침을 원할 때 제격)</li>
        </ul>
      </div>

      <br/>
      <div class="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h4 class="font-bold text-accent mb-2">💡 로이맘의 이용 꿀팁</h4>
        <p>1. <strong>구글맵 시간 확인 필수</strong>: 필리핀 매장들은 운영 시간이 자주 바뀝니다. 출발 전 'Starbucks [매장명]'으로 한 번 더 체크하세요!<br/>
        2. <strong>따뜻한 옷차림</strong>: 새벽 스벅은 냉장고 수준입니다. 가디건 꼭 챙기세요. 🥶<br/>
        3. <strong>사이렌 오더</strong>: 한국 계정으로는 안 돼요. 줄 서지 않으려면 필리핀 스타벅스 앱을 설치해보세요!</p>
      </div>
    `,
    date: "2025.12.28",
    category: "Cafe",
    image: starbucksMeditationImg,
    author: "Roy House (Joy Mom)",
    tags: ["Starbucks", "OrtigasCafe", "MorningRoutine", "24Hours"]
  },
  {
    id: 'blog-14',
    title: "나만 알고 싶은 아지트, 토비 하우스(Toby's Estate) ☕️✨",
    excerpt: "우연히 들렀다가 '인생 카페' 등극! 산미 가득한 롱블랙과 가성비 최고의 파스타, 그리고 끊이지 않는 수다. 엄마들의 힐링 성지, 함께 가실래요?",
    content: `
      <p>안녕하세요! 로이 하우스입니다. :) 👋</p><br/>
      <p>오늘은 제가 정말 우연히 발견했다가, 이제는 <strong>'없으면 못 사는'</strong> 최애 아지트가 되어버린 곳을 소개해 드리려고 해요. 바로 올티가스의 숨은(사실은 유명하지만! 😉) 보석, <strong>'토비 하우스(Toby's Estate)'</strong>입니다.</p><br/>

      <h3 class="text-xl font-bold mb-2">🚪 우연이 선물해 준 마법 같은 공간</h3>
      <p>아이들 학원 보내놓고 '어디 괜찮은 데 없나?' 서성이다가, 통유리 너머로 보이는 고급스러운 조명에 이끌려 들어간 곳이었어요. 문을 열자마자 퍼지는 향긋한 원두 냄새와 높은 천장, 세련된 인테리어... 마치 청담동 갤러리 카페에 온 듯한 기분이더라고요! 😍</p><br/>

      <img src="${blogTobysEstateMothersImg}" class="w-full rounded-2xl my-6 shadow-sm" alt="Moms enjoying brunch at Tobys Estate" />

      <h3 class="text-xl font-bold mb-2">☕️ '산미'의 신세계, 롱블랙(Long Black)</h3>
      <p>이곳의 시그니처는 단연 <strong>롱블랙</strong>이에요. 평소 고소한 커피만 찾던 저였는데, 직원분의 추천으로 마셔본 이곳의 롱블랙은 충격 그 자체였어요! 기분 좋게 톡 쏘는 산미가 입안을 감싸는데, 디저트 없이 커피만 마셔도 황홀할 지경이었답니다. 커피 맛 좀 아는 엄마들 사이에선 이미 정평이 나 있더라고요.</p><br/>

      <h3 class="text-xl font-bold mb-2">🍝 가성비와 분위기, 두 마리 토끼를 잡다</h3>
      <p>"이렇게 고급스러우면 비싸지 않을까?" 걱정은 NO! 메뉴판을 보고 또 한 번 놀랐어요. 파스타와 브런치 메뉴들이 이 분위기에 믿기지 않을 만큼 <strong>합리적인 가격</strong>이었거든요. 꾸덕꾸덕한 크림 파스타 한 입 먹고, 깔끔한 롱블랙 한 모금 마시면... 그곳이 바로 천국! 🌈</p><br/>

      <h3 class="text-xl font-bold mb-2">🗣️ 우리들만의 비밀스러운 수다 타임</h3>
      <p>맛있는 음식과 커피, 그리고 편안한 분위기 덕분일까요? 이곳에만 오면 시간 가는 줄 모르고 이야기꽃을 피우게 돼요. 육아 스트레스, 남편 흉(?), 아이들 교육 정보까지... 쉴 새 없이 떠들다 보면 어느새 하원 시간이 훌쩍 다가와 있답니다.</p>
      <p>엄마들에게도 가끔은 이런 <strong>'근사한 사치'</strong>가 필요하잖아요? 부담 없는 가격으로 누리는 최고의 힐링, 토비 하우스에서 꼭 경험해 보세요! (저랑 마주치면 인사해요! 👋)</p>
    `,
    date: "2025.12.28",
    category: "Food",
    image: blogTobysEstateMothersImg,
    author: "Roy House (Joy Mom)",
    tags: ["OrtigasCafe", "TobysEstate", "MomsBrunch", "LongBlack"]
  },
  {
    id: 'blog-13',
    title: "도로가 운동장으로 변신? 오감만족, 토요일의 에메랄드 애비뉴 🛹🍱",
    excerpt: "차 없는 거리에서 즐기는 자유! 자전거, 스케이트보드, 줄넘기... 그리고 오후 3시까지만 열리는 반짝 맛집 시장과 이색 테니스까지. 올티가스 주민이 전하는 생생한 주말 라이프!",
    content: `
      <p>안녕하세요! 로이 하우스입니다. :) 🌿</p><br/>
      <p>매주 토요일, 제가 사는 이곳 올티가스에는 마법 같은 일이 벌어집니다. 평일 내내 차들로 꽉 막혀있던 <strong>'에메랄드 애비뉴(Emerald Avenue)'</strong>가 거대한 놀이터로 변신하거든요! 로컬 주민인 제가 직접 다녀온 생생한 현장을 여러분께 1인칭 시점으로 중계해 드릴게요.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">🚫 차 없는 거리의 자유로움 (Car-Free Weekend)</h3>
      <p>토요일 아침이 밝으면 도로는 아이들의 세상이 됩니다. 아스팔트 위를 마음껏 달리는 기분, 상상이 가시나요?</p>
      <ul class="list-disc ml-5 mb-4">
        <li><strong>씽씽 쌩쌩!</strong> 자전거, 인라인스케이트, 킥보드를 탄 아이들이 신나게 질주합니다. 차 걱정 없이 안전하게 탈 수 있어 부모님들도 안심이죠.</li>
        <li><strong>줄넘기 & 배드민턴:</strong> 뻥 뚫린 도로 한복판에서 줄넘기를 하거나 배드민턴 채를 휘두르는 모습도 흔한 풍경이에요.</li>
      </ul><br/>

      <img src="${blogEmeraldWeekendImg}" class="w-full rounded-2xl my-6 shadow-sm" alt="Emerald Avenue Weekend Market and Activities" />

      <h3 class="text-xl font-bold mb-2">🍱 놓치면 후회! 오후 3시까지 열리는 먹거리 시장</h3>
      <p>운동을 하다 출출해지면 어디선가 맛있는 냄새가 코를 찌릅니다. 바로 주말에만 열리는 '먹거리 시장'인데요. <strong>주의하세요! 이 시장은 오후 3시까지만 운영됩니다.</strong> ⏰</p>
      <p>필리핀 현지 바비큐 꼬치구이(Isaw)부터 시원한 열대 과일 셰이크, 갓 구운 빵까지... 점심 식사나 간식으로 딱이에요. 3시가 지나면 마법처럼 사라지니, 운동 전에 든든하게 배를 채우거나 점심 시간에 맞춰 방문하는 센스가 필요해요! 😋</p><br/>

      <h3 class="text-xl font-bold mb-2">🎾 도심 속 이색 스포츠, 간이 테니스(Pickleball)</h3>
      <p>그리고 또 하나의 하이라이트! 선선한 저녁이 되면 도로 한편에 <strong>'간이 테니스장(Pickleball Court)'</strong>이 뚝딱 만들어집니다.</p>
      <p>네트와 라인까지 완벽하게 갖춰져 있고, 소정의 비용만 내면 누구나 라켓을 빌려 즐길 수 있어요. '탁구+테니스+배드민턴'을 섞어 놓은 듯한 피클볼은 요즘 올티가스에서 가장 핫한 스포츠랍니다. 빌딩 숲 야경을 배경으로 공을 치다 보면 스트레스가 확 풀려요!</p><br/>

      <h3 class="text-xl font-bold mb-2">✨ 로이맘의 한 줄 평</h3>
      <p><strong>"낮에는 맛집 탐방, 밤에는 이색 스포츠! 토요일을 꽉 채우는 완벽 코스"</strong><br/>
      멀리 여행 가지 않아도 좋아요. 이번 주말엔 운동화 끈 조여 매고 에메랄드 애비뉴로 나와보시는 건 어떨까요? 활기찬 에너지와 맛있는 음식이 여러분을 기다리고 있답니다. ❤️</p>
    `,
    date: "2025.12.27",
    category: "Culture",
    image: blogEmeraldWeekendImg,
    author: "Roy House (Joy Mom)",
    tags: ["OrtigasWeekend", "EmeraldAvenue", "StreetFood", "Pickleball"]
  },
  {
    id: 'blog-12',
    title: "첨벙첨벙! 개구쟁이 쌍둥이와 함께한 에이스 워터 스파 (Ace Water Spa) 파식 정복기!",
    excerpt: "에너자이저 3학년 아들 둘과 함께 다녀온 파식의 핫플레이스! 물놀이도 하고 피로도 풀고, 온 가족이 만족한 하루 코스를 공개합니다.",
    content: `
      <p>안녕하세요! 로이 하우스입니다. ✨</p><br/>
      <p>오늘은 저희 가족(저, 남편, 그리고 에너지가 넘쳐흐르는 3학년 쌍둥이 아들 둘!)이 다녀온 <strong>'에이스 워터 스파(Ace Water Spa)'</strong> 이야기를 들려드릴게요. 파식(Pasig) 시에 위치한 이곳은 단순한 수영장이 아니라, 어른들은 마사지를 즐기고 아이들은 신나게 놀 수 있는 일석이조의 천국이랍니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">🚗 출발 전 체크! 준비물 챙기기</h3>
      <p>에이스 워터 스파는 복장 규정이 매~우 엄격해요. 저희도 미리 알고 가서 다행이었지, 아니면 입구 컷 당할 뻔했답니다.</p>
      <ul class="list-disc ml-5 mb-4">
        <li><strong>수영복:</strong> 헐렁한 비치웨어 NO! 지퍼나 장식이 달린 것도 NO! 오직 <strong>몸에 딱 붙는 스판덱스(Spandex) 소재</strong>의 래시가드나 수영복만 가능해요.</li>
        <li><strong>수영모자:</strong> 필수입니다. 캡모자는 안 돼요.</li>
        <li><strong>세면도구:</strong> 샴푸, 바디워시 등은 챙겨가시는 게 좋아요.</li>
      </ul><br/>

      <h3 class="text-xl font-bold mb-2">💦 본격 물놀이 시작! (ft. 나노바나나)</h3>
      <p>입장하자마자 아이들은 유수풀(Lazy River)로 풍덩! 둥둥 떠다니며 깔깔거리는 소리에 저절로 미소가 지어지더라고요.</p>
      <img src="${nanobananaAceWaterSpaImg}" class="w-full rounded-2xl my-6 shadow-sm" alt="Family and NanoBanana at Ace Water Spa" />
      <p>특히 오늘은 특별 게스트, <strong>나노바나나</strong>도 함께했는데요! 물장구치는 아이들 사이에서 노란 바나나가 둥둥 떠다니니 시선 집중! 😍 (물론 상상 속 친구였지만 아이들은 진짜 있는 것처럼 즐거워했어요 ㅎㅎ)</p><br/>

      <h3 class="text-xl font-bold mb-2">💆‍♀️ 엄빠는 힐링 타임</h3>
      <p>아이들이 신나게 노는 동안, 저와 남편은 '수압 마사지 존'을 순회했습니다. 허리, 어깨, 발바닥까지... 강력한 물줄기에 몸을 맡기니 그동안 쌓인 피로가 싹~ 날아가는 기분! "아~ 시원하다" 소리가 절로 나왔어요. 수십 가지 코스가 있어서 지루할 틈이 없었답니다.</p><br/>

      <h3 class="text-xl font-bold mb-2">🍲 물놀이 후엔 역시 먹방!</h3>
      <p>4시간 꽉 채워 놀고 나니 배에서 꼬르륵 소리가... 스파 바로 위층에도 식당이 있고, 건너편 '카피톨요(Kapitolyo)' 지역이 또 맛집 천국이잖아요? 저희는 따끈한 국물이 생각나서 근처 샤브샤브 집으로 향했답니다. 물놀이 후 먹는 밥은 꿀맛 그 자체!</p><br/>

      <h3 class="text-xl font-bold mb-2">👍 총평</h3>
      <p><strong>"엄마, 다음 주에 또 와요!"</strong>라고 외치는 아이들. 😊<br/>
      물놀이를 좋아하는 아이들과 피로를 풀고 싶은 부모님 모두를 만족시킬 수 있는 최고의 장소였습니다. 이번 주말, 에이스 워터 스파에서 가족의 사랑 온도를 1도 올려보시는 건 어떨까요?</p>
    `,
    date: "2025.12.27",
    category: "Activity",
    image: nanobananaAceWaterSpaImg,
    author: "Roy House (Joy Mom)",
    tags: ["AceWaterSpa", "Pasig", "FamilyTrip"]
  },
  {
    id: 'blog-11',
    title: "Fun & Smart! 엄마와 아이를 위한 SM 메가몰 하루 코스 정복기!",
    excerpt: "거대 쇼핑몰 SM 메가몰, 어디서부터 가야 할지 막막하시죠? 전문 가이드가 추천하는 알짜배기 데이트 코스로 하루를 완벽하게 즐겨보세요!",
    content: `
      <p>안녕하세요, 로이 하우스입니다.</p><br/>
      <p>올티가스 생활의 중심, <strong>SM 메가몰(SM Megamall)</strong>! 하지만 막상 가보면 너무 넓어서 어디가 어딘지, 아이랑 가기엔 괜찮을지 고민되시죠?</p>
      <p>그래서 준비했습니다. <strong>엄마는 여유롭게 쇼핑하고, 아이는 신나게 뛰어노는 '1타 2피' 하루 완성 코스!</strong> 지금 바로 출발합니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">🕘 [오전 10:00] 여유로운 브런치 & 카페인 충전</h3>
      <p>먼저 카페인 수혈부터 해야겠죠? 메가몰 <strong>Mega Fashion Hall 1층</strong>에 있는 <strong>'살라 비스트로(Sala Bistro)'</strong>나 <strong>'팀호완(Tim Ho Wan)'</strong> 옆의 카페들을 추천합니다. 비교적 한적한 오전에 갓 구운 빵과 커피 향을 음미하며 오늘 하루를 계획해 보세요.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">⚽ [오전 11:30] 아이들의 천국, 키즈 카페</h3>
      <p>먼저 아이들과 함께 <strong>나노바나나(NanoBanana)</strong>를 만나 신나게 스케이트장으로 향해볼까요?</p>
      <img src="${nanobananaSkatingImg}" class="w-full rounded-2xl my-6 shadow-sm" alt="NanoBanana Skating with Family" />
      <p>엄마가 차 한 잔의 여유를 즐겼다면, 이제 아이들 차례입니다! <strong>A동 지하 1층</strong>의 <strong>'Cosmic Kidz'</strong>나 새롭게 리뉴얼된 키즈 존으로 이동하세요. 거대한 볼풀장과 미끄럼틀에서 아이들이 에너지를 쏟아내는 동안, 잠시 쇼핑 목록을 점검하는 센스!</p><br/>
      
      <h3 class="text-xl font-bold mb-2">🥟 [오후 1:00] 실패 없는 점심, 딘타이펑 (Din Tai Fung)</h3>
      <p>점심은 <strong>Mega Fashion Hall 1층</strong>의 <strong>'딘타이펑'</strong>을 추천합니다. 호불호 없는 샤오롱바오와 계란 볶음밥은 아이들도 정말 잘 먹거든요. 대기 시간이 길 수 있으니 조금 서두르거나 미리 번호표를 뽑아두는 것이 팁입니다!</p>
      <img src="https://images.unsplash.com/photo-1563245372-f21727e5891d?q=80&w=2070&auto=format&fit=crop" class="w-full rounded-2xl my-6 shadow-sm" alt="Dimsum Lunch" />
      <br/>
      
      <h3 class="text-xl font-bold mb-2">⛸️ [오후 3:00] 메가몰의 하이라이트, 아이스 스케이팅</h3>
      <p>더운 필리핀에서 즐기는 겨울왕국! <strong>3층에 위치한 아이스 링크</strong>는 아이들에게 잊지 못할 추억을 선물합니다. 스케이트를 타지 않더라도 구경하는 것만으로도 시원해지는 기분이에요. (긴 바지와 양말은 필수!)</p><br/>
      
      <h3 class="text-xl font-bold mb-2">🛒 [오후 5:30] 저녁 장보기, SM Supermarket</h3>
      <p>집으로 돌아가기 전, <strong>A동 지하 1층 슈퍼마켓</strong>에 들러보세요. 한국 라면, 김치는 물론이고 신선한 망고와 열대 과일을 저렴하게 득템할 수 있습니다. 짐이 무거우니 그랩(Grab) 잡기 편한 출구 쪽으로 이동하는 동선을 추천드려요.</p><br/>
      
      <p class="font-bold">✨ 로하우스의 꿀팁</p>
      <p>메가몰은 에어컨이 매우 빵빵합니다. 아이들과 어머님 모두 <strong>얇은 카디건</strong>을 꼭 챙기세요!</p>
    `,
    date: "2025.12.27",
    category: "Philippines Life",
    image: nanobananaSkatingImg,
    author: "Roy House",
    tags: ["SMMegaMall", "DayTour", "MomsGuide"]
  },
  {
    id: 'blog-1',
    title: "아이캔 캠프의 하루: 몰입과 즐거움 사이",
    excerpt: "아침 8시부터 시작되는 아이캔 캠프의 뜨거운 열기. 1:1 수업의 집중력과 그룹 활동의 활기를 담았습니다.",
    content: `
      <p>안녕하세요, 로이 하우스입니다.</p><br/>
      <p>오늘은 아이캔 캠프의 생생한 하루 일과를 소개해드리려고 합니다. 많은 학부모님들이 "아이가 하루 종일 공부만 하면 지치지 않을까요?"라고 걱정하시는데요, 현장에서 지켜본 아이들의 모습은 사뭇 다릅니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">1. 아침을 여는 1:1 집중 클래스</h3>
      <p>오전 수업은 주로 1:1로 진행됩니다. 선생님과 학생이 마주 앉아 오직 서로에게만 집중하는 시간이죠. 아이의 부족한 부분을 실시간으로 캐치하고 교정해주기 때문에 학습 효율이 굉장히 높습니다. 처음엔 쑥스러워하던 아이들도 3일만 지나면 선생님과 친구처럼 수다를 떨며 영어를 내뱉기 시작합니다.</p>
      <img src="${class1on1Img}" class="w-full rounded-2xl my-6 shadow-sm" alt="1:1 Class" />
      <br/>
      
      <h3 class="text-xl font-bold mb-2">2. 활기 넘치는 그룹 액티비티</h3>
      <p>점심 식사 후 나른해질 수 있는 오후에는 그룹 수업이 배치됩니다. 프레젠테이션, 디베이트, 팝송 배우기 등 다양한 활동을 통해 영어가 '공부'가 아닌 '소통의 도구'임을 깨닫게 되죠.</p>
      <img src="${classGroupImg}" class="w-full rounded-2xl my-6 shadow-sm" alt="Group Activity" />
      <br/>
      
      <p>하루가 끝날 무렵, 피곤함보다는 "오늘 이거 배웠어!"라고 자랑하는 아이들의 눈빛에서 저희는 큰 보람을 느낍니다.</p>
    `,
    date: "2024.01.15",
    category: "Education",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
    ],
    author: "Roy House",
    tags: ["Camp Life", "ESL", "하루일과"]
  },
  {
    id: 'blog-2',
    title: "엄마들을 위한 올티가스 브런치 카페 Best 3",
    excerpt: "아이들이 공부하는 동안 즐기는 잠깐의 여유. 학원에서 가까우면서도 분위기 좋은 카페를 엄선했습니다.",
    content: `
      <p>아이들을 학원에 보내놓고 나면, 오롯이 나만의 시간이 찾아옵니다. 이 귀한 시간을 알차게 보낼 수 있는 올티가스의 핫플레이스를 소개합니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">1. Wildflour Café + Bakery (The Podium)</h3>
      <p>올티가스에서 가장 유명한 브런치 맛집입니다. 갓 구운 크로와상과 진한 라떼의 조화는 설명이 필요 없죠. 김치볶음밥 같은 퓨전 메뉴도 있어 한식이 그리울 때도 좋습니다. 학원에서 도보 5분 거리라 이동도 편리합니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">2. Mary Grace (SM Megamall)</h3>
      <p>필리핀의 따뜻한 가정식을 느낄 수 있는 곳입니다. 특히 '엔사이마다(Ensaymada)'라는 필리핀 전통 빵과 핫초코의 조합은 꼭 드셔보셔야 합니다. 조용하고 아늑한 인테리어 덕분에 책을 읽거나 밀린 업무를 보기에도 좋습니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">3. Starbucks Reserve (The Podium)</h3>
      <p>일반 스타벅스보다 한층 고급스러운 리저브 매장입니다. 층고가 높고 통유리로 들어오는 햇살이 기분 좋은 곳이죠. 한국 학부모님들의 만남의 장소로도 유명합니다.</p>
    `,
    date: "2024.01.18",
    category: "Food",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop",
    author: "Roy House",
    tags: ["Cafe", "Brunch", "Moms Life"]
  },
  {
    id: 'blog-3',
    title: "주말에 뭐 하지? 아이와 함께하는 에이스 워터 스파",
    excerpt: "공부에 지친 아이들의 스트레스를 한방에 날려줄 수중 액티비티! 에이스 워터 스파 이용 꿀팁을 공개합니다.",
    content: `
      <p>주중 내내 열심히 공부한 아이들, 주말엔 신나게 놀아야 또 달릴 힘이 생기겠죠? 학원에서 차로 10분 거리에 있는 '에이스 워터 스파(Ace Water Spa)'는 최고의 선택입니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">어떤 곳인가요?</h3>
      <p>단순한 수영장이 아닙니다. 수십 종류의 수압 마사지 시설과 유수풀, 키즈풀이 어우러진 실내 스파입니다. 어른들은 뭉친 근육을 풀고, 아이들은 튜브를 타고 둥둥 떠다니며 즐거워합니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">이용 꿀팁</h3>
      <p>1. **수영복 규정 엄수**: 헐렁한 래시가드나 면 티셔츠는 절대 입장 불가입니다. 몸에 딱 붙는 수영복(Spandex 소재)만 가능하니 꼭 미리 준비하세요.<br/>
      2. **수영모자 필수**: 캡모자는 안 됩니다. 수영모자를 꼭 챙기세요.<br/>
      3. **이용 시간**: 기본 4시간 이용 가능하며, 샤워 시설이 잘 갖춰져 있어 씻고 나오기 편합니다.</p>
    `,
    date: "2024.01.20",
    category: "Activity",
    image: blog3Img,
    author: "Roy House",
    tags: ["Weekend", "Swimming", "Kids Activity"]
  },
  {
    id: 'blog-4',
    title: "영어 실력이 쑥쑥! 1:1 수업의 비밀",
    excerpt: "왜 필리핀 어학연수일까요? 그룹 수업 위주의 서구권과는 차원이 다른 1:1 수업의 학습 효과를 분석합니다.",
    content: `
      <p>많은 분들이 영미권 캠프 대신 필리핀을 선택하는 가장 큰 이유는 바로 압도적인 '발화량'입니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">내 아이만을 위한 커리큘럼</h3>
      <p>15명이 앉아있는 교실에서는 내 아이가 영어를 말할 기회가 몇 번이나 될까요? 하지만 1:1 수업에서는 선생님의 모든 질문이 우리 아이를 향합니다. 아이는 대답을 해야만 수업이 진행되죠. 이 과정에서 아이는 '영어로 말하는 것'에 대한 두려움을 없애게 됩니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">즉각적인 피드백</h3>
      <p>문법이 틀렸을 때, 발음이 부정확할 때 선생님이 바로잡아 줄 수 있는 것은 1:1 수업만의 특권입니다. 아이캔 캠프의 선생님들은 아이의 성향을 파악하여 칭찬과 교정을 적절히 섞어가며 아이를 이끌어줍니다.</p>
    `,
    date: "2024.01.25",
    category: "Education",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop",
    author: "Roy House",
    tags: ["Study", "OneOnOne", "English"]
  },
  {
    id: 'blog-5',
    title: "올티가스 쇼핑 정복: 메가몰 vs 포디움",
    excerpt: "초대형 쇼핑몰의 천국 올티가스. 무엇을 사느냐에 따라 가는 곳이 달라집니다. 현명한 쇼핑 가이드.",
    content: `
      <p>학원 근처에는 걸어서 갈 수 있는 거대한 쇼핑몰이 두 군데나 있습니다. 바로 SM 메가몰과 더 포디움인데요, 성격이 완전히 다릅니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">1. SM Megamall: 없는 게 없는 만물상</h3>
      <p>필리핀에서 두 번째로 큰 쇼핑몰입니다. 슈퍼마켓, 영화관, 볼링장, 아이스링크, 그리고 저렴한 로컬 브랜드부터 글로벌 브랜드까지 모든 것이 있습니다. 아이들 문구류를 사거나(National Book Store), 환전하기에 좋습니다. 단, 사람이 많아 조금 복잡할 수 있어요.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">2. The Podium: 쾌적하고 고급스러운 힐링</h3>
      <p>조용하게 쇼핑하고 싶다면 포디움이 정답입니다. 고급 브랜드 위주로 입점해 있고, 층고가 높아 쾌적합니다. 지하의 마켓플레이스(Supermarket)는 수입 식료품이 많아 퀄리티 높은 장보기가 가능합니다. 서점(Fully Booked)도 아주 잘 되어 있어 아이와 책을 고르기 좋습니다.</p>
    `,
    date: "2024.02.01",
    category: "Lifestyle",
    image: blog5Img,
    author: "Roy House",
    tags: ["Shopping", "Mall", "Guide"]
  },
  {
    id: 'blog-6',
    title: "필리핀의 맛, 졸리비(Jollibee) 완벽 가이드",
    excerpt: "필리핀에 왔다면 꼭 먹어봐야 할 국민 패스트푸드. 아이들이 더 좋아하는 메뉴 추천!",
    content: `
      <p>맥도날드를 이긴 유일한 로컬 패스트푸드, 바로 '졸리비'입니다. 귀여운 벌 모양 캐릭터와 달달한 스파게티는 아이들의 마음을 사로잡죠.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">추천 메뉴 Best 3</h3>
      <p><strong>1. Chickenjoy (치킨조이):</strong> 바삭한 프라이드치킨과 밥이 함께 나옵니다. '그레이비소스'에 치킨을 찍어 밥과 함께 먹는 것이 필리핀 스타일입니다.<br/>
      <strong>2. Jolly Spaghetti (졸리 스파게티):</strong> 한국 스파게티보다 훨씬 달콤합니다. 소시지와 치즈가 듬뿍 들어가 있어 아이들이 정말 좋아합니다.<br/>
      <strong>3. Peach Mango Pie (피치 망고 파이):</strong> 식사 후 디저트로 필수입니다. 따뜻하고 바삭한 파이 안에 달콤한 망고 잼이 가득해요.</p><br/>
      
      <p>학원 1층에도 바로 졸리비가 있어 점심시간이나 간식으로 아주 인기랍니다.</p>
    `,
    date: "2024.02.05",
    category: "Food",
    image: blog6Img,
    author: "Roy House",
    tags: ["Jollibee", "LocalFood", "KidsFavorite"]
  },
  {
    id: 'blog-7',
    title: "안전하고 쾌적한 올티가스 콘도 라이프",
    excerpt: "낯선 해외 생활, 숙소가 가장 걱정되시죠? 24시간 가드가 지키는 안전한 올티가스의 레지던스를 소개합니다.",
    content: `
      <p>올티가스는 마닐라의 금융 특구로, 치안이 매우 우수한 지역입니다. 저희가 연계해 드리는 숙소들은 모두 외국인들이 주로 거주하는 고급 콘도미니엄입니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">주요 특징</h3>
      <p>- **24시간 보안**: 로비에 항상 가드와 리셉셔니스트가 상주하여 외부인 출입을 철저히 통제합니다.<br/>
      - **편의 시설**: 대부분의 콘도에는 입주민 전용 수영장과 짐(Gym)이 있어 무료로 이용 가능합니다.<br/>
      - **편리한 위치**: 학원까지 도보로 이동 가능한 거리(5~10분)에 위치하여 등하원이 안전합니다.</p><br/>
      
      <p>내 집 같은 편안함 속에서 아이와 함께 잊지 못할 추억을 만들어보세요.</p>
    `,
    date: "2024.02.10",
    category: "Local Life",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    author: "Roy House",
    tags: ["Accommodation", "Safety", "Condo"]
  },
  {
    id: 'blog-8',
    title: "마닐라 근교 여행: 시원한 바람, 따가이따이",
    excerpt: "주말을 이용해 다녀오기 좋은 근교 여행지. 활화산을 바라보며 즐기는 여유로운 식사.",
    content: `
      <p>매일 도심 속에만 있기 답답하다면, 차로 1시간 반 거리에 있는 '따가이따이(Tagaytay)'로 떠나보세요.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">세상에서 가장 작은 활화산</h3>
      <p>따가이따이는 고지대라 마닐라보다 훨씬 시원합니다. 이곳의 명물은 '따알 화산(Taal Volcano)'인데요, 호수 안에 산이 있고 그 안에 또 호수가 있는 신비로운 지형입니다. 스타벅스 따가이따이 점이나 전망 좋은 레스토랑에서 화산을 바라보며 커피 한 잔의 여유를 즐길 수 있습니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">추천 코스</h3>
      <p>오전에 출발하여 '피플스 파크'에서 산책을 즐기고, '불랄로(갈비탕과 비슷한 필리핀 보양식)' 맛집에서 점심을 먹고 돌아오는 반나절 코스를 추천합니다.</p>
    `,
    date: "2024.02.15",
    category: "Activity",
    image: blog8Img,
    author: "Roy House",
    tags: ["Travel", "WeekendTrip", "Tagaytay"]
  },
  {
    id: 'blog-9',
    title: "우리 아이 영어 자신감 키워주는 꿀팁",
    excerpt: "영어가 두려운 아이, 어떻게 도와줘야 할까요? 부모님이 해줄 수 있는 작은 격려의 말들.",
    content: `
      <p>캠프 초반, 영어가 서툴러 입을 떼기 어려워하는 아이들이 있습니다. 이때 부모님의 역할이 정말 중요합니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">1. 결과보다 과정을 칭찬해 주세요</h3>
      <p>"오늘 단어 몇 개 외웠어?"보다는 "오늘 선생님이랑 무슨 얘기 했어?"라고 물어봐 주세요. 아이가 한두 마디라도 영어로 대답하려 노력한다면 폭풍 칭찬을 해주세요.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">2. 실수를 두려워하지 않게 해주세요</h3>
      <p>틀리는 것은 배우는 과정입니다. "문법이 틀렸잖아"라고 지적하기보다, 아이가 말하고자 하는 의미를 파악하고 "아~ 그런 뜻이었구나!"라고 맞장구쳐주는 것이 아이의 입을 트이게 합니다.</p><br/>
      
      <p>아이캔의 선생님들도 아이가 틀리는 것을 두려워하지 않고 당당하게 말할 수 있도록 항상 기다려주고 격려합니다.</p>
    `,
    date: "2024.02.20",
    category: "Education",
    image: blog9Img,
    author: "Roy House",
    tags: ["Parenting", "Tips", "Confidence"]
  },
  {
    id: 'blog-10',
    title: "캠프를 마치며: 아이들의 눈부신 성장",
    excerpt: "4주, 8주간의 여정이 끝나고... 영어 실력뿐만 아니라 마음까지 훌쩍 자란 아이들의 모습.",
    content: `
      <p>캠프의 마지막 날, 수료식 현장은 언제나 감동적입니다. 처음엔 엄마 뒤에 숨어 수줍게 인사하던 아이가, 이제는 단상에 올라 영어로 자신의 소감을 발표합니다.</p><br/>
      
      <h3 class="text-xl font-bold mb-2">단순한 영어 공부 그 이상</h3>
      <p>아이들은 이곳에서 단순히 영어 단어만 외운 것이 아닙니다. 낯선 환경에 적응하는 법, 다른 문화의 친구들과 소통하는 법, 그리고 스스로 해낼 수 있다는 '자신감'을 배웠습니다.</p><br/>
      
      <p>한국으로 돌아가는 아이들의 뒷모습이 한층 듬직해 보입니다. 이 경험이 아이들의 미래에 단단한 자양분이 되기를 로이 하우스가 항상 응원하겠습니다.</p>
    `,
    date: "2024.02.28",
    category: "Lifestyle",
    image: blog10Img,
    author: "Roy House",
    tags: ["Graduation", "Growth", "Memory"]
  }
];

export const LIVING_INFO_DATA_KO: LivingInfoItem[] = [
  // --- EMERGENCY (NEW) ---
  {
    category: 'medical',
    title: '🚨 긴급 연락처 (Emergency & 119)',
    description: '필리핀의 응급 전화번호는 911입니다. 긴급 상황 발생 시 당황하지 말고 아래 번호로 연락하세요.',
    details: [
      '국가 긴급 전화 (경찰/소방/구급): 911',
      '주 필리핀 대한민국 대사관 (긴급): 0917-817-5703',
      '파시그(Pasig) 시청 구조대: 8643-0000',
      '더 메디컬 시티 응급실: 8635-6789'
    ],
    location: 'Emergency Contacts',
    coordinates: { lat: 14.5905, lng: 121.0694 }, // Map to Medical City for visualization
    type: 'offline'
  },

  // --- MOBILE ---
  {
    category: 'mobile',
    title: '휴대폰 유심 및 데이터 (Globe/Smart)',
    description: '필리핀의 양대 통신사인 Globe와 Smart 유심을 공항, 편의점(세븐일레븐), SM몰 등에서 쉽게 구입할 수 있습니다. 선불카드(Load Card)를 구입하여 충전 후 프로모션을 등록해 사용합니다.',
    details: [
      'Globe: *143# 통화 버튼을 눌러 메뉴 진입 후 프로모션(GoSurf 등) 등록',
      'Smart: *123# 통화 버튼을 눌러 메뉴 진입 후 Giga Video 등 데이터 상품 등록',
      '학원 내에서는 와이파이가 제공되지만, 외출 시 그랩 호출 등을 위해 데이터 필수'
    ],
    location: 'SM Megamall 4F Cyberzone / 각종 편의점',
    coordinates: { lat: 14.5843, lng: 121.0567 },
    type: 'offline',
    link: 'https://www.globe.com.ph/',
    linkLabel: 'Globe 홈페이지'
  },
  {
    category: 'mobile',
    title: '슈퍼 택시 (JoyRide Super Taxi)',
    description: '그랩(Grab)의 대안으로 떠오르는 새로운 택시 호출 앱입니다. 미터기 요금 기반으로 운영되어 비교적 합리적이며, 승차 거부가 적습니다.',
    details: [
      '앱: JoyRide Superapp 다운로드 후 이용',
      '특징: 도요타 벨로즈 등 쾌적한 신형 차량 위주 배차',
      '장점: 공항 픽업/샌딩 예약 가능, 일반 택시보다 안전함'
    ],
    location: 'App Store / Google Play',
    type: 'online',
    link: 'https://joyride.com.ph/',
    linkLabel: 'JoyRide 다운로드'
  },
  {
    category: 'mobile',
    title: '라자다 & 쇼피 (Lazada / Shopee)',
    description: '필리핀의 쿠팡이라 불리는 양대 산맥 온라인 쇼핑몰입니다. 생필품, 식료품, 전자제품 등 없는 게 없으며 배송도 빠른 편입니다.',
    details: [
      'Lazada: 전반적으로 배송이 조금 더 빠르고 물류 시스템이 안정적',
      'Shopee: 다양한 자잘한 물건이 많고 할인 쿠폰/무료 배송 혜택이 풍부',
      '팁: COD(Cash On Delivery) 옵션을 사용하면 물건을 받을 때 현금으로 결제 가능하여 안전함'
    ],
    location: 'Online App',
    type: 'online',
    link: 'https://www.lazada.com.ph/',
    linkLabel: 'Lazada 바로가기'
  },

  // --- RENT & ACCOMMODATION (EXPANDED) ---
  {
    category: 'rent',
    title: '주요 숙소 및 렌트 가이드 (Condos)',
    description: '학원(Strata 100) 도보권의 숙소 렌트 시 꼭 확인해야 할 체크리스트입니다.',
    details: [
      '체크포인트: 가구 옵션(Fully Furnished), 에어컨 청소 상태, 관리비(Association Dues) 포함 여부',
      '공과금: 전기세(Meralco)와 수도세는 보통 별도 (선불제 로드 방식인지 확인)',
      '계약: 단기(1달) 렌트 가능 여부는 집주인마다 다르므로 에이전트와 사전 협의 필수'
    ],
    location: 'Ortigas Center',
    coordinates: { lat: 14.5865, lng: 121.0630 },
    type: 'offline'
  },
  {
    category: 'rent',
    title: '에어비앤비 (Airbnb)',
    description: '전 세계 최대 숙박 공유 플랫폼으로, 올티가스 내 다양한 콘도를 손쉽게 예약할 수 있습니다. 단기 연수 시 가장 추천하는 방법입니다.',
    details: [
      '위치 검색: "Ortigas Center, Pasig"으로 검색하면 학원 근처 숙소 확인 가능',
      '필터: "슈퍼호스트" 필터를 적용하면 검증된 숙소를 찾을 수 있어 안전합니다.',
      '장기 투숙: 28일 이상 예약 시 월간 할인 혜택을 받을 수 있는 숙소가 많습니다.'
    ],
    location: 'Online / App',
    type: 'online',
    link: 'https://www.airbnb.co.kr/s/Ortigas-Center--Pasig--Metro-Manila--Philippines/homes',
    linkLabel: '올티가스 숙소 검색'
  },
  {
    category: 'rent',
    title: 'AIC 골드 & 그란데 타워 (AIC Gold/Grande)',
    description: '학원 맞은편에 위치하여 접근성이 가장 뛰어난 레지던스입니다. 연식은 조금 있지만 방이 넓어(Spacious) 가족 단위 연수생에게 인기가 많습니다.',
    details: [
      '위치: Sapphire & Garnet Rd (학원 도보 2분)',
      '특징: 넓은 평수 (2BR, 3BR 다수), 수영장 보유',
      '편의: 1층에 편의점, 한국 식당 등 다수 입점'
    ],
    location: 'Sapphire Rd, Ortigas Center',
    coordinates: { lat: 14.5873, lng: 121.0618 },
    type: 'offline',
    link: 'https://www.google.com/maps/search/?api=1&query=AIC+Gold+Tower+Ortigas',
    linkLabel: '구글 맵 보기'
  },
  {
    category: 'rent',
    title: '실속형 스튜디오 (The Currency / Cityland)',
    description: '1~2인 가구를 위한 가성비 좋은 스튜디오 타입 숙소들입니다. 학원과 매우 가깝고 주변 편의시설이 잘 갖춰져 있습니다.',
    details: [
      'The Currency: 학원 바로 옆 건물, 비교적 신축, 루프탑 수영장',
      'Cityland (Grand Emerald): 가성비 최고, 1층에 저렴한 식당 및 세탁소 많음',
      'One San Miguel: 학원 건너편, 사무실 겸용이라 조용함'
    ],
    location: 'Julia Vargas & Emerald Ave',
    coordinates: { lat: 14.5865, lng: 121.0615 },
    type: 'offline',
    link: 'https://www.google.com/maps/search/?api=1&query=The+Currency+Ortigas',
    linkLabel: '위치 확인하기'
  },

  // --- SHOPPING: MALLS ---
  {
    category: 'shopping',
    title: 'SM 메가몰 (SM Megamall)',
    description: '필리핀에서 두 번째로 큰 초대형 쇼핑몰입니다. A동과 B동, 그리고 패션홀(Fashion Hall)로 나뉘어 있으며, 슈퍼마켓, 영화관, 볼링장, 아이스링크 등 모든 편의시설이 갖춰져 있습니다.',
    details: [
      '슈퍼마켓: A동 지하 1층 / B동 1층',
      '환전소: B동 1층 / 3층 등 다수',
      '문구점(National Book Store): A동 1층'
    ],
    location: 'EDSA, Ortigas Center',
    coordinates: { lat: 14.5843, lng: 121.0567 },
    type: 'offline',
    link: 'https://www.smsupermalls.com/malls/sm-megamall',
    linkLabel: '몰 가이드 보기'
  },
  {
    category: 'shopping',
    title: '더 포디움 (The Podium)',
    description: '고급스럽고 조용한 분위기의 쇼핑몰입니다. 와일드플라워, 멘도코로 등 유명 맛집이 많고 쾌적하게 장을 볼 수 있는 프리미엄 슈퍼마켓이 있습니다.',
    details: [
      'The Marketplace (슈퍼마켓): 지하 1층 (수입 식자재 많음)',
      '서점 (Fully Booked): 6층 (독서하기 좋은 분위기)',
      '다양한 고급 레스토랑 및 카페 입점'
    ],
    location: '12 ADB Ave, Ortigas Center',
    coordinates: { lat: 14.5852, lng: 121.0592 },
    type: 'offline',
    link: 'https://thepodium.com.ph/',
    linkLabel: '공식 홈페이지'
  },
  {
    category: 'shopping',
    title: '에스탄시아 몰 (Estancia Mall)',
    description: '캐피톨 커먼스(Capitol Commons) 내에 위치한 고급 라이프스타일 몰입니다. 쾌적한 쇼핑 환경과 다양한 맛집, 그리고 Unimart가 있어 장보기에 좋습니다.',
    details: [
      '위치: Capitol Commons, Pasig (학원에서 차로 10분)',
      '특징: 넓은 공원과 어우러진 여유로운 분위기',
      '쇼핑: Unimart(식료품), 각종 브랜드 의류'
    ],
    location: 'Capitol Commons, Pasig',
    coordinates: { lat: 14.5744, lng: 121.0622 },
    type: 'offline',
    link: 'https://www.ortigasmalls.com/estancia/',
    linkLabel: '몰 정보 보기'
  },
  {
    category: 'shopping',
    title: '미츠코시 BGC (Mitsukoshi BGC)',
    description: '필리핀 최초의 일본계 백화점입니다. 일본 식료품과 디저트, 다이닝을 즐길 수 있는 새로운 핫플레이스입니다.',
    details: [
      '위치: 8th Ave, BGC (학원에서 차로 20분)',
      '특징: 일본 마트(Mitsukoshi Fresh), 다이닝(Itadaki)',
      '추천: 신선한 스시와 일본 디저트'
    ],
    location: '8th Ave, Taguig',
    coordinates: { lat: 14.5558, lng: 121.0525 },
    type: 'offline',
    link: 'https://www.facebook.com/mitsukoshi.bgc/',
    linkLabel: '페이스북 보기'
  },
  {
    category: 'shopping',
    title: 'S&R 멤버십 쇼핑 (S&R Membership Shopping)',
    description: '필리핀의 코스트코라 불리는 대형 창고형 할인매장입니다. 올티가스 인근(Shaw Blvd)에 위치하며, 다양한 수입 식료품과 생필품을 대용량으로 저렴하게 구매할 수 있습니다.',
    details: [
      '푸드코트: 피자, 치킨, 핫도그, 커피 등이 저렴하고 맛있어 식사 해결에 좋습니다.',
      '쇼핑 팁: 대용량 제품이 많으므로 지인들과 함께 구입하여 소분해 쓰시면 경제적입니다.',
      '이용 방법: 유료 멤버십 회원제로 운영되므로 회원권 발급이 필요합니다. (여권 지참)'
    ],
    location: '514 Shaw Blvd, Mandaluyong (학원 차로 10분)',
    coordinates: { lat: 14.5888, lng: 121.0433 },
    type: 'offline',
    link: 'https://www.snrshopping.com/',
    linkLabel: '공식 홈페이지',
    rating: 4.6,
    priceLevel: 2
  },
  {
    category: 'shopping',
    title: '랜더스 슈퍼스토어 (Landers Superstore)',
    description: 'S&R과 쌍벽을 이루는 프리미엄 창고형 할인매장입니다. 매장이 매우 쾌적하며, 다양한 수입 식료품과 생활용품을 갖추고 있습니다.',
    details: [
      'Landers Central: 매장 내 식당의 피자와 치킨, 햄버거 퀄리티가 훌륭합니다.',
      '멤버십 혜택: 주유 할인(Caltex) 및 남성 회원 무료 이발 서비스가 제공됩니다.',
      '위치: Arcovia City (Pasig) 지점이 학원에서 차로 10분 거리로 가깝습니다.'
    ],
    location: 'Arcovia City, Pasig',
    coordinates: { lat: 14.5835, lng: 121.0770 },
    type: 'offline',
    link: 'https://www.landers.ph/',
    linkLabel: '공식 홈페이지',
    rating: 4.7,
    priceLevel: 2
  },

  // --- SHOPPING: DAILY NECESSITIES (NEW) ---
  {
    category: 'shopping',
    title: '생활용품 구매 (다이소/Mr.DIY)',
    description: '청소도구, 수납용품, 욕실용품 등 저렴한 생활잡화를 구매할 수 있는 곳입니다.',
    details: [
      'Daiso Japan: 로빈슨 갤러리아, 샹그릴라 몰 입점 (한국 다이소와 유사)',
      'Mr. DIY: SM 메가몰, 로빈슨 갤러리아 입점 (공구, 생활용품 가성비 좋음)',
      'True Value / Ace Hardware: 전구, 멀티탭, 공구 등 하드웨어 전문'
    ],
    location: 'SM Megamall / Robinsons Galleria',
    coordinates: { lat: 14.5894, lng: 121.0595 },
    type: 'offline',
    link: 'https://www.mrdiy.com/ph/',
    linkLabel: 'Mr. DIY 홈페이지'
  },
  {
    category: 'shopping',
    title: '온라인 쇼핑 (Lazada / Shopee)',
    description: '필리핀의 쿠팡/네이버쇼핑입니다. 무거운 생수나 쌀, 찾기 힘든 물건은 배달 시키세요.',
    details: [
      'Lazada (라자다): 배송이 비교적 빠르고 LazMall(공식몰) 이용 시 정품 보장',
      'Shopee (쇼피): 저렴한 물건이 많고 할인 쿠폰이 다양함',
      '배송 기간: 보통 2~5일 소요 (콘도 로비에서 수령, COD(현금결제) 가능)'
    ],
    location: 'Online App',
    type: 'online',
    link: 'https://shopee.ph/',
    linkLabel: 'Shopee 바로가기'
  },

  // --- GROCERY (NEW SECTION) ---
  {
    category: 'grocery',
    title: '한인 마트 (Korean Marts)',
    description: '한국 식자재, 라면, 과자, 김치 등을 구매할 수 있는 곳입니다. 아이들의 간식이나 급한 한국 물품을 구매하기 좋습니다.',
    details: [
      'Top Mart (탑마트): 올티가스 홈디포 근처, 다양한 식자재 및 정육 코너 구비',
      'Kaya Mart (카야마트): 에스크리바 드라이브, 배달 서비스 및 온라인 주문 가능',
      '일반 몰(SM, Robinson) 내 국제 코너에도 기본 한국 양념(고추장, 간장, 라면)은 있습니다.'
    ],
    location: 'Ortigas Center & Home Depot',
    coordinates: { lat: 14.5880, lng: 121.0650 },
    type: 'offline',
    rating: 4.5,
    priceLevel: 2,
    link: 'https://www.google.com/maps/search/Korean+Grocery+Ortigas',
    linkLabel: '근처 한인마트 검색'
  },
  {
    category: 'grocery',
    title: '과일 가게 (Fresh Fruit Shops)',
    description: '필리핀의 달콤한 망고와 다양한 열대 과일을 저렴하고 신선하게 구매할 수 있는 곳들입니다.',
    details: [
      'All Day Supermarket (Fruits Section): 신선도가 매우 높고 컷팅 과일을 판매하여 편리합니다.',
      'Market Market Fruits Section: 과일 종류가 다양하고 비교적 저렴합니다 (BGC 인근).',
      'Street Vendors (길거리 가판대): 제철 과일(망고스틴 등)을 가장 저렴하게 구입할 수 있으나 흥정이 필요합니다.'
    ],
    location: 'Nearby Supermarkets & Markets',
    coordinates: { lat: 14.5845, lng: 121.0560 }, // Generic Location near Megamall
    type: 'offline',
    rating: 4.7,
    priceLevel: 1
  },
  {
    category: 'grocery',
    title: '재래 시장 (Traditional Markets / Palengke)',
    description: '현지의 생생한 삶을 느끼고 가장 신선한 식재료(해산물, 채소)를 도매가로 구할 수 있는 로컬 시장입니다.',
    details: [
      'Pasig Public Market (Pasig Palengke): 규모가 매우 크며 새벽(5~7시)에 방문하면 가장 신선한 물건을 구할 수 있습니다.',
      'Saturday Market (Salcedo/Legazpi): 주말 오전에만 열리는 마켓으로, 유기농 채소와 특색 있는 음식을 판매합니다 (마카티).',
      'Tip: 냄새가 날 수 있고 바닥이 미끄러우니 편한 신발 착용 필수. 현금을 준비하세요.'
    ],
    location: 'Pasig Public Market',
    coordinates: { lat: 14.5635, lng: 121.0850 },
    type: 'offline',
    rating: 4.3,
    priceLevel: 1
  },

  // --- FOOD: RESTAURANTS ---
  {
    category: 'food',
    title: '졸리비 (Jollibee)',
    description: '필리핀의 국민 패스트푸드점입니다. 치킨조이(Chickenjoy)와 스파게티가 아이들에게 인기 만점입니다.',
    details: [
      '추천 메뉴: C1 (치킨 + 밥 + 음료), Jolly Spaghetti',
      'Peach Mango Pie: 디저트로 강력 추천',
      '학원 건물(Strata 100) 근처 및 모든 몰에 입점'
    ],
    location: 'Strata 100 G/F 및 다수',
    coordinates: { lat: 14.5869, lng: 121.0628 },
    type: 'offline',
    rating: 4.5,
    priceLevel: 1,
    link: 'https://www.jollibeedelivery.com/',
    linkLabel: '배달 주문하기'
  },
  {
    category: 'food',
    title: '와일드플라워 (Wildflour Café + Bakery)',
    description: '브런치와 빵이 맛있는 유명 카페입니다. 학부모님들의 오전 모임 장소로 인기가 많습니다.',
    details: [
      '위치: 더 포디움 1층 (외부 입구)',
      '추천: 크로와상, 김치볶음밥, 캘리포니아 버거',
      '가격대가 조금 있지만 맛과 분위기 보장'
    ],
    location: 'G/F The Podium',
    coordinates: { lat: 14.5852, lng: 121.0592 },
    type: 'offline',
    link: 'https://wildflour.com.ph/',
    linkLabel: '메뉴 확인하기',
    rating: 4.8,
    priceLevel: 3
  },
  {
    category: 'food',
    title: '마실 (Masil Charcoal Grill)',
    description: '깔끔한 인테리어와 정갈한 반찬으로 유명한 숯불구이 전문점입니다. 가족 외식 장소로 가장 추천받는 곳 중 하나입니다.',
    details: [
      '대표 메뉴: 갈비살, 삼겹살, 각종 찌개류',
      '위치: Oranbo Drive (학원에서 차로 5~10분)',
      '넓은 주차장 및 룸 구비 (예약 권장)'
    ],
    location: '100 Oranbo Dr, Pasig',
    coordinates: { lat: 14.5776, lng: 121.0640 },
    type: 'offline',
    link: 'https://www.facebook.com/MasilCharcoalGrillRestaurant',
    linkLabel: '페이스북 보기',
    rating: 4.7,
    priceLevel: 2
  },
  {
    category: 'food',
    title: '시별리 (Sibyullee Flavors of Seoul)',
    description: '모던한 분위기의 한식 레스토랑으로, 깔끔한 반찬과 치즈 등갈비 등이 인기입니다. 아이들과 함께 가기 좋은 쾌적한 환경입니다.',
    details: [
      '위치: Ayala Malls The 30th G/F',
      '무제한 바비큐 세트 메뉴 인기',
      '페이스북에서 최신 프로모션 확인 가능'
    ],
    location: 'Ayala Malls The 30th',
    coordinates: { lat: 14.5813, lng: 121.0645 },
    type: 'offline',
    link: 'https://www.facebook.com/Sibyullee',
    linkLabel: '최신 프로모션 확인',
    rating: 4.5,
    priceLevel: 2
  },
  {
    category: 'food',
    title: '프리미어 더 삼겹살 (Premier The Samgyupsal)',
    description: '올티가스 에메랄드 애비뉴 근처에 위치한 무제한 삼겹살 맛집입니다. 24시간 운영하며 가성비가 뛰어납니다.',
    details: [
      '위치: Emerald Ave (학원 도보 5분)',
      '숙성 삼겹살 무제한 리필',
      '페이스북 좋아요 이벤트 진행 중'
    ],
    location: 'Emerald Ave, Ortigas',
    coordinates: { lat: 14.5860, lng: 121.0610 },
    type: 'offline',
    link: 'https://www.facebook.com/premierthesamgyupsal',
    linkLabel: '페이스북 페이지',
    rating: 4.4,
    priceLevel: 2
  },

  // --- MEDICAL ---
  {
    category: 'medical',
    title: '더 메디컬 시티 (The Medical City)',
    description: '필리핀 최고의 시설을 갖춘 종합 병원 중 하나입니다. 한국인 통역 서비스(JCI) 이용이 가능할 수 있으며 응급실이 24시간 운영됩니다.',
    details: [
      '위치: 올티가스 외곽 (차로 10~15분)',
      '여권 지참 필수 (접수 시 필요)',
      '해외 여행자 보험 청구를 위해 진단서 및 영수증 반드시 챙기기'
    ],
    location: 'Ortigas Ave, Pasig',
    coordinates: { lat: 14.5905, lng: 121.0694 },
    type: 'offline',
    link: 'https://www.themedicalcity.com/',
    linkLabel: '병원 홈페이지'
  },

  // --- ACTIVITY ---
  {
    category: 'activity',
    title: '에이스 워터 스파 (Ace Water Spa)',
    description: '수영복을 입고 이용하는 실내 수압 마사지 스파입니다. 아이들은 유수풀에서 놀고 어른들은 마사지를 즐길 수 있습니다.',
    details: [
      '수영모자 필수 지참',
      '타이트한 수영복 착용 (면 티셔츠 불가)',
      '이용 시간: 4시간'
    ],
    location: 'United St, Pasig (Kapitolyo)',
    coordinates: { lat: 14.5768, lng: 121.0594 },
    type: 'offline',
    link: 'http://www.acewaterspa.com.ph/',
    linkLabel: '웹사이트'
  },
  // --- CHURCH (REAL UPDATES) ---
  {
    category: 'church',
    title: 'CCF 센터 (Christ\'s Commission Fellowship)',
    description: '필리핀 최대 규모의 개신교 교회 중 하나로, 올티가스 근처 Tiendesitas에 위치합니다. 웅장한 주일 예배와 체계적인 영어 주일학교 시스템이 있어 영어 학습에도 도움이 됩니다.',
    details: [
      '예배 시간: 주일 오전 9시, 12시, 오후 3시 등 다양',
      '위치: Frontera Verde, Ortigas East',
      '한국어 통역 서비스 제공 여부 확인 필요'
    ],
    location: 'Ortigas East (Tiendesitas)',
    coordinates: { lat: 14.5866, lng: 121.0772 },
    type: 'offline',
    link: 'https://ccf.org.ph/',
    linkLabel: '공식 웹사이트'
  },
  {
    category: 'church',
    title: 'EDSA 성당 (Shrine of Mary, Queen of Peace)',
    description: '필리핀 역사의 상징적인 장소이자 로빈슨 갤러리아 몰 바로 옆에 위치한 유명 가톨릭 성당입니다. 접근성이 매우 뛰어나며 영어 미사에 참석할 수 있습니다.',
    details: [
      '위치: EDSA cor. Ortigas Ave (로빈슨 갤러리아 옆)',
      '미사 시간: 매일 정해진 시간에 영어 미사 진행',
      '역사적 랜드마크'
    ],
    location: 'EDSA cor. Ortigas Ave',
    coordinates: { lat: 14.5894, lng: 121.0595 },
    type: 'offline',
    link: 'https://www.facebook.com/EDSAShrineOfficial/',
    linkLabel: '페이스북 보기'
  },
  {
    category: 'church',
    title: '빅토리 올티가스 (Victory Ortigas)',
    description: '로빈슨 갤러리아 쇼핑몰 4층에 위치하여 접근성이 매우 좋은 개신교 교회입니다. 젊고 활기찬 분위기이며, 모든 예배가 영어로 진행되어 학생들에게 인기가 많습니다.',
    details: [
      '위치: Robinsons Galleria 4층',
      '학생부(Every Nation Campus) 모임 활발',
      '쇼핑몰 내에 있어 주차 및 식사가 편리함'
    ],
    location: 'Level 4, Robinsons Galleria',
    coordinates: { lat: 14.5905, lng: 121.0596 },
    type: 'offline',
    link: 'https://victory.org.ph/locations/ortigas/',
    linkLabel: '교회 안내 보기'
  },
  {
    category: 'church',
    title: '성 프란치스코 성당 (St. Francis of Assisi)',
    description: '샹그릴라 몰 근처에 위치한 유서 깊은 대형 가톨릭 성당입니다. 아름다운 건축물과 경건한 미사 분위기를 느낄 수 있습니다.',
    details: [
      '위치: Shaw Blvd (샹그릴라 몰 도보 5분)',
      '결혼식 장소로도 유명한 아름다운 성당',
      '평일 및 주일 미사 참례 가능'
    ],
    location: 'Shaw Blvd, Mandaluyong',
    coordinates: { lat: 14.5796, lng: 121.0573 },
    type: 'offline',
    link: 'https://www.facebook.com/StFrancisMandaluyong/',
    linkLabel: '페이스북 보기'
  },
  // --- KOREAN CHURCHES (ADDED & UPDATED) ---
  {
    category: 'korean_church',
    title: '평강교회 (Pyungkang Korean Methodist Church)',
    description: '올티가스 센터 내 퍼시픽 센터(Pacific Center)에 위치하여 접근성이 좋은 한인 감리교회입니다.',
    details: [
      '위치: Pacific Center Bldg (학원 도보 5분)',
      '예배: 주일 오전 11시 (변동 가능)',
      '특징: 전통적인 예배, 접근성 우수'
    ],
    location: 'Pacific Center, San Miguel Ave',
    coordinates: { lat: 14.5858, lng: 121.0605 },
    type: 'offline',
    link: 'https://www.facebook.com/manilapyungkang/',
    linkLabel: '페이스북 페이지'
  },
  {
    category: 'korean_church',
    title: '목양교회 (Mokyang Church)',
    description: '가족 같은 분위기의 한인 교회로 Strata 2000 건물 인근에 위치합니다.',
    details: [
      '위치: Ortigas Center (Strata 2000 근처)',
      '예배: 주일 및 수요 예배',
      '특징: 소규모 공동체, 학생 케어'
    ],
    location: 'Emerald Ave, Ortigas Center',
    coordinates: { lat: 14.5862, lng: 121.0610 },
    type: 'offline',
    link: 'https://www.facebook.com/mokyangmanila/',
    linkLabel: '교회 소식 보기'
  },
  {
    category: 'korean_church',
    title: '로뎀교회 (Ortigas Rodem Church)',
    description: '올티가스 중심부에 위치한 따뜻한 공동체입니다.',
    details: [
      '위치: 올티가스 센터 내',
      '예배: 주일 및 수요 예배',
      '특징: 유학생 케어 및 상담'
    ],
    location: 'Ortigas Center',
    coordinates: { lat: 14.5870, lng: 121.0620 },
    type: 'offline',
    link: 'https://www.facebook.com/rodemchurchmanila/',
    linkLabel: '페이스북 보기'
  },
  {
    category: 'korean_church',
    title: '마닐라 성 김대건 한인 성당',
    description: '마닐라 지역 유일의 한인 가톨릭 성당입니다. 올티가스에서 차로 15~20분 거리인 BGC 인근에 위치합니다.',
    details: [
      '위치: Taguig (C5 Road 인근)',
      '미사: 주일 교중 미사 오전 10시 30분',
      '특징: 셔틀버스 운행 (확인 필요)'
    ],
    location: 'St. Michael, Taguig',
    coordinates: { lat: 14.5323, lng: 121.0536 },
    type: 'offline',
    link: 'https://www.facebook.com/manilakhan/',
    linkLabel: '성당 페이스북'
  }
];

// --- Exported Data Constants ---

export const KO_DATA = {
  // ... (unchanged)
  nav: {
    home: "홈",
    curriculum: "커리큘럼",
    fees: "비용안내",
    living: "생활정보",
    carrot: "올티캐롯", // NEW
    blog: "로이하우스 블로그",
    faq: "FAQ",
    contact: "Contact Us"
  },
  home: {
    catchphrase: "슈퍼키즈 마인드셋: 회복탄력성(Resilience)과 그릿(Grit)으로 완성되는 슈퍼파워. 거친 도전 속에서도 끝까지 해내는 힘, 뇌의 컨트롤 센터를 깨웁니다.",
    hero: {
      badge: "스페이스 엔지니어",
      titleLine1: "이중언어와 우주적 사고",
      titleLine2: "슈퍼키즈 마인드셋",
      subtitle: "아이캔의 아이들을 우주시대의 CHOSEN 자유인으로 만들어 나갑니다.",
      ctaCurriculum: "커리큘럼 살펴보기",
      ctaFees: "비용 안내",
      ctas: {
        living: "생활 가이드",
        kakao: "카카오톡 입학상담"
      }
    },
    philosophy: [
      { title: "5-Dim Articulation", desc: "서술, 묘사, 설명, 논증, 설득의 5단계 조음 훈련을 통해 생각과 지식을 세상에 명확하게 전달하는 강력한 소통 능력을 기릅니다.", icon: ICONS.Cpu, link: "/curriculum" },
      { title: "Space Orienteering", desc: "AI 에드워드, 커리큘럼 디렉터 민, 데이터 전문가 에스라가 이끄는 드림팀. 미래 시공간의 난제를 해결하는 혁신적 프로젝트 수업.", icon: ICONS.Rocket, link: "/vision" },
      { title: "Global Conversation", desc: "SAT 펀더멘털과 고전 읽기를 통해 자유, 정의, 인권의 가치를 논하며 시대를 초월하는 인싸이트와 비평적 사고를 완성합니다.", icon: ICONS.Globe, link: "/curriculum" }
    ],
    location: {
      title: "안전한 교육생태계 '올티가스 센타' 에서 그 꿈을 실현해 나갑니다",
      desc: "올티가스는 마닐라의 비즈니스 중심지로, 치안이 매우 우수하고 쾌적한 환경을 자랑합니다. 우리는 이곳을 'The Environment'라 부르며, 아이들의 안전과 몰입을 위한 최적의 기지로 활용합니다.",
      safety: "Safety & Security",
      safetyDesc: "24시간 가드 상주 및 인텔리전트 빌딩 관리",
      infra: "Hyper Connectivity",
      infraDesc: "도보 5분 내 연결되는 모든 생활 편의 인프라"
    },
    why: {
      title: "Why ICAN?",
      subtitle: "아이캔 아카데미를 선택해야 하는 특별한 이유"
    },
    strengthsTitle: "핵심 가치 (The Core Manifests)",
    specialProjectsTitle: "슈퍼키즈 특별 프로젝트",
    specialProjects: [
      {
        title: "Space Aporia",
        subtitle: "우주 난제 해결 프로젝트",
        category: "Future",
        icon: ICONS.Telescope,
        description: "A project‑based curriculum dedicated to solving complex space‑age challenges.",
        details: ["Defining Intellectual Aporia", "Space Orienteering Methods", "Simulations with Data Experts"]
      },
      {
        title: "Capital Mind",
        subtitle: "실물 경제 & 금융 리터러시",
        category: "Finance",
        icon: ICONS.TrendingUp,
        description: "Immersive economics lab for real‑world market analysis.",
        details: ["Strategic Equity Portfolios", "Macro‑Economic Navigation", "Founder Residency Simulation"]
      },
      {
        title: "Lethal Rhetoric",
        subtitle: "문화 비평 & 설득의 기술",
        category: "Communication",
        icon: ICONS.Mic,
        description: "Master the art of persuasive communication and literary critique.",
        details: ["Critical TED Discourse Analysis", "The Art of the Manifesto", "Global Narrative Debates"]
      }
    ],
    ctaFooter: {
      title: "멤버십 합류하기",
      subtitle: "2026년 영어 캠프 참가 문의"
    }
  },
  strengths: [
    { title: "AI 'Dr. ICAN'", description: "20년 교육 데이터와 AI의 결합. 학생의 학습 패턴을 정밀 분석하여 개인별 최적화된 스킬 중심 커리큘럼을 제공합니다.", icon: ICONS.Cpu },
    { title: "Resilience & Grit", description: "힘든 과제 앞에서도 포기하지 않는 회복탄력성을 기릅니다. 작은 성공의 축적이 아이의 내면을 단단한 슈퍼파워로 채웁니다.", icon: ICONS.HeartPulse },
    { title: "Bilingual Schema", description: "이중언어 환경에서 축적된 지식 체계는 복잡한 세상의 문제를 지혜롭게 해결하는 창의적 솔루션의 원천이 됩니다.", icon: ICONS.Brain },
    { title: "Christian Monitoring", description: "엄격한 수업 모니터링과 크리스천 품성 교육으로, AI 시대에도 기술에 휘둘리지 않고 올바른 가치관으로 리드하는 인성을 갖춥니다.", icon: ICONS.ShieldCheck }
  ],
  spaceProgram: {
    badge: "New Special Program",
    title: "NASA Space Camp",
    subtitle: "우주 과학 영어 캠프",
    description: "단순한 영어 학습을 넘어, 우주 과학을 주제로 한 창의 융합 수업입니다. 아이들의 호기심을 자극하고 과학적 사고력과 영어 표현력을 동시에 키웁니다.",
    modules: [
      { title: "Rocket Science", desc: "로켓의 원리를 배우고 직접 모형을 제작하여 발사합니다.", icon: ICONS.Rocket },
      { title: "Solar System", desc: "태양계 행성들의 특징을 탐구하고 영어로 프레젠테이션 합니다.", icon: ICONS.Telescope },
      { title: "Astronaut Training", desc: "우주인의 생활과 훈련 과정을 체험하며 팀워크를 배웁니다.", icon: ICONS.Atom }
    ]
  },
  curriculumPage: {
    title: "체계적인 커리큘럼",
    desc: "레벨 테스트를 통해 학생의 수준을 정확히 진단하고, 1:1 맞춤형 수업과 그룹 활동을 병행하여 최상의 학습 효과를 이끌어냅니다.",
    schedule: {
      title: "하루 일과표",
      daily: "주중 (월~금)",
      manToMan: "1:1 집중 수업 (6시간)",
      group: "그룹 활동 수업 (2시간)",
      note: "* 학생의 레벨과 컨디션에 따라 스케줄은 조정될 수 있습니다.",
      saturday: "주말 (토요일)",
      saturdayDesc: "다양한 액티비티와 스페셜 클래스로 영어를 즐겁게 배웁니다.",
      time: "시간:",
      cost: "비용:",
      costVal: "별도 문의"
    }
  },
  curriculum: [
    {
      id: "level1",
      title: "서술적 사고가 (Narrative Thinkers)",
      target: "레벨 1 · 입문",
      description: [
        "이야기, 순서, 그리고 '누가, 무엇을, 어디서, 언제'와 같은 구체적 사건에 집중합니다.",
        "시간 순서대로 사건을 나열하고 스토리를 구성하는 능력을 기릅니다.",
        "기본적인 문장 구조와 어휘력을 탄탄히 다집니다."
      ],
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "level2",
      title: "묘사적 사고가 (Descriptive Thinkers)",
      target: "레벨 2 · 기초",
      description: [
        "오감(소리, 시각, 질감 등)을 활용한 언어로 세부 사항을 정밀하게 묘사합니다.",
        "생생한 표현력과 풍부한 형용사, 부사 활용 능력을 키웁니다.",
        "독자가 장면을 그릴 수 있도록 디테일한 글쓰기를 훈련합니다."
      ],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
    },
    {
      id: "level3",
      title: "설명적 사고가 (Expository Thinkers)",
      target: "레벨 3 · 중급",
      description: [
        "'아이디어 → 설명 → 예시' 구조를 사용하여 명확하고 논리적인 설명을 구성합니다.",
        "복잡한 개념을 체계적으로 분해하고 전달하는 능력을 기릅니다.",
        "에세이의 기본 구조(서론-본론-결론)를 완벽히 익힙니다."
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "level4",
      title: "논증적 사고가 (Argumentative Thinkers)",
      target: "레벨 4 · 고급",
      description: [
        "사실, 통계, 예시와 같은 명확한 증거로 자신의 주장을 뒷받침합니다.",
        "반론을 예측하고 이에 대응하는 논리적 글쓰기를 훈련합니다.",
        "비판적 사고력과 분석 능력을 집중적으로 향상시킵니다."
      ],
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "level5",
      title: "설득적 사고가 (Persuasive Thinkers)",
      target: "레벨 5 · 마스터",
      description: [
        "수사학(에토스, 파토스, 로고스)을 활용하여 청중에게 영향을 미치고 설득합니다.",
        "감정적 호소와 논리적 근거를 균형있게 활용하는 고급 기술을 익힙니다.",
        "TED 스타일 프레젠테이션과 디베이트 능력을 마스터합니다."
      ],
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  fees: {
    tuitionTitle: "캠프수업료 안내",
    tuitionSubtitle: "합리적인 비용으로 최고의 교육을 제공합니다.",
    headers: ["기간", "캠프수업료", "교재비"],
    items: [
      { duration: "4주", tuition: "190만원", materialFee: "10만원" },
      { duration: "8주", tuition: "360만원", materialFee: "15만원" },
      { duration: "12주", tuition: "530만원", materialFee: "20만원" }
    ],
    additionalClasses: {
      title: "추가 선택 수업",
      subtitle: "학생의 필요와 목표에 맞춰 선택할 수 있는 심화 과정입니다.",
      headers: ["수업명", "기간", "추가 비용"],
      items: [
        { name: "테드 (TED) 수업 추가", duration: "4주", price: "5만원" },
        { name: "주니어 토플 수업 추가", duration: "4주", price: "5만원" },
        { name: "AI 수업 추가", duration: "4주", price: "7만원" },
        { name: "토플 수업 추가", duration: "4주", price: "10만원" }
      ]
    },
    note: "* 환율 변동에 따라 원화 금액은 달라질 수 있습니다.\n* 숙소 및 식비는 별도입니다.\n* 입학금 한 가정당 15만원 (재등록자 면제)",
    visaTitle: "비자 및 기타 비용",
    visaSubtitle: "필리핀 현지에서 납부해야 하는 비용입니다.",
    visaItems: [
      { item: "SSP (학업 허가증)", cost: "6,500 ~ 6,800 페소", note: "유효기간 6개월" },
      { item: "비자 연장비 (1차)", cost: "3,600 ~ 4,000 페소", note: "59일 체류 시 (8주)" },
      { item: "비자 연장비 (2차)", cost: "4,900 ~ 5,300 페소", note: "30일 추가 (12주)" },
      { item: "ACR I-Card", cost: "3,300 ~ 3,500 페소", note: "59일 이상 체류 시 필수" },
      { item: "전기세/수도세", cost: "실비 정산", note: "사용한 만큼 부과 (숙소)" },
      { item: "관리비", cost: "약 3,000 페소/월", note: "콘도 정책에 따름" }
    ],
    entryTitle: "입국 준비 서류",
    passport: "여권",
    passportDesc: "유효기간 6개월 이상 남아야 함",
    etravel: "이트래블 (eTravel)",
    etravelDesc: "입국 72시간 전부터 등록 가능 (QR코드 저장)",
    ticket: "왕복 항공권",
    ticketDesc: "귀국일이 지정된 항공권 필수",
    warningTitle: "주의사항",
    warnings: [
      "만 15세 미만 아동은 부모 미동반 시 WEG 공증 필수",
      "영문 주민등록등본 준비 (가족 관계 증명용)",
      "해외 여행자 보험 가입 권장"
    ]
  },
  living: {
    title: "현지 생활 정보",
    subtitle: "올티가스에서의 생활을 위한 필수 팁",
    tabs: [
      { id: 'all', label: '전체' },
      { id: 'food', label: '맛집' },
      { id: 'grocery', label: '식자재/마트' }, // Changed Label
      { id: 'shopping', label: '쇼핑/생활' },
      { id: 'activity', label: '액티비티' },
      { id: 'medical', label: '병원/긴급' },
      { id: 'rent', label: '숙소/렌트' },
      { id: 'mobile', label: '통신' },
      { id: 'church', label: '현지교회' }, // Renamed from '종교'
      { id: 'korean_church', label: '한인교회' } // NEW TAB
    ],
    items: LIVING_INFO_DATA_KO,
    appsTitle: "필수 앱 추천"
  },
  faq: {
    title: "자주 묻는 질문 (FAQ)",
    contactMore: "더 궁금한 점이 있으신가요?",
    kakaoContact: "카카오톡 문의하기",
    items: [
      { question: "치안은 안전한가요?", answer: "네, 올티가스는 필리핀 내에서도 가장 안전한 지역 중 하나입니다. 건물마다 가드가 상주하며 거리는 깨끗하고 안전합니다." },
      { question: "숙소는 어디인가요?", answer: "학원과 도보 5~10분 거리의 고급 콘도미니엄(The Currency, Exchange Regency 등)을 연계해 드립니다." },
      { question: "식사는 어떻게 해결하나요?", answer: "주변에 한식당이 많고 배달 앱도 잘 되어 있습니다. 하숙형 숙소를 선택하시면 한식 식사가 제공됩니다." },
      { question: "주말에는 무엇을 하나요?", answer: "쇼핑몰 투어, 수영, 골프 등 다양한 여가 생활이 가능하며, 학원에서 주최하는 주말 액티비티에 참여할 수도 있습니다." }
    ]
  }
};

export const EN_DATA = {
  // ... (unchanged)
  nav: {
    home: "Home",
    curriculum: "Curriculum",
    fees: "Fees",
    living: "Living Info",
    carrot: "OrtiCarrot", // NEW
    blog: "Blog",
    faq: "FAQ",
    contact: "Contact Us"
  },
  // ... (rest of EN_DATA is assumed to be similar structure, keeping it brief as user asked for functionality not translation fixes)
  home: {
    catchphrase: "Super Kids Mindset: A Superpower completed with Resilience and Grit.",
    hero: {
      badge: "The Future of Education",
      titleLine1: "Super Kids Mindset",
      titleLine2: "Space Orienteering",
      subtitle: "Superpower completed with Resilience and Grit.",
      ctaCurriculum: "Explore Archive",
      ctaFees: "Investment",
      ctas: {
        living: "The Living Guide",
        kakao: "Kakao Admissions"
      }
    },
    philosophy: [
      { title: "5-Dim Articulation", desc: "Training articulation through narration, description, explanation, argumentation, and persuasion.", icon: ICONS.Cpu, link: "/curriculum" },
      { title: "Space Orienteering", desc: "A dream team led by AI Edward, Director Min, and Data Expert Ezra. Solving future space-time apthorias.", icon: ICONS.Rocket, link: "/vision" },
      { title: "Global Conversation", desc: "Discussing values of freedom, justice, and human rights through SAT fundamentals and classics.", icon: ICONS.Globe, link: "/curriculum" }
    ],
    location: {
      title: "Ortigas Center: Safe Edu-Ecosystem",
      desc: "Ortigas is Manila's business hub, boasting excellent security and a pleasant environment.",
      safety: "Safety & Security",
      safetyDesc: "24/7 Guards & Intelligent Building Management",
      infra: "Hyper Connectivity",
      infraDesc: "All life amenities connected within 5 mins walk"
    },
    why: {
      title: "Why ICAN?",
      subtitle: "Special reasons to choose ICAN Academy"
    },
    strengthsTitle: "The Core Manifests",
    specialProjectsTitle: "Special Projects",
    specialProjects: [
      {
        title: "Space Aporia",
        subtitle: "Space Problem Solving Project",
        category: "Future",
        icon: ICONS.Telescope,
        description: "A project‑based curriculum dedicated to solving complex space‑age challenges.",
        details: ["Defining Intellectual Aporia", "Space Orienteering Methods", "Simulations with Data Experts"]
      },
      {
        title: "Capital Mind",
        subtitle: "Real Economy & Financial Literacy",
        category: "Finance",
        icon: ICONS.TrendingUp,
        description: "Immersive economics lab for real‑world market analysis.",
        details: ["Strategic Equity Portfolios", "Macro‑Economic Navigation", "Founder Residency Simulation"]
      },
      {
        title: "Lethal Rhetoric",
        subtitle: "Cultural Criticism & Art of Persuasion",
        category: "Communication",
        icon: ICONS.Mic,
        description: "Master the art of persuasive communication and literary critique.",
        details: ["Critical TED Discourse Analysis", "The Art of the Manifesto", "Global Narrative Debates"]
      }
    ],
    ctaFooter: {
      title: "Join The Society",
      subtitle: "Membership inquiries for the 2025 residency."
    }
  },
  strengths: [
    { title: "AI 'Dr. ICAN'", description: "Combination of 20 years education data and AI. Analyzing student patterns to provide optimized skill-based curriculum.", icon: ICONS.Cpu },
    { title: "Resilience & Grit", description: "Developing resilience to not give up in face of challenges. Accumulation of small successes builds inner superpower.", icon: ICONS.HeartPulse },
    { title: "Bilingual Schema", description: "Knowledge system accumulated in bilingual environment becomes source of creative solutions.", icon: ICONS.Brain },
    { title: "Christian Monitoring", description: "Strict class monitoring and Christian character education to lead with correct values in AI era.", icon: ICONS.ShieldCheck }
  ],
  spaceProgram: KO_DATA.spaceProgram,
  curriculumPage: KO_DATA.curriculumPage,
  curriculum: KO_DATA.curriculum,
  fees: KO_DATA.fees,
  living: KO_DATA.living,
  faq: KO_DATA.faq
};

// Default Export for backward compatibility (points to KO)
export const STRENGTHS = KO_DATA.strengths;
export const SPACE_PROGRAM = KO_DATA.spaceProgram;
export const CURRICULUM = KO_DATA.curriculum;
export const TUITION_FEES = KO_DATA.fees.items;
export const VISA_FEES = KO_DATA.fees.visaItems;
export const LIVING_INFO = KO_DATA.living.items;
export const FAQS = KO_DATA.faq.items;

export const VISION_DETAILS = {
  title: "ICAN VISION: EDUSPACE",
  subtitle: "2026 아이캔 에듀스페이스의 전개",
  pillars: [
    {
      id: "ai-system",
      title: "1. AI & Data Ontology (Dr. ICAN)",
      icon: ICONS.Cpu,
      content: `
        <h3 class="text-xl font-bold mb-4">팔란티어형 우주 교육의 실현</h3>
        <p class="mb-4">20년간 축적된 아이캔의 프리미엄 교육 노하우를 AI '닥터아이캔'에 접목시켰습니다. 단순한 데이터 축적이 아닌, 팔란티어형 온톨로지 기술을 통해 데이터 간의 맥락과 관계성을 정의합니다.</p>
        
        <div class="bg-gray-50 p-6 rounded-xl mb-6">
            <h4 class="font-bold mb-3">핵심 기술 인프라</h4>
            <ul class="list-disc list-inside space-y-2 text-sm text-gray-700">
                <li><strong>PostgreSQL:</strong> 복잡한 교육 데이터의 구조적 관리</li>
                <li><strong>Neo4j:</strong> 학습 관계와 연결성을 시각화하는 그래프 DB</li>
                <li><strong>MongoDB:</strong> 다양한 교육 콘텐츠의 유연한 저장</li>
                <li><strong>RAG + LLM:</strong> 닥터아이캔이 학생의 학습 틈새를 분석하여 최적화된 콘텐츠 추천</li>
            </ul>
        </div>
        <p>이 살아있는 데이터 유기체는 매일 새로운 학습 성공/실패 케이스를 학습하여, 학생 개개인에게 최적화된 앱 형태의 솔루션을 제공합니다.</p>
      `
    },
    {
      id: "space-curriculum",
      title: "2. Space Orienteering & Rhetoric",
      icon: ICONS.Rocket,
      content: `
        <h3 class="text-xl font-bold mb-4">우주 시대를 위한 난제 해결</h3>
        <p class="mb-4">우리는 코어 지식 습득을 넘어, 미래 시공간의 복잡한 문제(Aporia)를 해결하는 '스페이스 오리엔티어링' 메소드를 도입했습니다.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="border p-4 rounded-xl">
                <h4 class="font-bold mb-2 text-[#0071E3]">Dream Team</h4>
                <p class="text-sm">에스라(IT/Data), 민(Curriculum), 에드워드(AI/CTO)로 구성된 전문가 팀이 프로젝트를 주도합니다.</p>
            </div>
            <div class="border p-4 rounded-xl">
                <h4 class="font-bold mb-2 text-[#0071E3]">TED Rhetoric</h4>
                <p class="text-sm">단순한 말하기가 아닌, 문학 비평과 레토릭을 통해 세상을 변화시키는 설득의 힘을 기릅니다.</p>
            </div>
        </div>
        <p>2026년 스타트업 시뮬레이션을 통해 아이들은 실제 문제 해결 과정을 경험하며, 일론 머스크의 창의적 산물과 같은 혁신적 사고를 훈련합니다.</p>
      `
    },
    {
      id: "future-readiness",
      title: "3. Cognitive Flexibility & Character",
      icon: ICONS.Brain,
      content: `
        <h3 class="text-xl font-bold mb-4">인지적 유연성과 워프쉽(Warp Ship)</h3>
        <p class="mb-4">이중언어(Bilingual) 습득 과정은 뇌의 '인지적 유연성'을 극대화하는 훈련입니다. 이는 단순한 언어 능력을 넘어, 다양한 관점에서 문제를 바라보는 우주적 사고의 기초가 됩니다.</p>
        
        <div class="bg-blue-50 p-6 rounded-xl mb-6">
            <h4 class="font-bold mb-3 text-blue-900">Entrance Test: Readniess for Space</h4>
            <p class="text-sm text-blue-800 mb-2">4학년부터 시작되는 논픽션/논증문 읽기는 'Common Core Knowledge' 습득의 핵심입니다.</p>
            <p class="text-sm text-blue-800">아이캔은 에드워드가 개발한 AI 진단 도구를 통해 아이의 미래 준비 상태를 정밀하게 분석합니다.</p>
        </div>
        <p>크리스챤 품성을 바탕으로 한 엄격한 수업 모니터링과 비디오 피드백을 통해, AI 시대에도 기술에 종속되지 않고 흐름을 주도하는(Warp Ship) 리더를 길러냅니다.</p>
      `
    }
  ]
};