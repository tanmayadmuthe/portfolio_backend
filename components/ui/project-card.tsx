import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, GitBranch } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  metrics?: { label: string; value: string }[];
  className?: string;
}

export function ProjectCard({ title, description, tags, link, github, metrics, className }: ProjectCardProps) {
  return (
    <Card className={cn("flex flex-col h-full bg-card hover:border-primary/50 transition-colors group", className)}>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-bold tracking-tight">{title}</CardTitle>
          <div className="flex space-x-2">
            {github && (
              <Link href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <GitBranch className="w-5 h-5" />
              </Link>
            )}
            {link && (
              <Link href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {metrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{metric.label}</span>
                <span className="font-mono text-sm font-medium">{metric.value}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-mono text-[10px] uppercase">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
