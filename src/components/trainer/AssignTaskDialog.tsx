import { useState } from 'react';
import { ClipboardCheck, Calendar, Clock, Check, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

interface AssignTaskDialogProps {
  trigger?: React.ReactNode;
  courseName?: string;
}

const AssignTaskDialog = ({ trigger, courseName }: AssignTaskDialogProps) => {
  const [open, setOpen] = useState(false);
  const [assigning, setAssigning] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    course: courseName || '',
    taskType: 'assignment',
    dueDate: '',
    dueTime: '23:59',
    points: '100',
    description: '',
    instructions: '',
    allowLateSubmission: false,
    notifyStudents: true,
  });

  const courses = [
    'Python Programming',
    'Web Development Basics',
    'Computer Basics',
    'Full Stack Development',
    'Digital Literacy',
  ];

  const taskTypes = [
    { value: 'assignment', label: 'Assignment' },
    { value: 'project', label: 'Mini Project' },
    { value: 'quiz', label: 'Quiz' },
    { value: 'assessment', label: 'Assessment' },
    { value: 'practice', label: 'Practice Exercise' },
  ];

  const handleAssign = async () => {
    if (!formData.title || !formData.course || !formData.dueDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    setAssigning(true);
    
    // Simulate task creation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const dueDateTime = new Date(`${formData.dueDate}T${formData.dueTime}`);
    toast.success(`Task "${formData.title}" assigned to ${formData.course} students. Due: ${dueDateTime.toLocaleDateString()}`);
    
    setAssigning(false);
    setFormData({
      title: '',
      course: courseName || '',
      taskType: 'assignment',
      dueDate: '',
      dueTime: '23:59',
      points: '100',
      description: '',
      instructions: '',
      allowLateSubmission: false,
      notifyStudents: true,
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
            <ClipboardCheck className="w-3 h-3 mr-1" />Assign Task
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-primary" />
            Assign New Task
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="task-title">Task Title *</Label>
            <Input
              id="task-title"
              placeholder="e.g., Build a Calculator App"
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
              <Label>Task Type</Label>
              <Select
                value={formData.taskType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, taskType: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {taskTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="due-date">Due Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="due-date"
                  type="date"
                  min={today}
                  value={formData.dueDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, dueDate: e.target.value }))}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="due-time">Due Time</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="due-time"
                  type="time"
                  value={formData.dueTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, dueTime: e.target.value }))}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="points">Max Points</Label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="points"
                  type="number"
                  min="1"
                  max="1000"
                  value={formData.points}
                  onChange={(e) => setFormData(prev => ({ ...prev, points: e.target.value }))}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="task-description">Description *</Label>
            <Textarea
              id="task-description"
              placeholder="Describe the task objectives..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea
              id="instructions"
              placeholder="Step-by-step instructions for completing the task..."
              value={formData.instructions}
              onChange={(e) => setFormData(prev => ({ ...prev, instructions: e.target.value }))}
              rows={4}
            />
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="late-submission"
                checked={formData.allowLateSubmission}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, allowLateSubmission: checked as boolean }))}
              />
              <Label htmlFor="late-submission" className="text-sm font-normal cursor-pointer">
                Allow late submissions (with penalty)
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="notify-students"
                checked={formData.notifyStudents}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, notifyStudents: checked as boolean }))}
              />
              <Label htmlFor="notify-students" className="text-sm font-normal cursor-pointer">
                Notify students via email
              </Label>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleAssign} disabled={assigning} className="flex-1 btn-primary-gradient">
              {assigning ? (
                <>Assigning...</>
              ) : (
                <><Check className="w-4 h-4 mr-1" />Assign Task</>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignTaskDialog;
