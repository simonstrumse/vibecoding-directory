// Tool data with all the vibecoding tools
export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  logo: string;
}

export const TOOLS: Tool[] = [
  {
    id: "v0",
    name: "v0.dev",
    description: "Generate production-ready UI components with AI",
    url: "https://v0.dev/",
    category: "UI Generation",
    logo: "/logos/v0.svg"
  },
  {
    id: "firebase-studio",
    name: "Firebase Studio",
    description: "Build AI-powered apps with Google's no-code platform",
    url: "https://firebase.studio/",
    category: "Full-Stack",
    logo: "/logos/firebase.svg"
  },
  {
    id: "lovable",
    name: "Lovable",
    description: "Turn ideas into fully functioning web apps in seconds",
    url: "https://lovable.dev/",
    category: "Full-Stack",
    logo: "/logos/lovable.svg"
  },
  {
    id: "databutton",
    name: "Databutton",
    description: "Build and share data apps with Python and AI",
    url: "https://databutton.com/",
    category: "Data",
    logo: "/logos/databutton.svg"
  },
  {
    id: "tempo",
    name: "Tempo.new",
    description: "Build React apps 10x faster with AI",
    url: "https://tempo.new/",
    category: "UI Generation",
    logo: "/logos/tempo.svg"
  },
  {
    id: "bolt",
    name: "Bolt.new",
    description: "Create, run and deploy web apps instantly",
    url: "https://bolt.new/",
    category: "Full-Stack",
    logo: "/logos/bolt.svg"
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-first code editor designed for pair programming with GPT-4",
    url: "https://cursor.sh/",
    category: "Code Editor",
    logo: "/logos/cursor.svg"
  },
  {
    id: "windsurf",
    name: "Windsurf",
    description: "Transform Figma designs into code with AI",
    url: "https://www.windsurf.io/",
    category: "Design to Code",
    logo: "/logos/windsurf.svg"
  },
  {
    id: "lazy-ai",
    name: "Lazy AI",
    description: "Build reliable business apps with prompts",
    url: "https://lazy.ai/",
    category: "Business",
    logo: "/logos/lazy.svg"
  },
  {
    id: "cody",
    name: "Cody",
    description: "AI coding assistant by Sourcegraph for large codebases",
    url: "https://sourcegraph.com/cody",
    category: "Code Assistant",
    logo: "/logos/cody.svg"
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster",
    url: "https://github.com/features/copilot",
    category: "Code Assistant",
    logo: "/logos/github-copilot.svg"
  },
  {
    id: "codeium",
    name: "Codeium",
    description: "Free AI coding assistant with advanced code completion",
    url: "https://codeium.com/",
    category: "Code Assistant",
    logo: "/logos/codeium.svg"
  },
  {
    id: "replit",
    name: "Replit",
    description: "AI-powered coding platform to build and deploy apps",
    url: "https://replit.com/",
    category: "Development Platform",
    logo: "/logos/replit.svg"
  },
  {
    id: "akkio",
    name: "Akkio",
    description: "Build and deploy AI models without coding",
    url: "https://www.akkio.com/",
    category: "AI Development",
    logo: "/logos/akkio.svg"
  },
  {
    id: "trickle-ai",
    name: "Trickle AI",
    description: "Build stunning websites, AI apps, and forms with ease",
    url: "https://trickle.so/",
    category: "Web Development",
    logo: "/logos/trickle.svg"
  },
  {
    id: "softgen",
    name: "Softgen",
    description: "Build full-stack web apps from natural language",
    url: "https://softgen.cc/",
    category: "Full-Stack",
    logo: "/logos/softgen.svg"
  },
  {
    id: "heyboss",
    name: "HeyBoss",
    description: "Build apps & sites in minutes with conversational AI",
    url: "https://heyboss.xyz/",
    category: "Web Development",
    logo: "/logos/heyboss.svg"
  },
  {
    id: "creatr",
    name: "Creatr",
    description: "Create and deploy web apps and landing pages in seconds",
    url: "https://www.creatr.app/",
    category: "Web Development",
    logo: "/logos/creatr.svg"
  },
  {
    id: "rork",
    name: "Rork",
    description: "Build any mobile app, fast",
    url: "https://rork.ai/",
    category: "Mobile Development",
    logo: "/logos/rork.svg"
  },
  {
    id: "buildfire",
    name: "BuildFire AI",
    description: "Create mobile apps with AI in a fraction of the time",
    url: "https://buildfire.com/",
    category: "Mobile Development",
    logo: "/logos/buildfire.svg"
  }
];

// Get unique categories from tools
export const CATEGORIES = Array.from(new Set(TOOLS.map(tool => tool.category)));