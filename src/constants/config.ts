type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Vignesh V P — Cloud & DevOps Engineer | 3D Portfolio",
    fullName: "Vignesh V P",
    email: "vigneshvp1501@gmail.com",
  },
  hero: {
    name: "Vignesh",
    p: ["I build cloud infrastructure, CI/CD pipelines,", "and scalable web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am an M.Tech Cloud Computing student and aspiring DevOps / Cloud Engineer with hands-on experience across AWS, Docker, Linux, Terraform, Python, and Full-Stack engineering. I specialize in architecting automated CI/CD pipelines, container orchestration, predictive cloud resource optimization, and resilient cloud architectures. Let's build scalable, production-grade systems!`,
    },
    experience: {
      p: "My journey & academic background",
      h2: "Experience & Education.",
    },
    feedbacks: {
      p: "What collaborators say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my expertise in CloudOps platforms, AI-driven cloud resource optimization, and automated infrastructure pipelines. Each project is linked directly to its GitHub repository with complete source code and architecture diagrams.`,
    },
  },
};
