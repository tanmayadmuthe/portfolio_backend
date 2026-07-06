import { Terminal } from "@/components/ui/terminal";
import { MetricCard } from "@/components/ui/metric-card";
import { ProjectCard } from "@/components/ui/project-card";
import { ArchitectureCard } from "@/components/ui/architecture-card";
import { BlogCard } from "@/components/ui/blog-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal as TerminalIcon, FileText, Database, Activity } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const terminalLines = [
    "Starting system check...",
    "Loaded modules: Java, Spring Boot, Python, FastAPI",
    "Connecting to PostgreSQL (pool: 50)... OK",
    "Redis cache hit ratio: 98.4%",
    "Initializing microservices...",
    "System ready. Uptime: 99.99%",
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 md:py-20 max-w-screen-xl">
      {/* Hero Section */}
      <section className="mb-24 flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="flex-1 max-w-2xl mt-4">
          <Badge variant="outline" className="mb-6 font-mono text-[11px] uppercase tracking-wider text-primary border-primary/30 bg-primary/5">
            CLAUDE CERTIFIED ARCHITECT
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Building resilient <br className="hidden md:block"/> backend systems.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
            I design and scale distributed architectures. Currently engineering solutions as a Programmer Analyst at Cognizant. Previously built systems at Samsung Research Institute.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button className="font-mono">View Systems</Button>
            </Link>
            <Link href="/architecture">
              <Button variant="outline" className="font-mono group">
                <TerminalIcon className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                Architecture
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="font-mono">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="w-full md:w-[450px] shrink-0">
          <Terminal lines={terminalLines} typingSpeed={40} className="w-full h-[240px]" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MetricCard title="System Uptime" value="99.99%" trend="Target Achieved" trendUp={true} />
          <MetricCard title="API Latency (p99)" value="12ms" trend="Optimized" trendUp={true} />
          <MetricCard title="Services Managed" value="15+" />
          <MetricCard title="Cache Hit Ratio" value="98%" trend="Redis" trendUp={true} />
        </div>
      </section>

      {/* Featured Projects & Architecture */}
      <section className="mb-24 grid md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Featured Systems
            </h2>
            <Link href="/projects" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors flex items-center">
              View all <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
          <div className="grid gap-6">
            <ProjectCard 
              title="Interview Easy"
              description="Full-stack AI-powered platform automating the screening process for candidates using Gemini Flash 2.0 and Twilio."
              tags={["FastAPI", "React", "PostgreSQL", "Gemini API"]}
              metrics={[
                { label: "Concurrent APIs", value: "1,000+" },
                { label: "Voice Latency", value: "<800ms" }
              ]}
              link="/projects/interview-easy"
            />
            <ProjectCard 
              title="Video Calling Application"
              description="Responsive video conferencing platform supporting HD video streams and real-time screen sharing."
              tags={["Next.js", "Stream SDK", "Clerk", "Tailwind CSS"]}
              metrics={[
                { label: "Stream Latency", value: "<200ms" },
                { label: "Concurrent Users", value: "20/session" }
              ]}
              link="/projects/video-calling-application"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Architecture Spotlight
            </h2>
            <Link href="/architecture" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors flex items-center">
              Explore <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
          <div className="grid gap-6">
            <ArchitectureCard 
              title="Caching Strategies"
              description="Implementing Redis for read-heavy workloads. Write-through vs write-behind, eviction policies, and distributed locking."
              type="cache"
              tags={["Redis", "Performance", "Concurrency"]}
            />
            <ArchitectureCard 
              title="Microservices Gateway"
              description="API Gateway pattern for routing, rate limiting, and SSL termination. Handling cross-cutting concerns at the edge."
              type="network"
              tags={["API Gateway", "Load Balancing", "Security"]}
            />
          </div>
        </div>
      </section>

      {/* Latest Blog & Focus */}
      <section className="mb-24 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-8">Recent Lab Notes</h2>
          <div className="grid gap-4">
            <BlogCard 
              title="Optimizing PostgreSQL Indexing for Timeseries Data"
              description="Deep dive into B-Tree vs BRIN indexes and how partitioning improved query times by 40%."
              date="Jul 12, 2026"
              readTime="8 min read"
              tags={["Database", "Performance", "SQL"]}
              slug="optimizing-postgres-indexing"
            />
            <BlogCard 
              title="Idempotency in Distributed Systems"
              description="Why retries are dangerous without idempotency keys, and how to implement them effectively."
              date="Jun 28, 2026"
              readTime="5 min read"
              tags={["Architecture", "Microservices", "Reliability"]}
              slug="idempotency-distributed-systems"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-8">Current Focus</h2>
          <div className="rounded-lg border border-border bg-card p-6 h-full flex flex-col justify-center shadow-sm">
            <h3 className="text-xl font-bold mb-4">Mastering Distributed Consensus</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Currently reading through the Raft and Paxos whitepapers. Implementing a toy distributed key-value store in Go to understand leader election and log replication deeply.
            </p>
            <div className="space-y-3 font-mono text-sm border-t border-border/50 pt-6">
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">Goal:</span>
                <span>Implement Raft</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">Status:</span>
                <span className="text-emerald-500">In Progress (65%)</span>
              </div>
            </div>
            <div className="w-full bg-zinc-900/50 h-2 mt-4 rounded-full overflow-hidden border border-border/50">
              <div className="bg-primary h-full w-[65%]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
