import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Video, FileText, BarChart3, LogOut, Home, Upload, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ThemeToggle } from '@/components/ThemeToggle';
import saakraLogo from '@/assets/saakra-logo.png';
import UploadContentDialog from '@/components/trainer/UploadContentDialog';
import ScheduleSessionDialog from '@/components/trainer/ScheduleSessionDialog';
import AssignTaskDialog from '@/components/trainer/AssignTaskDialog';
import AssignmentReviewDialog from '@/components/trainer/AssignmentReviewDialog';

const TrainerPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const myCourses = [
    { id: 1, title: 'Python Programming', students: 45, completed: 32, pending: 8 },
    { id: 2, title: 'Web Development', students: 38, completed: 28, pending: 12 },
    { id: 3, title: 'Computer Basics', students: 52, completed: 45, pending: 5 },
  ];

  const pendingEvaluations = [
    { student: 'Arjun Kumar', course: 'Python', task: 'Number Guessing Game', submitted: '2 days ago' },
    { student: 'Priya Sharma', course: 'Web Dev', task: 'Portfolio Website', submitted: '1 day ago' },
    { student: 'Rahul Reddy', course: 'Python', task: 'Calculator App', submitted: '3 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={saakraLogo} alt="Saakra" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-foreground">Trainer Portal</span>
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
            <h1 className="text-xl font-bold text-foreground">Welcome, Dr. Lakshmi!</h1>
            <p className="text-muted-foreground text-sm">Manage your courses and students</p>
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mt-2 md:mt-0">Senior Trainer</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: BookOpen, value: 3, label: 'Active Courses' },
            { icon: Users, value: 135, label: 'Total Students' },
            { icon: FileText, value: 25, label: 'Pending Reviews' },
            { icon: Video, value: 48, label: 'Sessions Conducted' },
          ].map((stat, i) => (
            <div key={i} className="bg-card rounded-xl p-4 border border-border">
              <stat.icon className="w-5 h-5 text-primary mb-2" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['dashboard', 'courses', 'students', 'evaluations', 'sessions'].map(tab => (
            <Button key={tab} variant={activeTab === tab ? 'default' : 'outline'} size="sm" onClick={() => setActiveTab(tab)} className={activeTab === tab ? 'btn-primary-gradient text-primary-foreground' : ''}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-semibold text-foreground">My Courses</h2>
            {myCourses.map((course) => (
              <div key={course.id} className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-foreground">{course.title}</h3>
                  <span className="text-xs text-muted-foreground">{course.students} students</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Progress value={(course.completed / course.students) * 100} className="flex-1 h-2" />
                  <span className="text-sm text-primary">{Math.round((course.completed / course.students) * 100)}%</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <UploadContentDialog courseName={course.title} trigger={<Button size="sm" variant="outline" className="text-xs"><Upload className="w-3 h-3 mr-1" />Upload</Button>} />
                  <ScheduleSessionDialog courseName={course.title} trigger={<Button size="sm" variant="outline" className="text-xs"><Video className="w-3 h-3 mr-1" />Live Session</Button>} />
                  <AssignTaskDialog courseName={course.title} />
                  <Button size="sm" variant="outline" className="text-xs"><BarChart3 className="w-3 h-3 mr-1" />Analytics</Button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-3">Pending Evaluations</h3>
              {pendingEvaluations.map((item, i) => (
                <div key={i} className="py-2 border-b border-border last:border-0">
                  <p className="text-sm font-medium text-foreground">{item.student}</p>
                  <p className="text-xs text-muted-foreground">{item.task} • {item.course}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-muted-foreground">{item.submitted}</span>
                    <AssignmentReviewDialog assignment={item} />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-2">
                <UploadContentDialog />
                <ScheduleSessionDialog />
                <AssignTaskDialog />
                <Button variant="outline" size="sm" className="text-xs"><MessageSquare className="w-3 h-3 mr-1" />Messages</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerPortal;
