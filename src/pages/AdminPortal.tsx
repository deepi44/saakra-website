import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Award, Settings, BarChart3, LogOut, Home, Shield, UserPlus, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import saakraLogo from '@/assets/saakra-logo.png';

const AdminPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const recentUsers = [
    { name: 'Arjun Kumar', role: 'Student', email: 'arjun@email.com', joined: '2 days ago' },
    { name: 'Dr. Lakshmi', role: 'Trainer', email: 'lakshmi@email.com', joined: '5 days ago' },
    { name: 'Priya Sharma', role: 'Student', email: 'priya@email.com', joined: '1 week ago' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={saakraLogo} alt="Saakra" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-foreground">Admin Portal</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/"><Button variant="ghost" size="sm"><Home className="w-4 h-4" /></Button></Link>
            <Link to="/login"><Button variant="ghost" size="sm"><LogOut className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 p-4 bg-card rounded-xl border border-border">
          <div>
            <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground text-sm">Manage the entire platform</p>
          </div>
          <span className="px-3 py-1 bg-destructive/10 text-destructive text-sm rounded-full mt-2 md:mt-0 flex items-center gap-1"><Shield className="w-3 h-3" />Super Admin</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: Users, value: '1,245', label: 'Total Users' },
            { icon: BookOpen, value: '15', label: 'Active Courses' },
            { icon: Award, value: '324', label: 'Certificates Issued' },
            { icon: BarChart3, value: '89%', label: 'Completion Rate' },
          ].map((stat, i) => (
            <div key={i} className="bg-card rounded-xl p-4 border border-border">
              <stat.icon className="w-5 h-5 text-primary mb-2" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['dashboard', 'users', 'courses', 'trainers', 'certificates', 'analytics', 'settings'].map(tab => (
            <Button key={tab} variant={activeTab === tab ? 'default' : 'outline'} size="sm" onClick={() => setActiveTab(tab)} className={activeTab === tab ? 'btn-primary-gradient text-primary-foreground' : ''}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-card rounded-xl p-4 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground">Recent Users</h2>
                <Button size="sm" variant="outline"><UserPlus className="w-4 h-4 mr-1" />Add User</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-muted-foreground font-medium">Name</th>
                      <th className="text-left py-2 text-muted-foreground font-medium">Role</th>
                      <th className="text-left py-2 text-muted-foreground font-medium">Email</th>
                      <th className="text-left py-2 text-muted-foreground font-medium">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user, i) => (
                      <tr key={i} className="border-b border-border last:border-0">
                        <td className="py-3 text-foreground">{user.name}</td>
                        <td className="py-3"><span className={`px-2 py-1 rounded text-xs ${user.role === 'Trainer' ? 'bg-primary/10 text-primary' : 'bg-secondary text-secondary-foreground'}`}>{user.role}</span></td>
                        <td className="py-3 text-muted-foreground">{user.email}</td>
                        <td className="py-3 text-muted-foreground">{user.joined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-card rounded-xl p-4 border border-border">
              <h2 className="font-semibold text-foreground mb-4">Platform Analytics</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: 'Daily Active Users', value: '234' },
                  { label: 'Course Enrollments', value: '56' },
                  { label: 'Assignments Submitted', value: '89' },
                  { label: 'Live Sessions', value: '12' },
                  { label: 'Support Tickets', value: '8' },
                  { label: 'Revenue (₹)', value: '45,000' },
                ].map((item, i) => (
                  <div key={i} className="bg-secondary/50 rounded-lg p-3">
                    <div className="text-lg font-bold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-sm"><UserPlus className="w-4 h-4 mr-2" />Add New User</Button>
                <Button variant="outline" className="w-full justify-start text-sm"><BookOpen className="w-4 h-4 mr-2" />Create Course</Button>
                <Button variant="outline" className="w-full justify-start text-sm"><Award className="w-4 h-4 mr-2" />Issue Certificate</Button>
                <Button variant="outline" className="w-full justify-start text-sm"><FileText className="w-4 h-4 mr-2" />Generate Report</Button>
                <Button variant="outline" className="w-full justify-start text-sm"><Settings className="w-4 h-4 mr-2" />System Settings</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
