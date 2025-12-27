"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin, Linkedin, Github, Briefcase, GraduationCap, Code2 } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { TimelineExperience } from "@/components/timeline-experience"
import { ProjectCard } from "@/components/project-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { TechIcon } from "@/components/tech-icon"
import Link from "next/link"

export default function Home() {
  const skills = {
    backend: ["ASP.NET Core", "Web API", "MVC", "C#", "Rust"],
    frontend: ["Angular", "React", "Blazor", "HTML5", "CSS3", "JavaScript"],
    databases: ["SQL Server", "PostgreSQL", "MySQL"],
    blockchain: ["Avalanche", "NEAR", "Solana", "Algorand"],
    devops: ["Docker", "Azure DevOps", "Git", "GitHub", "Jira", "Azure Functions"],
    ai: ["Copilot", "Cursor", "Claude", "ChatGPT", "DeepSeek", "n8n", "V0"],
  }

  const projects = [
    {
      title: "C# Corner Events Platform",
      description:
        "Developed and enhanced event creation, management, and user registration features using ASP.NET Core.",
      tech: ["ASP.NET Core", "C#", "SQL Server", "Event Management"],
      impact: "Enhanced developer community engagement",
    },
    {
      title: "EZFastMedicalCard",
      description: "Built a healthcare platform with third-party API integrations, used by 4+ teams.",
      tech: [".NET Core MVC", "SQL Server", "REST APIs", "Healthcare"],
      impact: "Used by 4+ teams",
    },
    {
      title: "MAPay Credentialing",
      description: "Implemented a healthcare blockchain portal using modern web technologies.",
      tech: [".NET Core Web API", "Blazor Server", "PostgreSQL", "Blockchain"],
      impact: "Healthcare blockchain solution",
    },
    {
      title: "MPAYZ Web Wallet",
      description: "Migrated blockchain integration from Algorand to Avalanche.",
      tech: ["Django", "PostgreSQL", "Avalanche", "Algorand", "Web3"],
      impact: "Cross-chain migration",
    },
    {
      title: "C2M – AT&T Devices",
      description: "Developed and enhanced the Manage Template Module with Angular and .NET Core APIs.",
      tech: ["Angular", ".NET Core", "Figma", "Enterprise"],
      impact: "AT&T enterprise solution",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative transition-colors duration-300">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-sm transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight hover:text-primary transition-colors">
              Punar Dutt Rajput
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              {/* Theme Toggle Button */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium mb-4">
                  Available for opportunities
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
                Punar Dutt Rajput
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-semibold">Full Stack .NET Core Developer</p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Building scalable enterprise applications with 2+ years of experience in ASP.NET Core, Angular, React,
                and blockchain technologies.
              </p>
              <div className="flex flex-wrap gap-4 pt-6">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="shadow-sm hover:shadow-md transition-shadow bg-transparent"
                  asChild
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-accent hover:text-primary transition-colors"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/punarrajput"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-accent hover:text-primary transition-colors"
                  asChild
                >
                  <a
                    href="https://github.com/punarrajput"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border shadow-xl flex items-center justify-center transition-colors duration-300">
                <Code2 className="h-32 w-32 text-muted-foreground/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Full Stack .NET Core Developer with over 2+ years of experience in designing, developing, and
                maintaining scalable web applications using ASP.NET Core MVC, Web API, Angular, and React.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Strong expertise in SQL Server, PostgreSQL, and MySQL, with a proven ability to optimize performance and
                ensure high code quality. Experienced in blockchain-based applications, CI/CD pipelines, and Agile
                development practices.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <a
                        href="mailto:punarduttrajput@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        punarduttrajput@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Phone</p>
                      <a
                        href="tel:+917905194020"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        +91 790-519-4020
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Location</p>
                      <p className="text-muted-foreground text-sm">Kanpur, Uttar Pradesh</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Work Experience</h2>
          </div>
          <TimelineExperience />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Skills & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-6 text-primary">Backend</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.backend.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 group cursor-default">
                      <TechIcon
                        name={skill}
                        className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-6 text-primary">Frontend</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.frontend.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 group cursor-default">
                      <TechIcon
                        name={skill}
                        className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-6 text-primary">Databases</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.databases.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 group cursor-default">
                      <TechIcon
                        name={skill}
                        className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-6 text-primary">Blockchain</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.blockchain.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 group cursor-default">
                      <TechIcon
                        name={skill}
                        className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-6 text-primary">DevOps & Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.devops.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 group cursor-default">
                      <TechIcon
                        name={skill}
                        className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-6 text-primary">AI Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.ai.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 group cursor-default">
                      <TechIcon
                        name={skill}
                        className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            A selection of enterprise applications and blockchain solutions I've built
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Badge variant="outline" className="font-medium">
                    2023
                  </Badge>
                  <h3 className="font-semibold text-xl">Master of Computer Application (MCA)</h3>
                  <p className="text-muted-foreground font-medium">Chhatrapati Shahu Ji Maharaj University</p>
                  <p className="text-sm text-muted-foreground">Kanpur, Uttar Pradesh</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Badge variant="outline" className="font-medium">
                    2021
                  </Badge>
                  <h3 className="font-semibold text-xl">Bachelor of Computer Application (BCA)</h3>
                  <p className="text-muted-foreground font-medium">Chhatrapati Shahu Ji Maharaj University</p>
                  <p className="text-sm text-muted-foreground">Kanpur, Uttar Pradesh</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">Interested in working together? Let's discuss your project.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-sm">© 2025 Punar Dutt Rajput. All rights reserved.</p>
            <div className="flex gap-3">
              <Button
                size="sm"
                variant="ghost"
                className="hover:bg-accent hover:text-primary transition-colors"
                asChild
              >
                <a href="https://linkedin.com/in/punarrajput" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="hover:bg-accent hover:text-primary transition-colors"
                asChild
              >
                <a href="https://github.com/punarrajput" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
