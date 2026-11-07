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
    title: "Vignesh P — Cloud Operations Engineer | 3D Portfolio",
    fullName: "Vignesh P",
    email: "vigneshvp1501@gmail.com",
  },
  hero: {
    name: "Vignesh P",
    p: [
      "Cloud Operations Engineer | AWS Cloud",
      "Infrastructure Monitoring & Linux Administration",
    ],
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
      content: `M.Tech Cloud Computing graduate with hands-on project experience in AWS (EC2, S3, IAM, CloudWatch), Linux administration, Docker, Python, and Bash scripting. Built real infrastructure projects involving automated monitoring, incident alerting, predictive auto-scaling, and cloud backup pipelines — looking to apply that foundation in a cloud operations role.`,
    },
    experience: {
      p: "My Education & Experience",
      h2: "Experience & Education.",
    },
    feedbacks: {
      p: "Recommendations & Feedback",
      h2: "Testimonials.",
    },
    works: {
      p: "My technical portfolio",
      h2: "Projects.",
      content: `The following projects from my resume showcase my expertise in AWS Cloud Operations, Linux automation, predictive auto-scaling, and decentralized systems. Each project is documented with real-world architecture, metrics, and source code on GitHub.`,
    },
  },
};
