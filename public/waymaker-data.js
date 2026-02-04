// Waymaker Data Source (Global Object Pattern)
// React/Babel 없이도 어디서든 접근 가능하도록 window 객체에 할당합니다.

window.WAYMAKER_DATA = [
    {
        id: 'kwon-soo-a-happiness',
        title: "행복은 선물인가, 재능인가?",
        student: "권수아 (Kwon Soo A)",
        category: 'TED',
        tags: ['#행복', '#관점', '#재능', '#철학', '#아이캔정신'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "우리가 느끼는 행복은 타고나는 것일까요, 아니면 훈련할 수 있는 근육일까요? 행복에 대한 깊이 있는 통찰.",
        duration: "04:12",
        date: "2024.10.15",
        videoUrl: "PtIN1fFSeJs",
        x: 0, y: 0, z: 0
    },
    {
        id: 'kwon-soo-a-animals',
        title: "문화적 삶: 동물 vs 인간",
        student: "권수아 (Kwon Soo A)",
        category: 'TED',
        tags: ['#문화', '#생물학', '#관점', '#과학'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "동물과 인간의 사회적 구조와 문화적 행동을 비교하며, 우리 삶의 본질을 탐구합니다.",
        duration: "05:10",
        date: "2024.11.02",
        videoUrl: "pXwjQGfDyWM",
        x: -25, y: 15, z: 10
    },
    {
        id: 'kim-joi-table-tennis',
        title: "탁구의 놀라운 세계",
        student: "김조이 (Kim Joi)",
        category: '방송',
        tags: ['#스포츠', '#열정', '#기술', '#몰입', '#아이캔정신'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "탁구공 회전에 숨겨진 물리학과, 그 안에 담긴 뜨거운 열정을 이야기합니다.",
        duration: "03:30",
        date: "2024.09.20",
        videoUrl: "HtLG95LIAQw",
        x: 25, y: -10, z: -15
    },
    {
        id: 'lee-soo-eun-interview',
        title: "2025 겨울방학 파이널 인터뷰",
        student: "이수은 (Lee Soo Eun)",
        category: '비전',
        tags: ['#성장', '#인터뷰', '#미래리더', '#아이캔정신'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "지난 겨울 캠프 동안 겪은 도전과 성장의 이야기, 그리고 미래를 향한 다짐.",
        duration: "04:00",
        date: "2025.02.01",
        videoUrl: "seOAHUY5kXI",
        x: 10, y: -25, z: 20
    },
    {
        id: 'ted-cinematic-benchmark',
        title: "미래의 수사학 (시네마틱 벤치마크)",
        student: "다니엘 팀 (Daniel Team)",
        category: '다큐멘터리',
        tags: ['#시네마틱', '#수사학', '#퀄리티', '#미래리더'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "학생 영상 제작의 기준점이 되는 고품질 시네마틱 영상. 말의 질감과 깊이를 시각화하다.",
        duration: "06:00",
        date: "2026.02.02",
        videoUrl: "PtIN1fFSeJs",
        x: -15, y: 30, z: -10
    },
    // --- REAL DATA COLLECTED (IDs Pending) ---
    {
        id: 'ahn-jay-mok-min-chan-satellite',
        title: "How Satellites Protect our Earth?",
        student: "안제이 & 목민찬 (Ahn Jay & Mok Min Chan)",
        category: 'TED Documentary',
        tags: ['#과학', '#위성', '#환경', '#Earth'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "인공위성이 어떻게 우리 지구를 보호하고 감시하는지에 대한 흥미로운 탐구.",
        duration: "-",
        date: "2024",
        videoUrl: "", // TODO: Please provide YouTube ID
        x: 40, y: 20, z: -10
    },
    {
        id: 'baek-ji-won-presentation',
        title: "2025 영어 프레젠테이션 발표",
        student: "백지원 (Baek Ji Won)",
        category: 'Presentation',
        tags: ['#영어', '#발표', '#도전', '#성장'],
        thumbnail: '/assets/ted-v3.jpg',
        desc: "2025 영어 프레젠테이션 대회 발표 영상.",
        duration: "-",
        date: "2025",
        videoUrl: "", // TODO: Please provide YouTube ID
        x: -40, y: -20, z: 10
    }
];
