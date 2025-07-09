
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Nền tảng thương mại điện tử hiện đại với React, Node.js và PostgreSQL. Tích hợp thanh toán, quản lý inventory và dashboard admin.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "Ứng dụng quản lý công việc với tính năng real-time collaboration, drag & drop, và notifications.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "Firebase", "Socket.io", "PWA"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Dashboard phân tích media xã hội với charts động, real-time data và responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "D3.js", "MongoDB", "API Integration"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dự <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">án</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-900/50 to-purple-900/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-black/50 rounded-full text-white hover:bg-purple-600 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-black/50 rounded-full text-white hover:bg-purple-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white flex-1"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex-1"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
