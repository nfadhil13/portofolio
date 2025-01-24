import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  technical: [
    "Dart", "TypeScript", "JavaScript", "Kotlin", "Flutter", "Express JS",
    "Android Native", "Vue JS", "React JS", "Git", "Firebase SDK",
    "Flutter Bloc", "Google Map", "ArcGIS Map"
  ],
  nonTechnical: [
    "Communication",
    "Problem-Solving",
    "Love to learn new technology",
    "Love to teach coding",
    "English (Professional)",
    "Indonesia (Native)"
  ]
};

export const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gray-50" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="animate-fadeIn">
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle>Non-Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.nonTechnical.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};