import { Award, Target, Lightbulb, GraduationCap, Compass, BookOpen, Heart } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: GraduationCap,
      title: 'Skill-Oriented Education',
      description: 'Practical skills alongside academic learning',
    },
    {
      icon: Compass,
      title: 'Early Career Guidance',
      description: 'Career awareness for school and college students',
    },
    {
      icon: BookOpen,
      title: 'Industry-Aligned Courses',
      description: 'Practical courses matched to industry demands',
    },
    {
      icon: Heart,
      title: 'Affordable & Accessible',
      description: 'Quality skill education for all students',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Bridging Education & Industry Skills
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              Founded with a vision to provide diverse educational solutions, Saakra Learning has grown into a multi-faceted organization serving students across various education levels since 2016.
            </p>
            <p className="text-muted-foreground mb-6">
              Our tagline "One Brand. Eternal Possibilities" reflects our commitment to turning your educational visions into reality through careful planning and flawless execution.
            </p>
            <p className="text-muted-foreground">
              The platform combines curated YouTube learning resources with expert trainer guidance, practical assignments, real-time projects, and structured assessments. We focus on employability, career readiness, and hands-on learning, especially for students from rural and semi-urban backgrounds.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Trusted Since 2016</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Empowering students across India</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">AI-Powered Learning</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
              alt="Students learning together"
              className="rounded-2xl shadow-card w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-card p-4 border border-border">
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-xl p-8 shadow-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide innovative and reliable skill development solutions that drive growth and success. We aim to bridge the gap between academic education and industry-required skills for students from all backgrounds, making quality education affordable and accessible.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the preferred partner for students seeking comprehensive skill development solutions. We envision a future where every student, regardless of their background, has access to industry-aligned education and career guidance.
            </p>
          </div>
        </div>

        {/* Core Objectives */}
        <div>
          <h3 className="text-xl font-bold text-foreground text-center mb-8">Our Core Objectives</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-card border border-border card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <obj.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{obj.title}</h4>
                <p className="text-sm text-muted-foreground">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
