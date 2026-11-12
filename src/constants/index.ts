import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TInternship,
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
  srm,
  stjosephs,
  backup_pipeline,
  cloud_optimizer,
  evoting_blockchain,
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
    id: "internship",
    title: "Internship",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Cloud Operations & Support",
    icon: backend,
  },
  {
    title: "Infrastructure Monitoring",
    icon: web,
  },
  {
    title: "Linux & Shell Automation",
    icon: mobile,
  },
  {
    title: "Cloud Automation & AWS",
    icon: creator,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
];

const experiences: TExperience[] = [
  {
    title: "M.Tech in Cloud Computing",
    companyName: "SRM University, Chennai",
    icon: srm,
    iconBg: "#ffffff",
    date: "2024 – 2026",
    points: [
      "Specialized in AWS cloud architecture (EC2, S3, IAM, CloudWatch, Lambda), distributed systems, and infrastructure monitoring.",
      "Designed and built an AI-driven autonomous predictive auto-scaling system using LSTM neural networks and AWS CloudWatch custom metrics.",
      "Architected a zero-touch hybrid-cloud log backup & archival pipeline to Amazon S3 with automated cron scheduling and least-privilege IAM security.",
      "Completed certifications: AWS Academy Cloud Developing, AWS Academy Cloud Security, and Google Data Analytics.",
    ],
  },
  {
    title: "B.E. in Electronics & Communication",
    companyName: "St. Joseph's College of Engineering, Chennai",
    icon: stjosephs,
    iconBg: "#ffffff",
    date: "2020 – 2024",
    points: [
      "Built strong foundational expertise in computer networks (DNS, DHCP, TCP/IP, HTTP/HTTPS, SSL/TLS), Linux systems, and software engineering.",
      "Engineered a Blockchain-Based E-Voting System deploying smart contracts on Ethereum (Solidity) and Solana (Rust).",
      "Developed the full responsive web frontend with HTML5, CSS3, and JavaScript with wallet integration and asynchronous transaction handling.",
      "Achieved <500 ms transaction confirmation time with 100% immutability across all test cycles.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Vignesh's expertise in AWS cloud services, Linux administration, and automated backup pipelines makes him an exceptional candidate for cloud operations.",
    name: "Cloud Architect",
    designation: "Technical Mentor",
    company: "AWS Community",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "The predictive auto-scaling model and CloudWatch integration Vignesh engineered achieved impressive 94.1% accuracy and real infrastructure cost savings.",
    name: "Department Head",
    designation: "Professor",
    company: "SRM University",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    testimonial:
      "Vignesh brings dedication to high availability, thorough root cause analysis (RCA), and clean zero-touch shell automation workflows.",
    name: "Senior Engineer",
    designation: "DevOps Lead",
    company: "Infrastructure Peer",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Hybrid-Cloud Automated Backup Pipeline",
    description:
      "Resilient zero-touch automated log management pipeline on Linux to compress /var/log using tar/gzip, verify exit status, and offload diagnostic data to an AWS S3 bucket on a midnight cron schedule. Secured using least-privilege IAM roles, eliminating disk exhaustion downtime.",
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
        name: "linux-cron",
        color: "pink-text-gradient",
      },
    ],
    image: backup_pipeline,
    sourceCodeLink: "https://github.com/vigneshvp1501/Hybrid-Cloud-Backup-Project",
  },
  {
    name: "AI Autonomous Cloud Optimizer",
    description:
      "Predictive auto-scaling platform using LSTM neural networks and AWS CloudWatch custom metrics. Forecasts workloads, triggers proactive scaling actions via CloudWatch alarms and Auto Scaling Groups (ASG), achieving 94.1% forecasting accuracy, 81% faster scaling response, and 46.3% cost reduction.",
    tags: [
      {
        name: "aws-cloudwatch",
        color: "blue-text-gradient",
      },
      {
        name: "python-lstm",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: cloud_optimizer,
    sourceCodeLink: "https://github.com/vigneshvp1501/cloud-optimizer",
  },
  {
    name: "Blockchain-Based E-Voting System",
    description:
      "Tamper-proof decentralized voting system deploying smart contracts on Ethereum (Solidity) and Solana (Rust). Developed full frontend using HTML5, CSS3, and JavaScript with async/await wallet integration, achieving <500 ms transaction confirmation time and 100% immutability.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "solana-rust",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: evoting_blockchain,
    sourceCodeLink: "https://github.com/vigneshvp1501",
  },
];

const internships: TInternship[] = [];

export { services, technologies, experiences, internships, testimonials, projects };
