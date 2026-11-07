import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Cloud & DevOps Engineer",
    icon: backend,
  },
  {
    title: "AWS Infrastructure Specialist",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
  {
    title: "CI/CD & Automation Architect",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "M.Tech in Cloud Computing",
    companyName: "Master's Degree",
    icon: meta,
    iconBg: "#1d1836",
    date: "2024 - Present",
    points: [
      "Specializing in Cloud Architecture, Distributed Systems, Containerization, and DevOps workflows.",
      "Developing production-simulation CloudOps pipelines with Terraform, Ansible, Jenkins, and Prometheus.",
      "Researching predictive auto-scaling and intelligent cloud cost optimization using machine learning models.",
      "Architecting resilient multi-tier and hybrid cloud infrastructures on AWS.",
    ],
  },
  {
    title: "CloudOps & DevOps Engineer",
    companyName: "CloudOps Automation Platform",
    icon: tesla,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Engineered an automated SaaS CloudOps platform utilizing Docker CE, Docker Compose, and Jenkins CI/CD.",
      "Implemented Infrastructure as Code (IaC) with Terraform for automated cloud provisioning.",
      "Configured comprehensive observability with Prometheus, Grafana dashboards, and automated alert routing.",
      "Automated configuration management and disaster recovery backup routines with Ansible and Bash.",
    ],
  },
  {
    title: "Cloud Optimization Architect",
    companyName: "AI Cloud Resource Optimizer",
    icon: starbucks,
    iconBg: "#1d1836",
    date: "2025 - 2026",
    points: [
      "Designed predictive auto-scaling engine using a containerized LSTM neural network for AWS Auto Scaling Groups.",
      "Streamed EC2 metrics and published predicted workload metrics directly into AWS CloudWatch custom namespaces.",
      "Implemented intelligent cooldown logic and real-time cost-impact logging for elastic cloud clusters.",
      "Automated full cloud stack deployment with AWS CloudFormation templates.",
    ],
  },
  {
    title: "Full-Stack Developer",
    companyName: "Software Projects",
    icon: shopify,
    iconBg: "#383E56",
    date: "2024 - 2025",
    points: [
      "Developed full-stack web applications integrating React, TypeScript, Node.js, and RESTful APIs.",
      "Architected relational and document databases with PostgreSQL and MongoDB for low-latency queries.",
      "Built automated data pipelines, browser automation workflows, and internal productivity tools.",
      "Practiced agile development with Git version control, pull requests, and automated deployment.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Vignesh's deep understanding of AWS, containerization, and automated CI/CD pipelines makes him an invaluable Cloud & DevOps engineer.",
    name: "DevOps Peer",
    designation: "Cloud Engineer",
    company: "Cloud Community",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "The CloudOps platform and predictive auto-scaling models Vignesh built show exceptional problem-solving and systems architecture skills.",
    name: "Project Collaborator",
    designation: "Full Stack Engineer",
    company: "Open Source Contributor",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    testimonial:
      "Reliable, detail-oriented, and constantly pushing forward with production-grade cloud and automation best practices.",
    name: "Academic Mentor",
    designation: "Professor",
    company: "SRM / Cloud Computing Dept",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "CloudOps Automation Platform",
    description:
      "Industry-grade CloudOps platform featuring incident management, Jenkins CI/CD pipeline, Docker container orchestration, Prometheus & Grafana monitoring, Terraform IaC, and Ansible configuration.",
    tags: [
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "terraform",
        color: "green-text-gradient",
      },
      {
        name: "jenkins",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/vigneshvp1501/cloudops-automation-platform",
  },
  {
    name: "AI Cloud Resource Optimizer",
    description:
      "Predictive auto-scaling system using Dockerized LSTM neural network model, AWS CloudWatch custom metrics, and Auto Scaling Groups (ASG) to optimize cloud cost and prevent performance degradation.",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "python-lstm",
        color: "green-text-gradient",
      },
      {
        name: "cloudwatch",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/vigneshvp1501/cloud-optimizer",
  },
  {
    name: "Hybrid Cloud Backup System",
    description:
      "Automated disaster recovery and system log archival pipeline transferring system logs (/var/log) from local Linux servers to AWS S3 bucket using shell scripting and crontab automation.",
    tags: [
      {
        name: "aws-s3",
        color: "blue-text-gradient",
      },
      {
        name: "bash",
        color: "green-text-gradient",
      },
      {
        name: "crontab",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/vigneshvp1501/Hybrid-Cloud-Backup-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };
