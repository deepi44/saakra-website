import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import Features from '@/components/Features';
import Dashboard from '@/components/Dashboard';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Courses />
      <Features />
      <Dashboard />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
