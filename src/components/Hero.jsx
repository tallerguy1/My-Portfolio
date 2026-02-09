import { Github, Mail, ArrowDown, Instagram } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/3c/0c/c5/3c0cc5a1ada48f39cbad19f448b8fe9e.jpg')] bg-cover bg-center opacity-10"></div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-800 to-blue-700 rounded-full blur-6xl opacity-50 animate-pulse"></div>
          <img
            src="https://i.pinimg.com/736x/3c/0c/c5/3c0cc5a1ada48f39cbad19f448b8fe9e.jpg"
            alt="Alazar Yewendater"
            className="relative w-48 h-48 rounded-full object-cover border-4 border-cyan-700 shadow-2xl"
          />
        </div>
      </div>

      <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
          Alazar Yewendater
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Full Stack Developer & UI Designer
        </p>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Crafting beautiful, responsive web experiences with modern technologies.
          Passionate about clean code and user-centric design.
        </p>

        <div className="flex items-center justify-center space-x-6 mb-12">
          <a
            href="https://github.com/tallerguy1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.instagram.com/alazar.19?igsh=Z3Y3Z3A4YjUxNGsx" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition-all duration-300 hover:scale-110" 
            > 
            <Instagram size={24} /> 
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToContact}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
        >
          Get In Touch
        </button>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
}
