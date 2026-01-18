import { Badge } from '@/app/components/ui/badge';

export function Skills() {
  const primarySkills = ['Flutter', 'Dart', 'Android', 'Firebase', 'Git'];
  const secondarySkills = ['React', 'TypeScript', 'CSS', 'HTML', 'JavaScript'];
  const learningSkills = ['Nest JS', 'TypeScript', 'Docker', 'Microservices', 'MQTT'];

  return (
    <section className="border-b border-gray-300 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-black mb-6">Skills & Tech Stack</h2>
        
        <div className="space-y-6">
          {/* Primary Skills */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {primarySkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="bg-black text-white border-black px-4 py-2 text-sm hover:bg-gray-800"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          {secondarySkills.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Secondary Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {secondarySkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-white text-black border-black px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Learning Skills */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Learning / Recently Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {learningSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="bg-white text-black border-black px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
