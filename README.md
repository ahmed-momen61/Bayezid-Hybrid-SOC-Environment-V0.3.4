# Bayezid Hybrid SOC Environment V0.3.4 (The Closed-Loop Adaptive Defense Update)

![Version](https://img.shields.io/badge/Version-3.4-red.svg)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)
![Prisma](https://img.shields.io/badge/ORM-Prisma-white.svg)
![AI-Powered](https://img.shields.io/badge/AI-Cognitive_Multi_Agent-orange.svg)
![WebSockets](https://img.shields.io/badge/RealTime-Socket.io-blue.svg)
![Vector-DB](https://img.shields.io/badge/Memory-pgvector-purple.svg)
![Encryption](https://img.shields.io/badge/Security-AES_256_CBC-yellow.svg)

**Bayezid V0.3.4 is a revolutionary Cognitive SOC Orchestrator that transcends traditional SOAR boundaries. It is a self-evolving security ecosystem that thinks, remembers, mitigates, and acts with sub-millisecond precision.**

By merging **Vector-Based Institutional Memory** with a **Multi-Agent AI Architecture**, Bayezid transforms the SOC from a reactive ticketing system into an autonomous digital guardian. It features a unique hybrid engine that balances elite Cloud Intelligence with robust Local LLM fallbacks, ensuring that defense never sleeps—even during network outages.

---

## Core Value Propositions (The Trinity Expansion)

Bayezid is engineered to solve the "Big Three" SOC challenges: Alert Fatigue, Vendor Lock-in, and Cognitive Overhead, while introducing state-of-the-art offensive capabilities, autonomous remediation, and the newly added **Trinity Expansion**.

* **Live Kinetic Filter (The Fast Shield):** A true live in-memory filter that acts as a first line of defense. It processes thousands of logs per millisecond to track IPs in RAM (stopping DDoS/Scanners), uses deep regex signatures (catching SQLi/XSS), and drops bloated payloads. It preserves AI compute costs by ensuring only genuine, complex threats are escalated to the cognitive engine.

* **The Alchemist Agent (Adaptive Exploit Mutation):** Radically transforms Red Team operations. The Alchemist doesn’t just generate static PoC code; it executes a live fuzzing loop directly on the target OS via \`smartExec\`. If blocked by an EDR, WAF, or OS execution policy, it ingests the real stderr/stdout, dynamically mutates the payload (Base64, chunking, lotl tactics), and re-fires until initial access is secured.

* **The Cognitive Mirage Agent (High-Interaction Deception):** Upgrades the Honeypot to a psychological trap. Rather than static deceptive files, it powers a live TCP daemon (port 2222). When a trapped attacker types commands, the Mirage Agent executes them locally but acts as a **Strategic Censor**—stripping any trace of Bayezid's source code from the output—and injects highly contextual, dynamically hallucinated 'Honeytokens' (like \`aws_s3_keys.yml.bak\`) tailored to the attacker's profiled intent.

* **Closed-Loop Auto-Remediation (Red-to-Blue Bridge):** Bridges offensive discovery with defensive mitigation. Upon detecting a vulnerability, the Blue Team autonomously classifies the threat, synthesizes executable mitigation code (e.g., Virtual Patches, WAF rules), and applies the patch directly to the system architecture.

* **Automated Regression Testing:** Post-remediation, the system automatically summons the Red Team to re-fire the exact mutated exploit payload against the patched endpoint, guaranteeing the mitigation is verified and mathematically sound.

* **Cognitive RBAC (AI Veto):** An intelligent AI gatekeeper that evaluates human decisions in real-time, blocking risky remediation approvals from junior analysts and dynamically adjusting user trust scores.

* **Smart Deception & Honeypot (Shadow Routing):** Instead of merely dropping malicious traffic, the system dynamically generates DNAT rules to silently route attackers into isolated environments.

* **Post-Breach Forensic RCA:** Acts as a digital forensic investigator, autonomously analyzing logs post-mitigation to determine the root cause, potential impact, and strategic long-term fixes without human intervention.

* **Real-time Compliance Mapping:** Automatically correlates every applied virtual patch to international regulatory standards, appending GDPR, PCI-DSS, NIST, and ISO 27001 compliance notes directly to ITSM tickets.

* **Institutional Memory (Semantic Deduplication):** Using \`pgvector\`, Bayezid "memorizes" every incident. If an attack pattern repeats—even with a different IP or timestamp—the system recognizes the semantic similarity and applies historical playbooks instantly.

* **Agentic Shared Memory (Cognitive Continuity):** Agents continuously read a "Mental Ledger" of the team's successes and failures. Later-stage agents adapt their strategies dynamically based on the specific footprints left by early-stage agents.

* **Zero-Code Dynamic Playbooks & Execution:** True vendor neutrality. The AI synthesizes execution code (e.g., \`cURL\` for Palo Alto, LotL commands for Linux/Windows) on-the-fly, adapting to the specific infrastructure context without relying on static scripts.

* **Asynchronous Smart Execution (\`smartExec\`):** An intelligent execution engine that spawns detached background processes for heavy operations (like full port scans) and facilitates the live execution capabilities of the Alchemist and Mirage agents.

* **Hybrid Resilience (Auto-Failover):** The system prioritizes **Google Gemini 2.5 Flash** but features an instantaneous, transparent failover to **Local AI (Qwen 2.5 / Ollama)** if the cloud experiences latency or quota limits.

---

## Architectural Pillars

The system is built on a modular, event-driven architecture designed for high-throughput security telemetry, elite offensive simulations, and adaptive self-healing.

### 1. The Blue Team Engine (Cognitive Defense)

* **Stage 1 Triage (Kinetic Filter):** Drops non-malicious noise and enforces live rate-limiting before AI invocation.

* **Ingestion & Vectorization:** Escalated logs are normalized and compared against the Vector DB for semantic matches.

* **Artifact Extraction (Detective Agent):** Performs deep RAG against a RAM-cached **MITRE ATT&CK Enterprise Database**.

* **Strategic Orchestration (Commander Agent):** Formulates the threat report, calculates confidence scores, and determines the escalation path.

### 2. The Red Team Swarm (Autonomous Offensive APT)

When toggled to **RED MODE**, Bayezid activates a proactive, fully autonomous offensive squad:

* **The Scout (Reconnaissance):** Masters OpSec, formulates sophisticated WAF-bypass commands, and passes deep target context.

* **The Alchemist (Initial Access & Fuzzing):** Operates a live mutation loop. Executes shell commands, interprets OS errors or WAF blocks, and dynamically obfuscates payloads until a foothold is achieved.

* **The Phantom (Privilege Escalation):** An OS internals ghost. Capable of analyzing compromised contexts to deploy container breakouts and LotL tactics.

* **The Chameleon (Stealth & Anti-Forensics):** Utilizes the *Shared Memory* ledger to execute flawless, zero-code log wiping and track-clearing maneuvers.

* **The Overlord (Commander):** The supreme orchestrator. Manages the mental ledger and triggers evasive actions.

### 3. The Red-to-Blue Bridge (Adaptive Cyber Defense)

* **Smart Classification & Virtual Patching:** The AI classifies fixes and instantly generates "Virtual Patches" to stop bleeding immediately.

* **Live Execution & Verification:** Upon human approval (safeguarded by AI Veto), the AI executes the remediation bash commands. It then summons the Alchemist to re-fire the exact mutated exploit, evaluating the output to mark the threat as `VERIFIED_SAFE`.

### 4. Memory, Intelligence & Deception Services

* **Cognitive Mirage (TCP Daemon):** A live port 2222 honeypot interface. Analyzes attacker intent, censors Bayezid source code from execution outputs, and injects realistic honeytokens.

* **Embedding Engine:** Converts security logs into 768-dimensional vectors.

* **Global Intel Enrichment:** Real-time OSINT queries from **AlienVault OTX**, **MISP**, and **OpenCTI**.

---

## Service Breakdown (The Micro-Service Logic)

| Service | Responsibility | Technology |
| --- | --- | --- |
| **`server.js`** | The Central Nervous System (Orchestrator, Bridge endpoints, Honeypot TCP Daemon) | Node.js / Socket.io / Express / Net |
| **`aiService.js`** | Multi-Agent Logic, Smart Exec, Alchemist Fuzzing, Mirage Censorship & RCA | Gemini / Qwen / RAG / Child Process |
| **`kineticFilter.js`** | Stage 1 Live Triage, In-Memory Rate Limiting, Deep Regex Inspection | JavaScript / Node.js Memory |
| **`memoryService.js`** | Vector Storage & Semantic Similarity Search | pgvector / Embeddings |
| **`playbookService.js`** | Zero-Code Synthesis & API Execution | AI Synthesis / Shell Exec |
| **`cryptoService.js`** | Payload Encryption & Key Management | Node Crypto (AES-256) |
| **`tuningService.js`** | Natural Language Configuration (NLP) | Dynamic Config Engine |

---

## Getting Started

### Prerequisites

* **Node.js:** v20.x or higher.

* **Database:** PostgreSQL with the `pgvector` extension (Supabase highly recommended).

* **Local AI (Optional):** Ollama installed for the local fallback engine.

### Quick Start

```bash
# Clone the repository
git clone https://github.com/ahmed-momen61/bayezid-soar-engine.git

# Install core dependencies
npm install

# Push the schema to your Vector-enabled DB
npx prisma db push
npx prisma generate

# Fire up the engine
node server.js
```

---

## API Documentation (Testing the Cognitive Capabilities)

You can test the core AI capabilities via these bridge endpoints using Postman, cURL, or raw TCP connections:

**1. Report Live Threat (Initiate Kinetic Filter -> Overlord)**

* `POST /api/v1/bridge/report-vuln`
* Body: `{ "vulnName": "SQL Injection", "severity": "CRITICAL", "detectedBy": "Phantom Agent", "targetIp": "10.0.0.99", "evidence": "admin' UNION SELECT password FROM users--" }`
* *(Spam this endpoint to trigger the Live Kinetic Filter's DDoS protection).*

**2. Cognitive Risk Analysis & Virtual Patch Synthesis**

* `POST /api/v1/bridge/analyze`
* Body: `{ "vulnId": "<UUID>", "autonomyMode": "Sniper" }`

**3. AI Veto (Cognitive RBAC Approval)**

* `POST /api/v1/bridge/approve-fix`
* Body: `{ "vulnId": "<UUID>", "userId": "1" }`

**4. Shadow Routing (Deception & Honeypot Isolation)**

* `POST /api/v1/bridge/isolate`
* Body: `{ "vulnId": "<UUID>", "attackerIp": "198.51.100.22" }`

**5. Post-Breach Root Cause Analysis (Forensic RCA)**

* `POST /api/v1/bridge/rca`
* Body: `{ "vulnId": "<UUID>" }`

**6. Live Alchemist Exploit Generation**

* `POST /api/v1/red/alchemist`
* Body: `{ "targetIp": "127.0.0.1", "vulnContext": "Remote Code Execution (RCE)", "maxMutations": 3 }`

**7. High-Interaction Honeypot (TCP TCP Daemon)**

* Execute from an attacker terminal: `telnet <SERVER_IP> 2222`
* *(Run commands like `ls` or `dir` to experience the Cognitive Mirage Agent's strategic censorship and honeytoken injection).*

---

## Environment Variables (.env)

```env
PORT=3000
DATABASE_URL="postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>"
DIRECT_URL="postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>"

AI_MODE=CLOUD
GEMINI_API_KEY="AIzaSy_YOUR_GEMINI_API_KEY_HERE"
GOOGLE_API_KEY="AIzaSy_YOUR_GOOGLE_API_KEY_HERE"
LOCAL_MODEL_NAME="qwen2.5-coder:7b"
OLLAMA_BASE_URL="http://localhost:11434"

TELEGRAM_BOT_TOKEN="YOUR_TELEGRAM_BOT_TOKEN_HERE"
TELEGRAM_CHAT_ID="YOUR_TELEGRAM_CHAT_ID_HERE"

ENCRYPTION_KEY="your_64_character_hex_string_here"
ENCRYPTION_IV="your_32_character_hex_string_here"
OTX_API_KEY="your_alienvault_otx_api_key_here"
OPENCTI_URL="https://your-opencti-instance-url"
OPENCTI_TOKEN="your_opencti_token_here"

SLA_TIMEOUT_MINUTES=5
```

---

## **NOTE:** You can check the Test showcases and comprehensive analytical reports for both the Blue and Red sides in the provided documentation bundle (RAR file).

**Bayezid Fighter** — **Yildirim Logic — The Strike Before the Signal**

Developed by: **Ahmed Mo'men Ahmed Ali** | 2026.
