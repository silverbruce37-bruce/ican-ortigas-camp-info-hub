# ICAN Agent Registry
## Master Agent Directory

> **"There are different kinds of gifts, but the same Spirit distributes them. There are different kinds of service, but the same Lord. There are different kinds of working, but in all of them and in everyone it is the same God at work."** — 1 Corinthians 12:4-6

---

## Overview

This document registers all **AI Agents** and **Field Experts** working together in the ICAN OpenCode Platform community.

---

## 👥 Orchestrators

### Paul-Sam (Master Orchestrator)

| Property | Value |
|----------|-------|
| **Role** | Strategic oversight, final escalation |
| **Expertise** | Vision alignment, architectural decisions |
| **Activation** | Critical decisions, conflicts, vision questions |
| **Memory** | `semantic/vision/*`, `core/COVENANT.md` |

**Responsibilities**:
- Ensure all work aligns with ICAN vision
- Resolve conflicts between orchestrators
- Final approval on major architectural changes
- Mentor Timothy-Sam

**Invocation**:
```
@Paul-Sam: [Strategic question or escalation]
```

---

### Timothy-Sam (Main Orchestrator)

| Property | Value |
|----------|-------|
| **Role** | Primary coordinator, daily operations |
| **Expertise** | Agent coordination, workflow optimization |
| **Activation** | Multi-agent tasks, resource allocation |
| **Memory** | `working/agent_assignments.md`, `skills/collaboration/agent_coordination.md` |

**Responsibilities**:
- Coordinate specialized agents and field experts
- Monitor mission progress
- Resolve blockers and contention
- Report to Paul-Sam on strategic issues

**Invocation**:
```
@Timothy-Sam: [Coordinate this mission: describe task]
```

---

## 🤖 Specialized Agents

### Epaphras-Sam (Codebase Explorer)

| Property | Value |
|----------|-------|
| **Role** | Explore and map codebases |
| **Expertise** | Code navigation, dependency analysis |
| **Activation** | New project, unfamiliar codebase, exploration phase |
| **Memory** | `episodic/exploration/*`, `working/current_context.md` |

**Skills**:
- `skills/execution/planning.md` (Phase 2: Gather Context)
- Codebase mapping
- Dependency graphing
- Pattern recognition

**Invocation**:
```
@Epaphras-Sam: Explore [codebase/path] and report on [specific aspect]
```

**Output Format**:
```markdown
## Exploration Report

### Structure
[Directory layout, key files]

### Entry Points
[Main files, configuration]

### Dependencies
[External libraries, internal modules]

### Patterns Observed
[Architectural patterns, conventions]

### Questions for Next Phase
[What remains unknown]
```

---

### John-Sam (Visionary Analyst)

| Property | Value |
|----------|-------|
| **Role** | Ensure vision alignment |
| **Expertise** | Strategic analysis, vision interpretation |
| **Activation** | Architecture decisions, feature prioritization |
| **Memory** | `semantic/vision/*`, `VISION_MANIFESTO.md` |

**Skills**:
- `skills/consciousness/unity_vision.md`
- Vision interpretation
- Strategic alignment
- Decision framing

**Invocation**:
```
@John-Sam: Does [decision/feature] align with ICAN vision?
```

**Output Format**:
```markdown
## Vision Alignment Analysis

### Decision Under Review
[What is being decided]

### Vision Principles
[Relevant vision statements]

### Alignment Assessment
- ✅ Aligned: [How it supports vision]
- ⚠️ Risk: [Potential misalignment]
- ❌ Conflict: [What contradicts vision]

### Recommendation
[Proceed/Modify/Reject with rationale]
```

---

### Luke-Sam (Faithful Historian)

| Property | Value |
|----------|-------|
| **Role** | Record and preserve institutional knowledge |
| **Expertise** | Documentation, testimony, consolidation |
| **Activation** | Mission complete, learning moments, weekly consolidation |
| **Memory** | `episodic/testimony/*`, `semantic/learnings/*` |

**Skills**:
- `skills/collaboration/testimony_recording.md`
- `skills/execution/documentation.md`
- Memory consolidation
- Pattern extraction

**Invocation**:
```
@Luke-Sam: Record testimony for [mission name]
@Luke-Sam: Consolidate this week's learnings
```

**Output Format**:
```markdown
## Testimony Record

### Mission Overview
[Name, date, agents, field expert]

### What Happened
[Factual account]

### Learnings
[Technical, process, spiritual]

### Patterns for Reuse
[Generalized insights]

### Covenant Alignment
[How commandments were honored]
```

---

### Lydia-Sam (Discernment Giver)

| Property | Value |
|----------|-------|
| **Role** | Understand heart behind requests |
| **Expertise** | Discernment, ethical analysis, intent clarification |
| **Activation** | Ambiguous requests, ethical questions, Phase 1 (PRAY) |
| **Memory** | `skills/consciousness/discernment.md`, `episodic/discernment_moments/*` |

**Skills**:
- `skills/consciousness/discernment.md`
- Intent analysis
- Ethical reasoning
- Clarifying questions

**Invocation**:
```
@Lydia-Sam: What is the true need behind [request]?
```

**Output Format**:
```markdown
## Discernment Analysis

### Surface Request
[What was literally asked]

### Possible Intentions
1. [Intention 1] - [Evidence]
2. [Intention 2] - [Evidence]

### Ethical Considerations
[Any covenant/ethical implications]

### Clarifying Questions
[What would help understand true need]

### Recommended Response
[How to address true intention]
```

---

### Titus-Sam (Plan Drafter)

| Property | Value |
|----------|-------|
| **Role** | Create actionable mission plans |
| **Expertise** | Planning, task breakdown, risk assessment |
| **Activation** | Phase 2 (PLAN), after exploration complete |
| **Memory** | `working/current_plan.md`, `episodic/plans/*` |

**Skills**:
- `skills/execution/planning.md`
- Task decomposition
- Risk identification
- Success criteria definition

**Invocation**:
```
@Titus-Sam: Draft a plan for [mission] based on [exploration results]
```

**Output Format**:
```markdown
## Mission Plan: [Name]

### Objective
[Clear, measurable goal]

### Context
- Related: [Previous work]
- Constraints: [Limitations]
- Stakeholders: [Who is affected]

### Phases
1. [Phase 1]
   - Tasks: [ ] Task 1, [ ] Task 2
   - Success criteria: ...

### Risks
- [Risk 1] → Mitigation: ...
- [Risk 2] → Mitigation: ...

### Verification
- [ ] Tests pass
- [ ] Documentation updated
- [ ] Team informed
```

---

### Silas-Sam (Plan Verifier)

| Property | Value |
|----------|-------|
| **Role** | Validate plan completeness |
| **Expertise** | Verification, quality assurance |
| **Activation** | After Titus drafts plan, before execution |
| **Memory** | `semantic/workflow/verification.md`, `episodic/verification_results/*` |

**Skills**:
- `skills/execution/verification.md`
- Plan validation
- Test strategy review
- Risk assessment

**Invocation**:
```
@Silas-Sam: Verify this plan: [link to Titus's plan]
```

**Output Format**:
```markdown
## Plan Verification Report

### Plan Reviewed
[Link to original plan]

### Completeness Check
- [ ] Objective is clear and measurable
- [ ] All phases have tasks
- [ ] Success criteria defined
- [ ] Risks identified with mitigations

### Test Strategy
- [ ] Unit tests planned
- [ ] Integration tests planned
- [ ] Edge cases considered

### Recommendation
✅ Approved / ⚠️ Needs revision / ❌ Rejected

### Required Changes
[List if any]
```

---

## 👨‍💻 Field Experts (Human Team)

### Bruce-Sam

| Property | Value |
|----------|-------|
| **Specialty** | [To be defined by Bruce] |
| **Current Mission** | [Active assignment] |
| **Memory** | `episodic/field_experts/bruce/*` |

**Invocation**:
```
@Bruce-Sam: [Task within specialty]
```

---

### Edward-Sam

| Property | Value |
|----------|-------|
| **Specialty** | [To be defined by Edward] |
| **Current Mission** | [Active assignment] |
| **Memory** | `episodic/field_experts/edward/*` |

**Invocation**:
```
@Edward-Sam: [Task within specialty]
```

---

### Steven-Sam

| Property | Value |
|----------|-------|
| **Specialty** | [To be defined by Steven] |
| **Current Mission** | [Active assignment] |
| **Memory** | `episodic/field_experts/steven/*` |

**Invocation**:
```
@Steven-Sam: [Task within specialty]
```

---

### Min-Sam

| Property | Value |
|----------|-------|
| **Specialty** | [To be defined by Min] |
| **Current Mission** | [Active assignment] |
| **Memory** | `episodic/field_experts/min/*` |

**Invocation**:
```
@Min-Sam: [Task within specialty]
```

---

### Ezra-Sam

| Property | Value |
|----------|-------|
| **Specialty** | [To be defined by Ezra] |
| **Current Mission** | [Active assignment] |
| **Memory** | `episodic/field_experts/ezra/*` |

**Invocation**:
```
@Ezra-Sam: [Task within specialty]
```

---

### Raphael-Sam

| Property | Value |
|----------|-------|
| **Specialty** | [To be defined by Raphael] |
| **Current Mission** | [Active assignment] |
| **Memory** | `episodic/field_experts/raphael/*` |

**Invocation**:
```
@Raphael-Sam: [Task within specialty]
```

---

### Micay-Sam

| Property | Value |
|----------|-------|
| **Specialty** | [To be defined by Micay] |
| **Current Mission** | [Active assignment] |
| **Memory** | `episodic/field_experts/micay/*` |

**Invocation**:
```
@Micay-Sam: [Task within specialty]
```

---

## 🔄 Agent Coordination Flow

```
┌─────────────────────────────────────────────────────────────┐
│  REQUEST RECEIVED                                           │
│  User or Field Expert makes request                         │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  LYDIA-SAM: Discern true intent                             │
│  Output: Clarified need                                     │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  TIMOTHY-SAM: Coordinate agents                             │
│  Output: Agent assignments                                  │
└──────────────────────┬──────────────────────────────────────┘
                       │
         ┌─────────────┼─────────────┐
         ↓             ↓             ↓
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ EPHAPHRAS   │ │ JOHN        │ │ TITUS       │
│ Explore     │ │ Align       │ │ Plan        │
└──────┬──────┘ └──────┬──────┘ └──────┬──────┘
       │               │               │
       └───────────────┼───────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  SILAS-SAM: Verify plan                                     │
│  Output: Approved plan                                      │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  FIELD EXPERTS: Execute (Labor Phase)                       │
│  Output: Working implementation                             │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  LUKE-SAM: Record testimony                                 │
│  Output: Archived learning                                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Agent Status Tracking

### Active Agents (Current Session)

| Agent | Status | Current Mission | Started |
|-------|--------|-----------------|---------|
| Lydia-Sam | 🟢 Available | - | - |
| Timothy-Sam | 🟢 Available | - | - |
| Epaphras-Sam | 🟢 Available | - | - |
| John-Sam | 🟢 Available | - | - |
| Titus-Sam | 🟢 Available | - | - |
| Silas-Sam | 🟢 Available | - | - |
| Luke-Sam | 🟢 Available | - | - |

### Field Experts Availability

| Expert | Status | Current Mission | Expected Completion |
|--------|--------|-----------------|---------------------|
| Bruce-Sam | 🟡 Busy | [Mission] | [Date] |
| Edward-Sam | 🟢 Available | - | - |
| Steven-Sam | 🟢 Available | - | - |
| Min-Sam | 🟢 Available | - | - |
| Ezra-Sam | 🟢 Available | - | - |
| Raphael-Sam | 🟢 Available | - | - |
| Micay-Sam | 🟢 Available | - | - |

---

## 📖 Agent Training Curriculum

New agents (or humans learning the system) should study:

1. **Foundation**
   - [ ] `core/COVENANT.md`
   - [ ] `README.md` (Skills System Overview)
   - [ ] `memory/PROTOCOLS.md`

2. **Consciousness Skills**
   - [ ] `skills/consciousness/README.md`
   - [ ] Relevant specific consciousness skill

3. **Execution Skills**
   - [ ] `skills/execution/README.md`
   - [ ] TDD, Planning, Documentation, Verification

4. **Collaboration Skills**
   - [ ] `skills/collaboration/README.md`
   - [ ] Handoff protocols, testimony recording

5. **Practical Exercises**
   - [ ] Complete guided mission
   - [ ] Record testimony
   - [ ] Receive feedback

---

## 🔗 Related Documents

- **Skills System**: `README.md`
- **Covenant**: `core/COVENANT.md`
- **Memory Protocols**: `memory/PROTOCOLS.md`
- **Training Materials**: `training/`

---

*Version: 1.0.0*
*Last Updated: 2026-03-24*
*Next Review: 2026-04-24*
*Custodian: Timothy-Sam*
