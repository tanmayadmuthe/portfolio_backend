import { ArchitectureCard } from "@/components/ui/architecture-card";

export const metadata = {
  title: "Architecture & System Design | Tanmay Admuthe",
  description: "Core principles and system design patterns for scalable backend services.",
};

export default function ArchitecturePage() {
  const concepts = [
    {
      title: "API Gateway & Edge Routing",
      description: "Centralized entry point for all client requests. Handles SSL termination, reverse proxying, JWT signature validation, and Redis-backed rate limiting to protect downstream services from DDoS.",
      type: "network" as const,
      tags: ["Spring Cloud Gateway", "Nginx", "Rate Limiting", "OAuth2"]
    },
    {
      title: "Caching Strategies",
      description: "Implementing multi-tier caching to reduce database load. Strategies include Read-Through for static data and Write-Behind for eventual consistency on high-throughput counters.",
      type: "cache" as const,
      tags: ["Redis", "Eviction Policies", "Cache Stampede Prevention"]
    },
    {
      title: "Asynchronous Message Queues",
      description: "Decoupling microservices using event-driven architectures. Implementing exactly-once semantics, consumer groups, and Dead Letter Queues (DLQs) for fault-tolerant job processing.",
      type: "compute" as const,
      tags: ["Redis Streams", "RabbitMQ", "Kafka", "Event Sourcing"]
    },
    {
      title: "Database Scaling & Pooling",
      description: "Managing PostgreSQL connections efficiently using PgBouncer. Implementing read replicas for heavy analytical queries and logical partitioning for timeseries telemetry data.",
      type: "database" as const,
      tags: ["PostgreSQL", "PgBouncer", "Read Replicas", "Partitioning"]
    },
    {
      title: "Distributed Observability",
      description: "Ensuring deep system visibility. Correlating logs across microservices using OpenTelemetry trace IDs. Alerting on p99 latency spikes and error rate thresholds.",
      type: "observability" as const,
      tags: ["OpenTelemetry", "Prometheus", "Grafana", "Structured Logging"]
    },
    {
      title: "Containerization & CI/CD",
      description: "Enforcing immutable infrastructure. Automated testing, linting, and building Docker images in CI pipelines before blue-green deployments to Kubernetes clusters.",
      type: "compute" as const,
      tags: ["Docker", "Kubernetes", "GitHub Actions", "Blue-Green"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 md:py-20 max-w-5xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Architecture & Design</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          A collection of system design patterns, scaling strategies, and engineering principles I apply when building distributed backend services. This is how I think about reliability, performance, and fault tolerance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concepts.map((concept, i) => (
          <ArchitectureCard key={i} {...concept} />
        ))}
      </div>
    </div>
  );
}
