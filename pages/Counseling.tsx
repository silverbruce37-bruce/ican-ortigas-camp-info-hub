
import React, { useEffect, useState } from 'react';
import { Share2, Sun, Sunset, Moon, Sunrise, PlayCircle, HeartHandshake, CheckCircle, ExternalLink, ChevronLeft, ChevronRight, BookOpen, Compass, Heart, Cpu, Hammer, Rocket, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data Structure for Journal Entries ---
const JOURNAL_ENTRIES = [
    {
        id: 12,
        date: "2026.04.17 • Fri",
        title: "[Future Shock] 2년 뒤, 우리가 알던 세상은 끝납니다",
        subtitle: "앤트로픽 CEO가 예고한 '천재 국가'의 탄생, 우리 아이는 무엇을 준비해야 할까?",
        themeChip: "Future Strategy",
        morning: {
            title: "데이터 센터에 갇힌 5천만 명의 천재들",
            content: "앤트로픽의 CEO 다리오 아모데이는 충격적인 예측을 내놓았습니다. 2년 뒤인 2027년경, 데이터 센터 안에 무려 5천만 명의 노벨상 수상자급 천재들이 동시에 일하고 있는 것과 같은 세상이 올 것이라고 말입니다. 잠도 자지 않고, 한계를 모르는 속도로 정보를 처리하는 AI가 실질적으로 모든 사무직과 지능형 업무를 대체하는 시대입니다. 부모님, 이제 '지식의 축적'은 더 이상 교육의 목표가 될 수 없습니다.",
            icon: Cpu,
            color: "orange"
        },
        noon: {
            title: "폭풍의 눈에서 '나침반'을 쥐여주십시오",
            content: "변화가 너무 급격해서 감당하기조차 어렵게 느껴지시나요? 다리오는 AI가 '일반 인지능력의 완전한 대체지'가 될 것이라고 경고합니다. 이럴 때일수록 우리가 아이들에게 가르쳐야 할 것은 'How(어떻게)'가 아니라 'What & Why(무엇을, 왜)'입니다. 수천 명의 천재 비서를 발밑에 둔 '지휘관(Commander)'으로서의 자질, 즉 복잡한 문제를 정의하고 윤리적 결단을 내리는 능력이 아이의 진짜 실력이 될 것입니다.",
            icon: Compass,
            color: "blue"
        },
        evening: {
            title: "변하지 않는 '사랑'으로 전진하십시오",
            content: "기술이 지능을 정복하는 시대일수록, 역설적으로 '지능'보다 '영혼'이 중요해집니다. 사도 바울이 고백했듯, 세상의 지식은 언젠가 폐하여지지만 사랑은 영원합니다. AI는 답을 줄 수 있지만, 타인의 아픔에 함께 울어줄 수는 없습니다. 아이들에게 AI라는 강력한 도구를 쥐여주는 동시에, 그 도구를 '타인을 향한 사랑'으로 사용할 수 있는 따뜻한 인성을 가르칩시다. 그것이 아이를 안전하게 지키는 가장 강력한 방패입니다.",
            bibleVerse: "사랑은 오래 참고... 지식도 폐하리라 (고전 13:4-8)",
            actionTitle: "오늘 아이에게 물어봐 주세요",
            actionContent: "\"기술이 모든 걸 해주는 세상에서, 너는 사람들을 위해 어떤 특별한 사랑을 베풀고 싶니?\" 아이의 대답 속에 미래의 해답이 있습니다.",
            icon: Heart,
            color: "indigo"
        },
        media: {
            title: "AI가 바꾸는 인류의 다음 2년",
            url: "https://www.ted.com/talks/mustafa_suleyman_how_ai_will_transform_the_world",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/1eabb690-09a8-4447-8178-028448ec834c/SalKhan_2023-embed.jpg", // Placeholder
            desc: "Mustafa Suleyman • TED Talk",
            icon: PlayCircle
        }
    },
    {
        id: 11,
        date: "2026.04.10 • Fri",
        title: "[New Horizon] '스페이스'를 넘어 '테드(TED)'로: 아이들의 꿈에 날개를 달다",
        subtitle: "공간(Space)을 채우는 것은 결국 아이들의 이야기(TED)입니다",
        themeChip: "TED Waymaker",
        morning: {
            title: "왜 '테드 우주인'인가? 말하기의 혁명",
            content: "스페이스 웨이메이커가 테드 우주인(TED Waymaker)으로 새롭게 태어났습니다. 단순히 우주를 유영하는 것을 넘어, 자신의 생각을 논리적으로 구조화하여 세상에 외치는 'TED'의 정신을 담았습니다. 이제 우리 아이들은 광활한 지식의 은하계에서 자신만의 고유한 별 이름을 걸고, 당당하게 자신의 비전을 선포하는 진정한 '우주 리더'로 성장할 것입니다.",
            icon: Rocket,
            color: "blue"
        },
        noon: {
            title: "연결된 별들이 이루는 지혜의 은하계",
            content: "은하계의 별들은 혼자 빛나지 않습니다. 아이들의 영상 노드가 서로 연결되어 거대한 성운을 이루듯, 지식은 공유되고 연결될 때 비로소 가치를 발휘합니다. 하나의 영상을 찍기 위해 수십 번의 리허설을 견뎌내는 그 '그릿(Grit)'이 모여, 누구도 무시할 수 없는 아이캔만의 단단한 커뮤니티를 만듭니다. 과정의 고통은 잠시지만, 그 결과로 얻은 자신감은 평생의 자산이 됩니다.",
            icon: Target,
            color: "orange"
        },
        evening: {
            title: "우주보다 넓은 아이의 마음을 품는 법",
            content: "부모님, 밤하늘의 별을 보며 아이를 축복해 주세요. '테드 우주인' 아카이브에 쌓인 아이의 영상은 단순한 숙제가 아니라, 미래의 자신에게 보내는 '꿈의 신호탄'입니다. 아이의 서툰 말솜씨 속에서 반짝이는 진심을 읽어주세요. 사랑으로 빚어진 아이의 목소리는 어떤 AI도 흉내 낼 수 없는 가장 우주적인 감동입니다.",
            bibleVerse: "하늘이 하나님의 영광을 선포하고 궁창이 그의 손으로 하신 일을 나타내는도다 (시 19:1)",
            actionTitle: "오늘의 사랑 표현",
            actionContent: "아이의 영상을 함께 시청한 후, \"네 별이 우주에서 가장 밝게 빛나네\"라고 하며 꼭 안아주세요. 아이가 자신의 이야기에 자부심을 갖게 되는 기적의 순간이 될 것입니다.",
            icon: Heart,
            color: "indigo"
        },
        media: {
            title: "아이들의 아이디어가 우주를 바꿉니다",
            url: "https://www.ted.com/talks/adora_svitak_what_adults_can_learn_from_kids",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/f8e918c5-9769-429a-995c-7d3a040b7931/AdoraSvitak_2010-embed.jpg",
            desc: "Adora Svitak • TED Talk",
            icon: PlayCircle
        }
    },
    {
        id: 10,
        date: "2026.04.02 • Thu",
        title: "[Hot Issue] '클로드봇(Clawdbot)'의 등장: 말하는 AI에서 '행동하는 AI'로",
        subtitle: "자비스(Jarvis)가 현실이 된 시대, 우리 아이의 새로운 학습 전략",
        themeChip: "Autonomous Agent",
        morning: {
            title: "채팅창 밖으로 나온 AI, '자율 에이전트'의 시대",
            content: "지금까지의 AI가 똑똑한 '검색 엔진'이었다면, 이제 등장한 '클로드봇(OpenClaw)'은 내 컴퓨터를 직접 움직이는 '디지털 비서'입니다. 학부모님, 상상해 보십시오. \"여행 계획 짜줘\"가 아니라, \"비행기 표 예매하고 호텔 예약까지 끝내줘\"라고 명령하는 시대가 왔습니다. 이제 우리 아이들은 AI와 대화하는 것을 넘어, AI에게 **복잡한 일을 위임하고 시키는 능력**이 필요해졌습니다.",
            icon: Cpu,
            color: "orange"
        },
        noon: {
            title: "공부의 정의가 바뀐다: '암기'에서 '지휘(Orchestration)'로",
            content: "AI가 내 손발이 되어 일해주는 세상에서, 국영수 지식을 머리에 넣는 것보다 중요한 건 무엇일까요? 바로 **'무엇을 시킬지 아는 능력'**입니다. 마치 오케스트라 지휘자처럼, 수많은 AI 에이전트들을 조율하여 원하는 결과물을 만들어내는 힘. 우리는 이것을 **'오케스트레이션(Orchestration)'** 능력이라고 부릅니다. 아이캔은 아이들을 단순한 학습자가 아닌, 미래의 **'AI 지휘관'**으로 키웁니다.",
            icon: Compass,
            color: "blue"
        },
        evening: {
            title: "두려움 대신 '리더십'을 가르칩니다",
            content: "'AI가 우리 아이 일자리를 뺏으면 어쩌지?' 두려워하지 마십시오. AI는 훌륭한 '부하 직원'일 뿐, 결코 '리더'가 될 수는 없습니다. 비전(Vision)을 세우고, 윤리적 판단을 내리며, 사람을 감동시키는 일은 오직 인간만이 할 수 있습니다. 우리는 아이들에게 AI라는 강력한 무기를 쥐여주는 동시에, 그 무기를 선하게 사용할 수 있는 **'영적 리더십'**을 가르치겠습니다.",
            bibleVerse: "너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라 (잠언 3:5)",
            actionTitle: "오늘의 질문",
            actionContent: "아이에게 물어봐 주세요. \"만약 너에게 100명의 로봇 비서가 생긴다면, 넌 걔네들한테 무슨 멋진 일을 시키고 싶니?\"",
            icon: Rocket,
            color: "indigo"
        },
        media: {
            title: "AI와 함께하는 미래 교육",
            url: "https://www.ted.com/talks/sal_khan_how_ai_could_save_not_destroy_education",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/1eabb690-09a8-4447-8178-028448ec834c/SalKhan_2023-embed.jpg",
            desc: "Sal Khan • TED Talk",
            icon: PlayCircle
        }
    },
    {
        id: 9,
        date: "2026.03.26 • Thu",
        title: "[Special] 아이캔의 20년, 제3의 눈으로 파헤치다",
        subtitle: "\"우주시대와 이중언어, 과연 그 연결고리는 무엇인가?\" (NotebookLM 대담 리포트)",
        themeChip: "Media Review",
        morning: {
            title: "언어의 전환, 뇌의 '유연성'을 깨우다",
            content: "최근 공개된 아이캔 아카데미에 대한 분석 대담에서 가장 주목한 키워드는 '인지적 유연성(Cognitive Flexibility)'입니다. 20년의 역사를 가진 아이캔이 이중언어 교육을 고집하는 이유는 단순히 영어를 잘하기 위함이 아닙니다. 두 언어(한국어-영어) 사이를 끊임없이 오가는 과정 자체가, 뇌가 편협한 사고에서 벗어나 다양한 각도에서 문제를 바라보게 만드는 가장 강력한 '두뇌 훈련'이기 때문입니다.",
            quote: "언어를 바꾸며 생각하는 것, 그 자체가 고도의 지적 훈련이다.",
            mission: "Insight: 우리 아이가 영어와 한국어를 섞어 쓸 때 혼내지 마세요. 지금 아이의 뇌는 엄청난 속도로 '전환 훈련'을 하고 있는 중입니다.",
            icon: Cpu,
            color: "orange"
        },
        noon: {
            title: "우주시대(Space Age): 상징인가 실체인가?",
            content: "많은 분들이 '우주시대'라는 단어를 낯설어합니다. 대담에서는 이를 \"예측 불가능하고 복잡한 미래 사회에 대한 은유\"로 해석했습니다. 정해진 정답이 없는 우주 공간처럼, 우리 아이들이 살아갈 미래는 교과서 밖의 문제들로 가득합니다. 아이캔이 말하는 '우주적 사고'란, 낯선 환경(이중언어 환경)에 던져졌을 때, 당황하지 않고 자신만의 해답을 찾아내는 '생존력'과 '적응력'을 기르는 것입니다.",
            quote: null,
            warning: "핵심 질문: 우리는 아직 오지 않은 미래를 위해 아이들에게 무엇을 남겨줄 수 있을까요?",
            icon: Rocket,
            color: "blue"
        },
        evening: {
            title: "불확실성(Uncertainty)을 즐기는 아이들",
            content: "\"언어 능력을 넘어, 불확실한 미래에 진짜 필요한 핵심 기술은 무엇일까?\" 대담의 마지막 질문은 우리에게 깊은 울림을 줍니다. 아이캔의 20년은 바로 이 질문에 대한 대답이었습니다. 공간이 바뀌면 생각이 바뀝니다. 언어가 바뀌면 뇌가 바뀝니다. 우리는 아이들을 어떤 상황에서도 '길을 잃지 않는(Orienteering)' 탄탄한 내면을 가진 탐험가로 키워내겠습니다.",
            actionTitle: "함께 고민해 주세요",
            actionContent: "지금 우리 아이에게 필요한 것은 '더 많은 지식'일까요, 아니면 '더 유연한 사고'일까요?",
            icon: Moon,
            color: "indigo"
        },
        media: {
            title: "AI 시대의 교육, 무엇이 바뀌어야 하는가?",
            url: "https://www.ted.com/talks/ken_robinson_do_schools_kill_creativity",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/248cfa0b-0442-4e48-8df2-06830a68f001/KaiFuLee_2018-embed.jpg", // Placeholder - Ken Robinson is recommended
            desc: "Sir Ken Robinson • TED Talk",
            icon: PlayCircle
        }

    },
    {
        id: 8,
        date: "2026.03.19 • Thu",
        title: "선생님께: 우리는 '정답'이 아니라 '질문'을 가르칩니다",
        subtitle: "AI 시대를 준비하는 아이캔 교사들의 3가지 약속 (학부모님과 공유하는 내부 서신)",
        themeChip: "Teacher's Mindset",
        morning: {
            title: "지식의 전달자가 아닌, '의미의 설계자'가 되십시오",
            content: "선생님, AI가 모든 지식을 1초 만에 찾아주는 시대입니다. 이제 우리가 아이들에게 가르쳐야 할 것은 'What(무엇)'이 아니라 'Why(왜)'입니다. 칠판에 적힌 정답보다, 아이 스스로 \"왜 그럴까?\"라고 질문하게 만드는 수업, 그것이 진짜 경쟁력입니다. 우리는 지식을 파는 상인이 아니라, 아이들의 생각 그릇을 넓혀주는 '의미의 설계자(Meaning Architect)'가 되어야 합니다.",
            quote: "너희 마음에 그리스도를 주로 삼아 거룩하게 하고... 묻는 자에게는 대답할 것을 항상 준비하되 (벧전 3:15)",
            mission: "Mission: 아이가 정답을 맞혔을 때, \"어떻게 그런 멋진 생각을 했니?\"라고 한 번 더 물어봐 주세요.",
            icon: Compass,
            color: "orange"
        },
        noon: {
            title: "속도보다 '방향'을, 요령보다 '기초'를",
            content: "조급해하지 마십시오. AI 번역기가 있으니 단어를 안 외워도 된다는 유혹이 아이들을 흔듭니다. 하지만 기초 없이는 도구를 지배할 수 없습니다. 바울이 천막을 짓는 고된 땀방울 속에서 사명을 다졌듯, 우리 아이들이 '기초의 땀방울'을 흘리도록 격려해 주십시오. \"빨리 가는 것\"보다 \"바르게 가는 것\"이 중요함을 몸소 보여주는 '페이스메이커(Pace Maker)'가 되어주십시오.",
            quote: null,
            warning: "함께 지켜주세요: 점수보다 중요한 건, 아이가 오늘 흘린 땀방울의 가치입니다.",
            icon: Hammer,
            color: "blue"
        },
        evening: {
            title: "결국 남는 것은 '사랑'입니다",
            content: "먼 훗날 아이들이 졸업했을 때, 아이캔의 최첨단 시설은 잊혀질지 모릅니다. 하지만 선생님이 힘들 때 잡아준 손, 따뜻한 눈빛, \"할 수 있다\"는 격려의 목소리는 영원히 기억될 것입니다. AI는 절대 줄 수 없는 그 '온기(Warmth)'가 바로 우리 교육의 마지막 퍼즐입니다. 아이들의 영혼에 사랑의 흔적을 남기는 선생님, 그것이 우리의 유일한 자랑입니다.",
            actionTitle: "학부모님께 드리는 약속",
            actionContent: "아이캔의 모든 선생님은, 우리 아이가 지식보다 '사랑' 안에서 안전하게 자라도록 최선을 다하겠습니다.",
            icon: Heart,
            color: "indigo"
        },
        media: {
            title: "모든 아이에게는 챔피언이 필요합니다",
            url: "https://www.ted.com/talks/rita_pierson_every_kid_needs_a_champion",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/770e0f6d-741c-4b53-9092-22441b8c3817/CarolDweck_2014S-embed.jpg", // Placeholder - Rita Pierson's image recommended if available
            desc: "Rita Pierson • TED Talk",
            icon: PlayCircle
        }

    },
    {
        id: 7,
        date: "2026.03.12 • Thu",
        title: "산 중턱에서 숨을 고르는 너에게",
        subtitle: "세훈이를 위한 폴샘의 응원가: 기초가 있어야 요령도 생긴다",
        themeChip: "Student Mentoring",
        morning: {
            title: "정상이 보이지 않아 답답하니?",
            content: "세훈(가명)아, 요즘 마음은 굴뚝같은데 몸이 안 따라주는 것 같지? 지금 네 기분은 산 밑에서 출발해 '중턱'까지 올라온 등산객과 같아. 밑을 보면 까마득하고, 위를 봐도 정상이 안 보여. 가장 숨이 차고 포기하고 싶은 순간이야. 하지만 기억해. \"힘들다는 건 네가 오르막길을 걷고 있다는 증거야.\" 지금까지는 누군가 끌어줘서 왔지만, 이제부터는 네 발로 디뎌야 해. 이 고비를 넘기면 \"어? 나도 할 수 있네?\"라는 자신감이 너를 정상까지 밀어줄 거야.",
            quote: "우리가 선을 행하되 낙심하지 말지니 포기하지 아니하면 때가 이르매 거두리라 (갈 6:9)",
            mission: "Mission: 오늘 거울 속의 너에게 말해줘. \"괜찮아, 난 지금 올라가는 중이야.\"",
            icon: Sunrise,
            color: "orange"
        },
        noon: {
            title: "요령은 '기초' 위에서만 춤춘다",
            content: "넌 가끔 \"쉽게 가는 법 없나요?\"라고 묻고 싶을 거야. 하지만 세훈아, 기초 체력 없는 손흥민을 상상할 수 있니? 대본도 못 외우는 임시완이 명배우가 될 수 있었을까? 기초가 부족하면 불안감만 커져. 마치 기름 없는 자동차처럼 엑셀을 밟아도 앞으로 나아가지 못해. 이번 방학이 골든타임이야. 학교 시간표 챙기기, 선생님께 질문하기... 이 사소해 보이는 습관들이 너의 '기름'이 될 거야. 기초가 채워지면, 그때 비로소 '요령'이라는 날개가 돋아난단다.",
            quote: null,
            warning: "주의하세요: \"대충 해도 되겠지?\" - 헐거운 기초는 언젠가 반드시 무너집니다. 지금 흘리는 땀방울이 미래의 눈물을 닦아줍니다.",
            icon: Sun,
            color: "blue"
        },
        evening: {
            title: "혼자가 아니야, 우리는 원팀(One-Team)",
            content: "공부는 혼자 하는 싸움 같지만, 사실은 '팀 스포츠'야. 아침에 친구에게 건네는 초콜릿 하나가 너에게 아군(Ally)을 만들어 줘. 너를 돕고 싶어 하는 선생님, 부모님, 그리고 우리 아이캔 선생님들... 우리는 모두 'Team Sehun'의 멤버들이야. 혼자 끙끙 앓지 말고 손을 내밀어. \"도와주세요\"라고 말하는 건 부끄러운 게 아니라 가장 용기 있는 행동이란다. 넌 두 가지 언어와 문화를 배우는 국가대표 선수야. 이 훈련이 끝나면, 넌 그 어느 무대에서도 빛나는 주연이 될 거야.",
            actionTitle: "오늘의 다짐: 용기 있는 도움 요청",
            actionContent: "아이에게 전해주세요.\n\"힘들 땐 언제든 '도와주세요'라고 말해도 돼. 우린 언제나 네 편이야.\"",
            icon: Moon,
            color: "indigo"
        },
        media: {
            title: "그릿: 열정과 끈기의 힘 (Grit: The power of passion and perseverance)",
            url: "https://www.ted.com/talks/angela_lee_duckworth_grit_the_power_of_passion_and_perseverance",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/19c72df6-088e-4a8b-a459-3fb68686d11a/AngelaDuckworth_2013S-embed.jpg",
            desc: "Angela Duckworth • TED Talk",
            icon: PlayCircle
        }

    },
    {
        id: 6,
        date: "2026.03.05 • Thu",
        title: "닫힌 말문을 여는 30초의 기적",
        subtitle: "민주의 잠재력을 깨우는 '로제처럼 말하기' 프로젝트",
        themeChip: "Vocabulary Retrieval",
        morning: {
            title: "머뭇거림은 '신중함'의 다른 이름입니다",
            content: "민주(가명)가 질문 앞에서 머뭇거릴 때, 부모님은 답답하실 수 있습니다. 하지만 폴샘은 다르게 봅니다. 이것은 '모르는 것'이 아니라 '신중한 것'입니다. 뇌의 보물창고에 너무 많은 단어가 있어, 딱 맞는 열쇠(단어)를 찾느라 '골든 타임'을 보내고 있는 것입니다. 윽박지르면 뇌는 얼어붙습니다(Freeze). 대신 \"천천히 골라봐, 기다려줄게\"라는 여유가 필요합니다. 그 기다림이 민주의 닫힌 인출 경로를 여는 마법의 열쇠가 됩니다.",
            quote: "구하라 그리하면 너희에게 주실 것이요 찾으라 그리하면 찾아낼 것이요 (마 7:7)",
            mission: "Mission: 아이가 단어를 못 찾아 머뭇거릴 때, 대신 말해주지 말고 마음속으로 '하나, 둘, 셋'을 세며 미소 지어주세요.",
            icon: Target,
            color: "orange"
        },
        noon: {
            title: "30초의 마법: 패턴으로 길을 닦다",
            content: "막힌 어휘 길을 뚫는 최고의 방법은 '자주 다니는 것'입니다. 우리는 '30초 스토리텔링'을 시작합니다. \"Because...\", \"For instance...\" 같은 템플릿(Template)으로 길을 닦아주면, 생각의 흐름이 빨라집니다. 여기에 'Good' 대신 'Fascinating' 같은 [세컨드 레벨 형용사]를 입히면, 민주의 말하기는 블랙핑크 로제처럼 매력적이고 풍성해집니다. 월요일엔 패턴 훈련, 금요일엔 실전처럼! 이 반복된 땀방울이 민주의 말문을 시원하게 열어줄 것입니다.",
            quote: null,
            warning: "주의하세요: 단순한 단어 암기는 정답이 아닙니다. '어떤 상황'에 쓰는지 맥락(Context)을 모르면 무용지물입니다.",
            icon: Hammer,
            color: "emerald"
        },
        evening: {
            title: "틀려도 괜찮아, 아니 틀려야 배울 수 있어",
            content: "어휘 인출을 방해하는 가장 큰 적은 '스트레스'입니다. \"틀리면 혼난다\"는 두려움은 뇌의 전두엽을 마비시킵니다. 민주에게 필요한 건 '심리적 안전지대'입니다. 단어가 생각나지 않아 \"그거... 동그랗고 빨간 거!\"라고 설명하면, \"설명 참 잘했다!\"라고 박수를 쳐주세요. 어휘력보다 중요한 건 '소통하려는 의지'입니다. 우리는 민주에게 점수보다 '연결(Connection)'의 기쁨을 가르칠 것입니다. 자신감이 붙으면 어휘는 저절로 따라옵니다.",
            actionTitle: "오늘의 기도: 기다림의 미학",
            actionContent: "잠든 아이의 머리맡에서 기도해주세요.\n\"주님, 우리 민주의 마음속 두려움을 걷어가시고, 그 입술에 지혜와 평안을 주소서. 부모인 제가 먼저 기다림의 여유를 갖게 하소서.\"",
            icon: Rocket,
            color: "indigo"
        },
        media: {
            title: "자신감 있게 말하는 법 (How to speak with confidence)",
            url: "https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/22e032d8-2315-4654-9781-897d251d102e/AmyCuddy_2012G-embed.jpg",
            desc: "Amy Cuddy • TED Talk",
            icon: PlayCircle
        }

    },
    {
        id: 5,
        date: "2026.02.26 • Thu",
        title: "발화 너머의 도약: 내 안의 거인을 깨우다",
        subtitle: "해랑의 이중언어 혁명: 듣는 귀(Input)에서 말하는 입(Output)으로",
        themeChip: "Speech Articulation",
        morning: {
            title: "나를 마주할 용기가 성장의 시작입니다",
            content: "해랑(가명)이는 듣고 이해하는 능력은 뛰어납니다. 이제 필요한 건 '자신의 목소리를 객관적으로 듣는 용기'입니다. 아이캔의 '비디오 녹화 훈련'은 단순한 촬영이 아닙니다. 내가 말하는 표정, 논리, 호흡을 제3자의 눈으로 바라보는 '메타인지(Meta-cognition)'의 과정입니다. 처음엔 어색하고 부끄럽겠지만, 자신의 부족함을 직면하는 순간 비로소 진짜 성장이 시작됩니다. \"아, 내가 주어를 자꾸 빼먹는구나!\" 이 깨달음이 해랑이를 '발화의 감옥'에서 해방시킬 것입니다.",
            quote: "우리가 다 수건을 벗은 얼굴로 거울을 보는 것 같이 주의 영광을 보매 (고후 3:18)",
            mission: "Mission: 아이가 학교에서 배운 내용을 설명하는 모습을 스마트폰으로 1분간 찍어 함께 봐주세요. 그리고 \"내용이 참 좋다!\"라고 칭찬해 주세요.",
            icon: Target,
            color: "orange"
        },
        noon: {
            title: "단순한 나열을 넘어 감동적인 서사로",
            content: "지금 해랑이의 말하기는 \"밥 먹었다. 학교 갔다.\" (레벨 1: 사건 나열) 수준일 수 있습니다. 아이캔의 '써머라이징 강화 수업'은 여기에 뼈대(사이트워즈)와 살(형용사/부사)을 입힙니다. \"학교에 갔어요\"가 아니라, \"설레는 마음으로 학교에 갔지만, 갑자기 비가 와서 당황했어요\"(레벨 4: 감정 묘사)라고 말하게 됩니다. 매주 영상을 찍고 피드백을 받는 지루한 반복 훈련이 필요하지만, 이 과정이 쌓이면 해랑이는 어떤 상황에서도 논리적이고 감동적인 '글로벌 리더의 언어'를 갖게 될 것입니다.",
            quote: null,
            warning: "주의하세요: \"발음이 그게 뭐니?\" - 유창성보다 중요한 건 '자신감'입니다. 지적보다 격려가 먼저입니다.",
            icon: Hammer,
            color: "emerald"
        },
        evening: {
            title: "완벽하지 않아도 괜찮아, 넌 이미 훌륭한 화자(Speaker)야",
            content: "발화의 가장 큰 적은 '틀리면 어떡하지?'라는 두려움입니다. 바울 사도도 말이 어눌하다고 비판받았지만, 그의 메시지는 세상을 뒤집었습니다. 중요한 건 유창함보다 '진정성'과 '연결'입니다. 해랑이가 카메라 앞에서 더듬거려도, 문법이 조금 틀려도 우리는 박수를 칠 것입니다. \"너의 생각은 정말 멋져. 조금만 더 큰 소리로 말해줄래?\" 이 긍정의 피드백이 아이의 자존감을 세웁니다. 아이캔은 해랑이가 마음껏 실수하고, 그 실수 위에서 춤추듯 성장하는 '심리적 안전지대'가 될 것입니다.",
            actionTitle: "오늘의 기도: 담대한 입술",
            actionContent: "잠든 아이의 머리맡에서 기도해주세요.\n\"주님, 우리 해랑이의 입술을 열어주소서. 두려움 없이 자신의 생각을 세상에 외치게 하시고, 그 목소리가 사람들의 마음을 움직이는 도구가 되게 하소서.\"",
            icon: Rocket,
            color: "indigo"
        },
        media: {
            title: "사람의 마음을 움직이는 말하기 (How to speak so that people want to listen)",
            url: "https://www.ted.com/talks/julian_treasure_how_to_speak_so_that_people_want_to_listen",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/049187fb-3c06-4768-804d-2e2124508e2f/JulianTreasure_2013G-embed.jpg",
            desc: "Julian Treasure • TED Talk",
            icon: PlayCircle
        }

    },
    {
        id: 4,
        date: "2026.02.19 • Thu",
        title: "환골탈태(換骨脫胎): 두 개의 뇌를 장착하라",
        subtitle: "미들스쿨러의 위대한 전환: 고통스러운 적응인가, 확장인가?",
        themeChip: "Bilingual Brain",
        morning: {
            title: "지금 겪는 혼란은 '고장'이 아니라 '확장'입니다",
            content: "준혁(가명)이는 지금 혼란스럽습니다. 한국어로는 명확했던 개념들이 낯선 영어 옷을 입고 춤을 춥니다. 부모님, 걱정하지 마십시오. 이것은 '환골탈태(본질이 완전히 새로워짐)'의 시간입니다. 도교에서 신선이 되기 위해 뼈를 바꾸듯, 준혁이는 지금 한국어 뇌에서 '이중언어(Bilingual) 뇌'로 구조를 리모델링하고 있습니다. 고통스럽지만, 이 과정을 통과하면 준혁이는 남들이 볼 수 없는 '두 배 더 넓은 세상'을 보게 될 것입니다.",
            quote: "보라 내가 새 일을 행하리니 이제 나타낼 것이라 (사 43:19)",
            mission: "Mission: 아이가 영어 표현을 힘들어할 때, \"단어 몰라?\"라고 묻지 말고 \"네 머릿속에 있는 그 그림, 어떤 모양이니?\"라고 물어주세요.",
            icon: Target,
            color: "orange"
        },
        noon: {
            title: "건축가는 기초를 탓하지 않고 보강합니다",
            content: "국제학교 2년, 마음이 급해져서 어려운 단어만 외우게 하면 모래 위에 집을 짓는 격입니다. 아이캔의 해답은 '밸런싱(Balancing)'입니다. 맵테스트로 확인한 구멍 난 기초를 '퀵러닝'으로 메워야 합니다. 바울이 아덴에서 논쟁하기 위해 헬라 시와 철학을 깊이 팠듯, 준혁이에게 필요한 건 단순 회화가 아니라 '학습 도구로서의 문해력'입니다. 이 기초 공사 기간을 묵묵히 견뎌내는 힘, 그것이 바로 Grit(그릿)이고 회복탄력성입니다.",
            quote: null,
            warning: "주의하세요: \"한국에선 잘했는데 왜 여기선 못해?\" 과거의 영광은 독입니다. 지금은 '0'에서 다시 시작하는 용기가 필요한 때입니다.",
            icon: Hammer,
            color: "emerald"
        },
        evening: {
            title: "조음력(Articulation): 세상을 향해 쏘아 올리다",
            content: "영어를 잘한다는 것은 발음이 유창한 것이 아닙니다. 핵심은 '조음력(Articulation)'입니다. 내 안의 복잡한 생각과 감정을 상대가 이해하기 쉬운 논리로 구조화하여 전달하는 능력입니다. 이것이 없으면 AI 시대에 아무리 많은 지식을 가져도 소용이 없습니다. 준혁이는 이제 단순 답변을 넘어, 서술하고 묘사하며 자신의 논리를 증명하는 '크리티컬 씽킹'의 단계로 나아가야 합니다. 이것이 바로 닥터 아이캔이 지향하는 '우주적 사고'의 시작입니다.",
            actionTitle: "오늘의 기도: 환골탈태의 인내",
            actionContent: "잠든 아이의 머리맡에서 기도해주세요.\n\"주님, 우리 아이가 두 가지 언어라는 날개를 달고, 좁은 땅을 넘어 더 넓은 우주를 품는 아이가 되게 하소서. 뼈를 깎는 변화의 시간에 인내할 힘을 주소서.\"",
            icon: Rocket,
            color: "indigo"
        },
        media: {
            title: "이중언어 뇌의 이점 (The benefits of a bilingual brain)",
            url: "https://www.ted.com/talks/mia_nacamulli_the_benefits_of_a_bilingual_brain",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/635336b9-f7c8-472d-9426-3a6f443574c3/MiaNacamulli_2015E-embed.jpg",
            desc: "Mia Nacamulli • TED-Ed",
            icon: PlayCircle
        }

    },
    {
        id: 3,
        date: "2026.02.12 • Thu",
        title: "거북이의 반란: 비대칭 전력(Asymmetric Power)",
        subtitle: "평균의 종말: AI와 함께 10배(10x) 더 높이 비상하라",
        themeChip: "Future Vision",
        morning: {
            title: "AI보다 빨리 읽으려 하지 마십시오",
            content: "오늘날 우리는 '광속의 시대'를 삽니다. 하지만 입력(Input)이 느리다는 것은, 역설적으로 '하나를 읽어도 멈춰 서서 곱씹는다'는 뜻입니다. AI가 1초에 수만 페이지를 읽는 시대에 속도 경쟁은 무의미합니다. 아이의 느린 읽기는 '뒤처짐'이 아니라 '깊이(Depth)'를 위한 거룩한 멈춤입니다.",
            quote: "내 은혜가 네게 족하도다 이는 내 능력이 약한 데서 온전하여짐이라 (고후 12:9)",
            mission: "Mission: 아이가 책을 읽다 멈칫거릴 때, \"왜 빨리 안 읽니?\" 대신 \"방금 읽은 장면을 네 말로 표현해줄래?\"라고 물어 아이의 강점(구어)을 켜주세요.",
            icon: Target,
            color: "orange"
        },
        noon: {
            title: "광야의 훈련: 나만의 무기 만들기",
            content: "태준(가명)이에게 글자는 감옥 같을 수 있습니다. 하지만 이 '미스매치'가 아이를 특별하게 만듭니다. 우리는 요행을 바라지 않습니다. 바울이 천막을 짓듯 기본기(해독/유창성)를 다지되, 남들과 똑같아지기 위함이 아닙니다. 남들이 갖지 못한 '비대칭 전력'을 기르기 위함입니다.",
            quote: null,
            warning: "주의하세요: \"옆집 애는 벌써 챕터북 읽는다던데...\" 비교의 말은 아이가 가진 고유한 무기를 녹슬게 합니다.",
            icon: Hammer,
            color: "emerald"
        },
        evening: {
            title: "평균의 종말: AI와 10x 업그레이드",
            content: "인공지능 시대는 '평균'이 설 자리가 없는 시대입니다. 자신의 부족함을 억지로 채워 평범해지려 하지 마십시오. AI의 인지적 지원(Cognitive Support)은 아이의 부족한 '읽기'를 채워주는 강력한 지팡이가 될 것입니다. 자신의 고유한 창의성에 AI 기술을 더해 인지 능력을 10배(10x) 확장하십시오. 그때 비로소 아이는 결핍을 넘어, 누구도 대체할 수 없는 '새로운 가능성'의 주인공이 될 것입니다.",
            actionTitle: "오늘의 기도: 10배의 비상",
            actionContent: "잠든 아이의 머리맡에서 기도해주세요.\n\"하나님, 우리 아이의 부족함이 AI라는 날개를 달고 10배 더 높이 비상하는 도약대가 되게 하소서.\"",
            icon: Rocket,
            color: "indigo"
        },
        media: {
            title: "약점이 강점이 되는 이유 (David and Goliath)",
            url: "https://www.ted.com/talks/malcolm_gladwell_the_unheard_story_of_david_and_goliath",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/04902094-39cb-4ae0-90fe-7756f0821557/MalcolmGladwell_2013S-embed.jpg",
            desc: "Malcolm Gladwell • TED Talk",
            icon: PlayCircle
        }

    },
    {
        id: 2,
        date: "2026.02.05 • Thu",
        title: "무의미의 시대, 나침반이 되어",
        subtitle: "Paul Sam Project: AI 시대, 아이들의 길을 묻다",
        themeChip: "Future Vision",
        morning: {
            title: "지식(Knowledge)을 넘어 지혜(Wisdom)로",
            content: "AI는 인류의 모든 지식을 순식간에 학습합니다. 이제 '지식의 축적'은 더 이상 인간만의 경쟁력이 아닙니다. 바울 사도가 당시 최고의 석학 가말리엘 문하에서 율법을 배웠으나, 그 지식에 갇히지 않고 세상을 꿰뚫어 보는 '해석의 눈'을 가졌던 것처럼, 우리 아이들에게도 단순한 암기가 아닌 깊은 통찰과 해석 능력이 필요합니다.",
            quote: "우리가 이것을 말하거니와 사람의 지혜가 가르친 말로 아니하고 오직 성령께서 가르치신 것으로 하니 (고전 2:13)",
            mission: "Mission: 아이가 오늘 학교나 학원에서 배운 '사실'이 아니라, 그것을 통해 무엇을 '느꼈는지' 물어봐 주세요.",
            icon: BookOpen,
            color: "blue"
        },
        noon: {
            title: "텐트메이커의 영성: 노동의 재정의",
            content: "노동이 사라지는 시대, 많은 이들이 무기력에 빠질 수 있습니다. 하지만 바울은 천막을 짓는 고된 노동 속에서도 자신의 사명(Mission)을 잃지 않았습니다. 일이 생계를 위한 수단을 넘어, 자신의 가치를 실현하고 이웃을 섬기는 통로가 될 때 비로소 우리는 AI가 대체할 수 없는 '의미 있는 삶'을 살 수 있습니다.",
            quote: "너희에게 폐를 끼치지 아니하려고 밤낮으로 일하면서 너희에게 하나님의 복음을 전파하였노라 (살전 2:9)",
            warning: "주의하세요: '나중에 AI가 다 해줄 텐데 뭐하러 고생해?'라는 말은 아이의 동기를 꺾는 말입니다.",
            icon: Compass,
            color: "emerald"
        },
        evening: {
            title: "공존의 기술: 사랑받는 아이",
            content: "바울은 유대인에게는 유대인처럼, 이방인에게는 이방인처럼 다가가며 모든 세대와 계층을 아울렀습니다. 미래 사회의 핵심 능력은 기계와 대화하는 코딩 능력이 아니라, 사람과 기계 모두에게 '사랑받고', 그들을 연결하는 '공감의 리더십'입니다. 폴샘 프로젝트는 바로 이 따뜻한 변증의 힘을 기르는 과정입니다.",
            actionTitle: "함께 걷는 기도를 해주세요",
            actionContent: "잠든 아이의 머리맡에서 기도해주세요.\n\"변화하는 세상 속에서도 변치 않는 사랑으로, 사람들의 마음을 얻는 지혜로운 아이가 되게 하소서.\"",
            icon: Heart,
            color: "indigo"
        },
        media: {
            title: "AI & The Future of Work",
            url: "https://www.ted.com/talks/kai_fu_lee_how_ai_can_save_our_humanity",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/248cfa0b-0442-4e48-8df2-06830a68f001/KaiFuLee_2018-embed.jpg",
            desc: "How AI can save our humanity - Kai-Fu Lee",
            icon: Cpu
        }

    },
    {
        id: 1,
        date: "2026.01.30 • Fri",
        title: "일어나 걸으라",
        subtitle: "Rise and Walk: 오늘의 희망과 좌절, 그리고 기적",
        themeChip: "Parenting Wisdom",
        morning: {
            title: "희망의 눈으로: \"우리를 보라\"",
            content: "아침 해가 떠오르듯, 우리 아이들도 매일 새로운 가능성으로 눈을 뜹니다. 어제의 실수나 부족함은 간밤의 어둠과 함께 사라졌습니다.",
            quote: "\"베드로가 요한과 더불어 주목하여 이르되 우리를 보라 하니\" (행 3:4)",
            mission: "Mission: 아이를 깨울 때, \"너는 오늘 무엇이든 할 수 있어\"라는 믿음의 눈빛을 보내주세요.",
            icon: Sunrise,
            color: "orange"
        },
        noon: {
            title: "현실의 무게: \"왜 나는 안 될까?\"",
            content: "해가 중천에 뜨고 활동이 왕성해지면, 아이들은 현실의 벽에 부딪힙니다. 성적, 친구 관계, 뜻대로 되지 않는 꿈... \"남들은 다 잘 뛰는데, 왜 나만 걷지도 못할까?\"",
            quote: null,
            warning: "주의하세요: \"빨리 일어나! 남들은 벌써 저기 갔잖아.\" (비교와 재촉은 금물입니다)",
            icon: Sun,
            color: "blue"
        },
        evening: {
            title: "기적의 시작: \"일어나 걸으라\"",
            content: "은과 금은 내게 없으나 내게 있는 이것을 네게 주노니... 세상이 말하는 스펙(은과 금)이 없어서 좌절한 아이들에게, 진짜 필요한 건 부모의 따뜻한 손길(일어설 힘)입니다.",
            actionTitle: "오른손을 잡아 일으키세요",
            actionContent: "오늘 밤, 잠든 아이의 손을 잡고 조용히 기도하거나 말해주세요.\n\"네가 가진 것이 없어도, 너는 그 자체로 소중하단다.\"",
            icon: Moon,
            color: "indigo"
        },
        media: {
            title: "The Power of Yet (아직의 힘)",
            url: "https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve",
            image: "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/770e0f6d-741c-4b53-9092-22441b8c3817/CarolDweck_2014S-embed.jpg",
            desc: "Carol Dweck • TED Talk",
            icon: PlayCircle
        }
    }
];

const Counseling: React.FC = () => {
    const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
    const [theme, setTheme] = useState<'morning' | 'noon' | 'evening'>('morning');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const entry = JOURNAL_ENTRIES[currentEntryIndex];

    // Scroll Observer for Theme Switching
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < 400) {
                setTheme('morning');
            } else if (scrollY < 1000) {
                setTheme('noon');
            } else {
                setTheme('evening');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme Styles
    const getThemeStyles = () => {
        switch (theme) {
            case 'noon':
                return 'bg-[#E0F7FA] text-[#1D1D1F]';
            case 'evening':
                return 'bg-[#1e293b] text-white';
            case 'morning':
            default:
                return 'bg-[#Fdfbfb] text-[#1D1D1F]';
        }
    };

    const handlePrev = () => {
        if (currentEntryIndex < JOURNAL_ENTRIES.length - 1) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentEntryIndex(prev => prev + 1);
                window.scrollTo(0, 0);
                setIsTransitioning(false);
            }, 300);
        }
    };

    const handleNext = () => {
        if (currentEntryIndex > 0) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentEntryIndex(prev => prev - 1);
                window.scrollTo(0, 0);
                setIsTransitioning(false);
            }, 300);
        }
    };


    const shareContent = () => {
        if (navigator.share) {
            navigator.share({ title: `iCan Counseling - ${entry.title}`, text: entry.subtitle, url: window.location.href }).catch(console.error);
        } else {
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className={`min-h-screen transition-colors duration-700 ease-in-out ${getThemeStyles()}`}>

            {/* Top Navigation Bar for Counseling Page */}
            <div className={`fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center transition-colors duration-500 ${theme === 'evening' ? 'text-white bg-black/50 backdrop-blur-md' : 'text-gray-900 bg-white/50 backdrop-blur-md'}`}>
                <a href="/" className="flex items-center gap-2 font-bold hover:opacity-70 transition-opacity">
                    <ChevronLeft className="w-5 h-5" />
                    <span className="text-sm">BACK TO HOME</span>
                </a>
                <div className="flex gap-4 text-xs font-semibold opacity-70">
                    <span className="hidden md:inline">COUNSELING JOURNAL</span>
                </div>
            </div>

            {/* Navigation Bar (Floating - Bottom) */}
            <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center gap-4">
                <button
                    onClick={handlePrev}
                    disabled={currentEntryIndex === JOURNAL_ENTRIES.length - 1}
                    className={`p-3 rounded-full backdrop-blur-md shadow-lg transition-all ${currentEntryIndex === JOURNAL_ENTRIES.length - 1
                        ? 'bg-gray-200/50 text-gray-400 cursor-not-allowed'
                        : 'bg-white/80 hover:scale-110 text-gray-800'
                        }`}
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="px-4 py-3 rounded-full bg-black/80 text-white backdrop-blur-md shadow-lg text-xs font-bold flex items-center">
                    JOURNAL {JOURNAL_ENTRIES.length - currentEntryIndex} / {JOURNAL_ENTRIES.length}
                </div>
                <button
                    onClick={handleNext}
                    disabled={currentEntryIndex === 0}
                    className={`p-3 rounded-full backdrop-blur-md shadow-lg transition-all ${currentEntryIndex === 0
                        ? 'bg-gray-200/50 text-gray-400 cursor-not-allowed'
                        : 'bg-white/80 hover:scale-110 text-gray-800'
                        }`}
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>


            <AnimatePresence mode='wait'>
                {!isTransitioning && (
                    <motion.div
                        key={entry.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Hero Section */}
                        <section className="pt-28 pb-20 px-6 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white rounded-full ${entry.id === 2 ? 'bg-indigo-600' : 'bg-black'}`}>
                                    {entry.themeChip}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight word-keep-all">
                                    {entry.title}
                                </h1>
                                <p className={`text-lg md:text-xl font-medium word-keep-all px-4 ${theme === 'evening' ? 'text-gray-300' : 'text-gray-500'}`}>
                                    {entry.subtitle}
                                </p>
                                <p className="mt-2 text-sm opacity-60">{entry.date}</p>
                            </motion.div>
                        </section>

                        {/* Timeline Container */}
                        <div className="max-w-3xl mx-auto px-6 relative pb-40">
                            {/* Vertical Line */}
                            <div className={`absolute left-9 top-0 bottom-0 w-0.5 ${theme === 'evening' ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

                            {/* 1. Morning */}
                            <motion.div
                                className="relative pl-12 mb-32"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-20%" }}
                            >
                                <div className="absolute left-0 top-0 w-10 h-10 bg-white border rounded-full flex items-center justify-center shadow-sm z-10 transition-colors">
                                    <entry.morning.icon className={`w-5 h-5 text-${entry.morning.color}-500`} />
                                </div>
                                <div className={`p-8 rounded-3xl shadow-sm border backdrop-blur-md transition-all ${theme === 'evening' ? 'bg-white/10 border-white/10' : 'bg-white/80 border-white/60'}`}>
                                    <div className={`text-xs font-bold text-${entry.morning.color}-500 tracking-widest mb-2`}>MORNING</div>
                                    <h2 className="text-2xl font-bold mb-4 word-keep-all">{entry.morning.title}</h2>
                                    <p className="leading-relaxed opacity-90 mb-4 word-keep-all">
                                        {entry.morning.content}
                                    </p>
                                    {entry.morning.quote && (
                                        <blockquote className={`border-l-4 border-${entry.morning.color}-400 pl-4 italic opacity-70 word-keep-all`}>
                                            "{entry.morning.quote}"
                                        </blockquote>
                                    )}
                                    <div className={`mt-4 p-4 bg-${entry.morning.color}-50 rounded-xl text-${entry.morning.color}-900 text-sm font-medium word-keep-all`}>
                                        {entry.morning.mission}
                                    </div>
                                </div>
                            </motion.div>

                            {/* 2. Noon */}
                            <motion.div
                                className="relative pl-12 mb-32"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-20%" }}
                            >
                                <div className="absolute left-0 top-0 w-10 h-10 bg-white border rounded-full flex items-center justify-center shadow-sm z-10">
                                    <entry.noon.icon className={`w-5 h-5 text-${entry.noon.color}-500`} />
                                </div>
                                <div className={`p-8 rounded-3xl shadow-sm border backdrop-blur-md transition-all ${theme === 'evening' ? 'bg-white/10 border-white/10' : 'bg-white/80 border-white/60'}`}>
                                    <div className={`text-xs font-bold text-${entry.noon.color}-500 tracking-widest mb-2`}>NOON</div>
                                    <h2 className="text-2xl font-bold mb-4 word-keep-all">{entry.noon.title}</h2>
                                    <p className="leading-relaxed opacity-90 mb-4 word-keep-all">
                                        {entry.noon.content}
                                    </p>
                                    {entry.noon.quote && (
                                        <blockquote className="border-l-4 border-blue-400 pl-4 italic opacity-70 mb-4 word-keep-all">
                                            "{entry.noon.quote}"
                                        </blockquote>
                                    )}
                                    {entry.noon.warning && (
                                        <p className="opacity-80 text-sm word-keep-all">
                                            {entry.noon.warning}
                                        </p>
                                    )}
                                </div>
                            </motion.div>

                            {/* 3. Evening */}
                            <motion.div
                                className="relative pl-12 mb-20"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-20%" }}
                            >
                                <div className="absolute left-0 top-0 w-10 h-10 bg-indigo-900 border border-indigo-700 rounded-full flex items-center justify-center shadow-sm z-10">
                                    <entry.evening.icon className="w-5 h-5 text-indigo-300" />
                                </div>
                                <div className={`p-8 rounded-3xl shadow-xl border ${theme === 'evening' ? 'bg-indigo-900/50 border-indigo-500/30' : 'bg-indigo-900 text-white'}`}>
                                    <div className="text-xs font-bold text-indigo-300 tracking-widest mb-2">EVENING</div>
                                    <h2 className="text-2xl font-bold mb-4 text-white word-keep-all">{entry.evening.title}</h2>
                                    <p className="leading-relaxed text-indigo-100 mb-6 word-keep-all">
                                        {entry.evening.content}
                                    </p>

                                    {/* Action Card */}
                                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                                        <div className="flex items-center gap-2 mb-3 opacity-90">
                                            <HeartHandshake className="w-5 h-5" />
                                            <span className="text-xs font-bold uppercase">{entry.id === 2 ? "Mom's Prayer" : "Tonight's Action"}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 word-keep-all">{entry.evening.actionTitle}</h3>
                                        <p className="text-sm opacity-90 mb-4 whitespace-pre-line word-keep-all">
                                            {entry.evening.actionContent}
                                        </p>
                                        <button
                                            onClick={shareContent}
                                            className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-opacity-90 transition"
                                        >
                                            <Share2 className="w-4 h-4" />
                                            Share with Parents
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Media Section */}
                            <div className="pl-12">
                                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${theme === 'evening' ? 'text-white' : 'text-gray-900'}`}>
                                    <entry.media.icon className="text-red-500" /> Recommended Watch
                                </h3>
                                <a
                                    href={entry.media.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block group relative overflow-hidden rounded-2xl shadow-lg aspect-video bg-black"
                                >
                                    <img
                                        src={entry.media.image}
                                        alt={entry.media.desc}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                            <PlayCircle className="w-8 h-8 text-white fill-current" />
                                        </div>
                                        <span className="text-white font-bold text-lg drop-shadow-md word-keep-all">{entry.media.title}</span>
                                        <span className="text-white/80 text-sm">{entry.media.desc}</span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-xs text-white font-mono flex items-center gap-1">
                                        Watch Video <ExternalLink className="w-3 h-3" />
                                    </div>
                                </a>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Counseling;
