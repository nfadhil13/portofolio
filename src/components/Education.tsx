import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-16 px-6 bg-white" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8">Education</h2>
        <Card className="animate-fadeIn">
          <CardHeader>
            <div className="flex items-center gap-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-xl">Bachelor of Applied Computer Science</CardTitle>
                <p className="text-gray-600">Bandung State of Polytechnic (Politeknik Negeri Bandung)</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Aug 2018 - July 2022</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};