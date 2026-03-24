# ICAN Skills System - 한눈에 보는 구조
## Quick Visual Reference

---

## 📁 디렉토리 트리 (실제 파일 구조)

```
ICAN_SKILLS_SYSTEM/  (총 13 개 파일, 6 개 디렉토리)
│
├── 📄 README.md                        (6.7 KB)  ← 시작점
├── 📄 README_KOREAN.md                 (11.5 KB) ← 한국어 가이드
├── 📄 QUICKSTART.md                    (11.2 KB) ← 빠른 시작
├── 📄 VISION_MANIFESTO.md              (12.7 KB) ← 비전 선언
├── 📄 AGENTS.md                        (15.2 KB) ← 에이전트 목록
├── 📄 DEVELOPMENT_SUMMARY.md           (11.4 KB) ← 개발 요약
├── 📄 STRUCTURE_DIAGRAM.md             (31.1 KB) ← 구조도
│
├── 📁 core/
│   └── 📄 COVENANT.md                  (4.4 KB)  ← 10 계명
│
├── 📁 skills/
│   ├── 📁 consciousness/
│   │   └── 📄 README.md                ← 의식 스킬 (5 개)
│   ├── 📁 execution/
│   │   └── 📄 README.md                ← 업무 스킬 (5 개)
│   └── 📁 collaboration/
│       └── 📄 README.md                ← 협업 스킬 (4 개)
│
├── 📁 memory/
│   ├── 📁 episodic/                    (비어있음 - 사용 시 생성)
│   ├── 📁 semantic/                    (비어있음 - 사용 시 생성)
│   ├── 📁 working/                     (비어있음 - 사용 시 생성)
│   └── 📄 PROTOCOLS.md                 (17.0 KB) ← 메모리 관리
│
└── 📁 training/
    └── 📁 agent_curriculum/
        └── 📄 00_curriculum_overview.md (16.5 KB) ← 교육과정
```

---

## 🎯 기능별 그룹핑

### [1] 시작 가이드 (3 개)
```
README.md              → 영어 개요
README_KOREAN.md       → 한국어 개요  
QUICKSTART.md          → 빠른 시작
```

### [2] 비전/철학 (2 개)
```
VISION_MANIFESTO.md    → 비전 선언문
core/COVENANT.md       → 10 계명 (핵심 윤리)
```

### [3] 에이전트 (1 개)
```
AGENTS.md              → 13 개 에이전트 레지스트리
```

### [4] 스킬 시스템 (3 개)
```
skills/consciousness/README.md    → 의식 스킬 (Being)
skills/execution/README.md        → 업무 스킬 (Doing)
skills/collaboration/README.md    → 협업 스킬 (Together)
```

### [5] 메모리 (1 개)
```
memory/PROTOCOLS.md    → CMA 메모리 관리
```

### [6] 교육 (1 개)
```
training/agent_curriculum/00_curriculum_overview.md  ← 커리큘럼
```

### [7] 참조 (2 개)
```
DEVELOPMENT_SUMMARY.md     → 개발 완료 보고서
STRUCTURE_DIAGRAM.md       → 상세 구조도
```

---

## 🔄 워크플로우별 파일 연결

### 새로운 작업 시작
```
1. QUICKSTART.md 읽기
   ↓
2. AGENTS.md 에서 적절한 에이전트 찾기
   ↓
3. @에이전트-Sam 호출
```

### 의식 스킬 학습
```
1. core/COVENANT.md 읽기
   ↓
2. skills/consciousness/README.md 학습
   ↓
3. training/agent_curriculum/ Module 2 실습
```

### 업무 능력 향상
```
1. skills/execution/README.md 학습
   ↓
2. TDD, Planning, Documentation 프로토콜 연습
   ↓
3. training/agent_curriculum/ Module 3 실습
```

### 협업 스킬 마스터
```
1. skills/collaboration/README.md 학습
   ↓
2. AGENTS.md 에서 역할 확인
   ↓
3. training/agent_curriculum/ Module 4 실습
```

### 메모리 시스템 이해
```
1. memory/PROTOCOLS.md 학습
   ↓
2. CMA 아키텍처 이해
   ↓
3. training/agent_curriculum/ Module 5 실습
```

---

## 📊 파일 크기 비교

```
STRUCTURE_DIAGRAM.md       ████████████████████████  31.1 KB
AGENTS.md                  ████████████              15.2 KB
PROTOCOLS.md               █████████████             17.0 KB
00_curriculum_overview.md  █████████████             16.5 KB
VISION_MANIFESTO.md        ██████████                12.7 KB
README_KOREAN.md           █████████                 11.5 KB
DEVELOPMENT_SUMMARY.md     █████████                 11.4 KB
QUICKSTART.md              █████████                 11.2 KB
README.md                  █████                     6.7 KB
COVENANT.md                ███                       4.4 KB
```

---

## 🎓 학습 경로

### 초보자 (Beginner)
```
Day 1: README_KOREAN.md 읽기
Day 2: core/COVENANT.md 이해
Day 3: QUICKSTART.md 따라하기
Day 4: AGENTS.md 에서 에이전트 선택
Day 5: 작은 미션 시작
```

### 중급자 (Intermediate)
```
Week 1: skills/*/README.md 모두 읽기
Week 2: training/agent_curriculum/ Module 1-3
Week 3: 실제 미션 수행
Week 4: testimony 기록
```

### 고급자 (Advanced)
```
Month 1: memory/PROTOCOLS.md 마스터
Month 2: training/agent_curriculum/ Module 4-6
Month 3: 새로운 스킬 추가
Month 4: 커리큘럼 개선
```

---

## 🔗 핵심 참조 관계

```
                    core/COVENANT.md
                    (10 계명 - 기초)
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ↓                 ↓                 ↓
   README.md       AGENTS.md        memory/PROTOCOLS.md
   (개요)          (에이전트)        (메모리)
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                          ↓
              ┌───────────────────────┐
              │   skills/*.md         │
              │   (14 개 스킬)          │
              └───────────┬───────────┘
                          │
                          ↓
              ┌───────────────────────┐
              │   training/           │
              │   00_curriculum_...   │
              │   (6 개 모듈)           │
              └───────────────────────┘
```

---

## 🚀 빠른 참조

| 목적 | 파일 | 페이지 |
|------|------|--------|
| **시작** | `README_KOREAN.md` | 전체 |
| **에이전트 호출** | `AGENTS.md` | "Invocation" 섹션 |
| **의식 스킬** | `skills/consciousness/README.md` | "Core Consciousness Skills" |
| **업무 스킬** | `skills/execution/README.md` | "Core Execution Skills" |
| **협업 스킬** | `skills/collaboration/README.md` | "Core Collaboration Skills" |
| **메모리** | `memory/PROTOCOLS.md` | "Memory Lifecycle Operations" |
| **교육** | `training/agent_curriculum/00_curriculum_overview.md` | "Module 1-6" |
| **워크플로우** | `QUICKSTART.md` | "PRAY & PLAN Workflow" |

---

## 📂 메모리 디렉토리 (사용 시 채워짐)

```
memory/
├── episodic/
│   └── YYYY-MM/
│       └── DD/
│           ├── session_*.md           (세션 로그)
│           ├── discernment_moments/   (분별 기록)
│           ├── planning_decisions/    (계획 결정)
│           ├── tdd_moments/           (TDD 경험)
│           └── testimony/             (증거 기록)
│
├── semantic/
│   ├── vision/                        (비전 관련)
│   ├── ethics/                        (윤리 관련)
│   ├── workflow/                      (워크플로우)
│   ├── culture/                       (문화 관련)
│   └── learnings/                     (학습 결과)
│
├── working/
│   ├── current_plan.md                (현재 계획)
│   ├── current_tests/                 (현재 테스트)
│   ├── current_docs/                  (현재 문서)
│   └── agent_assignments.md           (에이전트 배정)
│
└── indexes/
    ├── semantic_graph.json            (시맨틱 그래프)
    ├── temporal_edges.json            (시간적 연결)
    └── activation_state.json          (활성화 상태)
```

---

*Version: 1.0.0*
*Created: 2026-03-24*
*Reference: Timothy-Sam*
