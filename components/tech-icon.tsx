import {
  type LucideIcon,
  Code2,
  Database,
  Blocks,
  Cloud,
  Bot,
  Workflow,
  Server,
  Globe,
  Box,
  Cpu,
  Terminal,
  FileCode,
  Braces,
  PackageOpen,
} from "lucide-react"

// Map of technology names to Lucide icons
const techIconMap: Record<string, LucideIcon> = {
  // Backend
  "ASP.NET Core": Server,
  "Web API": Workflow,
  MVC: Code2,
  "C#": Braces,
  Rust: Terminal,

  // Frontend
  Angular: Box,
  React: Box,
  Blazor: Globe,
  HTML5: FileCode,
  CSS3: FileCode,
  JavaScript: Code2,

  // Databases
  "SQL Server": Database,
  PostgreSQL: Database,
  MySQL: Database,

  // Blockchain
  Avalanche: Blocks,
  NEAR: Blocks,
  Solana: Blocks,
  Algorand: Blocks,

  // DevOps
  Docker: PackageOpen,
  "Azure DevOps": Cloud,
  Git: Terminal,
  GitHub: Terminal,
  Jira: Workflow,
  "Azure Functions": Cloud,

  // AI Tools
  Copilot: Bot,
  Cursor: Bot,
  Claude: Bot,
  ChatGPT: Bot,
  DeepSeek: Bot,
  n8n: Workflow,
  V0: Bot,

  // Default
  default: Cpu,
}

interface TechIconProps {
  name: string
  className?: string
}

export function TechIcon({ name, className = "h-5 w-5" }: TechIconProps) {
  const Icon = techIconMap[name] || techIconMap.default
  return <Icon className={className} aria-hidden="true" />
}
