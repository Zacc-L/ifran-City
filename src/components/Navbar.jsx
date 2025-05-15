import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo + Brand Name */}
        <div className="flex items-center space-x-2">
          <img src="/bg.png" alt="Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-bold">Tanger</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {['Home', 'Features', 'Gallery', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-black transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
