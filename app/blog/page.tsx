import { BlogCard } from "@/components/ui/blog-card";
import { blogPosts } from "@/content/blog";

export const metadata = {
  title: "Blog & Notes | Tanmay Admuthe",
  description: "Technical writings on backend engineering and systems.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-8 md:py-20 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Blog & Notes</h1>
      <p className="text-lg text-muted-foreground mb-12 font-mono">ls -la /var/log/engineering_notes</p>
      
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <BlogCard 
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            readTime={post.readTime}
            tags={post.tags}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
