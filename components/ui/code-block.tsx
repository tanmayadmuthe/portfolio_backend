import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "typescript", className }: CodeBlockProps) {
  return (
    <div className={cn("relative rounded-lg border border-border bg-[#0d0d12] overflow-hidden shadow-sm", className)}>
      <div className="flex items-center justify-between bg-zinc-900/50 px-4 py-2 border-b border-border/50">
        <span className="text-xs font-mono text-zinc-400">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
