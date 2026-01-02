import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowLeft, Play, CheckCircle, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ThemeToggle } from '@/components/ThemeToggle';
import { getCourseById } from '@/data/courses';
import saakraLogo from '@/assets/saakra-logo.png';

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = getCourseById(courseId || '');

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
          <Link to="/"><Button>Back to Home</Button></Link>
        </div>
      </div>
    );
  }

  // Normalize YouTube URL to an embeddable src (handles watch?v=, youtu.be, embed/, and playlist URLs)
  const getEmbedUrl = (url?: string) => {
    if (!url) return '';
    try {
      const u = url.trim();
      if (u.includes('embed/')) return u;
      if (u.includes('watch?v=')) {
        const id = u.split('watch?v=')[1].split('&')[0];
        return `https://www.youtube.com/embed/${id}`;
      }
      if (u.includes('youtu.be/')) {
        const id = u.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${id}`;
      }
      // handle playlist in watch url or direct playlist
      const listMatch = u.match(/[?&]list=([^&]+)/) || (u.includes('playlist?list=') ? [null, u.split('list=')[1].split('&')[0]] : null);
      if (listMatch && listMatch[1]) {
        const list = listMatch[1];
        return `https://www.youtube.com/embed/videoseries?list=${list}`;
      }
      return '';
    } catch (e) {
      return '';
    }
  };

  const embedSrc = getEmbedUrl(course.youtubeIntro) || getEmbedUrl(course.youtubePlaylist);

  // Compute a fallback watch URL (opens the regular YouTube watch/playlist page) in case embedding fails
  const getWatchUrl = (url: string) => {
    if (!url) return '';
    try {
      if (url.includes('watch?v=')) return url;
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube.com/watch?v=${id}`;
      }
      if (url.includes('embed/')) {
        const id = url.split('embed/')[1].split('?')[0];
        return `https://www.youtube.com/watch?v=${id}`;
      }
      if (url.includes('list=')) {
        const list = url.split('list=')[1].split('&')[0];
        return `https://www.youtube.com/playlist?list=${list}`;
      }
      return url;
    } catch (e) {
      return url;
    }
  };

  const watchUrl = getWatchUrl(course.youtubeIntro || course.youtubePlaylist);

  // Derive a canonical playlist URL (if a playlist id exists anywhere in the URL)
  const getPlaylistUrl = (url?: string) => {
    if (!url) return '';
    try {
      const u = url.trim();
      const match = u.match(/[?&]list=([^&]+)/);
      if (match && match[1]) return `https://www.youtube.com/playlist?list=${match[1]}`;
      if (u.includes('playlist?list=')) {
        const list = u.split('list=')[1].split('&')[0];
        return `https://www.youtube.com/playlist?list=${list}`;
      }
      return '';
    } catch (e) {
      return '';
    }
  };

  const playlistUrl = getPlaylistUrl(course.youtubePlaylist);

  // Recommended playlists mapping or fallback to a YouTube search if not present
  const recommendedPlaylists: Record<string, string> = {
    'digital-literacy': 'https://www.youtube.com/results?search_query=digital+literacy+playlist',
    'logical-thinking': 'https://www.youtube.com/results?search_query=logical+thinking+playlist',
    'communication-skills': 'https://www.youtube.com/results?search_query=communication+skills+playlist',
    'career-awareness': 'https://www.youtube.com/results?search_query=career+awareness+playlist',
    'web-development-basics': 'https://www.youtube.com/results?search_query=web+development+playlist',
    'python-programming': 'https://www.youtube.com/results?search_query=python+programming+playlist',
    'excel-data-skills': 'https://www.youtube.com/results?search_query=excel+tutorials+playlist',
    'ui-ux-fundamentals': 'https://www.youtube.com/results?search_query=ui+ux+design+playlist',
    'resume-interview-skills': 'https://www.youtube.com/results?search_query=resume+interview+skills+playlist',
    'full-stack-development': 'https://www.youtube.com/results?search_query=full+stack+development+playlist',
    'artificial-intelligence-basics': 'https://www.youtube.com/results?search_query=artificial+intelligence+playlist',
    'mobile-app-development': 'https://www.youtube.com/results?search_query=react+native+playlist',
    'automation-nocode': 'https://www.youtube.com/results?search_query=automation+no+code+playlist',
    'cloud-computing': 'https://www.youtube.com/results?search_query=cloud+computing+playlist',
  };

  const recommendedUrl = recommendedPlaylists[course.id] || `https://www.youtube.com/results?search_query=${encodeURIComponent(course.title + ' playlist')}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={saakraLogo} alt="Saakra" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-foreground hidden sm:inline">Saakra Learning</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/#courses"><Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-1" />Back</Button></Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-64 md:h-80">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <Badge className="mb-2">{course.level === 'College' ? 'College' : `${course.level} Standard`}</Badge>
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">{course.title}</h1>
            <p className="text-muted-foreground max-w-2xl">{course.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="video-container">
                {embedSrc ? (
                  <iframe
                    src={embedSrc}
                    title={course.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex items-center justify-center h-64 bg-muted rounded">
                    <p className="text-muted-foreground">Video unavailable</p>
                  </div>
                )}
              </div>

              {/* Fallback link/button in case embedding is blocked or the video doesn't play */}
              <div className="mt-3 flex items-center gap-3">
                {watchUrl ? (
                  <a href={watchUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm"><Play className="w-4 h-4 mr-2" />Watch on YouTube</Button>
                  </a>
                ) : null}

                {playlistUrl ? (
                  <a href={playlistUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground">
                    View Full Playlist
                  </a>
                ) : null}
              </div>

              {/* Explicit playlist availability message with recommended playlists */}
              {!playlistUrl && !watchUrl ? (
                <p className="text-xs text-muted-foreground mt-2">
                  Playlist not available for this course. <a href={recommendedUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">Find recommended playlists</a>.
                </p>
              ) : !playlistUrl && watchUrl ? (
                <p className="text-xs text-muted-foreground mt-2">
                  Full playlist not available; you can watch the intro video on YouTube. <a href={recommendedUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">Find recommended playlists</a>.
                </p>
              ) : null}
            </div>

            {/* Modules */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />Course Modules
              </h2>
              <div className="space-y-4">
                {course.modules.map((module, i) => (
                  <div key={i} className="bg-secondary/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-foreground">Module {i + 1}: {module.title}</h3>
                      <span className="text-xs text-muted-foreground">{module.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-background rounded text-muted-foreground">{topic}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />Skills You'll Gain
              </h2>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />{skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-muted-foreground" /><span className="text-sm">{course.duration}</span></div>
                <div className="flex items-center gap-1"><Users className="w-4 h-4 text-muted-foreground" /><span className="text-sm">{course.students}</span></div>
                <div className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /><span className="text-sm">{course.rating}</span></div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-1">Instructor</p>
                <p className="font-medium text-foreground">{course.instructor}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Course Progress</p>
                <Progress value={0} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">0% Complete</p>
              </div>

              <Link to="/register">
                <Button className="w-full btn-primary-gradient text-primary-foreground mb-3">
                  <Play className="w-4 h-4 mr-2" />Enroll Now
                </Button>
              </Link>

              {playlistUrl ? (
                <div>
                  <a href={playlistUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">View Full Playlist</Button>
                  </a>
                </div>
              ) : watchUrl ? (
                <div>
                  <a href={watchUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">Watch on YouTube</Button>
                  </a>
                </div>
              ) : (
                <p className="text-xs text-muted-foreground text-center">Playlist not available for this course.</p>
              )}

              <p className="text-xs text-muted-foreground text-center mt-4">
                Includes: Concept learning, practical exercises, mini projects, final project, assessments, and certification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
