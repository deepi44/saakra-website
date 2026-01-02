import { useState } from 'react';
import { Upload, File, X, Check, FileText, Video, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface UploadContentDialogProps {
  trigger?: React.ReactNode;
  courseName?: string;
}

const UploadContentDialog = ({ trigger, courseName }: UploadContentDialogProps) => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    course: courseName || '',
    module: '',
    contentType: 'video',
  });

  const courses = [
    'Python Programming',
    'Web Development Basics',
    'Computer Basics',
    'Full Stack Development',
    'Digital Literacy',
  ];

  const modules = {
    'Python Programming': ['Python Basics', 'Data Structures', 'Functions & OOP', 'Projects'],
    'Web Development Basics': ['HTML Fundamentals', 'CSS Styling', 'JavaScript Basics', 'Project Building'],
    'Computer Basics': ['Introduction to Computers', 'File Management', 'Microsoft Word', 'Internet Basics'],
    'Full Stack Development': ['Frontend with React', 'Backend with Node.js', 'Database Integration', 'Deployment & DevOps'],
    'Digital Literacy': ['Internet Safety', 'Email Etiquette', 'Online Research'],
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('video/')) return <Video className="w-4 h-4 text-blue-500" />;
    if (file.type.startsWith('image/')) return <Image className="w-4 h-4 text-green-500" />;
    return <FileText className="w-4 h-4 text-orange-500" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleUpload = async () => {
    if (!formData.title || !formData.course || files.length === 0) {
      toast.error('Please fill in all required fields and add at least one file');
      return;
    }

    setUploading(true);
    
    // Simulate upload progress
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success(`Successfully uploaded ${files.length} file(s) to ${formData.course}`);
    setUploading(false);
    setFiles([]);
    setFormData({ title: '', description: '', course: courseName || '', module: '', contentType: 'video' });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" className="text-xs">
            <Upload className="w-3 h-3 mr-1" />Upload Content
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-primary" />
            Upload Course Content
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="title">Content Title *</Label>
            <Input
              id="title"
              placeholder="e.g., Introduction to Variables"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Course *</Label>
              <Select
                value={formData.course}
                onValueChange={(value) => setFormData(prev => ({ ...prev, course: value, module: '' }))}
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
              <Label>Module</Label>
              <Select
                value={formData.module}
                onValueChange={(value) => setFormData(prev => ({ ...prev, module: value }))}
                disabled={!formData.course}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select module" />
                </SelectTrigger>
                <SelectContent>
                  {formData.course && modules[formData.course as keyof typeof modules]?.map(module => (
                    <SelectItem key={module} value={module}>{module}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Content Type</Label>
            <Select
              value={formData.contentType}
              onValueChange={(value) => setFormData(prev => ({ ...prev, contentType: value }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="video">Video Lecture</SelectItem>
                <SelectItem value="document">Document/PDF</SelectItem>
                <SelectItem value="presentation">Presentation</SelectItem>
                <SelectItem value="assignment">Assignment</SelectItem>
                <SelectItem value="resource">Additional Resource</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Brief description of the content..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>

          {/* File Upload Area */}
          <div className="space-y-2">
            <Label>Upload Files *</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <input
                type="file"
                multiple
                accept="video/*,application/pdf,.doc,.docx,.ppt,.pptx,image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <File className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Videos, PDFs, Documents, Images (Max 100MB per file)
                </p>
              </label>
            </div>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="space-y-2">
              <Label>Selected Files ({files.length})</Label>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-secondary/50 rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      {getFileIcon(file)}
                      <div>
                        <p className="text-sm font-medium truncate max-w-[200px]">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="h-6 w-6 p-0"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleUpload} disabled={uploading} className="flex-1 btn-primary-gradient">
              {uploading ? (
                <>Uploading...</>
              ) : (
                <><Check className="w-4 h-4 mr-1" />Upload</>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadContentDialog;
