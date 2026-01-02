import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { allCourses, CourseLevel } from '@/data/courses';

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | CourseLevel>('All');

  const filters: ('All' | CourseLevel)[] = ['All', '10th', '12th', 'College'];

  const filteredCourses = activeFilter === 'All' 
    ? allCourses 
    : allCourses.filter(course => course.level === activeFilter);

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Courses</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Skill-Oriented Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-aligned courses designed for 10th, 12th, and college students with practical projects and expert mentorship.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? 'btn-primary-gradient text-primary-foreground' : ''}
            >
              {filter === 'All' ? 'All Courses' : filter === 'College' ? 'College' : `${filter} Standard`}
            </Button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-card rounded-xl overflow-hidden shadow-card card-hover border border-border group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge variant="secondary" className="bg-card/90 text-foreground text-xs">
                    {course.level === 'College' ? 'College' : `${course.level} Standard`}
                  </Badge>
                  {course.featured && (
                    <Badge className="bg-primary text-primary-foreground text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-3 right-3">
                  <Link to={`/course/${course.id}`}>
                    <Button size="sm" className="bg-primary/90 hover:bg-primary text-primary-foreground gap-1">
                      <Play className="w-3 h-3" />
                      Preview
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Instructor */}
                <p className="text-xs text-muted-foreground mb-3">
                  Instructor: <span className="text-primary font-medium">{course.instructor}</span>
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link to={`/course/${course.id}`}>
                  <Button variant="outline" className="w-full mt-4 group">
                    View Course
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Showing {filteredCourses.length} of {allCourses.length} courses
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
