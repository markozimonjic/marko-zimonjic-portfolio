import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Activity, ShieldCheck, Braces, FileCode, FileType } from "lucide-react";
import { SiSpring, SiHibernate, SiApachemaven, SiReact, SiRedux, SiPostgresql, SiMongodb, SiRabbitmq, SiApachekafka, SiDocker, SiGitlab, SiPrometheus, SiSentry } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages & Core",
    icon: <Code2 className="w-5 h-5 text-primary" />,
    items: [
      { name: "Java", icon: <FaJava className="w-4 h-4" /> },
      { name: "JavaScript", icon: <Braces className="w-4 h-4" /> },
      { name: "TypeScript", icon: <FileType className="w-4 h-4" /> },
      { name: "SQL", icon: <FileCode className="w-4 h-4" /> }
    ]
  },
  {
    title: "Backend & Frameworks",
    icon: <Server className="w-5 h-5 text-primary" />,
    items: [
      { name: "Spring Boot", icon: <SiSpring className="w-4 h-4" /> },
      { name: "Spring / Java EE", icon: <SiSpring className="w-4 h-4" /> },
      { name: "Hibernate", icon: <SiHibernate className="w-4 h-4" /> },
      { name: "Maven", icon: <SiApachemaven className="w-4 h-4" /> },
      { name: "REST / SOAP", icon: <Server className="w-4 h-4" /> },
      { name: "Microservices", icon: <Server className="w-4 h-4" /> }
    ]
  },
  {
    title: "Data & Storage",
    icon: <Database className="w-5 h-5 text-primary" />,
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4" /> },
      { name: "Oracle", icon: <Database className="w-4 h-4" /> }
    ]
  },
  {
    title: "Messaging",
    icon: <Activity className="w-5 h-5 text-primary" />,
    items: [
      { name: "RabbitMQ", icon: <SiRabbitmq className="w-4 h-4" /> },
      { name: "Kafka", icon: <SiApachekafka className="w-4 h-4" /> },
      { name: "ActiveMQ", icon: <Server className="w-4 h-4" /> },
      { name: "MQ", icon: <Server className="w-4 h-4" /> }
    ]
  },
  {
    title: "Infra & Observability",
    icon: <Server className="w-5 h-5 text-primary" />,
    items: [
      { name: "OpenShift", icon: <SiDocker className="w-4 h-4" /> },
      { name: "CI/CD (GitLab, Nexus, Bamboo)", icon: <SiGitlab className="w-4 h-4" /> },
      { name: "Prometheus", icon: <SiPrometheus className="w-4 h-4" /> },
      { name: "Jaeger", icon: <Activity className="w-4 h-4" /> },
      { name: "Sentry", icon: <SiSentry className="w-4 h-4" /> },
      { name: "ELK Stack", icon: <Activity className="w-4 h-4" /> }
    ]
  },
  {
    title: "Frontend & QA",
    icon: <Layout className="w-5 h-5 text-primary" />,
    items: [
      { name: "React", icon: <SiReact className="w-4 h-4" /> },
      { name: "Redux", icon: <SiRedux className="w-4 h-4" /> },
      { name: "Tricentis Tosca", icon: <ShieldCheck className="w-4 h-4" /> },
      { name: "Functional & Regression Testing", icon: <ShieldCheck className="w-4 h-4" /> }
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-secondary rounded-lg">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 text-muted-foreground group">
                    <span className="text-primary/50 group-hover:text-primary transition-colors">
                      {item.icon}
                    </span>
                    <span className="font-mono text-sm">{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}