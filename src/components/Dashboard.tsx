import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, CheckCircle2, Clock, Award, ArrowUpRight, ArrowDownRight, 
  Calendar, Download, FileText, BarChart3, Users, GraduationCap, 
  Video, MessageSquare, Upload, ClipboardCheck, Settings, TrendingUp,
  Shield, UserPlus, Layers, Bell, PieChart, Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState<'student' | 'trainer' | 'admin'>('student');

  // Student Module Data
  const studentStats = [
    { label: 'Enrolled Courses', value: 5, change: '+1', trend: 'up', icon: BookOpen },
    { label: 'Completed Tasks', value: 24, change: '+8', trend: 'up', icon: CheckCircle2 },
    { label: 'Pending Tasks', value: 6, change: '-2', trend: 'down', icon: Clock },
    { label: 'Certificates', value: 2, change: '+1', trend: 'up', icon: Award },
  ];

  const studentCourses = [
    { name: 'Computer Basics', category: '10th', instructor: 'Dr. Kumar', progress: 75, pending: 1 },
    { name: 'Digital Literacy', category: '10th', instructor: 'Mrs. Priya', progress: 60, pending: 2 },
    { name: 'Python Programming', category: '12th', instructor: 'Mr. Venkat', progress: 45, pending: 2 },
  ];

  const studentDeadlines = [
    { task: 'Keyboard Shortcuts Assessment', course: 'Computer Basics', days: 5, date: 'Jan 07' },
    { task: 'Professional Email Writing', course: 'Digital Literacy', days: 3, date: 'Jan 05' },
    { task: 'Number Guessing Game', course: 'Python Programming', days: 4, date: 'Jan 06' },
  ];

  // Trainer Module Data
  const trainerStats = [
    { label: 'Active Courses', value: 4, change: '+1', trend: 'up', icon: BookOpen },
    { label: 'Total Students', value: 156, change: '+23', trend: 'up', icon: Users },
    { label: 'Pending Reviews', value: 12, change: '-5', trend: 'down', icon: ClipboardCheck },
    { label: 'Live Sessions', value: 3, change: '+1', trend: 'up', icon: Video },
  ];

  const trainerCourses = [
    { name: 'Full Stack Development', students: 45, pending: 8, nextSession: 'Jan 03' },
    { name: 'Python Programming', students: 38, pending: 5, nextSession: 'Jan 04' },
    { name: 'Web Development Basics', students: 52, pending: 12, nextSession: 'Jan 05' },
  ];

  const pendingEvaluations = [
    { student: 'Rahul Sharma', task: 'React Mini Project', course: 'Full Stack', submitted: 'Dec 30' },
    { student: 'Priya Menon', task: 'Python Assessment', course: 'Python', submitted: 'Dec 31' },
    { student: 'Arun Kumar', task: 'HTML Portfolio', course: 'Web Dev', submitted: 'Jan 01' },
  ];

  // Admin Module Data
  const adminStats = [
    { label: 'Total Users', value: 1250, change: '+120', trend: 'up', icon: Users },
    { label: 'Active Courses', value: 15, change: '+2', trend: 'up', icon: Layers },
    { label: 'Trainers', value: 18, change: '+3', trend: 'up', icon: GraduationCap },
    { label: 'Certificates Issued', value: 342, change: '+45', trend: 'up', icon: Award },
  ];

  const recentUsers = [
    { name: 'Vikram Singh', role: 'Student', email: 'vikram@email.com', joined: 'Jan 01' },
    { name: 'Dr. Lakshmi', role: 'Trainer', email: 'lakshmi@email.com', joined: 'Dec 30' },
    { name: 'Anita Patel', role: 'Student', email: 'anita@email.com', joined: 'Dec 29' },
  ];

  const platformMetrics = [
    { label: 'Course Completion Rate', value: '78%', trend: 'up' },
    { label: 'Student Satisfaction', value: '4.8/5', trend: 'up' },
    { label: 'Active Sessions/Day', value: '45', trend: 'up' },
    { label: 'Avg. Learning Hours', value: '2.5h', trend: 'up' },
  ];

  const renderStudentModule = () => (
    <div className="space-y-6">
      {/* Student Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-border">
        <div>
          <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            Student Portal
          </h3>
          <p className="text-muted-foreground">Welcome, Arjun Kumar</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
            Gold Level
          </span>
          <Link to="/student">
            <Button size="sm" className="btn-primary-gradient text-primary-foreground">
              Full Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {studentStats.map((stat, index) => (
          <div key={index} className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5 text-primary" />
              <span className={`text-xs font-medium flex items-center gap-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Courses List */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-semibold text-foreground">Enrolled Courses</h4>
          <div className="space-y-3">
            {studentCourses.map((course, index) => (
              <div key={index} className="bg-secondary/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h5 className="font-medium text-foreground">{course.name}</h5>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-primary">{course.category}</span> • by {course.instructor}
                    </p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{course.pending} pending</span>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={course.progress} className="flex-1 h-2" />
                  <span className="text-sm font-medium text-primary">{course.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deadlines & Actions */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Upcoming Deadlines</h4>
            <div className="space-y-2">
              {studentDeadlines.map((deadline, index) => (
                <div key={index} className="bg-secondary/30 rounded-lg p-3">
                  <h5 className="font-medium text-foreground text-sm">{deadline.task}</h5>
                  <p className="text-xs text-muted-foreground">{deadline.course}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-destructive font-medium">{deadline.days} days left</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />{deadline.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="text-xs justify-start">
                <BookOpen className="w-3 h-3 mr-1" />Courses
              </Button>
              <Button variant="outline" size="sm" className="text-xs justify-start">
                <Award className="w-3 h-3 mr-1" />Certificates
              </Button>
              <Button variant="outline" size="sm" className="text-xs justify-start">
                <ClipboardCheck className="w-3 h-3 mr-1" />Assessments
              </Button>
              <Button variant="outline" size="sm" className="text-xs justify-start">
                <Download className="w-3 h-3 mr-1" />Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTrainerModule = () => (
    <div className="space-y-6">
      {/* Trainer Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-border">
        <div>
          <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Trainer Portal
          </h3>
          <p className="text-muted-foreground">Welcome, Dr. Venkat Rao</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
            Senior Trainer
          </span>
          <Link to="/trainer">
            <Button size="sm" className="btn-primary-gradient text-primary-foreground">
              Full Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trainerStats.map((stat, index) => (
          <div key={index} className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5 text-primary" />
              <span className={`text-xs font-medium flex items-center gap-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Courses & Evaluations */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-3">My Courses</h4>
            <div className="space-y-3">
              {trainerCourses.map((course, index) => (
                <div key={index} className="bg-secondary/30 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-foreground">{course.name}</h5>
                    <p className="text-xs text-muted-foreground">
                      {course.students} students • {course.pending} pending reviews
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <Video className="w-3 h-3 mr-1" />Live
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Upload className="w-3 h-3 mr-1" />Upload
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Pending Evaluations</h4>
            <div className="space-y-2">
              {pendingEvaluations.map((eval_, index) => (
                <div key={index} className="bg-secondary/30 rounded-lg p-3 flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-foreground text-sm">{eval_.student}</h5>
                    <p className="text-xs text-muted-foreground">{eval_.task} • {eval_.course}</p>
                  </div>
                  <Button size="sm" className="text-xs btn-primary-gradient text-primary-foreground">
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Actions</h4>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <Upload className="w-3 h-3 mr-2" />Upload Course Content
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <Video className="w-3 h-3 mr-2" />Schedule Live Session
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <ClipboardCheck className="w-3 h-3 mr-2" />Assign Tasks
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <MessageSquare className="w-3 h-3 mr-2" />Send Feedback
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <BarChart3 className="w-3 h-3 mr-2" />View Analytics
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAdminModule = () => (
    <div className="space-y-6">
      {/* Admin Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-border">
        <div>
          <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Admin Portal
          </h3>
          <p className="text-muted-foreground">Welcome, Admin</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
            Super Admin
          </span>
          <Link to="/admin">
            <Button size="sm" className="btn-primary-gradient text-primary-foreground">
              Full Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {adminStats.map((stat, index) => (
          <div key={index} className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5 text-primary" />
              <span className="text-xs font-medium flex items-center gap-1 text-green-600">
                {stat.change}
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Users & Metrics */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Recent Users</h4>
            <div className="bg-secondary/30 rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-3 bg-secondary/50 text-xs font-medium text-muted-foreground">
                <span>Name</span>
                <span>Role</span>
                <span>Email</span>
                <span>Joined</span>
              </div>
              {recentUsers.map((user, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-3 border-t border-border text-sm">
                  <span className="font-medium text-foreground">{user.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded w-fit ${
                    user.role === 'Trainer' ? 'bg-blue-500/10 text-blue-500' : 'bg-primary/10 text-primary'
                  }`}>{user.role}</span>
                  <span className="text-muted-foreground text-xs truncate">{user.email}</span>
                  <span className="text-muted-foreground text-xs">{user.joined}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Platform Analytics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {platformMetrics.map((metric, index) => (
                <div key={index} className="bg-secondary/30 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-primary">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Management</h4>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <UserPlus className="w-3 h-3 mr-2" />Add User
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <Layers className="w-3 h-3 mr-2" />Create Course
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <GraduationCap className="w-3 h-3 mr-2" />Manage Trainers
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <Award className="w-3 h-3 mr-2" />Issue Certificates
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <PieChart className="w-3 h-3 mr-2" />Analytics Report
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                <Settings className="w-3 h-3 mr-2" />System Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">System Architecture</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Three Major User Modules
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Integrated with LMS, AI-based assessment engine, project submission system, and certification module.
          </p>
        </div>

        {/* Module Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            variant={activeModule === 'student' ? 'default' : 'outline'}
            onClick={() => setActiveModule('student')}
            className={`gap-2 ${activeModule === 'student' ? 'btn-primary-gradient text-primary-foreground' : ''}`}
          >
            <GraduationCap className="w-4 h-4" />
            Student Module
          </Button>
          <Button
            variant={activeModule === 'trainer' ? 'default' : 'outline'}
            onClick={() => setActiveModule('trainer')}
            className={`gap-2 ${activeModule === 'trainer' ? 'btn-primary-gradient text-primary-foreground' : ''}`}
          >
            <Users className="w-4 h-4" />
            Trainer Module
          </Button>
          <Button
            variant={activeModule === 'admin' ? 'default' : 'outline'}
            onClick={() => setActiveModule('admin')}
            className={`gap-2 ${activeModule === 'admin' ? 'btn-primary-gradient text-primary-foreground' : ''}`}
          >
            <Shield className="w-4 h-4" />
            Admin Module
          </Button>
        </div>

        {/* Module Descriptions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className={`p-4 rounded-xl border transition-all ${activeModule === 'student' ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}>
            <GraduationCap className={`w-8 h-8 mb-2 ${activeModule === 'student' ? 'text-primary' : 'text-muted-foreground'}`} />
            <h4 className="font-semibold text-foreground mb-1">Student Module</h4>
            <p className="text-xs text-muted-foreground">Register, enroll in courses, access content, complete assignments, take assessments, track progress, and download certificates.</p>
          </div>
          <div className={`p-4 rounded-xl border transition-all ${activeModule === 'trainer' ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}>
            <Users className={`w-8 h-8 mb-2 ${activeModule === 'trainer' ? 'text-primary' : 'text-muted-foreground'}`} />
            <h4 className="font-semibold text-foreground mb-1">Trainer Module</h4>
            <p className="text-xs text-muted-foreground">Upload course plans, conduct live/recorded sessions, assign tasks, evaluate performance, provide feedback, and mentor students.</p>
          </div>
          <div className={`p-4 rounded-xl border transition-all ${activeModule === 'admin' ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}>
            <Shield className={`w-8 h-8 mb-2 ${activeModule === 'admin' ? 'text-primary' : 'text-muted-foreground'}`} />
            <h4 className="font-semibold text-foreground mb-1">Admin Module</h4>
            <p className="text-xs text-muted-foreground">Manage users, courses, trainers, analytics, certificates, and overall system settings.</p>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="bg-card rounded-2xl shadow-card border border-border p-6 md:p-8">
          {activeModule === 'student' && renderStudentModule()}
          {activeModule === 'trainer' && renderTrainerModule()}
          {activeModule === 'admin' && renderAdminModule()}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;