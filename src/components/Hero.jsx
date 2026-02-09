import { ArrowDown } from 'lucide-react';


  export default function Hero() {
    const socialLinks = [
      { icon: Github, label: 'GitHub', href: '#' },
      { icon: Send, label: 'Telegram', href: '#' },
      { icon: Instagram, label: 'Instagram', href: '#' },
      { icon: Mail, label: 'Email', href: '#' },
    ];
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('/ai_wallpapers-3002156.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img
              src="https://i.pinimg.com/736x/3c/0c/c5/3c0cc5a1ada48f39cbad19f448b8fe9e.jpg"
              alt="Alazar Yewendater"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-fade-in">
          Alazar Yewendater
        </h1>

        <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-light tracking-wide">
          Full Stack Developer & Creative Technologist
        </p>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting innovative digital experiences through elegant code and cutting-edge technology.
          Passionate about building scalable applications that make a difference.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
}
