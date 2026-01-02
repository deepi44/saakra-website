// Course types and data for all education levels
export type CourseLevel = '10th' | '12th' | 'College';

export type CourseModule = {
  title: string;
  duration: string;
  topics: string[];
};

export type Course = {
  id: string;
  title: string;
  description: string;
  level: CourseLevel;
  tags: string[];
  duration: string;
  students: string;
  rating: number;
  featured?: boolean;
  image: string;
  youtubePlaylist: string;
  youtubeIntro: string;
  instructor: string;
  modules: CourseModule[];
  skills: string[];
};

// 10th Standard Courses
const tenthStandardCourses: Course[] = [
  {
    id: 'computer-basics',
    title: 'Computer Basics',
    description: 'Learn fundamental computer operations, file management, and essential software skills for beginners.',
    level: '10th',
    tags: ['Basics', 'Computer', 'Digital'],
    duration: '4 weeks',
    students: '245+',
    rating: 4.8,
    featured: true,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/watch?v=Cu3R5it4cQs',
    youtubeIntro: 'https://www.youtube.com/embed/y2kg3MOk1sY',
    instructor: 'Dr. Kumar',
    modules: [
      { title: 'Introduction to Computers', duration: '1 week', topics: ['Hardware Components', 'Software Types', 'Operating Systems'] },
      { title: 'File Management', duration: '1 week', topics: ['Creating Folders', 'Moving Files', 'File Extensions'] },
      { title: 'Microsoft Word', duration: '1 week', topics: ['Document Creation', 'Formatting', 'Tables'] },
      { title: 'Internet Basics', duration: '1 week', topics: ['Web Browsing', 'Search Engines', 'Email'] },
    ],
    skills: ['Computer Operation', 'File Management', 'Word Processing', 'Internet Usage'],
  },
  {
    id: 'digital-literacy',
    title: 'Digital Literacy',
    description: 'Master essential digital skills including internet safety, email, and online research techniques.',
    level: '10th',
    tags: ['Digital', 'Internet', 'Safety'],
    duration: '3 weeks',
    students: '189+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/watch?v=pLlv2o6UfTU',
    youtubeIntro: 'https://www.youtube.com/embed/pLlv2o6UfTU?si=33q7v_v6i7QATV91',
    instructor: 'Mrs. Priya',
    modules: [
      { title: 'Internet Safety', duration: '1 week', topics: ['Password Security', 'Phishing Awareness', 'Privacy Settings'] },
      { title: 'Email Etiquette', duration: '1 week', topics: ['Professional Emails', 'Attachments', 'Email Organization'] },
      { title: 'Online Research', duration: '1 week', topics: ['Search Techniques', 'Credible Sources', 'Citation Basics'] },
    ],
    skills: ['Online Safety', 'Email Communication', 'Research Skills', 'Digital Citizenship'],
  },
  {
    id: 'logical-thinking',
    title: 'Logical Thinking',
    description: 'Develop problem-solving skills and logical reasoning abilities for academic success.',
    level: '10th',
    tags: ['Logic', 'Problem Solving', 'Thinking'],
    duration: '5 weeks',
    students: '156+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/watch?v=354cD6oPFIg',
    youtubeIntro: 'https://www.youtube.com/embed/354cD6oPFIg?si=flspbJDgVFpbCcVL',
    instructor: 'Mr. Rajan',
    modules: [
      { title: 'Pattern Recognition', duration: '1 week', topics: ['Number Patterns', 'Shape Patterns', 'Sequences'] },
      { title: 'Logical Puzzles', duration: '2 weeks', topics: ['Sudoku', 'Logic Grids', 'Riddles'] },
      { title: 'Problem Solving', duration: '2 weeks', topics: ['Step-by-Step Analysis', 'Flowcharts', 'Decision Making'] },
    ],
    skills: ['Critical Thinking', 'Pattern Recognition', 'Problem Solving', 'Decision Making'],
  },
  {
    id: 'communication-skills',
    title: 'Communication Skills',
    description: 'Build effective verbal and written communication skills for personal and professional success.',
    level: '10th',
    tags: ['Communication', 'Speaking', 'Writing'],
    duration: '4 weeks',
    students: '198+',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/watch?v=mloCf86O_ow',
    youtubeIntro: 'https://www.youtube.com/embed/mloCf86O_ow?si=__oR2tmjJT2zihwW',
    instructor: 'Mrs. Anitha',
    modules: [
      { title: 'Public Speaking', duration: '1 week', topics: ['Overcoming Fear', 'Voice Modulation', 'Body Language'] },
      { title: 'Written Communication', duration: '1 week', topics: ['Letter Writing', 'Report Writing', 'Grammar'] },
      { title: 'Presentation Skills', duration: '1 week', topics: ['Slide Design', 'Delivery Tips', 'Q&A Handling'] },
      { title: 'Group Discussion', duration: '1 week', topics: ['Active Listening', 'Turn Taking', 'Constructive Feedback'] },
    ],
    skills: ['Public Speaking', 'Writing Skills', 'Presentation', 'Active Listening'],
  },
  {
    id: 'career-awareness',
    title: 'Career Awareness',
    description: 'Explore various career paths and understand the skills needed for different professions.',
    level: '10th',
    tags: ['Career', 'Planning', 'Guidance'],
    duration: '3 weeks',
    students: '167+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/watch?v=WuMD6Tjispk',
    youtubeIntro: 'https://www.youtube.com/embed/WuMD6Tjispk?si=KC4_Dvafivh6ncpN',
    instructor: 'Dr. Srinivas',
    modules: [
      { title: 'Career Exploration', duration: '1 week', topics: ['Different Industries', 'Job Roles', 'Skill Requirements'] },
      { title: 'Self Assessment', duration: '1 week', topics: ['Interest Mapping', 'Aptitude Tests', 'Strength Analysis'] },
      { title: 'Goal Setting', duration: '1 week', topics: ['Short-term Goals', 'Long-term Planning', 'Action Plans'] },
    ],
    skills: ['Self-awareness', 'Goal Setting', 'Career Planning', 'Decision Making'],
  },
];

// 12th Standard Courses
const twelfthStandardCourses: Course[] = [
  {
    id: 'web-development-basics',
    title: 'Web Development Basics',
    description: 'Build your first website using HTML, CSS, and JavaScript fundamentals.',
    level: '12th',
    tags: ['HTML', 'CSS', 'JavaScript'],
    duration: '8 weeks',
    students: '320+',
    rating: 4.9,
    featured: true,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU',
    youtubeIntro: 'https://www.youtube.com/embed/UB1O30fR-EE',
    instructor: 'Mr. Venkat',
    modules: [
      { title: 'HTML Fundamentals', duration: '2 weeks', topics: ['Tags & Elements', 'Forms', 'Semantic HTML'] },
      { title: 'CSS Styling', duration: '2 weeks', topics: ['Selectors', 'Box Model', 'Flexbox', 'Grid'] },
      { title: 'JavaScript Basics', duration: '2 weeks', topics: ['Variables', 'Functions', 'DOM Manipulation'] },
      { title: 'Project Building', duration: '2 weeks', topics: ['Portfolio Website', 'Responsive Design', 'Deployment'] },
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    description: 'Learn Python from scratch with hands-on projects and real-world applications.',
    level: '12th',
    tags: ['Python', 'Programming', 'Projects'],
    duration: '10 weeks',
    students: '456+',
    rating: 4.8,
    featured: true,
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3',
    youtubeIntro: 'https://www.youtube.com/embed/kqtD5dpn9C8',
    instructor: 'Dr. Lakshmi',
    modules: [
      { title: 'Python Basics', duration: '3 weeks', topics: ['Syntax', 'Data Types', 'Control Flow'] },
      { title: 'Data Structures', duration: '2 weeks', topics: ['Lists', 'Dictionaries', 'Tuples'] },
      { title: 'Functions & OOP', duration: '2 weeks', topics: ['Functions', 'Classes', 'Inheritance'] },
      { title: 'Projects', duration: '3 weeks', topics: ['Calculator', 'Web Scraper', 'Data Analysis'] },
    ],
    skills: ['Python', 'Problem Solving', 'Data Structures', 'OOP'],
  },
  {
    id: 'excel-data-skills',
    title: 'Excel and Data Skills',
    description: 'Master Microsoft Excel, data analysis, and visualization techniques.',
    level: '12th',
    tags: ['Excel', 'Data', 'Analysis'],
    duration: '6 weeks',
    students: '289+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLrRPvpgDmw0n34OMHeS94epMaX_Y8Tu1k',
    youtubeIntro: 'https://www.youtube.com/embed/Vl0H-qTclOg',
    instructor: 'Mrs. Deepa',
    modules: [
      { title: 'Excel Basics', duration: '1 week', topics: ['Navigation', 'Formatting', 'Basic Formulas'] },
      { title: 'Advanced Formulas', duration: '2 weeks', topics: ['VLOOKUP', 'IF Functions', 'Pivot Tables'] },
      { title: 'Data Visualization', duration: '2 weeks', topics: ['Charts', 'Dashboards', 'Conditional Formatting'] },
      { title: 'Data Analysis', duration: '1 week', topics: ['Data Cleaning', 'Statistical Functions', 'Reporting'] },
    ],
    skills: ['Microsoft Excel', 'Data Analysis', 'Visualization', 'Reporting'],
  },
  {
    id: 'ui-ux-fundamentals',
    title: 'UI/UX Fundamentals',
    description: 'Learn user interface and user experience design principles and tools.',
    level: '12th',
    tags: ['UI', 'UX', 'Design'],
    duration: '6 weeks',
    students: '178+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLttcEXjN1UcHbhOF4J99QKUiOqt9ETgnb',
    youtubeIntro: 'https://www.youtube.com/embed/c9Wg6Cb_YlU',
    instructor: 'Mr. Arun',
    modules: [
      { title: 'Design Principles', duration: '1 week', topics: ['Color Theory', 'Typography', 'Layout'] },
      { title: 'UX Research', duration: '2 weeks', topics: ['User Personas', 'User Journeys', 'Wireframing'] },
      { title: 'UI Design', duration: '2 weeks', topics: ['Figma Basics', 'Component Design', 'Prototyping'] },
      { title: 'Portfolio Project', duration: '1 week', topics: ['App Redesign', 'Case Study', 'Presentation'] },
    ],
    skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
  },
  {
    id: 'resume-interview-skills',
    title: 'Resume and Interview Skills',
    description: 'Master resume writing and interview techniques for job success.',
    level: '12th',
    tags: ['Resume', 'Interview', 'Jobs'],
    duration: '4 weeks',
    students: '234+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/watch?v=715jNDMGm7I',
    youtubeIntro: 'https://www.youtube.com/embed/715jNDMGm7I?si=5VLXiqsS5GpDrW1T',
    instructor: 'Mrs. Kavitha',
    modules: [
      { title: 'Resume Writing', duration: '1 week', topics: ['Format', 'Content', 'Keywords'] },
      { title: 'LinkedIn Profile', duration: '1 week', topics: ['Optimization', 'Networking', 'Content Creation'] },
      { title: 'Interview Preparation', duration: '1 week', topics: ['Common Questions', 'STAR Method', 'Body Language'] },
      { title: 'Mock Interviews', duration: '1 week', topics: ['Practice Sessions', 'Feedback', 'Improvement'] },
    ],
    skills: ['Resume Writing', 'LinkedIn', 'Interview Skills', 'Professional Communication'],
  },
];

// College Courses
const collegeCourses: Course[] = [
  {
    id: 'full-stack-development',
    title: 'Full Stack Development',
    description: 'Become a complete web developer with React, Node.js, and database technologies.',
    level: 'College',
    tags: ['React', 'Node.js', 'MongoDB'],
    duration: '16 weeks',
    students: '567+',
    rating: 4.9,
    featured: true,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/watch?v=F4zr1aMevB4',
    youtubeIntro: 'https://www.youtube.com/embed/F4zr1aMevB4?si=LVitH7wO_U-OlWhm',
    instructor: 'Mr. Vijay',
    modules: [
      { title: 'Frontend with React', duration: '4 weeks', topics: ['Components', 'Hooks', 'State Management', 'Routing'] },
      { title: 'Backend with Node.js', duration: '4 weeks', topics: ['Express', 'REST APIs', 'Authentication'] },
      { title: 'Database Integration', duration: '4 weeks', topics: ['MongoDB', 'PostgreSQL', 'ORM/ODM'] },
      { title: 'Deployment & DevOps', duration: '4 weeks', topics: ['Docker', 'CI/CD', 'Cloud Hosting'] },
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Docker'],
  },
  {
    id: 'artificial-intelligence-basics',
    title: 'Artificial Intelligence Basics',
    description: 'Explore AI concepts, machine learning fundamentals, and practical applications.',
    level: 'College',
    tags: ['AI', 'ML', 'Python'],
    duration: '12 weeks',
    students: '423+',
    rating: 4.8,
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw',
    youtubeIntro: 'https://www.youtube.com/embed/JMUxmLyrhSk',
    instructor: 'Dr. Ramesh',
    modules: [
      { title: 'AI Fundamentals', duration: '2 weeks', topics: ['History of AI', 'Types of AI', 'Applications'] },
      { title: 'Machine Learning', duration: '4 weeks', topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'] },
      { title: 'Deep Learning', duration: '4 weeks', topics: ['Neural Networks', 'CNN', 'RNN'] },
      { title: 'AI Projects', duration: '2 weeks', topics: ['Image Classification', 'Chatbot', 'Recommendation System'] },
    ],
    skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Neural Networks'],
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile apps using React Native and modern tools.',
    level: 'College',
    tags: ['React Native', 'Mobile', 'Apps'],
    duration: '14 weeks',
    students: '312+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ',
    youtubeIntro: 'https://www.youtube.com/embed/0-S5a0eXPoc',
    instructor: 'Mr. Karthik',
    modules: [
      { title: 'React Native Basics', duration: '3 weeks', topics: ['Components', 'Styling', 'Navigation'] },
      { title: 'State & APIs', duration: '3 weeks', topics: ['State Management', 'API Integration', 'Authentication'] },
      { title: 'Native Features', duration: '4 weeks', topics: ['Camera', 'Location', 'Push Notifications'] },
      { title: 'App Publishing', duration: '4 weeks', topics: ['Play Store', 'App Store', 'App Optimization'] },
    ],
    skills: ['React Native', 'JavaScript', 'Mobile UI', 'API Integration'],
  },
  {
    id: 'automation-nocode',
    title: 'Automation and No-Code Tools',
    description: 'Learn to automate workflows and build apps without coding using modern no-code platforms.',
    level: 'College',
    tags: ['Automation', 'No-Code', 'Zapier'],
    duration: '8 weeks',
    students: '198+',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/watch?v=Xmv22Pmu7f0',
    youtubeIntro: 'https://www.youtube.com/embed/Xmv22Pmu7f0?si=_x4pZtYQ6HFc7j4I',
    instructor: 'Mrs. Preethi',
    modules: [
      { title: 'Introduction to No-Code', duration: '1 week', topics: ['No-Code Landscape', 'When to Use', 'Popular Tools'] },
      { title: 'Zapier & Make', duration: '2 weeks', topics: ['Zaps', 'Scenarios', 'Integrations'] },
      { title: 'App Building', duration: '3 weeks', topics: ['Bubble', 'Glide', 'Webflow'] },
      { title: 'Business Automation', duration: '2 weeks', topics: ['CRM Automation', 'Email Workflows', 'Reporting'] },
    ],
    skills: ['Zapier', 'Bubble', 'Webflow', 'Process Automation'],
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing Fundamentals',
    description: 'Master cloud platforms, services, and deployment strategies.',
    level: 'College',
    tags: ['AWS', 'Cloud', 'DevOps'],
    duration: '12 weeks',
    students: '267+',
    rating: 4.8,
    featured: true,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    youtubePlaylist: 'https://www.youtube.com/watch?v=dmGybCohHsw',
    youtubeIntro: 'https://www.youtube.com/embed/dmGybCohHsw?si=iLaMKTVLDvoiRZ61',
    instructor: 'Mr. Suresh',
    modules: [
      { title: 'Cloud Basics', duration: '2 weeks', topics: ['Cloud Models', 'Service Types', 'Providers'] },
      { title: 'AWS Core Services', duration: '4 weeks', topics: ['EC2', 'S3', 'Lambda', 'RDS'] },
      { title: 'Infrastructure as Code', duration: '3 weeks', topics: ['Terraform', 'CloudFormation', 'Ansible'] },
      { title: 'DevOps & CI/CD', duration: '3 weeks', topics: ['Jenkins', 'GitHub Actions', 'Monitoring'] },
    ],
    skills: ['AWS', 'Terraform', 'Docker', 'CI/CD', 'Linux'],
  },
];

export const allCourses: Course[] = [
  ...tenthStandardCourses,
  ...twelfthStandardCourses,
  ...collegeCourses,
];

export const getCourseById = (id: string): Course | undefined => {
  return allCourses.find(course => course.id === id);
};

export const getCoursesByLevel = (level: CourseLevel): Course[] => {
  return allCourses.filter(course => course.level === level);
};

export const getFeaturedCourses = (): Course[] => {
  return allCourses.filter(course => course.featured);
};
