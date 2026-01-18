import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Header() {
  return (
    <header className="border-b border-gray-300 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {/* Name and Title */}
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Mohamad Naufal Fadhil</h1>
            <p className="text-xl text-gray-700">
              Mobile Engineer | Learning Full-stack Development
            </p>
          </div>

          {/* Intro */}
          <p className="text-gray-600 max-w-5xl leading-relaxed">
          A Software Engineer mainly focused on mobile development, with 4+ years of experience delivering Mobile applications (mostly with flutter) end-to-end. Skilled in building multi-module codebases, creating reusable UI components and internal libraries, and implementing Clean Architecture with unit testing for core business logic. Interested in full-stack development and continuously learning new technologies to broaden my skill set.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white transition-colors"
              onClick={() => (window.location.href = 'mailto:naufalfadhil12344@gmail.com')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white transition-colors"
              onClick={() => window.open('https://github.com/nfadhil13', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white transition-colors"
              onClick={() => window.open('https://www.linkedin.com/in/mnaufalfadhil/', '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white transition-colors"
              onClick={() => window.open('/naufal_fadhil_cv.pdf', '_blank')}
            >
              <FileText className="w-4 h-4 mr-2" />
              Portfolio PDF
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
