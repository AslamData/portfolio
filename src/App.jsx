import { motion } from "framer-motion"

function App() {
  const skillGroups = [
    {
      title: "Languages & Data Processing",
      skills: ["Python", "SQL", "Scala", "Java", "PL/SQL", "Apache Spark", "PySpark", "Kafka", "Flink", "Hadoop", "Hive", "MapReduce"],
    },
    {
      title: "Cloud Data Platforms",
      skills: ["AWS", "S3", "Glue", "Redshift", "EMR", "Lambda", "Kinesis", "Athena", "Azure Data Factory", "Synapse", "GCP BigQuery", "Dataflow"],
    },
    {
      title: "Data Engineering & Quality",
      skills: ["Airflow", "dbt", "Snowflake", "ETL/ELT", "Dimensional Modeling", "Great Expectations", "Data Lineage", "Feature Engineering", "MLflow", "MLOps"],
    },
    {
      title: "Platforms & Delivery",
      skills: ["Terraform", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "PostgreSQL", "Oracle", "MongoDB", "DynamoDB", "Git", "Jira", "Agile/Scrum"],
    },
  ]

  const experiences = [
    {
      role: "Data Engineer",
      company: "T-Mobile | New York, NY",
      period: "Sep 2023 – Present",
      responsibilities: [
        "Build scalable batch and near-real-time pipelines with Python, SQL, Scala, Spark/PySpark, Kafka, and Flink for analytics and machine-learning use cases.",
        "Provision AWS data infrastructure with Terraform and orchestrate ingestion and transformation workflows using Airflow, Redshift, and Snowflake.",
        "Develop dbt dimensional models, curated datasets, and reusable feature pipelines for analysts and production ML teams.",
        "Strengthen production data quality with Great Expectations, reconciliation, monitoring, lineage, and Glue Data Catalog practices.",
        "Improve Spark and SQL performance, deploy services with Docker and Kubernetes, and support CI/CD through Jenkins and GitHub Actions.",
      ],
    },
    {
      role: "Data Engineer",
      company: "Tata Consultancy Services (TCS) | New York, NY",
      period: "Feb 2022 – Jul 2023",
      responsibilities: [
        "Built Python, SQL, Spark, and Airflow pipelines for structured and semi-structured data across Azure and GCP environments.",
        "Created ingestion and transformation workflows with Azure Data Factory, Synapse, Blob Storage, BigQuery, Cloud Storage, and Dataflow.",
        "Developed dimensional and relational models and batch processing workflows using Hive, Hadoop, and MapReduce.",
        "Prepared feature-ready datasets with dbt, tuned database queries, and supported troubleshooting, monitoring, and delivery SLAs.",
        "Worked with client stakeholders to define requirements, data mappings, security controls, test cases, and technical documentation.",
      ],
    },
    {
      role: "Junior Data Engineer",
      company: "Wipro | New York, NY",
      period: "Jan 2021 – Jan 2022",
      responsibilities: [
        "Supported data pipelines for AI platforms, transforming source data into clean, analysis-ready, ML-consumable datasets with Python, SQL, Pandas, and NumPy.",
        "Assisted with batch ingestion, reusable SQL, data validation, feature engineering, and exploratory analysis using Scikit-learn.",
        "Investigated data discrepancies, helped resolve defects, and contributed to pipeline monitoring and alerting tools.",
        "Participated in code reviews, documentation, Git workflows, Jira tracking, and Agile team delivery.",
      ],
    },
  ]

  const projects = [
    {
      number: "01",
      title: "Accident Severity Insights Pipeline",
      description: "An end-to-end pipeline that ingests, cleans, transforms, and analyzes accident data with PySpark and SQL to prepare features for ML-based severity insights and reporting.",
      tech: ["PySpark", "SQL", "Data Pipelines", "Feature Engineering", "Machine Learning"],
    },
    {
      number: "02",
      title: "TalkRx",
      description: "A FastAPI and FHIR-oriented backend for structured healthcare data exchange and API-driven workflows, using PostgreSQL for persistence.",
      tech: ["FastAPI", "FHIR", "PostgreSQL", "REST APIs", "Healthcare Data"],
    },
    {
      number: "03",
      title: "Data Quality Automation Framework",
      description: "A reusable Great Expectations validation framework that standardizes data quality checks across pipelines and reduces manual QA effort.",
      tech: ["Great Expectations", "Python", "Data Validation", "Data Pipelines"],
    },
    {
      number: "04",
      title: "ThermoGuardian AI",
      description: "A continuous fever-monitoring concept combining distributed edge devices, real-time data aggregation, signal processing, and ML trend analysis.",
      tech: ["Python", "Scikit-learn", "IoT", "Edge Devices", "Real-Time Data"],
    },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-[#08111f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08111f]/90 backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tight">AKM<span className="text-cyan-400">.</span></a>
          <div className="hidden md:flex items-center gap-7 text-sm text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
          <a href="/Aslam_Khan_Mohammed_Resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition">Resume</a>
        </nav>
      </header>

      <main>
        <section id="home" className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-7"><span className="h-2 w-2 rounded-full bg-cyan-400" />Data Engineer | AI/ML Data Platforms</div>
            <p className="text-lg text-slate-400 mb-3">Hello, I’m</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">Aslam Khan<span className="block text-cyan-400">Mohammed</span></h1>
            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-200">Data Engineer building AI-ready data platforms</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">I design and operate batch, streaming, and ML-ready data platforms across AWS, Azure, and GCP. I work with Python, SQL, Scala, Spark, Kafka, and Airflow to deliver reliable data foundations for analytics and AI.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition">Explore My Work</a>
              <a href="https://github.com/AslamData" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/20 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-300 transition">GitHub Profile</a>
              <a href="/Aslam_Khan_Mohammed_Resume.pdf" download className="rounded-lg border border-white/20 px-6 py-3 font-semibold hover:border-cyan-400 hover:text-cyan-300 transition">Download Resume</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-cyan-400/10 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
              <img src="/profile_pic.jpeg" alt="Aslam Khan Mohammed" className="h-80 w-full rounded-2xl object-cover object-top" />
              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Based in</p>
                <p className="mt-1 text-xl font-semibold">California, USA</p>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/[0.05] p-4"><p className="text-2xl font-bold text-cyan-400">5+</p><p className="mt-1 text-sm text-slate-400">Years of experience</p></div>
                  <div className="rounded-xl bg-white/[0.05] p-4"><p className="text-2xl font-bold text-cyan-400">4</p><p className="mt-1 text-sm text-slate-400">Featured projects</p></div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="border-y border-white/10 bg-white/[0.025]">
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[0.35fr_0.65fr] gap-12">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">About</p>
              <h2 className="mt-3 text-4xl font-bold">Reliable data foundations for analytics and AI.</h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="space-y-5 text-lg leading-relaxed text-slate-400">
              <p>I am a Data Engineer with 5+ years of experience designing, building, and operating large-scale batch, streaming, and ML-ready data platforms across AWS, Azure, and GCP.</p>
              <p>My work spans cloud infrastructure, distributed processing, orchestration, data modeling, quality and governance, and feature engineering. I partner with data scientists, ML engineers, analysts, and platform teams to deliver dependable data products in Agile environments.</p>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Capabilities</p><h2 className="mt-3 text-4xl font-bold">Technical Skills</h2></div>
          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => (
              <motion.div key={group.title} initial="hidden" whileInView="visible" variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.08 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 hover:border-cyan-400/50 transition">
                <h3 className="text-xl font-semibold text-cyan-300">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">{group.skills.map((skill) => <span key={skill} className="rounded-md bg-slate-800/80 px-3 py-2 text-sm text-slate-300">{skill}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="border-y border-white/10 bg-white/[0.025]">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="mb-12"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Career</p><h2 className="mt-3 text-4xl font-bold">Professional Experience</h2></div>
            <div className="relative space-y-10 md:ml-5 md:border-l md:border-cyan-400/30">
              {experiences.map((experience, index) => (
                <motion.article key={`${experience.role}-${experience.company}`} initial="hidden" whileInView="visible" variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.08 }} viewport={{ once: true }} className="relative md:pl-10">
                  <div className="hidden md:block absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-[#08111f]" />
                  <div className="rounded-2xl border border-white/10 bg-[#0d1828] p-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between"><div><h3 className="text-2xl font-semibold">{experience.role}</h3><p className="mt-1 text-cyan-400">{experience.company}</p></div><span className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">{experience.period}</span></div>
                    <ul className="mt-6 space-y-3 text-slate-400">{experience.responsibilities.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" /><span>{item}</span></li>)}</ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Selected work</p><h2 className="mt-3 text-4xl font-bold">Featured Projects</h2></div>
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.article key={project.title} initial="hidden" whileInView="visible" variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 hover:-translate-y-2 hover:border-cyan-400/50 transition duration-300">
                <div className="flex items-center justify-between"><span className="text-4xl font-bold text-white/10 group-hover:text-cyan-400/30 transition">{project.number}</span><span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">Project</span></div>
                <h3 className="mt-6 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 flex-grow leading-relaxed text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.tech.map((technology) => <span key={technology} className="rounded-md border border-white/10 px-3 py-1 text-xs text-slate-300">{technology}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="max-w-6xl mx-auto px-6 py-20 space-y-6">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid md:grid-cols-[0.35fr_0.65fr] gap-10 rounded-3xl border border-white/10 bg-[#0d1828] p-8 md:p-10">
              <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Education</p><h2 className="mt-3 text-3xl font-bold">Academic Background</h2></div>
              <div className="space-y-7">
                <div><h3 className="text-2xl font-semibold">Master of Science in Computer Engineering</h3><p className="mt-2 text-lg text-cyan-400">California State University, Northridge</p></div>
                <div><h3 className="text-2xl font-semibold">Bachelor of Engineering in Information Technology</h3><p className="mt-2 text-lg text-cyan-400">Osmania University, Telangana</p></div>
              </div>
            </motion.div>
            <div className="rounded-2xl border border-white/10 bg-[#0d1828] p-6"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Certification</p><h3 className="mt-3 text-xl font-semibold">AWS Certified Cloud Practitioner</h3></div>
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} transition={{ duration: 0.6 }} viewport={{ once: true }} className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 via-[#0d1828] to-[#0d1828] p-8 md:p-12">
            <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Contact</p><h2 className="mt-3 text-4xl md:text-5xl font-bold">Let’s build reliable data products.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">I’m interested in data engineering and AI/ML data platform opportunities.</p></div><a href="mailto:aslam.mohammed.tech@gmail.com?subject=Portfolio%20Contact" className="inline-flex justify-center rounded-lg bg-cyan-400 px-7 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition">Email Me</a></div>
            <div className="mt-10 flex flex-wrap gap-5 border-t border-white/10 pt-8 text-slate-300">
              <a href="mailto:aslam.mohammed.tech@gmail.com" className="hover:text-cyan-400 transition">aslam.mohammed.tech@gmail.com</a>
              <a href="https://www.linkedin.com/in/aslam-khan123" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">LinkedIn</a>
              <a href="https://github.com/AslamData" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">GitHub</a>
              <a href="tel:+16615442330" className="hover:text-cyan-400 transition">+1 661 544 2330</a>
              <span className="text-slate-500">California, USA</span>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10"><div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-500"><p>© 2026 Aslam Khan Mohammed</p><p>Data Engineer | AI/ML Data Platforms</p></div></footer>
    </div>
  )
}

export default App
