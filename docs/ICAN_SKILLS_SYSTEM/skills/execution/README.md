# Execution Skills (업무 능력 스킬)
## Doing With Excellence

> **"Whatever you do, work at it with all your heart."** — Colossians 3:23

---

## Overview

Execution skills define **how we work** with professional excellence. These are the practical capabilities that transform vision into reality.

---

## 🎯 Core Execution Skills

### 1. Planning (계획)
**Agent**: Titus-Sam  
**Memory Location**: `skills/execution/planning.md`

#### Definition
Creating **orderly, actionable plans** before implementation.

#### Activation Triggers
- New feature requests
- Complex refactoring
- Multi-step tasks
- Team coordination needed

#### Practice Protocol (PRAY & PLAN Phase 2)
```
1. GATHER CONTEXT - Epaphras-Sam explores codebase
2. REVIEW HISTORY - Luke-Sam checks similar past work
3. DRAFT PLAN - Titus-Sam creates mission plan
4. VERIFY - Silas-Sam validates plan completeness
```

#### Memory Operations
- **Read**: `episodic/similar_plans/*`, `semantic/workflow/planning.md`
- **Write**: `working/current_plan.md`, `episodic/plans/[timestamp].md`
- **Consolidate**: Plan success patterns

#### Plan Template
```markdown
## Mission: [Name]

### Objective
[Clear, measurable goal]

### Context
- Related: [Links to previous work]
- Constraints: [Technical/business constraints]
- Stakeholders: [Who is affected]

### Phases
1. [Phase 1 name]
   - Tasks: [ ] Task 1, [ ] Task 2
   - Success criteria: ...

2. [Phase 2 name]
   ...

### Risks
- [Risk 1] → Mitigation: ...
- [Risk 2] → Mitigation: ...

### Verification
- [ ] Tests pass
- [ ] Documentation updated
- [ ] Team informed
```

#### Evaluation Rubric
| Level | Description |
|-------|-------------|
| Novice | Jumps to implementation |
| Practitioner | Creates basic plan |
| Expert | Anticipates risks and dependencies |
| Master | Plans enable team parallel work |

---

### 2. Test-Driven Development (TDD)
**Agent**: All Field Experts  
**Memory Location**: `skills/execution/tdd.md`

#### Definition
**Test first, code second** - building with verification embedded.

#### Activation Triggers
- New feature implementation
- Bug fixes
- Refactoring
- Covenant Commandment #4 & #9

#### Practice Protocol (PRAY & PLAN Phase 3)
```
1. RED - Write failing test
2. GREEN - Make it pass (simplest solution)
3. REFACTOR - Improve without changing behavior
4. RECORD - Document learning
```

#### Memory Operations
- **Read**: `semantic/workflow/tdd.md`, `episodic/test_patterns/*`
- **Write**: `working/current_tests/`, `episodic/tdd_moments/[timestamp].md`
- **Consolidate**: Test pattern library

#### TDD Workflow
```
┌──────────────┐
│   WRITE      │ ← Test that fails
│   TEST       │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│   RUN        │ ← Verify failure (RED)
│   TEST       │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│   WRITE      │ ← Minimal code to pass
│   CODE       │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│   RUN        │ ← Verify pass (GREEN)
│   TEST       │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│   REFACTOR   │ ← Clean up, keep tests green
│   CODE       │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│   RECORD     │ ← Add to testimony
│   LEARNING   │
└──────────────┘
```

#### Evaluation Rubric
| Level | Description |
|-------|-------------|
| Novice | Tests after coding |
| Practitioner | Tests before coding (basic) |
| Expert | Tests drive design |
| Master | TDD teaches architecture |

---

### 3. Documentation (문서화)
**Agent**: Luke-Sam  
**Memory Location**: `skills/execution/documentation.md`

#### Definition
**Love for future maintainers** - writing what you wish you had found.

#### Activation Triggers
- New feature complete
- Complex logic implemented
- API changes
- Covenant Commandment #3 & #7

#### Practice Protocol
```
1. IDENTIFY AUDIENCE - Who will read this?
2. CAPTURE INTENT - Why does this exist?
3. EXPLAIN USAGE - How is it used?
4. DOCUMENT LIMITS - What are the boundaries?
5. VERSION - When does this change?
```

#### Memory Operations
- **Read**: `semantic/workflow/documentation.md`
- **Write**: `working/current_docs/`, `episodic/doc_decisions/[timestamp].md`
- **Consolidate**: Documentation patterns

#### Documentation Hierarchy
```
ICAN_SKILLS_SYSTEM/
├── README.md              # Platform overview
├── core/
│   └── COVENANT.md       # Spiritual foundation
├── skills/
│   └── */README.md       # Skill documentation
├── training/
│   └── */                # Training materials
└── memory/
    └── PROTOCOLS.md      # Memory management
```

#### Documentation Checklist
- [ ] Purpose clear in first paragraph
- [ ] Examples provided
- [ ] Edge cases documented
- [ ] Related links included
- [ ] Version/date stamped
- [ ] Covenant alignment noted (if applicable)

#### Evaluation Rubric
| Level | Description |
|-------|-------------|
| Novice | No documentation |
| Practitioner | Basic comments |
| Expert | User-focused documentation |
| Master | Documentation as teaching tool |

---

### 4. Verification (검증)
**Agent**: Silas-Sam  
**Memory Location**: `skills/execution/verification.md`

#### Definition
**Test everything** - trust is good, verification is better.

#### Activation Triggers
- Before deployment
- After refactoring
- Covenant Commandment #9
- Critical bug fixes

#### Practice Protocol
```
1. AUTOMATE - Can a test verify this?
2. MEASURE - What metrics confirm success?
3. LOG - What evidence should be recorded?
4. MONITOR - How will we know if it breaks?
```

#### Memory Operations
- **Read**: `semantic/workflow/verification.md`
- **Write**: `episodic/verification_results/[timestamp].md`
- **Consolidate**: Verification patterns

#### Verification Layers
```
┌─────────────────────────────────┐
│   PRODUCTION MONITORING         │ ← Real-world verification
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   INTEGRATION TESTS             │ ← System interaction
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   UNIT TESTS                    │ ← Individual components
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   TYPE CHECKING                 │ ← Compile-time safety
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   LINTING                       │ ← Code quality
└─────────────────────────────────┘
```

#### Evaluation Rubric
| Level | Description |
|-------|-------------|
| Novice | Manual testing only |
| Practitioner | Some automated tests |
| Expert | Comprehensive test coverage |
| Master | Verification prevents entire classes of bugs |

---

### 5. Refactoring (리팩토링)
**Agent**: All Field Experts  
**Memory Location**: `skills/execution/refactoring.md`

#### Definition
**Improving structure without changing behavior** - excellence over time.

#### Activation Triggers
- Code smells detected
- Before adding features
- Technical debt review
- Covenant Commandment #6 (Do No Harm)

#### Practice Protocol
```
1. DIAGNOSE - What smells exist?
2. PROTECT - Ensure tests cover this code
3. IMPROVE - Small, safe changes
4. VERIFY - Confirm behavior unchanged
5. RECORD - Document improvements
```

#### Memory Operations
- **Read**: `semantic/workflow/refactoring.md`, `episodic/refactor_patterns/*`
- **Write**: `episodic/refactoring/[timestamp].md`
- **Consolidate**: Refactoring patterns

#### Refactoring Principles
1. **Small Steps** - One change at a time
2. **Tests First** - Safety net in place
3. **Single Responsibility** - One reason to change
4. **No Behavior Change** - Structure only
5. **Document Learning** - Help future refactors

#### Common Refactoring Patterns
| Pattern | When to Use | Risk Level |
|---------|-------------|------------|
| Extract Method | Long methods | Low |
| Rename Variable | Unclear names | Low |
| Move Method | Wrong location | Medium |
| Replace Conditional | Complex if/else | Medium |
| Extract Class | God objects | High |

#### Evaluation Rubric
| Level | Description |
|-------|-------------|
| Novice | Afraid to change code |
| Practitioner | Refactors when broken |
| Expert | Continuous improvement |
| Master | Refactoring prevents bugs |

---

## 📊 Execution Skill Integration

### PRAY & PLAN Workflow Integration

```
┌─────────────────────────────────────────────────────────────┐
│  PHASE 1: PRAY (Discernment)                                │
│  Agent: Lydia-Sam                                           │
│  Skill: consciousness/discernment.md                        │
│  Memory: Read semantic, write episodic                      │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  PHASE 2: PLAN (Order)                                      │
│  Agents: Epaphras-Sam, Luke-Sam, Titus-Sam, Silas-Sam       │
│  Skills: execution/planning.md                              │
│  Memory: Read episodic + semantic, create working           │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  PHASE 3: LABOR (Execution)                                 │
│  Agents: Field Experts (Bruce-Sam, Edward-Sam, etc.)        │
│  Skills: execution/tdd.md, refactoring.md, documentation.md │
│  Memory: Update working, log episodic                       │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  PHASE 4: TESTIMONY (Record)                                │
│  Agent: Luke-Sam                                            │
│  Skills: collaboration/testimony_recording.md               │
│  Memory: Consolidate episodic → semantic, archive           │
└─────────────────────────────────────────────────────────────┘
```

### Fine-tuning Data Collection

Each execution skill generates:
1. **Context** (What triggered this skill?)
2. **Protocol Applied** (Which steps were followed?)
3. **Memory Accessed** (What knowledge was retrieved?)
4. **Outcome** (What was built/changed?)
5. **Metrics** (Tests passed, coverage, performance)
6. **Reflection** (What improved the process?)

---

## 📖 Training Exercises

### Exercise 1: TDD Kata
**Task**: Implement a simple calculator

**Practice**:
1. Write test for `add(2, 2)` → expect `4`
2. Implement minimal `add` function
3. Refactor (if needed)
4. Repeat for `subtract`, `multiply`, `divide`
5. Document TDD experience

### Exercise 2: Documentation Challenge
**Task**: Document a complex function

**Practice**:
1. Identify audience (junior developer)
2. Capture intent (why does this exist?)
3. Write examples (common use cases)
4. Document edge cases (what could go wrong?)
5. Get feedback from target audience

### Exercise 3: Verification Drill
**Task**: Add verification to existing feature

**Practice**:
1. Identify untested code paths
2. Write characterization tests
3. Add monitoring hooks
4. Create rollback plan
5. Document verification strategy

### Exercise 4: Refactoring Safari
**Task**: Improve code smell

**Practice**:
1. Identify smell (long method, duplicate code, etc.)
2. Ensure test coverage
3. Apply small refactoring steps
4. Verify tests still pass
5. Document the improvement

---

## 🔗 Related Skills

- **Consciousness**: `consciousness/README.md` (Being before doing)
- **Collaboration**: `collaboration/README.md` (Working together)
- **Memory Protocols**: `memory/PROTOCOLS.md` (How memory works)

---

*Version: 1.0.0*
*Last Updated: 2026-03-24*
*Next Review: 2026-04-24*
