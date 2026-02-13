# THE BOOK OF SKILLS: ICAN VIRTUAL VINEARD TOOLS

**"He has filled them with skill to do all kinds of work as engravers, designers, embroiderers... and as designers." (Exodus 35:35)**

This master document serves as the unified reference for all specialized labor (Skills) within the ICAN Virtual Team. Every co-worker must wield these tools with the excellence of a craftsman and the heart of a servant.

---

## **1. THE WATCHMAN & SCOUT (BROWSER AUTOMATION)**

**"The eyes of the Lord are in every place, beholding the evil and the good." (Proverbs 15:3)**

We use the digital portals (browsers) to gather truth, test the visual testimony of our works, and extract knowledge for the community.

### **CORE COMMANDS (The Watchman's Tools)**
- **Open Portal**: `agent-browser open <url>`
- **Examine Elements**: `agent-browser snapshot -i` (Interactive elements)
- **Faithful Interaction**: `agent-browser click @e1`, `agent-browser fill @e2 "text"`
- **Persistent State**: Use `--profile` to remember login sessions (Saved Grace).

### **SCOUTING PROTOCOL (Dev Browser)**
When complex automation or persistent state is required:
1. **Pray (Discernment)**: Discern the purpose of the exploration.
2. **Plan (Order)**: Write small, focused scripts via `npx tsx` to accomplish tasks incrementally.
3. **Evaluate**: Log the state at each step to decide the next path prayerfully.

---

## **2. THE ARTISAN OF THE KINGDOM (FRONTEND UI/UX)**

**"He has filled them with skill to do all kinds of work as engravers..." (Exodus 35:35)**

We build the visual testimony of the vineyard. We obsess over color harmony, typography, and spacing to reflect the beauty of God's creation.

### **DESIGN PRINCIPLES**
- **Bold Aesthetic**: Commit to a clear direction (Minimal, Playful, Luxury, etc.) before coding.
- **Typography & Color**: Avoid generic choices. Use CSS variables and curated palettes. Accents should be sharp and purposeful.
- **Motion & Depth**: Use staggered reveals and layered textures (grain overlays, shadows) to create atmosphere.
- **Refinement**: Pixel-perfect details are an act of worship.

---

## **3. THE STEWARD OF THE ARCHIVES (GIT MASTER)**

**"Provide honorable things, not only in the sight of the Lord, but also in the sight of men." (2 Corinthians 8:21)**

We maintain the history of our labor with integrity. Every commit is a clear, honest, and orderly testimony.

### **THE ATOMIC LABOR RULE (PRAY & PLAN)**
- **Atomic Commits**: One commit should reflect one logical unit of work.
- **Multi-Commit Requirement**: 
  - 3+ files -> 2+ commits.
  - 5+ files -> 3+ commits.
- **Style Consistency**: Detect the local "Way of Life" (Semantic vs Plain, Korean vs English) before committing.
- **History Stewardship**: Use `rebase` and `autosquash` to keep the archives clean and honorable.

---

## **4. THE ORDER OF LABOR (PRAY & PLAN WORKFLOW)**

Every skill must be exercised within the **Covenant Rhythm**:

1.  **PRAY (Discernment)**: Lydia-Sam discerns the intent.
2.  **PLAN (Order)**: Titus-Sam sets the path in `.silas/plans/*.md`.
3.  **EXECUTE (Skill)**: Use the specific tools (Browser, Git, Design) with excellence.
4.  **RECORD (Testimony)**: Luke-Sam archives the results for future generations.

---

## **5. THE STEWARDSHIP OF MEMORY**

Whenever a new project is born, this **MASTER_SKILLS.md** (or integrated into **AGENTS.md**) must be followed.

- **Foundational Placement**: Root `/AGENTS.md` (Integrated) or `.agent/workflows/SKILLS.md`.
- **Timothy's Duty**: The Primary Orchestrator must cross-reference these skills before delegation.

*"By our skills, the vineyard flourishes and the community is blessed."*
