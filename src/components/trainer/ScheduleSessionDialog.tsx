import { useState } from 'react';
import { Video, Calendar, Clock, Users, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface ScheduleSessionDialogProps {
  trigger?: React.ReactNode;
  courseName?: string;
}

const ScheduleSessionDialog = ({ trigger, courseName }: ScheduleSessionDialogProps) => {
  const [open, setOpen] = useState(false);
  const [scheduling, setScheduling] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    course: courseName || '',
    date: '',
    startTime: '',
    duration: '60',
    sessionType: 'live',
    description: '',
    maxParticipants: '50',
    meetingLink: '',
  });

  const courses = [
    'Python Programming',
    'Web Development Basics',
    'Computer Basics',
    'Full Stack Development',
    'Digital Literacy',
  ];

  const durations = [
    { value: '30', label: '30 minutes' },
    { value: '45', label: '45 minutes' },
    { value: '60', label: '1 hour' },
    { value: '90', label: '1.5 hours' },
    { value: '120', label: '2 hours' },
  ];

  const handleSchedule = async () => {
    if (!formData.title || !formData.course || !formData.date || !formData.startTime) {
      toast.error('Please fill in all required fields');
      return;
    }

    setScheduling(true);
    
    // Simulate scheduling
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const sessionDate = new Date(`${formData.date}T${formData.startTime}`);
    toast.success(`Session "${formData.title}" scheduled for ${sessionDate.toLocaleDateString()} at ${sessionDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
    
    setScheduling(false);
    setFormData({
      title: '',
      course: courseName || '',
      date: '',
      startTime: '',
      duration: '60',
      sessionType: 'live',
      description: '',
      maxParticipants: '50',
      meetingLink: '',
    });
    setOpen(false);
  };

  // Get min date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" className="text-xs">
            <Video className="w-3 h-3 mr-1" />Schedule Session
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Video className="w-5 h-5 text-primary" />
            Schedule Live Session
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="session-title">Session Title *</Label>
            <Input
              id="session-title"
              placeholder="e.g., Introduction to Python Functions"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Course *</Label>
              <Select
                value={formData.course}
                onValueChange={(value) => setFormData(prev => ({ ...prev, course: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map(course => (
                    <SelectItem key={course} value={course}>{course}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Session Type</Label>
              <Select
                value={formData.sessionType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, sessionType: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="live">Live Class</SelectItem>
                  <SelectItem value="qa">Q&A Session</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="review">Project Review</SelectItem>
                  <SelectItem value="doubt">Doubt Clearing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="date"
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Start Time *</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="time"
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, startTime: e.target.value }))}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Duration</Label>
              <Select
                value={formData.duration}
                onValueChange={(value) => setFormData(prev => ({ ...prev, duration: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {durations.map(d => (
                    <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="max-participants">Max Participants</Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="max-participants"
                  type="number"
                  min="1"
                  max="500"
                  value={formData.maxParticipants}
                  onChange={(e) => setFormData(prev => ({ ...prev, maxParticipants: e.target.value }))}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="meeting-link">Meeting Link (Optional)</Label>
            <Input
              id="meeting-link"
              placeholder="https://meet.google.com/..."
              value={formData.meetingLink}
              onChange={(e) => setFormData(prev => ({ ...prev, meetingLink: e.target.value }))}
            />
            <p className="text-xs text-muted-foreground">Leave empty to auto-generate a meeting link</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="session-description">Description</Label>
            <Textarea
              id="session-description"
              placeholder="Brief description of what will be covered..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleSchedule} disabled={scheduling} className="flex-1 btn-primary-gradient">
              {scheduling ? (
                <>Scheduling...</>
              ) : (
                <><Check className="w-4 h-4 mr-1" />Schedule Session</>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleSessionDialog;
