import saakraLogo from '@/assets/saakra-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={saakraLogo} alt="Saakra" className="w-10 h-10 rounded-lg" />
            <div>
              <h3 className="font-bold text-background">Saakra Learning</h3>
              <p className="text-xs text-background/60">One Brand. Eternal Possibilities</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-background/60 text-center">
            © 2024 Saakra Enterprises Private Limited. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
