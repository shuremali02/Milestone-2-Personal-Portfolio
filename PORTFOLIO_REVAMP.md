# Portfolio Transformation Blueprint
> Syed Shurem Ali — Full-Stack Developer & AI Engineer
> Goal: compete for Full-Stack / Frontend / AI Engineer / Startup / Agency roles.
> Optimized for the 30-second recruiter scan.

---

## PHASE 1 — Portfolio Cleanup

### KEEP (7)

| Project | Reason | Priority |
|---|---|---|
| AI-Powered Todo App | Strongest project: AI + auth + audit trail + spec-driven process. Verifiable hackathon result. | P0 |
| Physical AI & Humanoid Robotics Book | RAG + i18n (Urdu) + personalization — rare, current, technical depth. | P0 |
| Room Matcher AI | Multi-agent orchestration with live trace visualization — exactly what AI Engineer roles screen for. | P0 |
| Crypto Market Conversational Agent | Real-time data + OpenAI Agents SDK + external API. Good AI/backend evidence. | P1 |
| SXN by Nash — E-Commerce Platform | Only full e-commerce build worth keeping; hackathon finale project. | P1 |
| Dynamic Resume Builder | Real utility, PDF generation, state management. Under-positioned. | P2 |
| Figma Design-to-Code Landing Page | Evidence of designer collaboration / pixel-perfect handoff — a *team* skill agencies screen for. | P2 |

### IMPROVE (all 7 keepers — every description gets rewritten in Phase 2)

### REMOVE (10)

| Project | Reason |
|---|---|
| Calculator.ts | Class assignment. Dictionary-definition description. Actively damages credibility. |
| ATM.ts | Same tier. Delete. |
| Blogpost | "This is My BlogPost-web " — 5 words, trailing space. Worst item on the site. |
| Green-Groups Landing Page | Description is "Fully responsive design" — duplicated with Brandbuzz. |
| Brandbuzz Landing Page | Same duplicate description. |
| NFT-Marketplace (OpenSea clone) | "Used Sass for the first time, fulfilling internship requirements" — self-labels as homework. |
| Watch-Hub | Third e-commerce frontend; SXN covers this category better. Redundant. |
| Travelling-Website | Generic assignment blog. No differentiation. |
| Shop-co Hackathon UI | Pure static UI; Figma design-to-code project covers this skill with a better story. |
| Simple Chatbot (Chainlit + Gemini) | "Simple" is in the title. Crypto Agent proves the same skills at a higher level. |

> Also remove commented-out Counter / Navbar / Hello-World entries from `data.ts` — dead weight in a public repo.
> **Delete the fake `testimonials` array entirely** (fabricated names + randomuser.me avatars in a public repo is an integrity risk).

**Result: 17 → 7 projects + 1 Elipse client card + (future) 1 Flutter app = 8–9 total.**

---

## PHASE 2 — Project Rewrites

### 1. AI-Powered Todo App → **"TaskPilot — AI-Native Task Manager"**

- **Summary:** A production-grade task manager where an AI agent is the primary interface — users create, update, and complete tasks in plain language.
- **Problem:** Task apps die from input friction — users abandon them because structured forms interrupt flow.
- **Solution:** A conversational agent layer over a full CRUD backend: "add grocery run for tomorrow" creates a scheduled task; every mutation is recorded in an audit trail; chatbot gated behind auth.
- **Architecture:** Next.js App Router UI → API routes → agent runtime (tool-calling) → database. Auth-scoped agent tools; audit log as event stream.
- **Tech Stack:** Next.js 14, TypeScript, OpenAI Agents SDK, SpecKit+ (spec-driven development), Claude Code CLI, Auth, Vercel.
- **Key Features:** NL task CRUD via chatbot · dashboard overview · full audit trail (create/complete/delete events) · profile management (email/password) · auth-gated AI.
- **Challenges Solved:** Mapping free-form language to safe, validated mutations; keeping agent actions auditable; shipping all 5 spec-driven phases before a hard hackathon deadline.
- **Business Value:** Demonstrates the AI-native product pattern (agent-as-interface) every 2026 SaaS is adopting.
- **Resume bullet:** *Built an AI-native task manager (Next.js, OpenAI Agents SDK) where a tool-calling agent performs authenticated CRUD with a full audit trail; completed all 5 phases of the GIAIC SpecKit+ Hackathon on deadline.*
- **Portfolio card:** *An AI agent is the UI: manage your tasks in plain English. Authenticated tool-calling, full audit trail, spec-driven build — all 5 hackathon phases shipped on deadline.*

### 2. Physical AI Book → **"Physical AI Textbook — RAG-Powered Learning Platform"**

- **Summary:** An interactive Docusaurus textbook on Physical AI & Humanoid Robotics with a RAG chatbot that answers questions grounded in the book's own content.
- **Problem:** Static technical textbooks can't answer questions, adapt to the reader, or serve non-English learners.
- **Solution:** Content-grounded RAG chatbot, per-user personalization for signed-in readers, and full Urdu translation for accessibility.
- **Architecture:** Docusaurus static content → embedding pipeline → vector retrieval → LLM answer synthesis with source grounding; auth layer for personalization.
- **Tech Stack:** Docusaurus, React, RAG pipeline, Auth, Vercel, SDD (SpecKit+).
- **Key Features:** RAG Q&A grounded in book chapters · Urdu i18n · personalized content per signed-in user · interactive learning features.
- **Challenges Solved:** Chunking long-form technical content for retrieval quality; grounding answers to avoid hallucination; bilingual content pipeline.
- **Business Value:** The exact pattern used by ed-tech and internal-docs products (docs + RAG assistant).
- **Resume bullet:** *Shipped a RAG-powered interactive textbook (Docusaurus + vector retrieval) with content-grounded Q&A, Urdu localization, and per-user personalization.*
- **Portfolio card:** *A textbook that answers back — RAG chatbot grounded in the book's chapters, Urdu translation, and personalized reading for signed-in learners.*

### 3. Room Matcher AI → **"Room Matcher — Multi-Agent Matching Engine"**

- **Summary:** A roommate-matching platform driven by orchestrated AI agents, with a live trace view that exposes each agent's reasoning in real time.
- **Problem:** Matching people requires weighing many soft constraints (budget, habits, location) — a single prompt can't do it reliably or explainably.
- **Solution:** Specialized agents (profile analysis, compatibility scoring, ranking) coordinated by an orchestrator; a live trace visualization makes decisions transparent to the user.
- **Architecture:** Next.js front-end → agent orchestration layer → per-agent tools → streamed trace events rendered live in the UI.
- **Tech Stack:** Next.js, TypeScript, Agentic AI (multi-agent orchestration), streaming, Vercel.
- **Key Features:** Multi-agent pipeline · live reasoning trace UI · compatibility scoring · built under hackathon constraints (Innovista Indus).
- **Challenges Solved:** Agent hand-off design; streaming intermediate reasoning to the browser; keeping orchestration debuggable.
- **Business Value:** Explainable-AI matching applies directly to recruiting, real estate, and marketplace products.
- **Resume bullet:** *Designed a multi-agent matching engine with live reasoning-trace visualization, orchestrating specialized agents for profile analysis and compatibility ranking.*
- **Portfolio card:** *Watch AI think: orchestrated agents score roommate compatibility while a live trace streams every decision to the screen.*

### 4. Crypto Chatbot → **"Crypto Market Intelligence Agent"**

- **Summary:** A conversational agent that answers live crypto-market questions — prices, market cap, BTC dominance — from real-time CoinGecko data.
- **Problem:** Market dashboards force users to hunt through charts for answers a sentence could give.
- **Solution:** An OpenAI Agents SDK agent with CoinGecko API tools, wrapped in a Streamlit chat UI.
- **Architecture:** Streamlit UI → agent loop → typed tool functions → CoinGecko REST API → summarized NL answers.
- **Tech Stack:** Python, OpenAI Agents SDK, CoinGecko API, Streamlit.
- **Key Features:** Real-time price/market-cap queries · BTC dominance · tool-calling with live external data · conversational summaries.
- **Challenges Solved:** Tool schema design for financial queries; handling rate limits and stale-data edge cases; keeping answers factual (numbers come from the API, not the model).
- **Business Value:** The "agent + live data" pattern behind every fintech AI assistant.
- **Resume bullet:** *Built a tool-calling market agent (OpenAI Agents SDK + CoinGecko) delivering real-time crypto insights conversationally — model reasons, API supplies the numbers.*
- **Portfolio card:** *Ask the market anything: a tool-calling agent pulls live CoinGecko data so answers are real numbers, never hallucinations.*

### 5. SXN Marketplace → **"SXN by Nash — E-Commerce Experience"**

- **Summary:** A complete e-commerce front-end for a perfume & watch brand: flash sales, wishlists, and countdown-driven offers.
- **Problem:** Luxury e-commerce needs urgency and curation mechanics, not just a product grid.
- **Solution:** Flash-sale system with live countdown timers, wishlist management, and a curated browsing flow.
- **Tech Stack:** Next.js, TypeScript, Tailwind CSS.
- **Key Features:** Flash sales with countdowns · wishlist · responsive product catalog · modern brand-led UI.
- **Challenges Solved:** Timer state across navigation; performant image-heavy catalog; conversion-focused layout under hackathon time pressure.
- **Business Value:** Conversion-mechanic e-commerce — the core ask of agency/client retail work.
- **Resume bullet:** *Developed a conversion-focused e-commerce platform (Next.js/Tailwind) with flash sales, live countdowns, and wishlist management.*
- **Portfolio card:** *Luxury retail with urgency built in — flash sales, live countdowns, and wishlists for a perfume & watch brand.*

### 6. Resume Builder → **"LiveCV — Real-Time Resume Builder with PDF Export"**

- **Summary:** Edit your resume in the browser and export a print-ready PDF — instant preview, no signup.
- **Problem:** Resume tools gate basic editing behind accounts and paywalls.
- **Solution:** Fully client-side editable resume with live preview and one-click PDF generation.
- **Tech Stack:** Next.js, React, TypeScript, PDF generation.
- **Key Features:** Inline editing · live preview · PDF export · zero-backend privacy (data never leaves the browser).
- **Challenges Solved:** Faithful HTML→PDF layout fidelity; editable-content state management.
- **Business Value:** Document-generation is a recurring client requirement (invoices, reports, contracts).
- **Resume bullet:** *Built a client-side resume builder with live editing and print-fidelity PDF export — no backend, no signup, data stays in the browser.*
- **Portfolio card:** *Type, preview, download — a zero-signup resume builder with print-perfect PDF export, fully client-side.*

### 7. Figma Landing Page → **"Design-to-Code: Pixel-Perfect Figma Implementation"**

- **Summary:** A Figma design translated to a pixel-accurate, accessible landing page — the designer-handoff workflow agencies run daily.
- **Problem:** Most devs "approximate" designs; agencies need engineers who ship exactly what the designer signed off.
- **Solution:** Systematic translation — spacing, type scale, and components matched against the Figma spec; built with accessible semantics.
- **Tech Stack:** TypeScript, HTML/CSS, ShadCN UI, Tailwind CSS.
- **Key Features:** 1:1 visual fidelity to Figma · accessible markup · responsive breakpoints matching design frames.
- **Challenges Solved:** Extracting a design system (tokens, spacing rhythm) from static frames; accessibility without deviating from the design.
- **Business Value:** Direct evidence of designer-developer collaboration — the #1 agency screening criterion.
- **Resume bullet:** *Delivered a pixel-perfect, accessible implementation of a Figma design (TypeScript, ShadCN UI), matching the spec across breakpoints.*
- **Portfolio card:** *Designers hand me Figma, I hand back the exact page — pixel-perfect, accessible, responsive.*

---

## PHASE 3 — Elipse Studio Positioning (NDA-safe)

**Rule: name the company only in Experience; describe the work, never the client.**

### NDA-safe project cards (add 1–2 to Projects grid, no live links needed)

**Card A — "Client Platform — Full-Stack Delivery (NDA)"**
> Production web platform for a client at Elipse Studio: Next.js + TypeScript front-end, MySQL data layer, deployed to a VPS behind an Nginx reverse proxy with NSSM-managed services. Owned features end-to-end from schema to release.
> Tags: `Client Work` `Next.js` `MySQL` `Nginx` `Production`
> *(No screenshot? Use an abstract architecture diagram as the card image — looks more senior than a blurred screenshot.)*

**Card B — "Android App — Flutter Production Build (NDA)"**
> Cross-platform mobile app built with Flutter/Dart at Elipse Studio, delivering a native-feeling Android experience integrated with a production API.
> Tags: `Client Work` `Flutter` `Dart` `Android`
> **This card fixes your biggest credibility gap: you claim Flutter everywhere but show zero mobile work.**

### Experience bullets (replace current achievements in `data.ts`)

1. *Ship production web and mobile features end-to-end — Next.js/TypeScript front-ends, MySQL schemas, and Flutter/Dart Android builds — for live client projects.*
2. *Own the deployment pipeline: configure Nginx reverse proxies on VPS servers, run Node services under NSSM, and provision Hostinger domains, subdomains, and MySQL databases for production clients.*
3. *Collaborate with designers and project leads to translate specs into releases on a regular delivery cycle, incorporating review feedback across the stack.*
4. *Integrate AI-powered features into client applications using agentic patterns (tool-calling, retrieval).*

> Bullet 3 is the **team-collaboration signal** agencies screen for — currently missing entirely.

### Deployment achievements strip (for Achievements section)

- Production deployments maintained on VPS (Nginx + NSSM) — zero-downtime service restarts
- Hostinger production hosting: custom domains, subdomains, provisioned MySQL databases for live clients
- End-to-end release ownership: schema → API → UI → server

### Case-study outline: see Phase 7 #3.

---

## PHASE 4 — Homepage Rewrite

### Hero

- **Headline (H1):** `Syed Shurem Ali` (keep the letter reveal)
- **Positioning line (replaces 5 rotating roles — keep max 3):**
  Rotating: `Full-Stack Developer` · `AI Engineer` · `Flutter Developer`
- **Subheadline (H2):**
  *I ship products end-to-end — web, mobile, and AI — from database schema to live server.*
- **Description:**
  *Full-Stack Developer at a software studio, building production apps with Next.js, TypeScript, and Flutter, and making them intelligent with agentic AI. I own the whole lifecycle: design handoff, MySQL data layer, and deployment on VPS infrastructure I configure myself.*
- **CTAs:** Primary: `View My Work ↓` (scroll to projects — recruiters want work before contact). Secondary: `Get in Touch`. Tertiary (text link): `Download CV`.
- **Availability badge:** `● Open to freelance & contract projects` (safer than "Available for work" while employed full-time).

### About

- **Intro:** *I'm a Full-Stack Developer & AI Engineer who ships complete products. At Elipse Studio I build client applications end-to-end — Next.js web platforms, Flutter Android apps, MySQL data layers — and deploy them on servers I configure myself (Nginx, VPS, NSSM). On the side, I build agentic AI systems: multi-agent orchestration, RAG pipelines, and tool-calling agents.*
- **Story:** *I started with front-end fundamentals through the GIAIC program, proved myself in six hackathons (completing all five phases of the SpecKit+ spec-driven hackathon on deadline), and turned that into a full-time engineering role. Now I'm deepening agentic AI through the Governor House Initiative while shipping production work daily.*
- **UVP:** *Most developers stop at `git push`. I take products from Figma file to live domain — front-end, mobile, database, and the server it all runs on.*

### Experience

Use the Phase 3 bullets. Fix date honesty: keep "May 2026 – Present", and change every "2.5+ years experience" label to **"2.5+ years building"** or "2.5+ yrs of code" (learning + professional combined, honestly framed).

### Contact

- **Heading:** `Let's Build Something Real`
- **Copy:** *Tell me what you're building — I reply within 24 hours. Whether it's a full product, an AI feature, or a deployment that needs to just work, I can take it from idea to live URL.*
- **Form button:** `Send Message →`

---

## PHASE 5 — Trust & Branding

### Remove (trust-reducers)

| Item | Where | Why |
|---|---|---|
| Fake testimonials array | `data.ts` | Fabricated people + stock avatars in a public repo = integrity risk. Delete data, not just hide. |
| Skill % numbers (React 90%, Nginx 74%) | `data.ts` / skills UI | Fake precision; universally mocked. Show grouped tags instead. |
| "14+ Technologies / 5+ Frameworks / 3+ AI/ML Tools" tiles | `auto scroll.tsx` | Counting your own icon list. Meaningless. |
| "2.5+ Years Experience" as professional experience | hero/about | Conflicts with May-2026 start date. Reframe as "years building". |
| 5 rotating job titles | hero | Five titles = no title. Keep 3. |
| Keyword-highlight spam (5 highlighted spans per paragraph) | hero/about | Highlight one phrase per paragraph. |
| "Simple", "for the first time", "fulfilling requirements" | project copy | Self-deprecating homework language. |

### Add (trust-builders)

**Achievements section** (replaces fake-number tiles):
- 🏆 Completed all 5 phases — GIAIC SpecKit+ Spec-Driven Hackathon (2025)
- 🤖 Built 4 production-pattern AI systems (RAG, multi-agent, tool-calling)
- 🚀 Production deployments running on self-configured VPS infrastructure
- 💼 Full-time engineer shipping client work at a software studio

**Certifications / Education:**
- Agentic AI Development — Governor House Initiative (ongoing)
- Diploma in Information Technology — SZABIST ZABTech, Hyderabad
- GIAIC — Web 3.0 & Agentic AI program

**Hackathons strip:** SpecKit+ (5/5 phases) · Innovista Indus · GIAIC Q2 hackathons — with links to repos as proof.

**Client work:** the two NDA cards from Phase 3.

**Testimonials:** section stays hidden until you have ONE real quote (ask your Elipse Studio lead — one sentence with their real name beats four fake CTOs).

---

## PHASE 6 — UI/UX Improvements

### Redesign

1. **Skills section** — kill progress bars. New pattern: category cards with tag chips.
   ```tsx
   // Grouped chips, no percentages
   <div className="glass rounded-2xl p-6">
     <h3 className="font-heading text-lg mb-3">AI Engineering</h3>
     <div className="flex flex-wrap gap-2">
       {["OpenAI Agents SDK", "RAG", "Multi-agent", "HuggingFace"].map(s =>
         <span key={s} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm">{s}</span>)}
     </div>
   </div>
   ```
2. **Stats tiles** — replace with the Achievements strip (Phase 5).
3. **Project cards** — add a one-line "outcome" field under the title (e.g., "5/5 hackathon phases · shipped on deadline") before the description.

### Remove (animation diet — hero especially)

- `animate-spin` blurred border around profile photo (cheapest-looking effect on the site)
- `animate-bounce` on the experience badge (use a static pill)
- Data-stream lines + reduce particles 20 → 8, or remove (aurora + grid floor already carry the hero)
- One of the two pulsing glow rings behind the photo (keep one)
- `hover:scale-110` on inline keyword spans in paragraphs (text should not wiggle)

**Rule: hero keeps exactly 3 motion ideas — letter reveal, typing roles, aurora/parallax. Everything else static.**

### Simplify

- Every section is a rounded-2xl bordered card → introduce rhythm: Achievements as a plain horizontal strip (no cards), About text on plain background.
- Tech-stack marquee: keep, but drop the 4 stat tiles under it.

### Layout hierarchy (homepage order)

`Hero → Featured Projects (top 3) → Achievements strip → Skills (chips) → Tech marquee → About preview → Contact CTA`
Projects move UP — recruiters scan for work first, skills second.

### Premium inspirations

- **brittanychiang.com** — restraint, typography-led, the gold standard
- **leerob.com** (Lee Robinson) — Next.js-native minimalism, writing-forward
- **rauno.me** — micro-interaction quality bar (what "one good effect" looks like)
- **dennissnellenberg.com** — premium agency motion (aspirational)

---

## PHASE 7 — Case Studies (`/case-studies/[slug]`)

### 1. TaskPilot (AI Todo App)

1. **Challenge:** Build an AI-native task manager through 5 strict spec-driven phases on a hackathon deadline.
2. **Research:** Compared chat-as-feature vs chat-as-interface; studied tool-calling safety patterns.
3. **Architecture:** Next.js App Router · agent runtime with typed tools · auth-scoped mutations · audit-log event stream. *(Include a diagram.)*
4. **Process:** SpecKit+ spec → plan → implement per phase; Claude Code CLI as pair programmer.
5. **Technical decisions:** Why every agent action writes to the audit trail; why chatbot is auth-gated; how NL maps to validated CRUD.
6. **Deployment:** Vercel, env-separated keys.
7. **Results:** 5/5 phases on deadline; live demo + public repo.
8. **Lessons:** Spec-first prevents agent-feature scope creep; audit trails make AI features trustworthy.

### 2. AgentraX *(⚠️ not found in portfolio data — confirm what this is; outline assumes your multi-agent orchestration work)*

1. **Challenge:** Coordinate multiple specialized agents on one goal, with transparent reasoning.
2. **Research:** Orchestrator vs swarm patterns; trace/observability approaches.
3. **Architecture:** Orchestrator → specialist agents → shared context → streamed trace events.
4. **Process:** Agent-by-agent development with isolated tool testing.
5. **Technical decisions:** Hand-off protocol; streaming traces to the UI; failure/retry handling per agent.
6. **Deployment:** Vercel / VPS.
7. **Results:** Working multi-agent pipeline with live trace visualization.
8. **Lessons:** Multi-agent systems live or die on observability.

### 3. Maryam & Zayn — Kids Learning Platform (Elipse Studio, LIVE)

> Real production project — `learning.maryamandzayn.com`. Publicly shareable (not NDA). This is the flagship credibility card.

1. **Challenge:** Build a gamified, bilingual (Urdu/English) EdTech platform for Pakistani children — engaging enough that kids return daily, simple enough for under-6s, and production-grade for real users.
2. **Research:** Studied gamification loops (streaks, XP, leagues) proven in language-learning apps; age-tiered content structure; guest-first onboarding to remove signup friction.
3. **Architecture:** Next.js front-end → API → MySQL (progress, XP, streaks, league standings); auth with guest mode; deployed on VPS/Hostinger infrastructure. *(Add architecture diagram.)*
4. **Development process:** Feature delivery on a regular cycle with the design lead; character-guided lesson system; six subjects (Urdu, English, Maths, Islamiat, GK, Science).
5. **Technical decisions:** Guest mode + "first lesson free" to maximize activation; XP/level/league schema design; daily-streak logic; badge/reward system.
6. **Deployment:** Live on a subdomain with provisioned MySQL DB; owned deployment end-to-end.
7. **Results:** In production serving real learners; 1200+ followers, 6 subjects live. *(Add DAU/retention/lessons-completed when available.)*
8. **Lessons:** Gamification is schema-deep, not decoration — streaks, XP, and leagues all live in the data model. Guest-first onboarding measurably lifts activation.

### 4. VPS Deployment / DevOps — **"From `git push` to Live Domain"** *(highest-differentiation content you can publish — most devs your level can't write this)*

1. **Challenge:** Serve Next.js + MySQL apps reliably on raw VPS infrastructure — no Vercel safety net.
2. **Research:** Nginx reverse-proxy patterns; Windows service supervision (NSSM) vs pm2/systemd.
3. **Architecture:** DNS → Nginx (SSL, reverse proxy) → Node app as NSSM service → MySQL. Subdomain-per-app layout.
4. **Process:** Repeatable deployment checklist; config templates.
5. **Technical decisions:** NSSM for auto-restart on crash/reboot; Nginx config for websockets/caching; Hostinger DB provisioning.
6. **Deployment:** The project IS deployment — document the actual nginx.conf patterns (sanitized).
7. **Results:** Multiple production apps served; survives reboots and crashes unattended.
8. **Lessons:** Owning the server teaches you what PaaS hides — and makes you the person teams trust with releases.

---

## PHASE 8 — Final Blueprint

### Navigation
`Work · Case Studies · About · Blog · Contact` (Work = projects; Experience lives inside About; Achievements inside Home/About — max 5 items.)

### Site structure

```
/            Hero → Featured Work (3) → Achievements strip → Skills (chips)
             → Tech marquee → About preview → Contact CTA
/portfolio   All 8-9 projects, filterable
/case-studies/[slug]   4 case studies (Phase 7)
/about       Story + Experience timeline + Education/Certifications
/blog        Keep — publish the VPS case study here too
/contact     Conversion copy + form
```

### Final project list (order matters — best first)

1. TaskPilot — AI-Native Task Manager ★
2. Room Matcher — Multi-Agent Matching Engine ★
3. Physical AI Textbook — RAG Learning Platform ★
4. Client Platform — Elipse Studio (NDA)
5. Flutter Android App — Elipse Studio (NDA)
6. Crypto Market Intelligence Agent
7. SXN by Nash — E-Commerce
8. LiveCV — Resume Builder
9. Design-to-Code — Figma Implementation

### Branding strategy

- **One line everywhere** (site title, LinkedIn headline, CV): *Full-Stack Developer & AI Engineer — web, mobile, and agentic AI, from schema to live server.*
- **Tone:** outcomes, not adjectives. Never "passionate", "innovative", "stunning". Always what shipped and what happened.
- **Proof over claims:** every claim on the site must be clickable to a repo, a live URL, or a case study.

### Hiring-manager score

| Stage | Score | Why |
|---|---|---|
| Current | 5.5/10 | Modern shell, student-tier contents, integrity risks |
| After Phases 1–2 (cleanup + rewrites) | 7/10 | Weakest-item problem solved |
| After Phases 3–5 (Elipse cards, trust fixes, honest metrics) | 8/10 | Real-world credibility, no red flags |
| After Phases 6–7 (UI diet + 4 case studies) | **8.5–9/10** | Top-decile junior/mid portfolio; competitive for all 5 target role types |

### 30-second recruiter scan (after transformation)

`0–5s` name + one clear title + "at a software studio" → *employed, focused*
`5–15s` three AI projects with outcome lines → *current skills, shipped work*
`15–25s` achievements strip: 5/5 hackathon, production VPS deployments → *verifiable*
`25–30s` NDA client cards → *real-world experience* → **contact**
