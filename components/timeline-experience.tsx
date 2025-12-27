import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Plasma Softech Pvt Ltd",
    location: "Noida, UP",
    period: "July 2025 – Present",
    current: true,
    description:
      "Working as a Full Stack Developer using .NET Core Web API and MySQL for backend development and Angular for frontend implementation.",
    highlights: [
      "Developed and enhanced the Manage Template Module using Angular and .NET Core APIs",
      "Integrated Figma designs at a global level to ensure consistent UI/UX",
      "Collaborated with cross-functional teams to deliver scalable enterprise applications",
    ],
    project: "C2M – AT&T Devices",
    tech: ["Angular", ".NET Core", "MySQL", "Figma"],
  },
  {
    title: "Software Engineer",
    company: "MCN Solutions Pvt Ltd",
    location: "Noida, UP",
    period: "August 2023 – July 2025",
    current: false,
    description:
      "Designed and developed enterprise-grade web applications using ASP.NET Core MVC and RESTful Web APIs.",
    highlights: [
      "Worked extensively with SQL Server and PostgreSQL, optimizing database queries",
      "Collaborated in Agile/Scrum environments including sprint planning and reviews",
      "Built healthcare platforms and blockchain portals used by 4+ teams",
    ],
    projects: ["C# Corner Events Platform", "EZFastMedicalCard", "MAPay Credentialing", "MPAYZ Web Wallet"],
    tech: [".NET Core", "Blazor", "PostgreSQL", "SQL Server", "Django"],
  },
  {
    title: "Software Trainee",
    company: "MCN Solutions Pvt Ltd",
    location: "Noida, UP",
    period: "March 2023 – August 2023",
    current: false,
    description: "Gained hands-on experience in full-stack development and blockchain technologies.",
    highlights: [
      "Learned C# and Rust programming languages",
      "Worked with blockchain technologies including NEAR Protocol, Avalanche, and Solana",
      "Participated in real-world blockchain projects and Agile workflows",
    ],
    tech: ["C#", "Rust", "NEAR", "Avalanche", "Solana"],
  },
]

export function TimelineExperience() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-8 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />

            <Card className="md:ml-20 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground font-semibold mt-1">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{exp.location}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <Badge variant={exp.current ? "default" : "secondary"} className="font-medium">
                        {exp.current ? "Current" : exp.period}
                      </Badge>
                      {exp.current && <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-3">
                        <span className="text-primary mt-1.5 font-bold">•</span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  {exp.project && (
                    <div className="pt-2">
                      <p className="text-sm font-semibold text-foreground mb-2">Key Project: {exp.project}</p>
                    </div>
                  )}

                  {exp.projects && (
                    <div className="pt-2">
                      <p className="text-sm font-semibold text-foreground mb-2">Key Projects:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.projects.map((project, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs font-medium">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
