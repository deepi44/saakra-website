import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, Clock, Award, Calendar, Download, BarChart3, Play, LogOut, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ThemeToggle } from '@/components/ThemeToggle';
import saakraLogo from '@/assets/saakra-logo.png';
import { allCourses } from '@/data/courses';

const StudentPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const enrolledCourses = allCourses.slice(0, 5).map((c, i) => ({ ...c, progress: [75, 60, 45, 30, 85][i], pending: [1, 2, 2, 3, 1][i] }));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={saakraLogo} alt="Saakra" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-foreground">Student Portal</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/"><Button variant="ghost" size="sm"><Home className="w-4 h-4" /></Button></Link>
            <Link to="/login"><Button variant="ghost" size="sm"><LogOut className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Welcome */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 p-4 bg-card rounded-xl border border-border">
          <div>
            <h1 className="text-xl font-bold text-foreground">Welcome, Arjun Kumar!</h1>
            <p className="text-muted-foreground text-sm">Continue your learning journey</p>
          </div>
          <div className="flex items-center gap-3 mt-3 md:mt-0">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Gold Level</span>
            <span className="text-sm text-muted-foreground">9 pending tasks</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: BookOpen, value: 5, label: 'Enrolled Courses', color: 'text-blue-500' },
            { icon: CheckCircle2, value: 24, label: 'Completed Tasks', color: 'text-green-500' },
            { icon: Clock, value: 6, label: 'Pending Tasks', color: 'text-orange-500' },
            { icon: Award, value: 2, label: 'Certificates', color: 'text-purple-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-card rounded-xl p-4 border border-border">
              <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['dashboard', 'courses', 'assignments', 'certificates'].map(tab => (
            <Button key={tab} variant={activeTab === tab ? 'default' : 'outline'} size="sm" onClick={() => setActiveTab(tab)} className={activeTab === tab ? 'btn-primary-gradient text-primary-foreground' : ''}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>

        {/* Courses List */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-semibold text-foreground">My Courses</h2>
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-start gap-4">
                  <img src={course.image} alt={course.title} className="w-20 h-14 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{course.title}</h3>
                    <p className="text-xs text-muted-foreground">by {course.instructor} • {course.pending} pending</p>
                    <div className="flex items-center gap-3 mt-2">
                      <Progress value={course.progress} className="flex-1 h-2" />
                      <span className="text-sm font-medium text-primary">{course.progress}%</span>
                    </div>
                  </div>
                  <Link to={`/course/${course.id}`}>
                    <Button size="sm" variant="outline"><Play className="w-4 h-4" /></Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-3">Upcoming Deadlines</h3>
              {[
                { task: 'Keyboard Assessment', course: 'Computer Basics', days: 5 },
                { task: 'Email Writing', course: 'Digital Literacy', days: 3 },
                { task: 'Python Quiz', course: 'Python Programming', days: 4 },
              ].map((d, i) => (
                <div key={i} className="py-2 border-b border-border last:border-0">
                  <p className="text-sm font-medium text-foreground">{d.task}</p>
                  <p className="text-xs text-muted-foreground">{d.course}</p>
                  <p className="text-xs text-destructive">{d.days} days left</p>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="text-xs"><BookOpen className="w-3 h-3 mr-1" />Courses</Button>
                <Button variant="outline" size="sm" className="text-xs"><Award className="w-3 h-3 mr-1" />Certificates</Button>
                <Button variant="outline" size="sm" className="text-xs"><Download className="w-3 h-3 mr-1" />Resources</Button>
                <Button variant="outline" size="sm" className="text-xs"><BarChart3 className="w-3 h-3 mr-1" />Progress</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
