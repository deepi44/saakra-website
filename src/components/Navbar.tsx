import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import saakraLogo from '@/assets/saakra-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Courses', href: '/#courses', hasDropdown: true },
    { name: 'Features', href: '/#features' },
    { name: 'Dashboard', href: '/#dashboard' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={saakraLogo} alt="Saakra Logo" className="w-10 h-10 rounded-lg" />
            <div>
              <h1 className="font-bold text-lg text-foreground">Saakra Learning</h1>
              <p className="text-xs text-muted-foreground">AI-Assisted Skill Development</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive(link.href) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="gap-2">
                <LogIn className="w-4 h-4" />
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="btn-primary-gradient text-primary-foreground gap-2">
                <User className="w-4 h-4" />
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full btn-primary-gradient text-primary-foreground gap-2">
                  <User className="w-4 h-4" />
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
