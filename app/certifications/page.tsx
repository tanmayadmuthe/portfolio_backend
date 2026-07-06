import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star } from "lucide-react";

export const metadata = {
  title: "Achievements & Certifications | Tanmay Admuthe",
  description: "Professional certifications and credentials.",
};

export default function CertificationsPage() {
  const achievements = [
    {
      title: "HackerRank 5-Star Gold",
      issuer: "HackerRank",
      description: "Achieved a 5-star Gold rating in Python problem-solving on HackerRank, demonstrating mastery of algorithms, data structures, and optimization.",
      icon: <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
    },
    {
      title: "Google Cloud Computing Foundations",
      issuer: "IIT Kharagpur & NPTEL",
      description: "Ranked among the top 5% performers nationwide in the Google Cloud Computing Foundations certification course.",
      icon: <Award className="w-6 h-6 text-blue-500" />
    },
    {
      title: "EY Techathon 4.0 Finalist Pool",
      issuer: "Ernst & Young",
      description: "Advanced to the subsequent round of EY Techathon 4.0, securing a position in the top 5.6% (7,000 out of 125,000 participants) nationwide.",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 md:py-20 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Achievements</h1>
      <p className="text-lg text-muted-foreground mb-12 font-mono">Verified Credentials & Hackathons</p>

      <div className="grid gap-6">
        {achievements.map((item, index) => (
          <Card key={index} className="bg-card border-primary/10 hover:border-primary/40 transition-colors">
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="p-3 bg-muted rounded-lg">
                {item.icon}
              </div>
              <div>
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                <CardDescription className="font-mono mt-1 text-xs">ISSUER: {item.issuer}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                {item.description}
              </p>
              <Badge variant="outline" className="font-mono text-[10px] uppercase border-primary/50 text-primary">
                Verified
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
