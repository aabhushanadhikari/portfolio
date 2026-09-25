import type {
  BlogPost,
  Education,
  Experience,
  NavItem,
  Project,
  SkillGroup,
  SocialLink,
} from '../types'

/**
 * ============================================================================
 *  EDIT THIS FILE ONLY to personalise the site.
 *  Content below is taken from "Aabhushan Adhikari CV.pdf" and the project
 *  repositories under ~/Programming. Update anything that has changed.
 * ============================================================================
 */

export const profile = {
  name: 'Aabhushan Adhikari',
  initials: 'AA',
  role: 'Java Backend Developer',
  tagline:
    'I build secure REST APIs and backend services with Java, Spring Boot and PostgreSQL.',
  location: 'Pepsicola, Kathmandu, Nepal',
  email: 'aaabhushan10@gmail.com',
  phone: '+977-9863262427',
  phoneHref: 'tel:+9779863262427',
  resumeUrl: '/resume.pdf',
  summary: [
    "I'm a Java backend developer with over two years of experience building secure RESTful APIs with Spring Boot and Spring Security. My work has been on production platforms in both a company and a client setting — from municipality resource management to a multi-service job portal — and I've owned features end to end, from schema and API design through to testing.",
    'Most of my day-to-day work is Spring Boot, PostgreSQL and MySQL, with RabbitMQ for async messaging, Firebase Cloud Messaging for push notifications, and Apache POI for Excel reporting. I have also worked inside a Spring Cloud microservices setup with a config server, Eureka discovery, an API gateway, and split authorization and resource servers.',
  ],
  availability: 'Open to new opportunities',
  resumeNote: 'Download CV (PDF)',
  /** Cycled through in the hero, one word at a time. */
  rotatingRoles: [
    'Java Backend Developer',
    'Spring Boot Engineer',
    'REST API Builder',
    'Clean Code Advocate',
  ],
  /** Scrolling ribbon under the hero. */
  marquee: [
    'Java',
    'Spring Boot',
    'Spring Security',
    'PostgreSQL',
    'MySQL',
    'RabbitMQ',
    'JWT',
    'Hibernate',
    'REST APIs',
    'Maven',
    'Firebase',
    'Apache POI',
    'Microservices',
  ],
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/aabhushanadhikari', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aabhushan-adhikari/',
    icon: 'linkedin',
  },
  { label: 'Email', href: 'mailto:aaabhushan10@gmail.com', icon: 'mail' },
]

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const skills: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Java', 'SQL', 'JavaScript'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      'Spring Boot',
      'Spring Security',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'JWT',
      'JDBC',
      'MyBatis',
      'Thymeleaf',
      'Servlets',
      'JSP',
    ],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Liquibase'],
  },
  {
    title: 'Messaging & Async',
    skills: [
      'RabbitMQ',
      'RabbitMQ STOMP (WebSocket)',
      'JavaMail API',
      'Firebase Cloud Messaging',
    ],
  },
  {
    title: 'Cloud & Architecture',
    skills: [
      'Spring Cloud Gateway',
      'Eureka Discovery',
      'Config Server',
      'Spring Authorization Server',
      'OAuth 2.0',
      'Swagger / OpenAPI',
      'Resilience4j',
      'Redis',
      'Microservices',
    ],
  },
  {
    title: 'Tools & Practices',
    skills: [
      'Maven',
      'Git',
      'Postman',
      'Apache POI',
      'JUnit',
      'Mockito',
      'Lombok',
      'Docker',
    ],
  },
]

export const experiences: Experience[] = [
  {
    company: 'Varosa Technology',
    role: 'Backend Developer',
    focus: 'Shramsansar Job Portal · CloudColleague',
    location: 'Kathmandu, Nepal',
    startDate: 'Feb 2025',
    endDate: 'Present',
    current: true,
    highlights: [
      'Built CRUD REST APIs for job postings, training programs and service listings, including the shortlisting and hiring modules behind them.',
      'Implemented OAuth 2.0 login issuing JWTs, with Google and LinkedIn as identity providers on CloudColleague.',
      'Wired asynchronous email notifications through the JavaMail API and RabbitMQ, and real-time user messaging over WebSocket using the RabbitMQ STOMP plugin.',
      'Created PostgreSQL functions and analytics API endpoints that feed the admin dashboard with live charts and trend data.',
      'Developed Excel export endpoints using Apache POI for job and service provider reporting, and built a library to render English dates as Nepali Bikram Sambat dates.',
      'Integrated Firebase Cloud Messaging to push notifications to users on job status changes and system alerts.',
      'Implemented role and permission checks so that each API is only reachable by the roles allowed to use it.',
      'Wrote unit and integration tests with Mockito to cover service-layer logic, and verified endpoints through Postman.',
      'Contributed to a Spring Cloud microservices architecture on Spring Boot 3.2 and Java 17, split into a config server, Eureka discovery service, API gateway, and separate authorization and resource servers.',
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'RabbitMQ',
      'Firebase',
      'Apache POI',
      'Maven',
    ],
  },
  {
    company: 'CS Sewa',
    role: 'Backend Developer',
    focus: 'Chandrapur Palika App',
    location: 'Nepal',
    startDate: 'Jun 2024',
    endDate: 'Jan 2025',
    highlights: [
      'Designed and developed secure RESTful APIs with Spring Boot, secured by JWT authentication, for a municipal resource management platform.',
      'Built endpoints covering municipal services, staff information, notices and document requests.',
      'Implemented filtered data retrieval and Excel sheet generation to support administrative reporting.',
      'Carried out API testing and validation with Postman to confirm the endpoints behaved correctly and returned accurate data.',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Postman', 'Maven'],
  },
]

export const projects: Project[] = [
  {
    name: 'Real-Time Chat Application',
    description:
      'Live messaging built on a RabbitMQ broker with the STOMP plugin over WebSocket, so messages reach connected clients as they arrive rather than being polled. The RabbitMQ side keeps delivery decoupled from the web layer.',
    tech: ['Java', 'Spring Boot', 'RabbitMQ', 'STOMP', 'WebSocket'],
    links: [
      { label: 'Source', href: 'https://github.com/aabhushanadhikari/real-time-chat' },
    ],
    featured: true,
  },
  {
    name: 'Product CRUD REST API',
    description:
      'A Spring Boot CRUD service for products, layered into controller, service and entity packages with request and response DTOs kept separate from the persistence model. Uses JPA for persistence, jOOQ alongside it, and Bean Validation on the request DTOs. Product status is modelled as an ACTIVE / INACTIVE enum.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'jOOQ', 'Bean Validation', 'Lombok'],
    links: [
      { label: 'Source', href: 'https://github.com/aabhushanadhikari/product-crud' },
    ],
    featured: true,
  },
  {
    name: 'Employee Directory CRUD',
    description:
      'A Spring Boot service for an employee directory, split cleanly across controller, service and entity layers with dedicated request and list-response DTOs. Employees are grouped by department through a shared enum, and Lombok removes the boilerplate across the model classes.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'Lombok', 'REST'],
    links: [
      { label: 'Source', href: 'https://github.com/aabhushanadhikari/employee_crud' },
    ],
  },
]

export const blogs: BlogPost[] = [
  {
    title: 'CTEs in PostgreSQL: Performance, Pitfalls, and Best Practices',
    excerpt:
      'Common Table Expressions turned one sprawling nested function into something readable, but they are not free. A walk through a real dashboard query, the cases where materialisation quietly makes a CTE slower than a plain subquery, and using EXPLAIN ANALYZE to decide which one you are actually looking at.',
    url: 'https://medium.com/@aaabhushan10/ctes-in-postgresql-performance-pitfalls-and-best-practices-bb4b3af28b80',
    publishedAt: '2025-12-09',
    readMinutes: 4,
    tags: ['postgresql', 'sql-queries', 'query-optimization'],
  },
]

export const educations: Education[] = [
  {
    institution: 'Tribhuvan University Affiliated College',
    degree: 'Bachelor of Science',
    field: 'Computer Science and Information Technology',
    startYear: '2019',
    endYear: '2024',
  },
  {
    institution: 'Little Angels College',
    degree: 'Plus Two',
    field: 'Science',
    startYear: '2016',
    endYear: '2018',
  },
  {
    institution: 'Little Angels School',
    degree: 'Secondary Education',
    field: '',
    startYear: '',
    endYear: '2015',
  },
]
