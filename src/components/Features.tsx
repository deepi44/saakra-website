import { Brain, Route, Users, QrCode, BarChart3, Shield, Smartphone, Video } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Based Skill Assessment',
    description: 'Personalized skill gap analysis using advanced AI to identify areas for improvement.',
  },
  {
    icon: Route,
    title: 'Personalized Learning Paths',
    description: 'Custom learning journeys tailored to your goals, pace, and learning style.',
  },
  {
    icon: Users,
    title: 'Expert Trainer Mentorship',
    description: 'Learn from industry professionals with real-world experience and personalized feedback.',
  },
  {
    icon: QrCode,
    title: 'QR-Verified Certificates',
    description: 'Industry-recognized certificates with QR code verification for authenticity.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track your progress with detailed analytics and performance insights.',
  },
  {
    icon: Shield,
    title: 'Role-Based Access Control',
    description: 'Secure platform with student, trainer, and admin access levels.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Learn on any device with our fully responsive, mobile-optimized platform.',
  },
  {
    icon: Video,
    title: 'Live & Recorded Sessions',
    description: 'Access live interactive sessions and recorded content for flexible learning.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Advanced Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Powered by Innovation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with expert guidance to deliver an unmatched learning experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card card-hover border border-border group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
