import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export function BlogCard({ title, description, date, readTime, tags, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <Card className="bg-transparent border-transparent hover:border-border transition-colors shadow-none hover:shadow-sm">
        <CardHeader className="px-4 py-4">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground font-mono mb-2">
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
          </div>
          <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed mt-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="px-4 pb-4 pt-0">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-[10px] uppercase">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
