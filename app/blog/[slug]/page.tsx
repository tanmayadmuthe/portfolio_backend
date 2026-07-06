import { getBlogPost, blogPosts } from "@/content/blog";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 md:py-20 max-w-3xl">
      <Link href="/blog" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        cd ..
      </Link>
      
      <article>
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-muted-foreground mb-6">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-xs uppercase tracking-wider">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          {post.content.map((block, i) => {
            if (block.type === "paragraph") {
              return <p key={i}>{block.value}</p>;
            }
            if (block.type === "heading") {
              return <h2 key={i} className="text-2xl font-bold tracking-tight text-foreground mt-12 mb-4">{block.value}</h2>;
            }
            if (block.type === "code") {
              return <CodeBlock key={i} code={block.value} language={block.language} className="my-6" />;
            }
            return null;
          })}
        </div>
      </article>
    </div>
  );
}
