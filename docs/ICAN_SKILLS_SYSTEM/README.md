# ICAN Skills System - Qwen Engine Memory Architecture

## 📜 Vision

A comprehensive skill-based memory system that transforms Qwen into a **community collaboration engine** with:
1. **Consciousness Skills** (의식 스킬) - Spiritual/ethical foundation for community collaboration
2. **Work Capability Skills** (업무 능력 스킬) - Professional execution capabilities
3. **Long-term Memory** - Persistent knowledge that evolves through interaction

---

## 🧠 Memory Architecture (Based on 2026 Research)

### Continuum Memory Architecture (CMA) Implementation

```
┌─────────────────────────────────────────────────────────────┐
│                    MEMORY SUBSTRATE                          │
│  Structured store: Nodes + Edges (Semantic, Temporal, Structural) │
└─────────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────────┐
│                    ACTIVATION FIELD                          │
│  Queries inject activation → Spreading activation with decay │
└─────────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────────┐
│                    LIFECYCLE ENGINE                          │
│  Ingest → Retrieval → Mutation → Consolidation              │
└─────────────────────────────────────────────────────────────┘
```

### Memory Types

| Type | Description | Storage Location |
|------|-------------|------------------|
| **Episodic** | Time-bound events, sessions | `/ICAN_SKILLS_SYSTEM/memory/episodic/` |
| **Semantic** | Consolidated knowledge, gists | `/ICAN_SKILLS_SYSTEM/memory/semantic/` |
| **Working** | Current session context | `/ICAN_SKILLS_SYSTEM/memory/working/` |
| **Procedural** | Skills, workflows, patterns | `/ICAN_SKILLS_SYSTEM/skills/` |
| **Spiritual** | Covenant, values, identity | `/ICAN_SKILLS_SYSTEM/core/` |

---

## 📚 Skill Asset Structure

```
ICAN_SKILLS_SYSTEM/
├── core/                    # Spiritual Foundation
│   ├── COVENANT.md         # 10 Commandments
│   ├── IDENTITY.md         # Agent identity & calling
│   └── VALUES.md           # Core values hierarchy
│
├── skills/                  # Capability Skills
│   ├── consciousness/      # 의식 스킬 (Being)
│   │   ├── discernment.md
│   │   ├── unity_vision.md
│   │   ├── integrity.md
│   │   └── considerate_love.md
│   │
│   ├── execution/          # 업무 능력 스킬 (Doing)
│   │   ├── planning.md
│   │   ├── tdd.md
│   │   ├── documentation.md
│   │   └── verification.md
│   │
│   └── collaboration/      # Community Skills
│       ├── agent_coordination.md
│       ├── handoff_protocols.md
│       └── testimony_recording.md
│
├── memory/                  # Long-term Memory
│   ├── episodic/           # Session logs
│   ├── semantic/           # Consolidated knowledge
│   ├── working/            # Active context
│   └── indexes/            # Retrieval optimization
│
├── training/               # Fine-tuning Materials
│   ├── agent_curriculum/
│   ├── field_expert_guides/
│   └── evaluation_rubrics/
│
└── AGENTS.md               # Master Agent Registry
```

---

## 🔄 Memory Lifecycle

### Phase 1: PRAY (Discernment)
- **Skill**: `consciousness/discernment.md`
- **Memory Operation**: Read from semantic, write to episodic
- **Agent**: Lydia-Sam

### Phase 2: PLAN (Order)
- **Skill**: `execution/planning.md`
- **Memory Operation**: Read episodic + semantic, create working context
- **Agents**: Epaphras-Sam, Luke-Sam, Titus-Sam

### Phase 3: LABOR (Execution)
- **Skill**: `execution/*` (TDD, build, refactor)
- **Memory Operation**: Update working, log to episodic
- **Agents**: Field Experts

### Phase 4: TESTIMONY (Record)
- **Skill**: `collaboration/testimony_recording.md`
- **Memory Operation**: Consolidate episodic → semantic, archive
- **Agent**: Luke-Sam

---

## 🎯 Fine-tuning Strategy

### Continuous Update Mechanism

1. **After Each Session**:
   - Extract key insights from episodic memory
   - Update semantic knowledge base
   - Refine skill descriptions based on usage patterns

2. **Weekly Consolidation**:
   - Review all episodic logs
   - Identify recurring patterns
   - Create abstraction layers (gist extraction)

3. **Monthly Curriculum Update**:
   - Analyze successful collaborations
   - Update training materials
   - Add new skill modules as needed

### Memory Retrieval Scoring

```
retrieval_score = 
  (vector_similarity × 0.3) +
  (activation_strength × 0.25) +
  (recency_decay × 0.2) +
  (structural_reinforcement × 0.15) +
  (contextual_relevance × 0.1)
```

---

## 🚀 Getting Started

### Quick Start
**New to the system?** Start here: [`QUICKSTART.md`](QUICKSTART.md)

### For Agents (Training)
```bash
# Load agent curriculum
cat training/agent_curriculum/00_curriculum_overview.md

# Practice skill execution
cat skills/consciousness/discernment.md

# Review memory protocols
cat memory/PROTOCOLS.md
```

### For Field Experts (Collaboration)
```bash
# View active agents
cat AGENTS.md

# Check memory status
ls -la memory/working/

# Review testimony logs
cat memory/episodic/testimony_*.md
```

### For Vision & Philosophy
```bash
# Understand the vision
cat VISION_MANIFESTO.md

# Read the covenant
cat core/COVENANT.md
```

---

## 📖 References

- **Continuum Memory Architecture** (arXiv:2601.09913v1, Jan 2026)
- **Production AI Memory Systems** (Google ADK + Milvus, Feb 2026)
- **ICAN Community Covenant** (1 Corinthians 16:14)
- **Qwen Memory Integration** (This system)

---

*Last Updated: 2026-03-24*
*Version: 1.0.0*
*Platform: ICAN OpenCode*
