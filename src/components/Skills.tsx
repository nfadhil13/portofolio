import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  technical: [
    "Dart", "Kotlin", "Java", "JavaScript", "TypeScript", "Flutter", 
    "Android Native", "Vue JS", "React JS", "Express JS", "Github", 
    "Gitlab", "Firebase", "Flutter Bloc", "Google Map", "ArcGIS Map", 
    "Next JS"
  ],
  nonTechnical: [
    "Communication",
    "Problem-Solving",
    "Peer Programming",
    "Presenting Code Result",
    "Love to learn new Framework or Programming Language",
    "English (Professional)",
    "Indonesia (Native)",
    "Sundanese (Native)"
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
              <CardTitle>Interpersonal Skills & Languages</CardTitle>
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