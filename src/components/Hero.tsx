import { GithubIcon, LinkedinIcon, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-[#1a1a1a] to-[#000000] text-white animate-fadeIn">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Mohamad Naufal Fadhil</h1>
      <h2 className="text-xl md:text-2xl mb-6">Mobile Engineer</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Indonesia</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>+62-813-1211-8252</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>naufalfadhil12344@gmail.com</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="secondary" size="lg" asChild className="bg-[#f3f3f3] text-[#333333] hover:bg-[#e0e0e0]">
          <a href="https://linkedin.com/in/mnaufalfadhil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <LinkedinIcon className="w-5 h-5" />
            LinkedIn
          </a>
        </Button>
        <Button variant="secondary" size="lg" asChild className="bg-[#f3f3f3] text-[#333333] hover:bg-[#e0e0e0]">
          <a href="https://wa.me/6281312118252" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            WhatsApp
          </a>
        </Button>
        <Button variant="secondary" size="lg" asChild className="bg-[#f3f3f3] text-[#333333] hover:bg-[#e0e0e0]">
          <a href="mailto:naufalfadhil12344@gmail.com" className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Contact
          </a>
        </Button>
      </div>
    </section>
  );
};