import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "PHIRT",
    period: "Jul 2025 – Present",
    description: [
      "Developing a React-based web application with CMS functionality and API integrations.",
      "Implementing backend features in Java, including CMS-related logic and data handling.",
      "Driving feature development and performance improvements across the application.",
      "Leveraging AI-assisted tooling in the development process to improve efficiency."
    ]
  },
  {
    role: "Software Development Engineer",
    company: "CROZ",
    period: "Jul 2020 – Jun 2025",
    subRoles: [
      {
        client: "Croatian Telecom (ISKON)",
        description: [
          "Owned and maintained ~20 production Java microservices on OpenShift powering customer-facing services.",
          "Built features end-to-end with Spring Boot, MongoDB, PostgreSQL, RabbitMQ, and ActiveMQ.",
          "Contributed to React + TypeScript frontend work alongside backend duties.",
          "Implemented observability across services using Jaeger, Prometheus, Sentry, and the ELK stack.",
          "Supported and improved CI/CD pipelines using Bamboo, Nexus, and GitLab."
        ]
      },
      {
        client: "Raiffeisenbank Austria",
        description: [
          "Developed and maintained the Cards-Core system handling credit/debit card processing, installment plans, and loyalty programs.",
          "Built backend features in Java/Spring integrating Kafka, MQ, and REST APIs.",
          "Delivered changes inside a regulated banking environment with strict review and audit processes."
        ]
      },
      {
        client: "Telenor Serbia",
        description: [
          "Developed backend functionality in Java EE.",
          "Bug fixing and new feature implementation on production telecom systems."
        ]
      }
    ]
  },
  {
    role: "Software Testing Specialist",
    company: "CROZ",
    period: "Dec 2014 – Jun 2020",
    description: [
      "Functional and regression testing across a large portfolio of banking applications for Erste & Steiermärkische Bank.",
      "Built and maintained UI and API automation suites in Tricentis Tosca, focused on coverage and reliability.",
      "Validated defects, opened tickets, and produced detailed reports for development teams.",
      "Collaborated with business users to support UAT and worked with DB/DWH experts to verify data accuracy."
    ]
  },
  {
    role: "System Administrator",
    company: "I&D COM",
    period: "Nov 2012 – Nov 2014",
    description: [
      "Maintained IT infrastructure and provided technical support for internal systems."
    ]
  },
  {
    role: "System Administrator",
    company: "Mega Biro",
    period: "Sep 2010 – Oct 2012",
    description: [
      "Provided IT support and administration of internal networks and systems."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-secondary/20 relative" id="experience">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Trajectory</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-[29px] top-2 w-3 h-3 bg-primary rounded-full hidden md:block shadow-[0_0_10px_rgba(250,186,49,0.5)]" />

                <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-lg text-primary font-mono">
                        <Building2 className="w-5 h-5" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm bg-secondary px-3 py-1 rounded-full self-start">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {exp.description && (
                    <ul className="space-y-3 mt-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5 opacity-60">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.subRoles && (
                    <div className="space-y-8 mt-6">
                      {exp.subRoles.map((sub, i) => (
                        <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border">
                          <div className="absolute left-[-4px] top-2.5 w-2 h-2 bg-muted-foreground/30 rounded-full" />
                          <h4 className="text-lg font-semibold text-foreground/90 mb-4">{sub.client}</h4>
                          <ul className="space-y-3">
                            {sub.description.map((item, j) => (
                              <li key={j} className="flex items-start gap-3 text-muted-foreground">
                                <span className="text-primary mt-1.5 opacity-60">•</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}