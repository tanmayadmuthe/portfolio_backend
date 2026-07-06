import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Systems & Projects | Tanmay Admuthe",
  description: "Detailed case studies of backend systems.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-8 md:py-20 max-w-5xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Systems & Projects</h1>
      <p className="text-lg text-muted-foreground mb-12 font-mono">Select * from projects order by impact desc;</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.slug}
            title={project.title}
            description={project.description}
            tags={project.tags}
            metrics={project.metrics}
            link={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
