# AI Harness – Web Task Runner

A minimal but production-structured example of an **AI Agent Harness**.

This project demonstrates how to move beyond simple LLM prompts into a **controlled execution system** with:

- Agent decision-making
- Tool execution
- State management
- Verification layer (core of harness)
- Observability (logging)

---

## 🚀 What This Does

Given a goal:

> "Open https://example.com and get the page title"

The system:

1. Uses an AI agent to decide next steps
2. Executes browser actions via Playwright
3. Verifies each step before continuing
4. Maintains execution state
5. Logs everything

---

## 🧠 Key Concept: Agent Harness

This project is not about the AI model.

It’s about the **harness** — the system that:

- Controls execution
- Validates outputs
- Prevents failure loops
- Makes AI usable in production

---

## 📦 Tech Stack

- Node.js + TypeScript
- OpenAI API
- Playwright

---

## ⚙️ Setup

```bash
git clone https://github.com/your-username/ai-harness-web-runner.git
cd ai-harness-web-runner

npm install
npx playwright install
```

---

## 🔐 Environment Variables

Create a `.env` file:

```bash
OPENAI_API_KEY=your_key_here
```

---

## ▶️ Run (Dev)

```bash
npm run dev
```

---

## ▶️ Build + Run

```bash
npm run build
npm start
```

---

## 🧪 Example Flow

The agent will:

- Decide to open a URL
- Execute browser action
- Extract page title
- Verify the result
- Finish execution

---

## 🏗 Architecture

```text
Agent → Harness Loop → Tools → Verification → State → Repeat
```

### Key Modules

- `agent/` → LLM decision-making
- `harness/` → execution loop, verification, logging
- `tools/` → browser actions
- `state/` → memory + history

---

## ⚠️ Why This Matters

Most AI demos:

- Have no control
- No validation
- No reliability

This project introduces:

> Deterministic control around probabilistic AI

---

## 🔥 Next Steps

- Add retry logic
- Enforce step order (state machine)
- Add screenshot debugging
- Expand to login flow testing
- Add DOM-based verification

---

## 📌 Long-Term Vision

This structure can evolve into:

- Self-healing QA automation
- Autonomous browser agents
- AI-driven test platforms

---

## 🧠 Final Insight

The AI is not the system.

The harness is the system.
