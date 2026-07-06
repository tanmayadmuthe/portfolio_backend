import { Terminal } from "@/components/ui/terminal";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, GitFork } from "lucide-react";

export const metadata = {
  title: "Research & Lab | Tanmay Admuthe",
  description: "Experimental projects, whitepapers, and distributed systems research.",
};

export default function ResearchPage() {
  const terminalLines = [
    "Compiling research modules...",
    "Raft consensus protocol [IN PROGRESS]",
    "Custom memory allocator (C) [STABLE]",
    "LSM-Tree Key-Value Store [EXPERIMENTAL]",
    "Waiting for test results..."
  ];

  const experiments = [
    {
      title: "Toy Raft Implementation (Go)",
      description: "Building a distributed consensus algorithm from scratch to deeply understand leader election, log replication, and brain-split scenarios.",
      status: "In Progress",
      type: "Distributed Systems"
    },
    {
      title: "LSM-Tree Database Storage Engine",
      description: "A simple Log-Structured Merge-Tree implementation. Writes are appended to an in-memory memtable and flushed to immutable SSTables on disk.",
      status: "Experimental",
      type: "Database Internals"
    },
    {
      title: "Custom Memory Allocator (C)",
      description: "Re-implementing malloc() and free() using a segregated free list approach to understand OS memory management and fragmentation.",
      status: "Completed",
      type: "Systems Programming"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 md:py-20 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Research & Lab</h1>
      <p className="text-lg text-muted-foreground mb-12 font-mono">./run_experiments.sh</p>
      
      <div className="mb-16">
        <Terminal lines={terminalLines} typingSpeed={20} className="w-full text-zinc-300" />
      </div>

      <div className="space-y-12">
        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Active Experiments
        </h2>

        <div className="grid gap-6">
          {experiments.map((exp, i) => (
            <div key={i} className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">{exp.title}</h3>
                  <Badge variant="outline" className="font-mono text-[10px] uppercase">{exp.type}</Badge>
                </div>
                <Badge variant={exp.status === "Completed" ? "default" : exp.status === "In Progress" ? "secondary" : "destructive"} className="font-mono text-[10px] uppercase bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  {exp.status}
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                <span className="flex items-center gap-1 hover:text-foreground cursor-not-allowed">
                  <GitFork className="w-4 h-4" /> Source (Private)
                </span>
                <span className="flex items-center gap-1 hover:text-foreground cursor-not-allowed">
                  <ExternalLink className="w-4 h-4" /> Notes (Draft)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
