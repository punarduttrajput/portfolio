import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  impact?: string
}

export function ProjectCard({ title, description, tech, impact }: ProjectCardProps) {
  return (
    <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl text-balance group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>

        {impact && (
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs font-medium">
              {impact}
            </Badge>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs font-medium">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
