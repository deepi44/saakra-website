import { useState } from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Salem, Tamil Nadu, India',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 99 44 111 597',
      href: 'tel:+919944111597',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@saakra.com',
      href: 'mailto:info@saakra.com',
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'saakraenterprisespvtltd.com',
      href: 'https://saakra.com/',
    },
  ];



  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our courses? We're here to help you start your learning journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-card border border-border p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full btn-primary-gradient text-primary-foreground">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  {info.href ? (
                    <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
