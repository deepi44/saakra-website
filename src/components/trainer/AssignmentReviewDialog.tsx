import { useState } from 'react';
import { CheckCircle, XCircle, Clock, FileText, Download, MessageSquare, Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

interface Assignment {
  student: string;
  course: string;
  task: string;
  submitted: string;
  studentId?: string;
  files?: string[];
}

interface AssignmentReviewDialogProps {
  trigger?: React.ReactNode;
  assignment: Assignment;
}

const AssignmentReviewDialog = ({ trigger, assignment }: AssignmentReviewDialogProps) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [score, setScore] = useState('');
  const [maxScore] = useState(100);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState<'pending' | 'approved' | 'revision'>('pending');

  // Mock submission data
  const submissionDetails = {
    submittedAt: new Date().toISOString(),
    files: [
      { name: 'calculator_app.py', size: '4.2 KB', type: 'Python' },
      { name: 'README.md', size: '1.1 KB', type: 'Markdown' },
      { name: 'screenshot.png', size: '245 KB', type: 'Image' },
    ],
    notes: 'I have implemented all the required features including addition, subtraction, multiplication, and division. Added extra error handling for division by zero.',
    previousSubmissions: 0,
  };

  const handleSubmitReview = async (reviewStatus: 'approved' | 'revision') => {
    if (!score || parseInt(score) < 0 || parseInt(score) > maxScore) {
      toast.error(`Please enter a valid score between 0 and ${maxScore}`);
      return;
    }

    if (!feedback.trim()) {
      toast.error('Please provide feedback for the student');
      return;
    }

    setSubmitting(true);
    setStatus(reviewStatus);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (reviewStatus === 'approved') {
      toast.success(`Assignment approved! Score: ${score}/${maxScore} sent to ${assignment.student}`);
    } else {
      toast.info(`Revision requested. Feedback sent to ${assignment.student}`);
    }
    
    setSubmitting(false);
    setScore('');
    setFeedback('');
    setRating(0);
    setStatus('pending');
    setOpen(false);
  };

  const getScoreColor = () => {
    const scoreNum = parseInt(score) || 0;
    const percentage = (scoreNum / maxScore) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    if (percentage >= 40) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="sm" variant="ghost" className="text-xs h-6 px-2">
            <CheckCircle className="w-3 h-3 mr-1" />Review
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Review Assignment
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Submission Info */}
          <div className="bg-secondary/30 rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-muted-foreground text-xs">Student</Label>
                <p className="font-medium text-foreground">{assignment.student}</p>
              </div>
              <div>
                <Label className="text-muted-foreground text-xs">Course</Label>
                <p className="font-medium text-foreground">{assignment.course}</p>
              </div>
              <div>
                <Label className="text-muted-foreground text-xs">Task</Label>
                <p className="font-medium text-foreground">{assignment.task}</p>
              </div>
              <div>
                <Label className="text-muted-foreground text-xs">Submitted</Label>
                <p className="font-medium text-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {assignment.submitted}
                </p>
              </div>
            </div>
          </div>

          {/* Student Notes */}
          {submissionDetails.notes && (
            <div className="space-y-2">
              <Label className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                Student Notes
              </Label>
              <div className="bg-secondary/20 rounded-lg p-3 text-sm text-muted-foreground">
                {submissionDetails.notes}
              </div>
            </div>
          )}

          {/* Submitted Files */}
          <div className="space-y-2">
            <Label>Submitted Files ({submissionDetails.files.length})</Label>
            <div className="space-y-2">
              {submissionDetails.files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-secondary/30 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{file.size} • {file.type}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Download className="w-3 h-3 mr-1" />Download
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Scoring */}
          <div className="space-y-4 border-t border-border pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="score">Score *</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="score"
                    type="number"
                    min="0"
                    max={maxScore}
                    placeholder="0"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    className="w-24"
                  />
                  <span className="text-muted-foreground">/ {maxScore}</span>
                  {score && (
                    <span className={`font-medium ${getScoreColor()}`}>
                      ({Math.round((parseInt(score) / maxScore) * 100)}%)
                    </span>
                  )}
                </div>
                {score && (
                  <Progress 
                    value={(parseInt(score) / maxScore) * 100} 
                    className="h-2 mt-2" 
                  />
                )}
              </div>

              <div className="space-y-2">
                <Label>Quality Rating</Label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 transition-colors ${
                          star <= rating 
                            ? 'text-yellow-500 fill-yellow-500' 
                            : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback">Feedback *</Label>
              <Textarea
                id="feedback"
                placeholder="Provide constructive feedback for the student..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
              />
              <p className="text-xs text-muted-foreground">
                Be specific about what was done well and areas for improvement.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4 border-t border-border">
            <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button 
              variant="outline"
              onClick={() => handleSubmitReview('revision')} 
              disabled={submitting}
              className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-500/10"
            >
              {submitting && status === 'revision' ? (
                <>Sending...</>
              ) : (
                <><XCircle className="w-4 h-4 mr-1" />Request Revision</>
              )}
            </Button>
            <Button 
              onClick={() => handleSubmitReview('approved')} 
              disabled={submitting}
              className="flex-1 btn-primary-gradient"
            >
              {submitting && status === 'approved' ? (
                <>Submitting...</>
              ) : (
                <><Send className="w-4 h-4 mr-1" />Approve & Submit</>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignmentReviewDialog;
