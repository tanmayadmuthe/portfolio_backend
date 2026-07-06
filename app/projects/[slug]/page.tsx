import { getProject, projects } from "@/content/projects";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectCaseStudy(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = getProject(params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 md:py-20 max-w-4xl">
      <Link href="/projects" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        cd ..
      </Link>
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs uppercase tracking-wider">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-border/50">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">{metric.label}</span>
              <span className="font-mono text-lg font-bold">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12 text-lg text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Overview</h2>
          <p>{project.overview}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Architecture</h2>
          <h3 className="text-lg font-medium text-foreground mb-2">{project.architecture.title}</h3>
          <p className="mb-6">{project.architecture.description}</p>
          
          {project.architecture.diagramData && (
            <div className="mb-6">
              <CodeBlock code={project.architecture.diagramData} language="diagram" className="border-primary/20" />
            </div>
          )}
        </section>

        {(project.apiDesign || project.dbSchema) && (
          <section className="grid md:grid-cols-2 gap-8">
            {project.apiDesign && (
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">API Design</h2>
                <CodeBlock code={project.apiDesign} language="json" />
              </div>
            )}
            {project.dbSchema && (
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">DB Schema</h2>
                <CodeBlock code={project.dbSchema} language="sql" />
              </div>
            )}
          </section>
        )}

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Scalability & Perf</h2>
            <ul className="space-y-3 text-base">
              {project.scalability.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Trade-offs</h2>
            <ul className="space-y-3 text-base">
              {project.tradeoffs.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
