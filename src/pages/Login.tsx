import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import saakraLogo from '@/assets/saakra-logo.png';

const Login = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', role: 'student' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Login Successful!', description: `Welcome back! Redirecting to ${formData.role} portal...` });
    setTimeout(() => {
      window.location.href = `/${formData.role}`;
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-card border border-border p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-4">
            <img src={saakraLogo} alt="Saakra" className="w-12 h-12 rounded-lg" />
            <div className="text-left">
              <span className="font-bold text-xl text-foreground block">Saakra Learning</span>
              <span className="text-xs text-muted-foreground">One Brand. Eternal Possibilities</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to continue learning</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Role</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground"
            >
              <option value="student">Student</option>
              <option value="trainer">Trainer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input type="email" placeholder="Email" className="pl-10" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input type={showPassword ? 'text' : 'password'} placeholder="Password" className="pl-10 pr-10" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff className="w-4 h-4 text-muted-foreground" /> : <Eye className="w-4 h-4 text-muted-foreground" />}
            </button>
          </div>
          <Button type="submit" className="w-full btn-primary-gradient text-primary-foreground">Sign In</Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account? <Link to="/register" className="text-primary hover:underline">Register</Link>
        </p>
        <p className="text-center text-sm text-muted-foreground mt-2">
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
