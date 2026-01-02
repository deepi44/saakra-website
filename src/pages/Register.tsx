import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import saakraLogo from '@/assets/saakra-logo.png';

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '', role: 'student', level: '10th' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Registration Successful!', description: 'Please login to continue.' });
    setTimeout(() => { window.location.href = '/login'; }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-card border border-border p-8">
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center gap-3 mb-4">
            <img src={saakraLogo} alt="Saakra" className="w-12 h-12 rounded-lg" />
            <div className="text-left">
              <span className="font-bold text-xl text-foreground block">Saakra Learning</span>
              <span className="text-xs text-muted-foreground">One Brand. Eternal Possibilities</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
          <p className="text-muted-foreground">Start your learning journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Full Name" className="pl-10" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input type="email" placeholder="Email" className="pl-10" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Phone" className="pl-10" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input type="password" placeholder="Password" className="pl-10" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm">
              <option value="student">Student</option>
              <option value="trainer">Trainer</option>
            </select>
            <select value={formData.level} onChange={(e) => setFormData({ ...formData, level: e.target.value })} className="px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm">
              <option value="10th">10th Standard</option>
              <option value="12th">12th Standard</option>
              <option value="College">College</option>
            </select>
          </div>
          <Button type="submit" className="w-full btn-primary-gradient text-primary-foreground">Register</Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link>
        </p>
        <p className="text-center text-sm text-muted-foreground mt-2">
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
