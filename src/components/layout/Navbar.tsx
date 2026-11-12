import { useEffect, useState } from "react";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white items-center gap-2">
            <span>{config.hero.name}</span>
            <span className="hidden md:inline text-secondary text-[14px] font-normal">
              | Cloud & DevOps
            </span>
          </p>
        </a>

        <div className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8">
          <ul className="list-none flex flex-row items-center gap-4 md:gap-6 lg:gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id ? "text-white" : "text-secondary"
                } cursor-pointer text-[16px] md:text-[18px] font-medium hover:text-white transition-colors`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="h-5 w-[1px] bg-white/15" />

          <div className="flex items-center gap-2 md:gap-2.5">
            <a
              href="https://github.com/vigneshvp1501"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vignesh's GitHub profile"
              className="flex items-center gap-1.5 rounded-lg border border-[#915EFF]/40 bg-[#915EFF]/15 px-2.5 py-1.5 md:px-3 text-[13px] md:text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#915EFF] hover:shadow-[0_0_15px_rgba(145,94,255,0.4)]"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vigneshvp1501/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="flex items-center gap-1.5 rounded-lg border border-[#0A66C2]/40 bg-[#0A66C2]/15 px-2.5 py-1.5 md:px-3 text-[13px] md:text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0-.01-3.2 1.6 1.6 0 0 0 .01 3.2m1.4 9.74v-8.37H5.06v8.37z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://wa.me/916382903266"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct message on WhatsApp"
              className="flex items-center gap-1.5 rounded-lg border border-[#25D366]/40 bg-[#25D366]/15 px-2.5 py-1.5 md:px-3 text-[13px] md:text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2c-5.508 0-9.984 4.477-9.984 9.984 0 1.761.458 3.479 1.33 4.992l-1.417 5.178 5.297-1.389c1.464.799 3.111 1.22 4.774 1.22 5.508 0 9.984-4.477 9.984-9.984 0-5.508-4.476-9.985-9.984-9.985zm5.823 14.159c-.244.685-1.417 1.31-1.956 1.391-.497.075-1.148.106-3.708-.952-3.27-1.353-5.385-4.664-5.548-4.882-.163-.217-1.328-1.767-1.328-3.37 0-1.603.839-2.392 1.137-2.718.298-.326.651-.407.868-.407.217 0 .434.002.624.012.204.01.475-.078.744.567.272.651.922 2.253 1.003 2.417.081.163.136.353.027.569-.109.217-.163.353-.326.543-.163.19-.344.425-.491.571-.163.163-.333.34-.143.666.19.326.845 1.393 1.815 2.257 1.249 1.112 2.302 1.457 2.628 1.62.326.163.516.136.706-.081.19-.217.814-.949 1.031-1.275.217-.326.434-.272.733-.163.298.109 1.898.895 2.224 1.058.326.163.543.244.624.38.081.136.081.787-.163 1.472z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[170px] rounded-xl p-6 shadow-2xl border border-white/10`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-3.5">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <div className="my-1 h-[1px] w-full bg-white/10" />
              <li>
                <a
                  href="https://github.com/vigneshvp1501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-poppins text-[15px] font-medium text-white hover:text-[#915EFF]"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vigneshvp1501/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-poppins text-[15px] font-medium text-[#0A66C2] hover:underline"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/916382903266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-poppins text-[15px] font-medium text-[#25D366] hover:underline"
                >
                  WhatsApp ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
