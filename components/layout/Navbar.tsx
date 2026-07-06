import Link from "next/link";
import { Terminal } from "lucide-react";
import { CommandMenu } from "@/components/ui/command-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 flex h-14 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="h-5 w-5" />
            <span className="font-bold font-mono tracking-tight hidden sm:inline-block">tanmay_admuthe</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-mono text-muted-foreground">
            <Link href="/about" className="hover:text-foreground transition-colors">/about</Link>
            <Link href="/experience" className="hover:text-foreground transition-colors">/experience</Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">/projects</Link>
            <Link href="/architecture" className="hover:text-foreground transition-colors">/architecture</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">/blog</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <CommandMenu />
        </div>
      </div>
    </header>
  );
}
