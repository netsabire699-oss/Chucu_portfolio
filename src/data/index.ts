export const personalInfo = {
  name: 'Netsahun Birhanu',
  title: 'Full-Stack Developer',
  taglines: [
    'Full-Stack Developer',
    'Mobile App Developer',
    'UI/UX Designer',
    'Problem Solver',
  ],
  bio: `I'm a fourth-year Computer Science student at Wolaita Sodo University with a strong passion for building high-performance digital products. I specialize in full-stack web development, mobile applications, and UI/UX design.`,
  bio2: `From architecting scalable backends to crafting pixel-perfect interfaces, I bring a holistic perspective to every project. I thrive on learning, shipping, and delivering real value.`,
  location: 'Wolaita Sodo, Ethiopia',
  university: 'Wolaita Sodo University',
  year: '4th Year, B.Sc. Computer Science',
  email: 'netsabire699@gmail.com',
  phone: '+251 900 000 000',
  github: 'https://github.com/netsabire699-oss/Netsahun-Birhanu-Gebeyehu-',
  linkedin: 'https://linkedin.com/in/netsahunbirhanu',
  telegram: 'https://t.me/chu12e',
  cvUrl: '/cv/Netsahun_Birhanu_CV.pdf',
};

export type SkillCategory = {
  category: string;
  color: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Development',
    color: 'from-electric-500 to-cyan-400',
    skills: [
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    category: 'Backend Development',
    color: 'from-accent-500 to-purple-400',
    skills: [
      { name: 'Node.js / Express', level: 82 },
      { name: 'PHP', level: 78 },
      { name: 'REST API Design', level: 82 },
    ],
  },
  {
    category: 'Mobile Development',
    color: 'from-emerald-500 to-teal-400',
    skills: [
      { name: 'Android Development', level: 78 },
      { name: 'iOS Development', level: 72 },
      { name: 'React Native', level: 75 },
    ],
  },
  {
    category: 'Database & Design',
    color: 'from-orange-500 to-amber-400',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'Database Design', level: 85 },
    ],
  },
  {
    category: 'Design & Other',
    color: 'from-pink-500 to-rose-400',
    skills: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Graphic Design', level: 80 },
      { name: 'System Analysis & Design', level: 82 },
      { name: 'CV Preparation', level: 85 },
      { name: 'Advanced Computer Skills', level: 90 },
    ],
  },
];

export type Service = {
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    title: 'Full-Stack Web Development',
    description: 'End-to-end web applications built with modern frameworks, clean architecture, and production-ready code.',
    features: ['React / Next.js frontends', 'Node.js / PHP backends', 'REST & GraphQL APIs', 'Database design & optimization'],
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform and native mobile applications for Android and iOS with smooth UX.',
    features: ['React Native apps', 'Android (Java/Kotlin)', 'iOS development', 'App store deployment'],
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design systems and interfaces that are both beautiful and highly functional.',
    features: ['Figma prototyping', 'Design systems', 'User research & wireframing', 'Responsive design'],
  },
  {
    title: 'Database Design',
    description: 'Robust, normalized, and optimized database architectures for scalable applications.',
    features: ['MySQL & PostgreSQL', 'MongoDB & NoSQL', 'Schema design', 'Query optimization'],
  },
  {
    title: 'System Analysis & Design',
    description: 'Thorough analysis of business requirements translated into technical architectures.',
    features: ['Requirements gathering', 'UML diagrams', 'System architecture', 'Technical documentation'],
  },
  {
    title: 'Graphic Design & CV Prep',
    description: 'Professional graphic design and career document preparation to help you stand out.',
    features: ['Logo & brand design', 'CV / Resume writing', 'Presentation design', 'Social media graphics'],
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  gradient: string;
  github?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Hotel QR Code Food Ordering System',
    description: 'A QR-based digital menu and ordering system for hotel restaurants — customers scan, order, and pay from their table.',
    longDescription: 'Guests scan a QR code placed on their table to access a digital menu, browse food items, place orders, and request the bill — all without calling a waiter. The system includes an admin panel for managing menus, tracking orders in real time, and viewing sales reports.',
    tags: ['React', 'Node.js', 'MySQL', 'QR Code'],
    category: 'Full-Stack',
    gradient: 'from-electric-500 to-cyan-500',
    featured: true,
  },
  {
    id: 2,
    title: 'Inter-Office Communication System',
    description: 'An internal messaging and collaboration platform for organizations to streamline communication between departments.',
    longDescription: 'A web-based internal communication tool that allows employees to send messages, share files, create department groups, and manage announcements. Designed to reduce reliance on email and improve response times within organizations.',
    tags: ['React', 'PHP', 'MySQL', 'WebSocket'],
    category: 'Full-Stack',
    gradient: 'from-accent-500 to-purple-500',
    featured: true,
  },
  {
    id: 3,
    title: 'To-Do List Mobile App',
    description: 'A clean and simple mobile productivity app for managing daily tasks with reminders and priority levels.',
    longDescription: 'A cross-platform mobile application that lets users create, organize, and track their daily tasks. Features include priority tagging, due date reminders, task categories, and a progress overview — built for both Android and iOS.',
    tags: ['React Native', 'Android', 'iOS'],
    category: 'Mobile',
    gradient: 'from-emerald-500 to-teal-500',
    featured: false,
  },
  {
    id: 4,
    title: 'Etho Job Mobile App',
    description: 'A job listing and application mobile app tailored for the Ethiopian job market.',
    longDescription: 'A mobile platform connecting Ethiopian job seekers with employers. Job seekers can browse listings, filter by category and location, and apply directly from the app. Employers can post vacancies, review applicants, and manage hiring — all in one place.',
    tags: ['React Native', 'Node.js', 'MySQL', 'Android', 'iOS'],
    category: 'Mobile',
    gradient: 'from-orange-500 to-amber-500',
    featured: true,
  },
];

export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  gradient: string;
};

export const galleryItems: GalleryItem[] = [
  { id: 1, title: 'E-Commerce UI Design', category: 'UI/UX', gradient: 'from-electric-600 to-cyan-600' },
  { id: 2, title: 'Mobile App Screens', category: 'Mobile', gradient: 'from-accent-600 to-purple-600' },
  { id: 3, title: 'Brand Identity', category: 'Graphic Design', gradient: 'from-emerald-600 to-teal-600' },
  { id: 4, title: 'Dashboard Design', category: 'UI/UX', gradient: 'from-rose-600 to-pink-600' },
  { id: 5, title: 'Landing Page', category: 'Frontend', gradient: 'from-orange-600 to-amber-600' },
  { id: 6, title: 'Logo Collection', category: 'Graphic Design', gradient: 'from-violet-600 to-indigo-600' },
];

export type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'project' | 'achievement';
};

export const timeline: TimelineItem[] = [
  {
    year: '2021',
    title: 'Started B.Sc. Computer Science',
    subtitle: 'Wolaita Sodo University',
    description: 'Began my formal CS education, building a strong foundation in algorithms, data structures, and software engineering.',
    type: 'education',
  },
  {
    year: '2022',
    title: 'First Full-Stack Project',
    subtitle: 'University Resource Hub',
    description: 'Built and deployed my first full-stack web application for sharing academic resources across the university.',
    type: 'project',
  },
  {
    year: '2023',
    title: 'Mobile Development',
    subtitle: 'React Native & Android',
    description: 'Expanded into mobile development, building cross-platform apps with React Native and native Android.',
    type: 'achievement',
  },
  {
    year: '2024',
    title: 'UI/UX & Design Systems',
    subtitle: 'Figma & Component Libraries',
    description: 'Deepened expertise in user experience design, building reusable design systems and component libraries.',
    type: 'achievement',
  },
  {
    year: '2025',
    title: '4th Year — Capstone Project',
    subtitle: 'Wolaita Sodo University',
    description: 'Leading final-year capstone project, integrating all engineering skills into a production-ready software product.',
    type: 'education',
  },
];
