export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:px-8 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by <span className="font-medium text-foreground">Tanmay Admuthe</span>.
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground font-mono">
          <span>STATUS: 200 OK</span>
          <span>•</span>
          <span>SYS: ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
