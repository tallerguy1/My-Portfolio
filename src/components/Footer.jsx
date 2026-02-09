import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Alazar Yewendater. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-cyan-400 fill-cyan-400" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
