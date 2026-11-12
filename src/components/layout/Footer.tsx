import { config } from "../../constants/config";

const Footer = () => {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-primary/80 py-6 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-center text-[13px] text-secondary sm:text-[14px]">
          © {new Date().getFullYear()} {config.html.fullName}. All rights reserved.
        </p>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-[13px] text-secondary transition-colors duration-300 hover:text-[#915EFF]"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
