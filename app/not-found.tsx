import Link from "next/link";
import { Terminal } from "@/components/ui/terminal";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const terminalLines = [
    "KERNEL PANIC - NOT SYNCING: VFS: Unable to mount root fs on unknown-block(0,0)",
    "Call Trace:",
    " [<ffffffff816a4b36>] dump_stack+0x19/0x1b",
    " [<ffffffff816a4bb0>] panic+0xd8/0x1e7",
    " [<ffffffff81d6365a>] mount_block_root+0x2a1/0x2b0",
    " [<ffffffff81d636bd>] mount_root+0x54/0x58",
    " [<ffffffff81d6380b>] prepare_namespace+0x14a/0x183",
    " [<ffffffff81d632e1>] kernel_init_freeable+0x202/0x227",
    " [<ffffffff8168fc30>] ? rest_init+0x80/0x80",
    " [<ffffffff8168fc3e>] kernel_init+0xe/0xf0",
    " [<ffffffff816b5fc7>] ret_from_fork+0x7/0x40",
    " [<ffffffff8168fc30>] ? rest_init+0x80/0x80",
    "HTTP 404: RESOURCE NOT FOUND",
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 md:py-20 flex flex-col items-center justify-center min-h-[70vh]">
      <h1 className="text-6xl font-bold tracking-tight mb-2 text-destructive">404</h1>
      <p className="text-xl text-muted-foreground mb-8 font-mono">Service Not Found</p>
      
      <div className="w-full max-w-2xl mb-8">
        <Terminal lines={terminalLines} typingSpeed={15} className="w-full text-xs" />
      </div>

      <Link href="/">
        <Button variant="outline" className="font-mono border-primary/50 hover:bg-primary/10">
          REBOOT SYSTEM
        </Button>
      </Link>
    </div>
  );
}
