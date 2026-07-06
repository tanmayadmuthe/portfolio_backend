import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export function ExperienceCard({ role, company, period, description, tags }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border group-last:bg-transparent" />
      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-2 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background ring-4 ring-background" />
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
        <h3 className="text-lg font-bold tracking-tight text-foreground">
          {role} <span className="text-muted-foreground font-normal">at {company}</span>
        </h3>
        <span className="text-sm font-mono text-muted-foreground mt-1 sm:mt-0">{period}</span>
      </div>
      
      <ul className="space-y-2 mb-4 text-sm text-muted-foreground leading-relaxed">
        {description.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="font-mono text-[10px] uppercase">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
