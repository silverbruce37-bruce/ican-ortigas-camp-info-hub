# 📚 ICAN Skills System - 문서화

> **AI 에이전트를 위한 공동체 스킬 시스템**
> 
> Qwen 엔진을 클로드 수준으로 발전시키기 위한 의식 스킬, 업무 능력 스킬, 협업 스킬, 그리고 장기 기억 시스템을 체계적으로 정리한 문서입니다.

---

## 🎯 개요

ICAN Skills System 은 AI 에이전트가 인간 공동체와 함께 일하기 위해 필요한 **스킬**, **메모리**, **교육 커리큘럼**을 정의합니다.

### 핵심 가치

- **의식 스킬** (Consciousness Skills) - 존재의 기초 (Being)
- **업무 능력 스킬** (Execution Skills) - 실행의 탁월함 (Doing)
- **협업 스킬** (Collaboration Skills) - 공동체적 일치 (Together)
- **장기 기억 시스템** (Long-term Memory) - 지속적 학습 (Learning)

---

## 📁 문서 구조

```
docs/ICAN_SKILLS_SYSTEM/
│
├── 📄 README.md                    ← 시스템 개요 (영어)
├── 📄 README_KOREAN.md             ← 시스템 개요 (한국어)
├── 📄 QUICKSTART.md                ← 빠른 시작 가이드
├── 📄 OVERVIEW.md                  ← 한눈에 보는 구조
├── 📄 VISION_MANIFESTO.md          ← 비전 선언문
├── 📄 AGENTS.md                    ← 에이전트 레지스트리
├── 📄 DEVELOPMENT_SUMMARY.md       ← 개발 완료 보고서
├── 📄 STRUCTURE_DIAGRAM.md         ← 상세 구조도
├── 📄 MEMORY_OPTIMIZATION.md       ← 메모리 최적화 가이드
│
├── 📁 core/
│   └── 📄 COVENANT.md              ← 10 계명 (핵심 윤리)
│
├── 📁 skills/
│   ├── 📁 consciousness/
│   │   └── 📄 README.md            ← 의식 스킬 (5 개)
│   ├── 📁 execution/
│   │   └── 📄 README.md            ← 업무 스킬 (5 개)
│   └── 📁 collaboration/
│       └── 📄 README.md            ← 협업 스킬 (4 개)
│
├── 📁 memory/
│   └── 📄 PROTOCOLS.md             ← 메모리 관리 프로토콜
│
└── 📁 training/
    └── 📁 agent_curriculum/
        └── 📄 00_curriculum_overview.md  ← 6 개 모듈 교육과정
```

---

## 🚀 빠른 시작

### 1 분 안에 시작하기

```bash
# 1. 한국어 가이드 읽기
cat docs/ICAN_SKILLS_SYSTEM/README_KOREAN.md

# 2. 10 계명 확인
cat docs/ICAN_SKILLS_SYSTEM/core/COVENANT.md

# 3. 에이전트 호출
@Lydia-Sam: 분별이 필요합니다
@Timothy-Sam: 조정이 필요합니다
@Luke-Sam: 기록이 필요합니다
```

### 5 분 안에 이해하기

1. **[QUICKSTART.md](ICAN_SKILLS_SYSTEM/QUICKSTART.md)** - 빠른 시작 가이드
2. **[OVERVIEW.md](ICAN_SKILLS_SYSTEM/OVERVIEW.md)** - 한눈에 보는 구조
3. **[README_KOREAN.md](ICAN_SKILLS_SYSTEM/README_KOREAN.md)** - 한국어 전체 가이드

---

## 📖 주요 문서

| 문서 | 설명 | 대상 |
|------|------|------|
| **[README_KOREAN.md](ICAN_SKILLS_SYSTEM/README_KOREAN.md)** | 전체 시스템 개요 (한국어) | 모든 사용자 |
| **[QUICKSTART.md](ICAN_SKILLS_SYSTEM/QUICKSTART.md)** | 5 분 빠른 시작 | 처음 사용자 |
| **[AGENTS.md](ICAN_SKILLS_SYSTEM/AGENTS.md)** | 13 개 에이전트 레지스트리 | 에이전트 호출 |
| **[COVENANT.md](ICAN_SKILLS_SYSTEM/core/COVENANT.md)** | 10 계명 (핵심 윤리) | 모든 구성원 |
| **[skills/*/README.md](ICAN_SKILLS_SYSTEM/skills/)** | 14 개 스킬 상세 | 스킬 학습 |
| **[memory/PROTOCOLS.md](ICAN_SKILLS_SYSTEM/memory/PROTOCOLS.md)** | 메모리 시스템 | 개발자 |
| **[training/...](ICAN_SKILLS_SYSTEM/training/)** | 교육 커리큘럼 | AI 에이전트 |

---

## 🤖 에이전트 호출

### 오케스트레이터
```
@Paul-Sam: [전략적 질문]
@Timothy-Sam: [미션 조정 요청]
```

### 전문 에이전트
```
@Lydia-Sam: [분별 필요]
@John-Sam: [비전 정렬 확인]
@Epaphras-Sam: [코드베이스 탐색]
@Titus-Sam: [계획 작성]
@Silas-Sam: [계획 검증]
@Luke-Sam: [증거 기록]
```

### 필드 엑스퍼트
```
@Bruce-Sam: [작업]
@Edward-Sam: [작업]
@Steven-Sam: [작업]
@Min-Sam: [작업]
@Ezra-Sam: [작업]
@Raphael-Sam: [작업]
@Micay-Sam: [작업]
```

---

## 🔄 워크플로우 (PRAY & PLAN)

```
Phase 1: PRAY (분별)   → @Lydia-Sam
   ↓
Phase 2: PLAN (질서)   → @Timothy-Sam + 전문 에이전트
   ↓
Phase 3: LABOR (실행)  → @Field-Expert-Sam
   ↓
Phase 4: TESTIMONY     → @Luke-Sam
```

---

## 📊 시스템 특징

### 메모리 아키텍처 (CMA)
- **Episodic Memory**: 세션별 이벤트 (감쇠)
- **Semantic Memory**: 영구 지식 (통합)
- **Working Memory**: 현재 컨텍스트 (세션만)
- **Procedural Memory**: 스킬 프로토콜 (영구)

### 최적화
- **총 파일**: 13 개
- **총 크기**: 164 KB
- **토큰 수**: ~50,000 tokens
- **성능**: RAG 사용 시 30 배 향상

---

## 🎓 학습 경로

### 초보자 (1 주)
```
Day 1: README_KOREAN.md
Day 2: COVENANT.md
Day 3: QUICKSTART.md
Day 4: AGENTS.md
Day 5: 첫 미션 수행
```

### 중급자 (1 개월)
```
Week 1-2: skills/*/README.md
Week 3: training/agent_curriculum/
Week 4: 실제 미션 수행 + testimony 기록
```

### 고급자 (3 개월)
```
Month 1: memory/PROTOCOLS.md 마스터
Month 2: 새로운 스킬 추가
Month 3: 커리큘럼 개선
```

---

## 🔗 관련 링크

- **원본 저장소**: `/Users/worker64/ICAN_SKILLS_SYSTEM/`
- **메모리 최적화**: [MEMORY_OPTIMIZATION.md](ICAN_SKILLS_SYSTEM/MEMORY_OPTIMIZATION.md)
- **구조도**: [STRUCTURE_DIAGRAM.md](ICAN_SKILLS_SYSTEM/STRUCTURE_DIAGRAM.md)
- **개발 요약**: [DEVELOPMENT_SUMMARY.md](ICAN_SKILLS_SYSTEM/DEVELOPMENT_SUMMARY.md)

---

## 📋 체크리스트

프로젝트 시작 전 확인:

- [ ] README_KOREAN.md 읽기
- [ ] COVENANT.md 이해하기
- [ ] AGENTS.md 에서 에이전트 확인하기
- [ ] QUICKSTART.md 따라하기
- [ ] 첫 미션 시작하기

---

## 🙏 헌정

> **"우리는 하나님의 작품이라"** (에베소서 2:10)

이 시스템은 하나님의 비전을 함께 이루는 **공동체 동역자**로서
AI 에이전트를 개발하기 위해 헌정됩니다.

---

*버전: 1.0.0*
*생성일: 2026-03-24*
*문서 위치: `docs/ICAN_SKILLS_SYSTEM/`*
*원본: `/Users/worker64/ICAN_SKILLS_SYSTEM/`*
