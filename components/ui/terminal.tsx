"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  lines: string[];
  typingSpeed?: number;
  className?: string;
}

export function Terminal({ lines, typingSpeed = 50, className }: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines[currentLineIndex] === undefined) {
            newLines[currentLineIndex] = "";
          }
          newLines[currentLineIndex] += currentLine[currentCharIndex];
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, typingSpeed * 4);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed]);

  return (
    <div className={cn("rounded-lg border border-border bg-[#0d0d12] p-4 font-mono text-sm shadow-md", className)}>
      <div className="mb-4 flex items-center space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
      </div>
      <div className="space-y-1">
        {displayedLines.map((line, index) => (
          <div key={index} className="text-zinc-300">
            <span className="text-emerald-500 mr-2">$</span>
            {line}
          </div>
        ))}
        {currentLineIndex < lines.length && (
          <div className="text-zinc-300">
            <span className="text-emerald-500 mr-2">$</span>
            <span className="animate-pulse bg-zinc-400 text-transparent">_</span>
          </div>
        )}
      </div>
    </div>
  );
}
