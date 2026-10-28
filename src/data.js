// Edit this file to change what shows on your portfolio.

// Leave a value as "" to hide that row in the Contact section.
export const CONFIG = {
  github: 'https://github.com/peha2004',
  linkedin: 'https://www.linkedin.com/in/ranuthi-pehansa-peiris-23a8ba390',
  email: 'ranuthi2004@gmail.com',
  phone: '+94 78 429 8127',
}

export const NAV = [
  { id: 'top', label: 'index' },
  { id: 'about', label: 'about.md' },
  { id: 'projects', label: 'projects/' },
  { id: 'stack', label: 'stack.json' },
  { id: 'contact', label: 'contact.ts' },
]

export const NOW = [
  'Hayleys HRIS, as frontend developer on Team vOne',
  'Smart Parking Management System, Spring Boot microservices',
]

export const FACTS = [
  { k: 'Focus', v: 'Web, mobile and microservice apps' },
  { k: 'Data layers', v: 'MongoDB, MySQL, Firebase' },
  { k: 'Team role', v: 'Frontend Developer, Team vOne (7 people)' },
  { k: 'Also', v: 'Python data science and reporting' },
]

export const FILTERS = ['all', 'web', 'mobile', 'backend', 'data']


export const PROJECTS = [
  {
    name: 'Hayleys HRIS',
    type: 'web',
    status: 'shipped',
    open: true,
    summary:
      'A human resources information system for the non-executive workforce of Hayleys Group, developed by a seven-person team over a 24-week plan. I contribute as the frontend developer.',
    points: [
      'Supports HR, IT, Finance, site operations, supervisors and employees',
      'Collaborating with a UI/UX designer, backend developer, QA and project manager',
    ],
    stack: ['React', 'Frontend', 'Team project'],
  },
  {
    name: 'Smart Parking Management System',
    type: 'backend',
    status: 'shipped',
    summary:
      'A microservices-based parking management system for finding, reserving and paying for parking.',
    points: [
      'Eureka service registry, Spring Cloud Config and an API Gateway',
      'Separate user and parking services with individual MySQL databases',
      'JWT validation at the gateway and end-to-end API testing with Postman',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Cloud', 'Eureka', 'MySQL', 'JWT'],
    github: 'https://github.com/peha2004/SPMS-Microservices',
  },
  {
    name: 'Smart Recipe & Meal Planning Platform',
    type: 'web',
    status: 'shipped',
    summary:
      'A full-stack recipe and meal planning application built with a Spring Boot backend and an HTML, CSS and JavaScript frontend.',
    points: [
      'Recipe and meal planning management',
      'Database persistence using JPA, Hibernate and MySQL',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot', 'JPA', 'Hibernate', 'MySQL'],
    github:
      'https://github.com/peha2004/Smart_Recipe_and_Meal_Planning_Project_Spring_Boot',
  },
  {
    name: 'DineFlow',
    type: 'web',
    status: 'shipped',
    summary:
      'A full-stack restaurant reservation system with separate customer and admin experiences.',
    points: [
      'Four-step reservation wizard and QR code check-in',
      'Admin dashboard with charts and CRUD for tables, bookings and users',
      'JWT authentication with USER and ADMIN roles',
      'Frontend on Vercel, API on Render and data in MongoDB Atlas',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Express', 'MongoDB'],
    github: 'https://github.com/peha2004/dineflow_frontend',
  },
  {
    name: 'HydroTrack',
    type: 'mobile',
    status: 'shipped',
    summary:
      'A mobile hydration tracking application that helps users monitor daily water intake and build healthy habits.',
    points: [
      'Daily water intake tracking and progress monitoring',
      'Smart reminders and AI-powered hydration recommendations',
    ],
    stack: ['React Native', 'Expo', 'Firebase'],
    github: 'https://github.com/peha2004/HydroTrack',
  },
  {
    name: 'Bloomify',
    type: 'mobile',
    status: 'shipped',
    summary:
      'A flower shop mobile application with customer shopping and administration features.',
    points: [
      'Role-based navigation and product management',
      'Shopping cart and order management',
      'Visual colour picker for selecting flowers by shade',
    ],
    stack: ['React Native', 'Expo SDK 54', 'TypeScript', 'NativeWind', 'Firebase'],
    // Add the repository URL here when available.
  },
  {
    name: 'Gym Management System',
    type: 'web',
    status: 'shipped',
    summary:
      'A JavaFX desktop application for managing gym operations using a layered architecture.',
    points: [
      'Separates data access, business logic and data transfer using DAO, BO and DTO layers',
      'Uses MySQL for persistent data storage',
    ],
    stack: ['Java', 'JavaFX', 'MySQL', 'DAO', 'BO', 'DTO'],
    github:
      'https://github.com/peha2004/gym-system-Layered-Project-',
  },
  {
    name: 'Elite Driving School Management System',
    type: 'backend',
    status: 'shipped',
    summary:
      'A desktop management application for a driving school using Hibernate ORM and MySQL.',
    points: [
      'Uses Hibernate ORM to work with relational database records',
      'Connects to MySQL for data persistence',
    ],
    stack: ['Java', 'Hibernate', 'MySQL'],
    github:
      'https://github.com/peha2004/elite-driving-school-management-system',
  },
  {
    name: 'Credit Risk Pipeline',
    type: 'data',
    status: 'shipped',
    summary:
      'A five-phase Python data analysis pipeline using the UCI credit card default dataset, accompanied by a strategy report.',
    points: [
      'Data cleaning, exploratory analysis, behavioural risk scoring and hypothesis testing',
      'Includes a live currency API and an ethics note explaining the exclusion of demographics from scoring',
    ],
    stack: ['Python', 'Data Analysis', 'ReportLab'],
  },
]


export const STACK = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind', 'React Router'] },
  { group: 'Mobile', items: ['React Native', 'Expo', 'Expo Router', 'NativeWind', 'EAS Build'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Spring Boot', 'Spring Cloud', 'JWT'] },
  { group: 'Data', items: ['MongoDB', 'MySQL', 'Firestore', 'Python'] },
  { group: 'Ship and test', items: ['Git and GitHub', 'Postman', 'Vercel', 'Render', 'IntelliJ'] },
]
