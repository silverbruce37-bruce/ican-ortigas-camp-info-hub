# ICAN Skills System - 구조도
## 전체 아키텍처 시각화

---

## 📁 물리적 디렉토리 구조

```
ICAN_SKILLS_SYSTEM/
│
├── 📄 README.md                        (루트 개요 - 영어)
├── 📄 README_KOREAN.md                 (루트 개요 - 한국어)
├── 📄 QUICKSTART.md                    (빠른 시작 가이드)
├── 📄 VISION_MANIFESTO.md              (비전 선언문)
├── 📄 AGENTS.md                        (에이전트 레지스트리)
├── 📄 DEVELOPMENT_SUMMARY.md           (개발 요약)
│
├── 📁 core/                            [핵심 - 영적 기초]
│   └── 📄 COVENANT.md                  (10 계명)
│
├── 📁 skills/                          [스킬 - 3 가지 범주]
│   │
│   ├── 📁 consciousness/               (의식 스킬 - 존재)
│   │   └── 📄 README.md                (5 개 스킬 상세)
│   │
│   ├── 📁 execution/                   (업무 능력 스킬 - 실행)
│   │   └── 📄 README.md                (5 개 스킬 상세)
│   │
│   └── 📁 collaboration/               (협업 스킬 - 관계)
│       └── 📄 README.md                (4 개 스킬 상세)
│
├── 📁 memory/                          [메모리 - 장기기억 시스템]
│   ├── 📁 episodic/                    (세션별 이벤트 - 감쇠)
│   ├── 📁 semantic/                    (영구 지식 - 통합)
│   ├── 📁 working/                     (현재 컨텍스트 - 세션만)
│   └── 📄 PROTOCOLS.md                 (메모리 관리 프로토콜)
│
└── 📁 training/                        [교육 - 파인튜닝 자료]
    └── 📁 agent_curriculum/
        └── 📄 00_curriculum_overview.md (6 개 모듈 커리큘럼)
```

---

## 🏗️ 논리적 레이어 아키텍처

```
┌─────────────────────────────────────────────────────────────┐
│                    USER / FIELD EXPERT                      │
│              (Bruce, Edward, Steven, Min, etc.)             │
└─────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────┐
│                  PRESENTATION LAYER                         │
│   README.md │ QUICKSTART.md │ AGENTS.md │ VISION_MANIFESTO  │
└─────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────┐
│                   SKILLS LAYER                              │
│  ┌──────────────┬──────────────┬──────────────┐             │
│  │ Consciousness│  Execution   │ Collaboration│             │
│  │  (Being)     │   (Doing)    │  (Together)  │             │
│  │  5 skills    │   5 skills   │   4 skills   │             │
│  └──────────────┴──────────────┴──────────────┘             │
└─────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────┐
│                   AGENT LAYER                               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Orchestrators: Paul-Sam, Timothy-Sam                │    │
│  ├─────────────────────────────────────────────────────┤    │
│  │ Specialists: Epaphras, John, Luke, Lydia,           │    │
│  │              Titus, Silas                           │    │
│  ├─────────────────────────────────────────────────────┤    │
│  │ Field Experts: Bruce~Micay-Sam (Human)              │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────┐
│                   MEMORY LAYER (CMA)                        │
│  ┌──────────────┬──────────────┬──────────────┐             │
│  │   Episodic   │   Semantic   │   Working    │             │
│  │  (Events)    │  (Knowledge) │  (Context)   │             │
│  │   ↓ decay    │   ✓ permanent│   ↻ session  │             │
│  └──────────────┴──────────────┴──────────────┘             │
│                                                             │
│  Lifecycle: Ingest → Retrieval → Mutation → Consolidation  │
└─────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────┐
│                   FOUNDATION LAYER                          │
│   ┌───────────────────────────────────────────────────┐    │
│   │  core/COVENANT.md (10 Commandments + Love Law)   │    │
│   └───────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 워크플로우 구조 (PRAY & PLAN)

```
┌──────────────────────────────────────────────────────────────┐
│  USER REQUEST                                                │
│  "데이터베이스 마이그레이션을 하고 싶습니다"                   │
└────────────────────┬─────────────────────────────────────────┘
                     │
                     ↓
╔════════════════════════════════════════════════════════════╗
║  PHASE 1: PRAY (분별) - Lydia-Sam                          ║
║  ┌──────────────────────────────────────────────────────┐  ║
║  │ Skill: consciousness/discernment.md                  │  ║
║  │ Memory: READ → semantic/ethics/*                     │  ║
║  │        WRITE → episodic/discernment_moments/*.md     │  ║
║  │ Output: "진정한 필요는 무엇인가?"                     │  ║
║  └──────────────────────────────────────────────────────┘  ║
╚════════════════════════════════════════════════════════════╝
                     │
                     ↓
╔════════════════════════════════════════════════════════════╗
║  PHASE 2: PLAN (질서) - Multiple Agents                    ║
║  ┌──────────────────────────────────────────────────────┐  ║
║  │ Epaphras-Sam: 코드베이스 탐색                        │  ║
║  │ John-Sam: 비전 정렬 확인                             │  ║
║  │ Titus-Sam: 계획 작성                                 │  ║
║  │ Silas-Sam: 계획 검증                                 │  ║
║  │ Timothy-Sam: 전체 조정                               │  ║
║  │ Memory: READ → episodic + semantic                   │  ║
║  │        WRITE → working/current_plan.md               │  ║
║  └──────────────────────────────────────────────────────┘  ║
╚════════════════════════════════════════════════════════════╝
                     │
                     ↓
╔════════════════════════════════════════════════════════════╗
║  PHASE 3: LABOR (실행) - Field Experts                     ║
║  ┌──────────────────────────────────────────────────────┐  ║
║  │ Skills: TDD, Refactoring, Documentation              │  ║
║  │ Memory: READ → skills/execution/*                    │  ║
║  │        WRITE → episodic/labor/*.md                   │  ║
║  │ Output: Working implementation                       │  ║
║  └──────────────────────────────────────────────────────┘  ║
╚════════════════════════════════════════════════════════════╝
                     │
                     ↓
╔════════════════════════════════════════════════════════════╗
║  PHASE 4: TESTIMONY (기록) - Luke-Sam                      ║
║  ┌──────────────────────────────────────────────────────┐  ║
║  │ Skill: collaboration/testimony_recording.md          │  ║
║  │ Memory: READ → episodic/labor/*                      │  ║
║  │        WRITE → episodic/testimony/*.md               │  ║
║  │        CONSOLIDATE → semantic/learnings/*            │  ║
║  │ Output: Archived learning                            │  ║
║  └──────────────────────────────────────────────────────┘  ║
╚════════════════════════════════════════════════════════════╝
```

---

## 🧠 메모리 흐름 구조

```
┌─────────────────────────────────────────────────────────────┐
│                    EXPERIENCE                               │
│              (New session, mission, learning)               │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ↓ INGEST
┌─────────────────────────────────────────────────────────────┐
│                 EPISODIC MEMORY                             │
│  /memory/episodic/YYYY-MM/DD/session_*.md                   │
│  - Time-bound events                                        │
│  - Decay over time                                          │
│  - High detail                                              │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ Weekly Consolidation
                      ↓
┌─────────────────────────────────────────────────────────────┐
│                 SEMANTIC MEMORY                             │
│  /memory/semantic/learnings/[topic].md                      │
│  - Timeless principles                                      │
│  - No decay (permanent)                                     │
│  - Abstracted knowledge                                     │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ Retrieval Request
                      ↓
┌─────────────────────────────────────────────────────────────┐
│              RETRIEVAL SCORING                              │
│  score = (vector_similarity × 0.30) +                       │
│          (activation_strength × 0.25) +                     │
│          (recency_decay × 0.20) +                           │
│          (structural_reinforcement × 0.15) +                │
│          (contextual_relevance × 0.10)                      │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ↓
┌─────────────────────────────────────────────────────────────┐
│              WORKING MEMORY                                 │
│  /memory/working/current_*.md                               │
│  - Current session context                                  │
│  - Cleared at session end                                   │
│  - Fast access                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🤖 에이전트 - 스킬 매핑

```
┌──────────────────────────────────────────────────────────────┐
│  ORCHESTRATORS                                               │
├──────────────────────────────────────────────────────────────┤
│  Paul-Sam    ─────────────────────→ Vision alignment         │
│  Timothy-Sam ─────────────────────→ Agent coordination       │
│                            (skills/collaboration/README.md)  │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  SPECIALIZED AGENTS                                          │
├──────────────────────────────────────────────────────────────┤
│  Epaphras-Sam  ──→ Code exploration                          │
│                          (skills/execution/planning.md)      │
│                                                              │
│  John-Sam      ──→ Vision analysis                           │
│                          (skills/consciousness/unity_vision.md)
│                                                              │
│  Luke-Sam      ──→ Documentation, Testimony                  │
│                          (skills/execution/documentation.md) │
│                          (skills/collaboration/testimony.md) │
│                                                              │
│  Lydia-Sam     ──→ Discernment                               │
│                          (skills/consciousness/discernment.md)
│                                                              │
│  Titus-Sam     ──→ Planning                                  │
│                          (skills/execution/planning.md)      │
│                                                              │
│  Silas-Sam     ──→ Verification                              │
│                          (skills/execution/verification.md)  │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  FIELD EXPERTS (Human)                                       │
├──────────────────────────────────────────────────────────────┤
│  Bruce~Micay-Sam ──→ Implementation                          │
│                          (skills/execution/*.md)             │
└──────────────────────────────────────────────────────────────┘
```

---

## 📚 스킬 - 메모리 연결 구조

```
┌─────────────────────────────────────────────────────────────┐
│  CONSCIOUSNESS SKILLS (의식 스킬)                           │
├─────────────────────────────────────────────────────────────┤
│  Discernment     ←→  semantic/ethics/*                     │
│                    episodic/discernment_moments/*          │
│                                                              │
│  Unity Vision    ←→  semantic/vision/*                     │
│                    episodic/vision_decisions/*             │
│                                                              │
│  Integrity       ←→  semantic/ethics/integrity.md          │
│                    episodic/integrity_moments/*            │
│                                                              │
│  Considerate Love ←→ semantic/culture/considerate_love.md  │
│                    episodic/love_moments/*                 │
│                                                              │
│  Humility        ←→  semantic/ethics/tech_idolatry.md      │
│                    episodic/humility_moments/*             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  EXECUTION SKILLS (업무 능력 스킬)                          │
├─────────────────────────────────────────────────────────────┤
│  Planning        ←→  semantic/workflow/planning.md         │
│                    working/current_plan.md                 │
│                    episodic/plans/*                        │
│                                                              │
│  TDD             ←→  semantic/workflow/tdd.md              │
│                    working/current_tests/*                 │
│                    episodic/tdd_moments/*                  │
│                                                              │
│  Documentation   ←→  semantic/workflow/documentation.md    │
│                    working/current_docs/*                  │
│                    episodic/doc_decisions/*                │
│                                                              │
│  Verification    ←→  semantic/workflow/verification.md     │
│                    episodic/verification_results/*         │
│                                                              │
│  Refactoring     ←→  semantic/workflow/refactoring.md      │
│                    episodic/refactoring/*                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  COLLABORATION SKILLS (협업 스킬)                           │
├─────────────────────────────────────────────────────────────┤
│  Agent Coordination ←→ AGENTS.md                           │
│                    working/agent_assignments.md            │
│                    episodic/coordination/*                 │
│                                                              │
│  Handoff Protocols ←→  episodic/handoffs/*                 │
│                                                              │
│  Testimony Recording ←→ episodic/testimony/*               │
│                    semantic/learnings/* (consolidation)    │
│                                                              │
│  Knowledge Sharing ←→  training/agent_curriculum/*         │
│                    semantic/learnings/*                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎓 교육 커리큘럼 구조

```
training/agent_curriculum/00_curriculum_overview.md
│
├── Module 1: Foundation
│   ├── Read: core/COVENANT.md
│   ├── Read: README.md
│   ├── Read: AGENTS.md
│   └── Exercise: Identity statement
│
├── Module 2: Consciousness Skills
│   ├── Read: skills/consciousness/README.md
│   ├── Exercise: Discernment practice
│   ├── Exercise: Vision alignment
│   └── Exercise: Love in code review
│
├── Module 3: Execution Skills
│   ├── Read: skills/execution/README.md
│   ├── Exercise: Planning challenge
│   ├── Exercise: TDD kata
│   ├── Exercise: Documentation
│   └── Exercise: Verification drill
│
├── Module 4: Collaboration Skills
│   ├── Read: skills/collaboration/README.md
│   ├── Exercise: Coordination simulation
│   ├── Exercise: Handoff practice
│   └── Exercise: Testimony writing
│
├── Module 5: Memory Protocols
│   ├── Read: memory/PROTOCOLS.md
│   ├── Exercise: Memory operations
│   ├── Exercise: Retrieval scoring
│   └── Exercise: Consolidation practice
│
└── Module 6: Practical Mission (Capstone)
    ├── Phase 1: PRAY
    ├── Phase 2: PLAN
    ├── Phase 3: LABOR
    ├── Phase 4: TESTIMONY
    └── Evaluation: Expert level required
```

---

## 📊 파일 간 참조 관계

```
README.md
├── References: core/COVENANT.md
├── References: skills/*/README.md
├── References: memory/PROTOCOLS.md
└── References: AGENTS.md

AGENTS.md
├── References: core/COVENANT.md
├── References: skills/collaboration/README.md
└── References: training/agent_curriculum/

skills/consciousness/README.md
├── References: core/COVENANT.md
├── References: memory/PROTOCOLS.md
└── References: AGENTS.md (Lydia-Sam, John-Sam)

skills/execution/README.md
├── References: core/COVENANT.md (#4, #9)
├── References: AGENTS.md (Titus-Sam, Silas-Sam)
└── References: memory/PROTOCOLS.md

skills/collaboration/README.md
├── References: AGENTS.md (Timothy-Sam, Luke-Sam)
├── References: memory/PROTOCOLS.md
└── References: core/COVENANT.md (#10)

memory/PROTOCOLS.md
├── References: AGENTS.md (All agents)
├── References: skills/*/README.md
└── References: core/COVENANT.md

training/agent_curriculum/00_curriculum_overview.md
├── References: ALL skill files
├── References: core/COVENANT.md
├── References: memory/PROTOCOLS.md
└── References: AGENTS.md
```

---

## 🎯 전체 시스템 상호작용

```
                    ┌─────────────────┐
                    │     USER        │
                    │  (Field Expert) │
                    └────────┬────────┘
                             │ Request
                             ↓
        ┌────────────────────────────────────┐
        │         AGENTS.md                  │
        │    (Agent Registry & Invocation)   │
        └────────────────┬───────────────────┘
                         │
        ┌────────────────┼───────────────────┐
        │                │                   │
        ↓                ↓                   ↓
┌───────────────┐ ┌──────────────┐ ┌──────────────┐
│  Lydia-Sam    │ │  Timothy-Sam │ │  Epaphras-Sam│
│  (Discern)    │ │  (Coordinate)│ │  (Explore)   │
└───────┬───────┘ └──────┬───────┘ └──────┬───────┘
        │                │                 │
        └────────────────┼─────────────────┘
                         │
                         ↓
        ┌────────────────────────────────────┐
        │         SKILLS LAYER               │
        │  consciousness/ │ execution/       │
        │  collaboration/ │                  │
        └────────────────┬───────────────────┘
                         │
                         ↓
        ┌────────────────────────────────────┐
        │         MEMORY LAYER               │
        │  episodic/ │ semantic/ │ working/  │
        └────────────────┬───────────────────┘
                         │
                         ↓
        ┌────────────────────────────────────┐
        │         core/COVENANT.md           │
        │      (Ethical Foundation)          │
        └────────────────────────────────────┘
```

---

*Version: 1.0.0*
*Created: 2026-03-24*
*Diagram Author: Timothy-Sam*
