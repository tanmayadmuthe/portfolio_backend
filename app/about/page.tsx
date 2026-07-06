import { Terminal } from "@/components/ui/terminal";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "About | Tanmay Admuthe",
  description: "About Tanmay Admuthe, Backend Software Engineer.",
};

export default function AboutPage() {
  const terminalLines = [
    "$ whoami",
    "Tanmay Admuthe",
    "$ cat current_status.txt",
    "Programmer Analyst @ Cognizant",
    "$ cat core_focus.txt",
    "Backend Architecture, Microservices, & AI-powered apps.",
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 md:py-20 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-8">About</h1>
      
      <div className="mb-12">
        <Terminal lines={terminalLines} typingSpeed={30} className="w-full min-h-[200px]" />
      </div>
      
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          I am a Backend-focused Software Engineer with experience building scalable microservices, AI-powered applications, and cloud-native solutions. I specialize in Java, Spring Boot, Python, FastAPI, and distributed systems.
        </p>
        <p>
          Currently, I am working at Cognizant Technology Solutions as a Programmer Analyst, where I develop and maintain scalable backend services supporting high-traffic enterprise applications. Previously, I was a PRISM Intern at Samsung R&D Institute and a Research Intern at Vellore Institute of Technology.
        </p>
        <p>
          I am deeply passionate about performance engineering, backend architecture, and applied machine learning, with a proven track record of optimizing systems for speed, memory utilization, and efficiency.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Education</h2>
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-foreground">Vellore Institute of Technology, Chennai</h3>
              <p className="text-muted-foreground text-sm">B.Tech in Electronics and Computer Engineering</p>
            </div>
            <div className="text-right">
              <Badge variant="outline" className="font-mono">2021 — 2025</Badge>
              <p className="text-muted-foreground text-sm mt-1">CGPA: 8.62/10</p>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-foreground">Sanjay Ghodawat Junior College</h3>
              <p className="text-muted-foreground text-sm">Higher Secondary Education (Class XII)</p>
            </div>
            <div className="text-right">
              <Badge variant="outline" className="font-mono text-muted-foreground">2019 — 2021</Badge>
              <p className="text-muted-foreground text-sm mt-1">93.67%</p>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-foreground">Jawahar Navodaya Vidyalaya, Palus</h3>
              <p className="text-muted-foreground text-sm">Secondary Education (Class X)</p>
            </div>
            <div className="text-right">
              <Badge variant="outline" className="font-mono text-muted-foreground">2018 — 2019</Badge>
              <p className="text-muted-foreground text-sm mt-1">93.6%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Connect</h2>
        <div className="flex flex-col space-y-4 font-mono text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-zinc-500 w-24">Phone:</span>
            <a href="tel:+919940625068" className="hover:text-primary transition-colors">+91 9940625068</a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-zinc-500 w-24">Email:</span>
            <a href="mailto:tanmayadmuthe32@gmail.com" className="hover:text-primary transition-colors">tanmayadmuthe32@gmail.com</a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-zinc-500 w-24">GitHub:</span>
            <a href="https://github.com/tanmayadmuthe" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">github.com/tanmayadmuthe</a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-zinc-500 w-24">LinkedIn:</span>
            <a href="https://linkedin.com/in/tanmay-admuthe" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">linkedin.com/in/tanmay-admuthe</a>
          </div>
        </div>
      </div>
    </div>
  );
}
