import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      image: '',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Advanced analytics platform leveraging machine learning for predictive insights and data visualization.',
      image: '',
      tech: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
      gradient: 'from-blue-500 to-violet-500',
    },
    {
      title: 'Social Media Management Tool',
      description: 'Unified platform for managing multiple social media accounts with scheduling, analytics, and engagement tracking.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Express', 'MongoDB', 'Redis'],
      gradient: 'from-violet-500 to-pink-500',
    },
    {
      title: 'Real-Time Collaboration Suite',
      description: 'WebSocket-based collaboration tool enabling real-time document editing, chat, and project management.',
      image: '',
      tech: ['React', 'Socket.io', 'Node.js', 'Redis'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with AI-powered recommendations.',
      tech: ['React Native', 'Firebase', 'TensorFlow Lite'],
      images: '',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'DevOps Automation Pipeline',
      description: 'Automated CI/CD pipeline with monitoring, testing, and deployment across multiple cloud platforms.',
      tech: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
      image: '',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="text-container font-bold text-center mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
             

              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-slate-700 text-slate-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    <ExternalLink size={18} />
                    <span className="text-sm font-semibold">Live Demo</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors duration-300">
                    <Github size={18} />
                    <span className="text-sm font-semibold">Source</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
