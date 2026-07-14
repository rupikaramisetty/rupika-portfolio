export const profile = {
  name: 'Rupika Ramisetty',
  title: 'Java Backend Engineer',
  tagline:
    'Building secure, high-throughput distributed systems — OAuth 2.0/OIDC authorization, Kafka event flows, and Spring-based microservices at scale.',
  location: 'USA',
  email: 'ramisetty.rn@gmail.com',
  phone: '(940) 293-3037',
  linkedin: 'https://www.linkedin.com/in/rupikaaaaa/',
  github: 'https://github.com/rupikaramisetty',
  summary:
    'Java Backend Engineer with 3+ years of experience building secure, high-throughput distributed systems. Designed OAuth 2.0 and OIDC authorization capabilities aligned to RFC specifications, implemented Kafka-based event flows across distributed services, and led performance engineering that cut response times 25% while sustaining 5000+ TPS. Builds REST APIs and microservices with Spring Boot and Spring Cloud, and works comfortably across Oracle SQL/PL-SQL, Cassandra, and other relational and NoSQL persistence layers.',
}

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
    bullets: [
      'Built authentication and authorization services in Core Java and Spring on WebSphere, implementing OAuth 2.0 and OpenID Connect flows in line with RFC specifications to support enterprise integrations serving 10M+ daily requests.',
      'Designed token issuance and validation logic with scope- and claims-based access control, enabling stateless authorization across service-to-service calls without shared session state.',
      'Implemented Kafka-based event flows to propagate consent and authentication state across distributed services in real time, decoupling downstream consumers from the identity platform.',
      'Applied DAO design patterns with Hibernate and JPA over Oracle SQL/PL-SQL and Cassandra, tuning access paths for relational and wide-column workloads respectively.',
      'Led performance engineering across load testing, heap-dump analysis, connection pooling, caching, and database replication, cutting response times 25% while sustaining 5000+ TPS.',
      'Instrumented services with Splunk and structured logging, correlating traces across authorization and federation layers to shorten incident root-cause analysis.',
    ],
  },
  {
    company: 'Vensoft',
    role: 'Software Developer',
    period: 'Sept 2024 – April 2025',
    bullets: [
      'Developed Java and Spring backend services for enterprise data pipelines, authoring Oracle PL/SQL procedures and tuning indexes to keep transformation workloads within SLA.',
      'Consumed Kafka topics to ingest streaming records into Oracle, enforcing schema validation and idempotent writes so replays and retries did not corrupt downstream state.',
      'Expanded automated test coverage with JUnit and Mockito across data-access and transformation layers, catching regressions before they reached production.',
    ],
  },
  {
    company: 'Accenture',
    role: 'Software Engineer',
    period: 'April 2021 – July 2022',
    bullets: [
      'Developed RESTful microservices with Spring Boot, decomposing monolithic modules into independently deployable services to improve scalability and maintainability.',
      'Configured Spring Cloud service discovery and API gateway routing, removing hardcoded endpoints so services could scale horizontally without client-side changes.',
      'Secured enterprise APIs using OAuth and JWT, enforcing authentication and authorization at the gateway and service layers.',
      'Optimized data access with Spring Data JPA, restructuring queries and repository logic to reduce redundant database round-trips.',
      'Wrote unit and integration tests with JUnit 5 and Mockito, enforcing code quality through routine SonarQube static analysis.',
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
