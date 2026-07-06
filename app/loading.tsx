import { Terminal } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <div className="flex flex-col items-center animate-pulse">
        <Terminal className="w-12 h-12 text-primary mb-4" />
        <div className="h-2 w-24 bg-primary/20 rounded overflow-hidden">
          <div className="h-full bg-primary w-1/2 animate-[ping_1.5s_infinite]"></div>
        </div>
        <p className="mt-4 text-sm font-mono text-muted-foreground">Booting system...</p>
      </div>
    </div>
  );
}
