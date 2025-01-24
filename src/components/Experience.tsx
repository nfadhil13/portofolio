import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Mobile Engineer",
    company: "PT. Neural Technologies Indonesia (NTI)",
    period: "Aug 2021 - Current",
    highlights: [
      "Created reusable Flutter dashboard library and UI toolkit",
      "Led mobile development for Rukun App",
      "Implemented Multi Flavor environments and Firebase notifications",
      "Deployed five mobile applications to Play Store and App Store",
      "Contributed to frontend development with React and TypeScript"
    ]
  },
  {
    title: "Flutter Engineer",
    company: "PT. Ultimo Solution",
    period: "Dec 2022 - Aug 2024",
    highlights: [
      "Created reusable FormBuilder",
      "Developed offline-ready fielding application with Flutter Hive and ArcGIS Map SDK"
    ]
  },
  {
    title: "Android Engineer Freelancer",
    company: "PT. Solusi Digital Industri",
    period: "Mar 2021 - Sep 2021",
    highlights: [
      "Created offline-ready POS application with SQLite and thermal printer integration"
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-16 px-6 bg-white" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <Badge variant="secondary">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};