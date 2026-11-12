import { config } from "../../constants/config";

const footerContacts = [
  {
    name: "Email",
    value: "vigneshvp1501@gmail.com",
    href: "mailto:vigneshvp1501@gmail.com",
    ariaLabel: "Email Vignesh at vigneshvp1501@gmail.com",
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "Phone",
    value: "+91 6382903266",
    href: "tel:+916382903266",
    ariaLabel: "Call Vignesh at +91 6382903266",
    icon: (
      <svg
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    value: "vigneshvp1501",
    href: "https://www.linkedin.com/in/vigneshvp1501/",
    target: "_blank",
    ariaLabel: "Visit Vignesh's LinkedIn profile",
    icon: (
      <svg
        className="h-4 w-4 shrink-0 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0-.01-3.2 1.6 1.6 0 0 0 .01 3.2m1.4 9.74v-8.37H5.06v8.37z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    value: "vigneshvp1501",
    href: "https://github.com/vigneshvp1501",
    target: "_blank",
    ariaLabel: "Visit Vignesh's GitHub profile",
    icon: (
      <svg
        className="h-4 w-4 shrink-0 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-primary/80 py-6 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 lg:flex-row">
        <p className="text-center text-[13px] text-secondary sm:text-[14px]">
          © {new Date().getFullYear()} {config.html.fullName}. All rights reserved.
        </p>

        <div className="grid w-full grid-cols-1 gap-2.5 sm:w-auto sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:gap-3">
          {footerContacts.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.target}
              rel={item.target ? "noopener noreferrer" : undefined}
              aria-label={item.ariaLabel}
              title={`${item.name}: ${item.value}`}
              className="group flex items-center justify-center sm:justify-start gap-2.5 rounded-lg border border-white/5 bg-tertiary/50 px-3 py-2 text-[12px] sm:text-[13px] text-secondary transition-all duration-300 hover:border-[#915EFF]/50 hover:bg-tertiary hover:text-white"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#915EFF]/10 text-[#915EFF] transition-colors group-hover:bg-[#915EFF] group-hover:text-white">
                {item.icon}
              </span>
              <span className="font-medium text-white-100 group-hover:text-[#915EFF] transition-colors truncate">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
