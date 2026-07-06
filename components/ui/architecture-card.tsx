import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Database, Activity, Lock, Cpu, Globe } from "lucide-react";

interface ArchitectureCardProps {
  title: string;
  description: string;
  type: "compute" | "database" | "network" | "security" | "observability" | "cache";
  tags?: string[];
}

const iconMap = {
  compute: Cpu,
  database: Database,
  network: Globe,
  security: Lock,
  observability: Activity,
  cache: Server,
};

export function ArchitectureCard({ title, description, type, tags = [] }: ArchitectureCardProps) {
  const Icon = iconMap[type] || Server;

  return (
    <Card className="hover:border-primary/50 transition-all duration-300 group bg-card">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <div className="p-2.5 bg-zinc-800/50 rounded-lg group-hover:bg-primary/10 transition-colors border border-border/50">
          <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <CardTitle className="text-base font-semibold tracking-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-[10px] uppercase tracking-wider">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
