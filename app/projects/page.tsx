import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects — Muhammad Rasyid Hidayat',
  description: 'Portfolio of software engineering projects showcasing expertise in Java Spring Boot, PostgreSQL, and enterprise applications.',
}

const projects = [
  {
    title: 'Enterprise Resource Planning System',
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'JSF', 'PrimeFaces'],
    problem:
      'A legacy system with poor performance, slow query execution, and difficulty in scaling to handle increasing user load.',
    solution:
      'Redesigned the database schema with proper indexing, optimized SQL queries, and implemented Spring Boot microservices architecture. Created RESTful APIs and improved frontend with PrimeFaces components.',
    impact:
      'Reduced query execution time by 70%, improved system response time by 60%, and enabled horizontal scaling to support 3x more concurrent users.',
    githubLink: 'https://github.com/rasyid-hidayat/erp-system',
  },
  {
    title: 'E-Commerce Backend API',
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'RESTful API'],
    problem:
      'Need for a robust, scalable backend system to handle high-volume transactions, inventory management, and order processing.',
    solution:
      'Built a microservices-based architecture using Spring Boot with PostgreSQL database. Implemented stored procedures for complex business logic, optimized database queries, and containerized the application with Docker.',
    impact:
      'Successfully handles 10,000+ daily transactions, reduced API response time to under 200ms, and achieved 99.9% uptime.',
    githubLink: 'https://github.com/rasyid-hidayat/ecommerce-api',
  },
  {
    title: 'Financial Reporting System',
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'SQL Optimization', 'Stored Procedures'],
    problem:
      'Complex financial reports were taking 5-10 minutes to generate, causing delays in business decision-making.',
    solution:
      'Optimized database queries using advanced SQL techniques, created efficient stored procedures, and implemented caching mechanisms. Refactored the reporting engine to process data in parallel.',
    impact:
      'Report generation time reduced from 5-10 minutes to under 30 seconds, enabling real-time financial analysis and faster decision-making.',
    githubLink: 'https://github.com/rasyid-hidayat/financial-reporting',
  },
  {
    title: 'API Gateway & Service Mesh',
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Microservices'],
    problem:
      'Multiple services needed centralized authentication, rate limiting, and request routing without creating tight coupling.',
    solution:
      'Developed an API Gateway using Spring Boot that handles authentication, request routing, and load balancing. Integrated with PostgreSQL for service registry and implemented circuit breaker pattern for resilience.',
    impact:
      'Centralized authentication reduced development time by 40%, improved system reliability with automatic failover, and simplified service management.',
    githubLink: 'https://github.com/rasyid-hidayat/api-gateway',
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Projects"
            subtitle="Showcasing real-world solutions built with modern technologies and best practices"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                tools={project.tools}
                problem={project.problem}
                solution={project.solution}
                impact={project.impact}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

