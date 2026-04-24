import { Link } from "react-router-dom";
import logo from "./logo-1.png";

export default function Footer() {
  return (
    <footer className="py-24 px-8 md:px-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <img 
            src={logo} 
            alt="Amelie Artstudio Logo" 
            className="h-12 w-auto object-contain mb-4"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to text if image fails to load
              e.currentTarget.style.display = 'none';
              const textLogo = document.createElement('h2');
              textLogo.className = "text-2xl font-serif mb-4 text-mauve italic";
              textLogo.innerText = "Amelie Artstudio.";
              e.currentTarget.parentElement?.appendChild(textLogo);
            }}
          />
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
            Handgefertigte Strukturleinwände <br />
            für deine Räume
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4 font-medium">Anfrage</span>
            <a href="mailto:amelie-artstudio@web.de" className="text-sm text-gray-600 hover:text-mauve transition-colors">amelie-artstudio@web.de</a>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4 font-medium">Folgen</span>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-mauve transition-colors">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-100 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
        <span>© 2026 Amelie Artstudio</span>
        <div className="flex flex-col items-end gap-2 md:flex-row md:gap-4">
          <Link to="/impressum" className="hover:text-mauve transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-mauve transition-colors">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
