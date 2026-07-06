import { ExperienceCard } from "@/components/ui/experience-card";

export const metadata = {
  title: "Experience | Tanmay Admuthe",
  description: "Work experience and professional journey.",
};

export default function ExperiencePage() {
  const experiences = [
    {
      role: "Programmer Analyst",
      company: "Cognizant Technology Solutions",
      period: "July 2024 — Present",
      description: [
        "Develop and maintain scalable backend services using Java, Spring Boot, and microservices architecture, supporting high-traffic enterprise applications.",
        "Implement 15+ REST APIs and optimize database queries, reducing average API response latency by up to 30% through extensive profiling.",
        "Collaborate with a cross-functional team of 8+ engineers using Git-based workflows, increasing deployment frequency by 20% via CI/CD pipeline improvements."
      ],
      tags: ["Java", "Spring Boot", "Microservices", "REST APIs", "CI/CD"]
    },
    {
      role: "PRISM Intern",
      company: "Samsung R&D Institute",
      period: "October 2023 — August 2024",
      description: [
        "Contributed to the development of a Virtual Secure OS within AOSP, optimizing high-performance computing tasks for embedded devices.",
        "Optimized memory utilization algorithms, reducing memory footprint by 25% and improving overall system throughput within a secure Android environment.",
        "Resolved 30+ critical bugs and participated in weekly code reviews within an Agile, industry-standard collaborative engineering workflow."
      ],
      tags: ["AOSP", "Performance Eng", "Memory Optimization", "Agile"]
    },
    {
      role: "Research Intern",
      company: "Vellore Institute of Technology",
      period: "May 2024 — July 2024",
      description: [
        "Developed a Convolutional Neural Network (CNN) model for tea leaf disease detection, analyzing a dataset of over 5,000 high-resolution agricultural images.",
        "Engineered an image preprocessing pipeline that improved feature extraction efficiency by 20%, achieving a final classification accuracy of 94%.",
        "Applied machine learning techniques to solve real-world agricultural challenges, presenting findings in bi-weekly academic faculty reviews."
      ],
      tags: ["Machine Learning", "CNN", "Python", "Computer Vision"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 md:py-20 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Experience</h1>
      <p className="text-lg text-muted-foreground mb-12 font-mono">System logs: career_timeline.log</p>
      
      <div className="mt-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}
