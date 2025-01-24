import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Mobile Engineer",
    company: "PT. Neural Technologies Indonesia (NTI)",
    period: "Aug 2021 - Current",
    highlights: [
      "Created reusable Flutter dashboard library using fl_chart and REST API",
      "Led team discussions to establish Flutter code conventions and architecture standards",
      "Innovated modular approach for multilingual applications",
      "Architected comprehensive UI toolkit reducing setup complexity across 5 applications",
      "Led mobile team for Rukun App, conducting code reviews and ensuring quality standards",
      "Integrated Midtrans payment gateway with WebSocket for real-time updates",
      "Developed feature-rich chat application supporting text, media, and message replies",
      "Implemented deep linking for improved content sharing",
      "Set up Multi Flavor environments (Local, Dev, Prod)",
      "Integrated Firebase notifications with deep linking",
      "Deployed five applications to Play Store and App Store"
    ]
  },
  {
    title: "Flutter Engineer",
    company: "PT. Ultimo Solution",
    period: "Dec 2022 - Aug 2024",
    highlights: [
      "Created reusable FormBuilder for streamlined form development",
      "Developed offline-ready fielding application with Flutter Hive and ArcGIS Map SDK",
      "Integrated Android Service API for background map file downloads",
      "Fixed and updated abandoned ArcGIS SDK package",
      "Refactored code and established best practices for maintainability"
    ]
  },
  {
    title: "Android Engineer Freelancer",
    company: "PT. Solusi Digital Industri",
    period: "Mar 2021 - Sep 2021",
    highlights: [
      "Implemented stream-based location tracking for food delivery app",
      "Built location-based attendance system with mock location detection",
      "Developed offline-ready POS app (Kawan Mart) with SQLite",
      "Implemented efficient data synchronization process",
      "Integrated thermal printer functionality"
    ]
  },
  {
    title: "Android Engineer Intern",
    company: "PT. One Click Democracy",
    period: "Feb 2021 - April 2021",
    highlights: [
      "Coordinated with senior developers on assigned tasks",
      "Implemented pagination for post list feature",
      "Gained experience in Android development workflows"
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