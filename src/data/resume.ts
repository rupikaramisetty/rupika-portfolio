export const profile = {
  name: 'Rupika Ramisetty',
  title: 'Software Engineer',
  tagline:
    'Building secure, high-throughput distributed systems — OAuth 2.0/OIDC authorization, Kafka event flows, and Spring-based microservices at scale.',
  location: 'USA',
  email: 'ramisetty.rn@gmail.com',
  phone: '(940) 293-3037',
  linkedin: 'https://www.linkedin.com/in/rupikaaaaa/',
  github: 'https://github.com/rupikaramisetty',
  summary:
    'I design and build secure, high-throughput backend systems — from RFC-aligned OAuth 2.0/OIDC authorization services to Kafka-driven event pipelines. My focus is the intersection of security and performance: stateless auth that scales, and systems tuned to hold up under real production load.',
}

export const stats = [
  { value: '3+', label: 'Years of experience' },
  { value: '10M+', label: 'Daily requests served' },
  { value: '25%', label: 'Faster response times' },
  { value: '5,000+', label: 'TPS sustained' },
]

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Java', 'Core Java', 'PL/SQL', 'Python', 'JavaScript', 'TypeScript', 'C#'],
  },
  {
    label: 'Backend & Frameworks',
    items: [
      'Spring Boot',
      'Spring Cloud',
      'Spring Data JPA',
      'Hibernate',
      'WebSphere Application Server',
      'REST APIs',
      'SOAP',
      'Microservices',
    ],
  },
  {
    label: 'Security & Auth',
    items: [
      'OAuth 2.0',
      'OpenID Connect (OIDC)',
      'JWT',
      'Token Issuance & Validation',
      'RBAC',
      'SSO',
      'Secure Coding Practices',
    ],
  },
  {
    label: 'Databases & Persistence',
    items: [
      'Oracle (SQL/PL-SQL)',
      'Cassandra',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'DAO Patterns',
      'Query Optimization',
    ],
  },
  {
    label: 'Distributed Systems',
    items: [
      'Apache Kafka',
      'Event-Driven Architecture',
      'Service Discovery',
      'API Gateway Routing',
      'Caching',
      'Database Replication',
    ],
  },
  {
    label: 'Performance & Observability',
    items: [
      'Load Testing',
      'Heap-Dump Analysis',
      'Connection Pooling',
      'Splunk',
      'Distributed Tracing',
      'Incident Triage',
    ],
  },
  {
    label: 'Testing & Quality',
    items: ['JUnit 5', 'Mockito', 'Unit & Integration Testing', 'SonarQube', 'Code Reviews'],
  },
  {
    label: 'AI & LLM Tools',
    items: [
      'OpenAI GPT-4',
      'Google Gemini',
      'Groq',
      'LLM Agent Orchestration',
      'Prompt Engineering',
      'RAG Pipelines',
      'MCP Integration',
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Maven', 'Git', 'Jenkins', 'GitHub Actions', 'Agile/Scrum', 'SDLC'],
  },
]

export const experience = [
  {
    company: 'TeknXpert',
    role: 'Software Engineer',
    period: 'May 2025 – Present',
    highlight: 'Cut response times 25% while sustaining 5,000+ TPS',
    bullets: [
      'Built OAuth 2.0 / OIDC authentication services in Core Java and Spring on WebSphere, powering enterprise integrations at 10M+ daily requests.',
      'Designed stateless token issuance and validation with scope- and claims-based access control for service-to-service calls.',
      'Propagated auth and consent state in real time via Kafka, decoupling downstream consumers from the identity platform.',
      'Instrumented services with Splunk for distributed tracing, shortening incident root-cause analysis.',
    ],
  },
  {
    company: 'Vensoft',
    role: 'Software Developer',
    period: 'Sept 2024 – April 2025',
    highlight: 'Kept transformation workloads within SLA',
    bullets: [
      'Built Java/Spring backend services for enterprise data pipelines, tuning Oracle PL/SQL procedures and indexes.',
      'Ingested streaming Kafka records into Oracle with schema validation and idempotent writes, preventing replay/retry corruption.',
      'Expanded JUnit/Mockito test coverage across data-access layers, catching regressions before production.',
    ],
  },
  {
    company: 'Accenture',
    role: 'Software Engineer',
    period: 'April 2021 – July 2022',
    highlight: 'Decomposed a monolith into independently scalable services',
    bullets: [
      'Built RESTful microservices with Spring Boot, breaking apart a monolithic codebase for independent deployability.',
      'Configured Spring Cloud service discovery and API gateway routing to enable horizontal scaling.',
      'Secured APIs with OAuth and JWT at the gateway and service layers.',
      'Reduced redundant database round-trips by optimizing Spring Data JPA queries and repository logic.',
    ],
  },
]

export const projects = [
  {
    name: 'Daily Mental Wellness Companion',
    stack: ['TypeScript', 'Next.js', 'Prisma', 'PostgreSQL', 'Google Gemini'],
    bullets: [
      'Built backend services and a 4-agent orchestration pipeline with rate limiting, input sanitization, and an access-controlled MCP server interface for external data queries.',
      'Engineered LLM prompt chains and structured output parsing to extract mood and sleep signals from conversational check-ins, generating recommendations from 14-day trend analysis.',
    ],
    link: 'https://github.com/rupikaramisetty/Daily-Mental-Wellness-Companion',
  },
]

export const education = [
  {
    school: 'University of North Texas',
    degree: 'M.S., Information Systems and Technology',
    period: 'Aug 2022 – May 2024',
    location: 'Denton, TX',
    detail: 'CGPA 3.5',
  },
]
