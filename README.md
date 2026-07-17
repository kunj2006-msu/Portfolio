# Dual-Profile Portfolio: Developer & Poet (Kavya-Kunj)

A premium, highly interactive dual-profile personal portfolio application showcasing a unique duality: a **Hacker-inspired Software Developer Profile** and an **Elegant, Classical Gujarati Poet Profile (Kavya-Kunj)**. The entry landing page lets visitors choose which side of the portfolio they would like to explore.

---

## 🚀 Key Features & Architecture

### 1. Unified Landing Selector
* A clean, modern landing page with a minimalist split-screen layout.
* Dynamic hover highlights inviting users to choose between two completely different creative worlds:
  * **The Programmer Profile:** Cyber-themed, monospace typography, neon accents.
  * **The Poet Profile:** Serif fonts, calligraphy themes, elegant gold detailing.

### 2. Developer Profile (Hacker / Kali Linux Theme)
* **Design Aesthetic:** Pure black backgrounds, neon-green `#00FF41` text, terminal prompt indicators, monospace fonts (`font-mono`), and scanline CRT overlays.
* **Particle Systems:** Customized green animated moving particles floating behind the viewport.
* **Dynamic Projects Page:**
  * Cards display interactive, multiplier-tinted thumbnails that fade to clear on hover with neon green drop-shadows.
  * Deep-routing pages (`/programmer/project/:id`) that display the project's parameters (problem statement, implementation details, tech stacks, and source codes) as custom terminal logs (e.g. `> cat problem_statement.txt`).
  * Supports stacked media grids with auto-playing, loop-muted video recordings (e.g. showcasing the Dhanvantari AI RAG pipeline).
  * Executable action triggers styled after script runs: `[ ./view_source.sh ]` and `[ ./launch_deployment.sh ]`.
* **CD Back Navigation:** A terminal-styled navigation back button `cd ../` that routes smoothly back to the home page's Projects grid section using active path hash scrolling.

### 3. Poet Profile (Kavya-Kunj)
* **Design Aesthetic:** Deep dark brown/black themes, champagne gold `#D4AF37` accents, and elegant serif Gujarati typography.
* **Particle Systems:** Soft golden floating dust particles.
* **Stand-Alone Achievements ("સિદ્ધિઓ"):**
  * Fully isolated standalone achievements index route (`/poet/siddhio`) with transparent styling so background particles flow smoothly.
  * Dynamic item page details (`/poet/work/:id`) that stack certificate and clipping scans vertically, formatting Gujarati gazals and critiques inside comfortable, calligraphy-style cards with a line height of `leading-[2.2]`.
* **Compositions & Favorites:**
  * Interactive categorization of self-written gazals and favorite poets (e.g., Mariz, Ahmad Faraz) with custom layouts and full poem views.

---

## 🛠️ Technology Stack

* **Core Framework:** React 19 & TypeScript
* **Routing Engine:** React Router (v6) with wildcard parent routing (`/poet/*`, `/programmer/*`) for nested sub-routes
* **Bundler & Build Tool:** Vite (v6)
* **Styling & Theme Engine:** Tailwind CSS & Vanilla CSS Variables
* **Animation Library:** Framer Motion (Framer Motion / Motion v11+)
* **Icons Library:** Lucide React
* **Contact Forms System:** Web3Forms integration with synchronous event-pooling form resetting

---

## 📁 Directory Structure

```
├── public/                 # Static assets (placeholders, local image resources)
├── src/
│   ├── components/         # Common UI components (ParticleBackground, ThemeProvider, etc.)
│   ├── data/               # Unified data structures & arrays
│   │   ├── poetryData.ts   # Compositions, favorite poets, and published works data
│   │   └── projectsData.ts # Detailed developer projects descriptions and media URLs
│   ├── pages/
│   │   ├── Landing/        # Dual-split selection portal
│   │   ├── PoetProfile/    # Kavya-Kunj Poet Profile views, lists, and dynamic subpages
│   │   └── ProgrammerProfile/ # Developer Profile views, neofetch modules, and terminal subpages
│   ├── App.tsx             # Root router configuration mapping wildcards
│   ├── index.css           # Global typography, color schemes, and design system variables
│   └── main.tsx            # Entry point mount
├── package.json            # Scripts and dependencies declarations
└── README.md               # Documentation guide
```

---

## ⚙️ Local Development Setup

### Prerequisites
* [Node.js](https://nodejs.org/) (v18+ recommended)
* npm or yarn package manager

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory (or use `.env.local`) and define your Web3Forms access token for contact form functionality:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY="your-web3forms-access-key-here"
   ```

4. **Launch the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` (or the terminal-provided port) to view the application locally.

5. **Build the production package:**
   ```bash
   npm run build
   ```
   This generates standard optimized minified bundles under the `dist/` directory.

---

## 📧 Form Submissions Setup

The contact forms in both profiles submit inputs directly to the registered Web3Forms API. Ensure the `VITE_WEB3FORMS_ACCESS_KEY` environment variable matches your verified access key from the [Web3Forms Dashboard](https://web3forms.com/) to process inquiries successfully.
