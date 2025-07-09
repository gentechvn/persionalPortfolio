
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Xin chào!
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Tôi là <span className="text-purple-400">Nguyen Khac Thinh</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Tôi tạo ra những trải nghiệm web tuyệt vời với sự kết hợp hoàn hảo giữa thiết kế và công nghệ
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Xem dự án của tôi
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
          >
            Tải CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
