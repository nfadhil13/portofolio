import { Header } from '@/app/components/Header';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Skills />
      <Projects />
      
      {/* Footer */}
      <footer className="border-t border-gray-300 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Your Name. Built with React & TypeScript (Helped by Cursor & FigmaAI).
          </p>
        </div>
      </footer>
    </div>
  );
}
