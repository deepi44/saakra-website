import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import saakraLogo from '@/assets/saakra-logo.png';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <Link to="/" className="inline-flex items-center gap-3 mb-8">
          <img src={saakraLogo} alt="Saakra" className="w-12 h-12 rounded-lg" />
          <div className="text-left">
            <span className="font-bold text-xl text-foreground block">Saakra Learning</span>
            <span className="text-xs text-muted-foreground">One Brand. Eternal Possibilities</span>
          </div>
        </Link>
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
