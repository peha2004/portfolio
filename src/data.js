// Edit this file to change what shows on your portfolio.

// Leave a value as "" to hide that row in the Contact section.
export const CONFIG = {
  github: 'https://github.com/peha2004',
  linkedin: '',
  email: '',
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
    status: 'in progress',
    open: true,
    summary:
      'A human resources information system for the non-executive workforce of Hayleys Group, delivered by a seven-person team over a 24-week plan. I am the frontend developer.',
    points: [
      'Serves several stakeholder groups: HR, IT, Finance, site operations, supervisors and employees',
      'Built alongside a UI/UX designer, a backend developer, QA and a project manager',
    ],
    stack: ['React', 'Frontend', 'Team project'],
  },
  {
    name: 'Smart Parking Management System',
    type: 'backend',
    status: 'in progress',
    summary:
      'A cloud-native microservice application for finding, reserving and paying for parking in real time.',
    points: [
      'Eureka service registry, Spring Cloud Config server and an API gateway that validates JWTs for every route',
      'Separate user and parking services, each with its own MySQL database',
      'Tested end to end through the gateway with a Postman collection',
    ],
    stack: ['Spring Boot', 'Spring Cloud', 'Eureka', 'MySQL', 'JWT', 'Postman'],
    link: 'https://github.com/peha2004/SPMS-Microservices',
  },
  {
    name: 'DineFlow',
    type: 'web',
    status: 'shipped',
    summary:
      'A full-stack restaurant reservation system with separate guest and admin experiences.',
    points: [
      'Four-step reservation wizard with instant confirmation and QR code check-in',
      'Admin dashboard with charts and full CRUD for tables, bookings and users',
      'JWT authentication with USER and ADMIN roles',
      'Frontend on Vercel, API on Render, data on MongoDB Atlas',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Express', 'MongoDB'],
  },
  {
    name: 'HydroTrack',
    type: 'mobile',
    status: 'shipped',
    summary:
      'A hydration tracking app with a habit calendar and a daily goal calculator.',
    points: [
      'Goal calculator uses Gemini, with a local fallback when the AI call fails',
      'Weather by location from Open-Meteo, plus scheduled reminder notifications',
      'Firebase Auth and Firestore, packaged as an Android APK with EAS',
    ],
    stack: ['React Native', 'Expo Router', 'TypeScript', 'NativeWind', 'Firebase'],
  },
  {
    name: 'Bloomify',
    type: 'mobile',
    status: 'shipped',
    summary: 'A flower shop app with a customer side and an admin side.',
    points: [
      'Role-based navigation, full CRUD for products, cart and ordering',
      'Visual colour picker for choosing flowers by shade',
    ],
    stack: ['React Native', 'Expo SDK 54', 'TypeScript', 'NativeWind', 'Firebase'],
  },
  {
    name: 'Credit Risk Pipeline',
    type: 'data',
    status: 'shipped',
    summary:
      'A five-phase Python pipeline on the UCI credit card default dataset, finished with a 14-page strategy report.',
    points: [
      'Cleaning, exploratory analysis, behavioural risk scoring into four segments, hypothesis testing and a live currency API',
      'Demographics were left out of the scoring on purpose, with an ethics note in the report',
    ],
    stack: ['Python', 'Data analysis', 'reportlab'],
  },
]

export const STACK = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind', 'React Router'] },
  { group: 'Mobile', items: ['React Native', 'Expo', 'Expo Router', 'NativeWind', 'EAS Build'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Spring Boot', 'Spring Cloud', 'JWT'] },
  { group: 'Data', items: ['MongoDB', 'MySQL', 'Firestore', 'Python'] },
  { group: 'Ship and test', items: ['Git and GitHub', 'Postman', 'Vercel', 'Render', 'IntelliJ'] },
]
