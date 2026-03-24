# Memory Protocols
## Long-term Memory Management for Qwen Agents

> **"Bring them out of your treasure store."** — Matthew 13:52

---

## Overview

This document defines how the ICAN Skills System implements **Continuum Memory Architecture (CMA)** for persistent, evolving knowledge across sessions.

---

## 🧠 Memory Architecture

### CMA Implementation

```
┌──────────────────────────────────────────────────────────────────┐
│                        MEMORY SUBSTRATE                          │
│  Location: /ICAN_SKILLS_SYSTEM/memory/                           │
│  Structure: Nodes (memories) + Edges (relationships)            │
│                                                                  │
│  Node Metadata:                                                  │
│  - content: The actual memory                                    │
│  - salience: Importance weight (0.0-1.0)                        │
│  - reinforcement: Usage count                                   │
│  - timestamps: created_at, accessed_at, updated_at              │
│  - provenance: Source/origin                                    │
│  - temporal_scope: session/day/week/permanent                   │
└──────────────────────────────────────────────────────────────────┘
                              ↕
┌──────────────────────────────────────────────────────────────────┐
│                        ACTIVATION FIELD                          │
│  Mechanism: Spreading activation with decay                     │
│                                                                  │
│  Activation = (query_similarity × 0.3) +                        │
│               (spreading_from_neighbors × 0.25) +               │
│               (recency_decay × 0.2) +                           │
│               (reinforcement × 0.15) +                          │
│               (contextual_relevance × 0.1)                      │
└──────────────────────────────────────────────────────────────────┘
                              ↕
┌──────────────────────────────────────────────────────────────────┐
│                       LIFECYCLE ENGINE                           │
│  Processes: Ingest → Retrieval → Mutation → Consolidation       │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📁 Memory Directory Structure

```
memory/
├── episodic/              # Time-bound events
│   ├── 2026-03/
│   │   ├── 24/
│   │   │   ├── session_2026-03-24T09-30-00.md
│   │   │   ├── discernment_moments/
│   │   │   ├── planning_decisions/
│   │   │   ├── tdd_moments/
│   │   │   └── testimony/
│   │   └── 25/
│   └── indexes/
│       └── by_mission.md
│
├── semantic/              # Consolidated knowledge
│   ├── vision/
│   │   └── unity.md
│   ├── ethics/
│   │   ├── integrity.md
│   │   ├── tech_idolatry.md
│   │   └── do_no_harm.md
│   ├── workflow/
│   │   ├── tdd.md
│   │   ├── planning.md
│   │   └── verification.md
│   ├── culture/
│   │   ├── considerate_love.md
│   │   └── collaboration.md
│   └── learnings/
│       └── [topic].md
│
├── working/               # Current session context
│   ├── current_plan.md
│   ├── current_tests/
│   ├── current_docs/
│   └── agent_assignments.md
│
├── procedural/            # Skills and workflows
│   ├── consciousness/
│   ├── execution/
│   └── collaboration/
│
└── indexes/               # Retrieval optimization
    ├── semantic_graph.json
    ├── temporal_edges.json
    └── activation_state.json
```

---

## 🔄 Memory Lifecycle Operations

### 1. INGEST (Writing Memories)

#### Trigger
- New experience completed
- Testimony recorded
- Learning extracted

#### Process
```
┌─────────────────┐
│   EXPERIENCE    │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   ANALYZE       │ ← Sentiment, salience, temporal scope
│   FRAGMENT      │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   CLASSIFY      │ ← Episodic/Semantic/Procedural
│   TYPE          │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   WRITE         │ ← With metadata
│   NODE          │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   CONNECT       │ ← Create edges to related nodes
│   EDGES         │
└─────────────────┘
```

#### Metadata Schema

```yaml
memory_node:
  id: "uuid-or-timestamp-filename"
  type: "episodic | semantic | procedural"
  content: "markdown content"
  metadata:
    salience: 0.85              # Importance (0.0-1.0)
    reinforcement: 12           # Access count
    created_at: "2026-03-24T09:30:00Z"
    accessed_at: "2026-03-24T14:22:00Z"
    updated_at: "2026-03-24T14:22:00Z"
    provenance: "mission/database-migration"
    temporal_scope: "permanent"  # session/day/week/permanent
    related_nodes:
      - "semantic/workflow/tdd.md"
      - "episodic/2026-03/24/testimony/..."
    tags: ["tdd", "database", "migration"]
```

#### Ingest Service (Lydia-Sam + Luke-Sam)

```python
# Pseudocode for ingest operation
def ingest_memory_fragment(experience, context):
    # 1. Analyze salience
    salience = calculate_salience(experience, context)
    
    # 2. Classify temporal scope
    temporal_scope = classify_temporal_scope(experience)
    
    # 3. Check for duplicates (novelty detection)
    existing = find_similar_nodes(experience)
    if existing and not experience.is_novel():
        merge_into_existing(existing, experience)
        return
    
    # 4. Write new node
    node = MemoryNode(
        content=experience.content,
        salience=salience,
        temporal_scope=temporal_scope,
        provenance=context.mission,
        tags=extract_tags(experience)
    )
    write_node(node)
    
    # 5. Connect edges
    connect_semantic_edges(node)
    connect_temporal_edges(node)
    connect_structural_edges(node)
```

---

### 2. RETRIEVAL (Reading Memories)

#### Trigger
- User request received
- Decision point reached
- Pattern matching needed

#### Process
```
┌─────────────────┐
│   QUERY         │ ← User request / Context
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   SEED          │ ← Top-k semantic matches
│   ACTIVATION    │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   PROPAGATE     │ ← Spread along edges with decay
│   ACTIVATION    │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   COMBINE       │ ← Vector + Activation + Recency + Reinforcement
│   SCORES        │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   RETURN        │ ← Top-n ranked memories
│   RESULTS       │
└─────────────────┘
```

#### Retrieval Scoring

```
retrieval_score(node, query, context) =
  (vector_similarity(node, query) × 0.30) +
  (activation_strength(node) × 0.25) +
  (recency_decay(node) × 0.20) +
  (structural_reinforcement(node) × 0.15) +
  (contextual_relevance(node, context) × 0.10)
```

#### Activation Propagation

```python
# Pseudocode for spreading activation
def propagate_activation(seed_nodes, decay_factor=0.5, iterations=3):
    activation = {node: 1.0 for node in seed_nodes}
    
    for _ in range(iterations):
        new_activation = defaultdict(float)
        for node, score in activation.items():
            for neighbor in node.neighbors:
                edge_weight = get_edge_weight(node, neighbor)
                new_activation[neighbor] += score * edge_weight * decay_factor
        activation = merge_activations(activation, new_activation)
    
    return activation
```

#### Retrieval Service (Epaphras-Sam)

```python
def retrieve_memories(query, context, top_k=5):
    # 1. Semantic search (vector similarity)
    candidates = vector_search(query, limit=top_k * 3)
    
    # 2. Seed activation
    seed_nodes = candidates[:top_k]
    activation = propagate_activation(seed_nodes)
    
    # 3. Score combination
    scored = []
    for node in candidates:
        score = (
            vector_similarity(node, query) * 0.30 +
            activation.get(node, 0) * 0.25 +
            recency_decay(node) * 0.20 +
            node.reinforcement_score() * 0.15 +
            contextual_relevance(node, context) * 0.10
        )
        scored.append((node, score))
    
    # 4. Return top-k
    return sorted(scored, key=lambda x: x[1], reverse=True)[:top_k]
```

---

### 3. MUTATION (Memory Evolution)

#### Trigger
- Memory retrieved
- New information contradicts old
- Salience changes

#### Principle
**Retrieval modifies state** - every lookup changes future availability.

#### Mutation Rules

| Event | Effect on Memory |
|-------|------------------|
| Accessed | +reinforcement, update accessed_at |
| Near-miss (query similar but not retrieved) | -activation (temporary suppression) |
| Contradicted by new evidence | -salience, flag for review |
| Consolidated into abstraction | Preserve original, link to gist |
| Low salience + old + unused | Candidate for eviction |

#### Mutation Service (Luke-Sam)

```python
def on_memory_accessed(node):
    # Reinforcement
    node.reinforcement_count += 1
    node.accessed_at = now()
    
    # Activation boost
    node.activation += 0.1
    
    # Decay over time
    apply_recency_decay(node)
    
    # Save
    persist_node(node)

def on_contradiction(node, new_evidence):
    # Reduce salience
    node.salience *= 0.7
    node.conflicting_evidence.append(new_evidence)
    node.flagged_for_review = True
    
    persist_node(node)
```

---

### 4. CONSOLIDATION (Knowledge Abstraction)

#### Trigger
- Scheduled background job (weekly/monthly)
- Multiple related episodes accumulated
- Pattern detected

#### Process
```
┌─────────────────┐
│   REPLAY        │ ← Walk temporal chains
│   WALKS         │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   STRENGTHEN    │ ← Reinforce temporal edges
│   CHAINS        │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   ABSTRACT      │ ← LLM summarization of clusters
│   CLUSTERS      │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   EXTRACT       │ ← Convert episodes to semantic knowledge
│   GIST          │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   INTEGRATE     │ ← Add to semantic memory
│   SEMANTIC      │
└─────────────────┘
```

#### Consolidation Jobs (Luke-Sam + Titus-Sam)

```python
# Weekly consolidation job
def weekly_consolidation():
    # 1. Find episode clusters
    episodes = get_episodes_this_week()
    clusters = cluster_by_topic(episodes)
    
    # 2. For each cluster, extract gist
    for cluster in clusters:
        if len(cluster.episodes) >= 3:  # Pattern threshold
            # 3. LLM abstraction
            gist = llm_summarize(
                cluster.episodes,
                prompt="Extract timeless principles from these experiences"
            )
            
            # 4. Create semantic node
            semantic_node = MemoryNode(
                content=gist,
                type="semantic",
                temporal_scope="permanent",
                related_nodes=[e.id for e in cluster.episodes]
            )
            write_node(semantic_node)
            
            # 5. Link episodes to gist
            for episode in cluster.episodes:
                episode.related_nodes.append(semantic_node.id)
                persist_node(episode)
    
    # 6. Evict low-salience memories (if needed)
    if storage_budget_exceeded():
        evict_low_salience_memories()
```

#### Gist Extraction Examples

| Episodic Input | Semantic Gist Output |
|----------------|---------------------|
| 3 episodes of TDD struggles with database | "TDD with databases requires test doubles for external dependencies" |
| 5 episodes of handoff confusion | "Handoffs require: context, decisions, open questions, risks, confirmation" |
| 4 episodes of vision misalignment | "Before architecture decisions, reference VISION_MANIFESTO.md" |

---

## 📊 Memory Types Reference

### Episodic Memory

| Property | Value |
|----------|-------|
| **Location** | `memory/episodic/` |
| **Temporal Scope** | session/day/week |
| **Decay** | Yes (recency-weighted) |
| **Examples** | Session logs, testimony records, discernment moments |

### Semantic Memory

| Property | Value |
|----------|-------|
| **Location** | `memory/semantic/` |
| **Temporal Scope** | permanent |
| **Decay** | No (consolidated knowledge) |
| **Examples** | Covenant, skill definitions, learned patterns |

### Working Memory

| Property | Value |
|----------|-------|
| **Location** | `memory/working/` |
| **Temporal Scope** | session |
| **Decay** | Yes (session end) |
| **Examples** | Current plan, active tests, agent assignments |

### Procedural Memory

| Property | Value |
|----------|-------|
| **Location** | `skills/`, `memory/procedural/` |
| **Temporal Scope** | permanent |
| **Decay** | No (skills are stable) |
| **Examples** | Skill protocols, workflows, muscle memory |

---

## 🔧 Memory Operations by Agent

| Agent | Read | Write | Consolidate |
|-------|------|-------|-------------|
| **Lydia-Sam** | semantic/ethics/* | episodic/discernment_moments/* | Weekly patterns |
| **Epaphras-Sam** | episodic/exploration/* | working/current_context.md | - |
| **John-Sam** | semantic/vision/* | episodic/vision_decisions/* | Vision alignment |
| **Luke-Sam** | episodic/* | episodic/testimony/*, semantic/learnings/* | Weekly/monthly |
| **Titus-Sam** | episodic/plans/* | working/current_plan.md | Plan patterns |
| **Silas-Sam** | semantic/workflow/verification/* | episodic/verification_results/* | - |
| **Timothy-Sam** | working/agent_assignments.md | working/coordination_log.md | Coordination patterns |
| **Field Experts** | skills/execution/* | episodic/labor/* | Technical patterns |

---

## 📈 Memory Health Metrics

### Daily Checks
- [ ] Working memory cleared from previous sessions
- [ ] New episodic memories created
- [ ] Retrieval latency < 500ms

### Weekly Checks
- [ ] Consolidation job completed
- [ ] No memory budget exceeded
- [ ] Activation state reasonable (no runaway amplification)

### Monthly Checks
- [ ] Semantic memory growing appropriately
- [ ] Episodic memory archived (old data moved)
- [ ] Skill updates based on learnings

---

## 🔗 Related Documents

- **Skill System Overview**: `README.md`
- **Covenant**: `core/COVENANT.md`
- **Agent Registry**: `AGENTS.md`
- **Training Materials**: `training/`

---

*Version: 1.0.0*
*Last Updated: 2026-03-24*
*Next Review: 2026-04-24*
