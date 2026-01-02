import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const stats = [
    { icon: GraduationCap, value: '15+', label: 'COURSES AVAILABLE' },
    { icon: Users, value: '150+', label: 'HAPPY STUDENTS' },
    { icon: Award, value: '50+', label: 'EXPERT TRAINERS' },
    { icon: TrendingUp, value: '95%', label: 'SUCCESS RATE' },
  ];

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-in">
            <Award className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium">Trusted Since 2016</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Saakra Learning
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-semibold text-primary-foreground/90 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            One Brand. Eternal Possibilities
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            AI-Assisted Skill Development Platform - Bridging the gap between academic education and industry-required skills for 10th, 12th, and college students.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="btn-primary-gradient text-primary-foreground px-8 py-6 text-base">
              <GraduationCap className="w-5 h-5 mr-2" />
              Explore Courses
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base">
              <Users className="w-5 h-5 mr-2" />
              Meet Our Trainers
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center card-hover"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
