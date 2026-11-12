import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const contactCards = [
  {
    title: "Email",
    value: "vigneshvp1501@gmail.com",
    href: "mailto:vigneshvp1501@gmail.com",
    ariaLabel: "Email Vignesh at vigneshvp1501@gmail.com",
    icon: (
      <svg
        className="h-5 w-5"
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
    title: "Phone",
    value: "+91 6382903266",
    href: "tel:+916382903266",
    ariaLabel: "Call Vignesh at +91 6382903266",
    icon: (
      <svg
        className="h-5 w-5"
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
    title: "WhatsApp",
    value: "+91 6382903266",
    href: "https://wa.me/916382903266",
    target: "_blank",
    ariaLabel: "Direct message Vignesh on WhatsApp",
    icon: (
      <svg
        className="h-5 w-5 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.031 2c-5.508 0-9.984 4.477-9.984 9.984 0 1.761.458 3.479 1.33 4.992l-1.417 5.178 5.297-1.389c1.464.799 3.111 1.22 4.774 1.22 5.508 0 9.984-4.477 9.984-9.984 0-5.508-4.476-9.985-9.984-9.985zm5.823 14.159c-.244.685-1.417 1.31-1.956 1.391-.497.075-1.148.106-3.708-.952-3.27-1.353-5.385-4.664-5.548-4.882-.163-.217-1.328-1.767-1.328-3.37 0-1.603.839-2.392 1.137-2.718.298-.326.651-.407.868-.407.217 0 .434.002.624.012.204.01.475-.078.744.567.272.651.922 2.253 1.003 2.417.081.163.136.353.027.569-.109.217-.163.353-.326.543-.163.19-.344.425-.491.571-.163.163-.333.34-.143.666.19.326.845 1.393 1.815 2.257 1.249 1.112 2.302 1.457 2.628 1.62.326.163.516.136.706-.081.19-.217.814-.949 1.031-1.275.217-.326.434-.272.733-.163.298.109 1.898.895 2.224 1.058.326.163.543.244.624.38.081.136.081.787-.163 1.472z"/>
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    value: "vigneshvp1501",
    href: "https://www.linkedin.com/in/vigneshvp1501/",
    target: "_blank",
    ariaLabel: "Visit Vignesh's LinkedIn profile",
    icon: (
      <svg
        className="h-5 w-5 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0-.01-3.2 1.6 1.6 0 0 0 .01 3.2m1.4 9.74v-8.37H5.06v8.37z" />
      </svg>
    ),
  },
  {
    title: "GitHub",
    value: "vigneshvp1501",
    href: "https://github.com/vigneshvp1501",
    target: "_blank",
    ariaLabel: "Visit Vignesh's GitHub profile",
    icon: (
      <svg
        className="h-5 w-5 fill-current"
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

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "info" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | undefined
  ) => {
    if (e === undefined) return;
    e.preventDefault();

    if (!form.name?.trim() || !form.email?.trim() || !form.message?.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all fields (Name, Email, and Message) before sending.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    // 1. Try EmailJS if environment keys are present
    if (
      emailjsConfig.serviceId &&
      emailjsConfig.templateId &&
      emailjsConfig.accessToken
    ) {
      try {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            form_name: form.name,
            to_name: config.html.fullName,
            from_email: form.email,
            to_email: config.html.email,
            message: form.message,
          },
          emailjsConfig.accessToken
        );
        setLoading(false);
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setForm(INITIAL_STATE);
        return;
      } catch (err) {
        console.warn("EmailJS failed, trying FormSubmit fallback:", err);
      }
    }

    // 2. FormSubmit AJAX fallback (works seamlessly on GitHub Pages without API keys)
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${config.html.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `Portfolio Contact from ${form.name}`,
            _captcha: "false",
          }),
        }
      );

      const result = await response.json();
      setLoading(false);

      if (result.success === "true" || result.success === true) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully to Vignesh.",
        });
        setForm(INITIAL_STATE);
      } else if (
        result.message &&
        result.message.toLowerCase().includes("activation")
      ) {
        setStatus({
          type: "info",
          message:
            "Activation required: FormSubmit has sent a 1-click confirmation link to vigneshvp1501@gmail.com. Please check your inbox and click 'Activate Form' once!",
        });
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      setStatus({
        type: "error",
        message:
          "Could not send automatically. Opening your email app to send directly...",
      });
      const subject = encodeURIComponent(
        `Portfolio Message from ${form.name || "Visitor"}`
      );
      const body = encodeURIComponent(
        `Hi Vignesh,\n\n${form.message}\n\n---\nSender: ${form.name}\nEmail: ${form.email}`
      );
      setTimeout(() => {
        window.location.href = `mailto:${config.html.email}?subject=${subject}&body=${body}`;
      }, 1200);
    }
  };

  return (
    <div
      className={`flex flex-col-reverse gap-6 lg:gap-8 overflow-hidden xl:mt-2 xl:flex-row xl:items-center`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-1 rounded-2xl p-5 sm:p-6 max-w-full xl:max-w-[560px]"
      >
        <div>
          <p className="text-[12px] sm:text-[13px] text-secondary uppercase tracking-wider font-medium">
            {config.contact.p}
          </p>
          <h2 className="text-white font-black text-[28px] sm:text-[34px] md:text-[40px] leading-tight">
            {config.contact.h2}
          </h2>
        </div>

        {/* Professional Contact Information */}
        <div className="mt-3.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {contactCards.map((card, idx) => (
            <a
              key={card.title}
              href={card.href}
              target={card.target}
              rel={card.target ? "noopener noreferrer" : undefined}
              aria-label={card.ariaLabel}
              title={`${card.title}: ${card.value}`}
              className={`group flex items-center gap-2 rounded-xl border border-white/5 bg-tertiary/70 px-2.5 py-1.5 sm:px-3 sm:py-2 transition-all duration-300 hover:border-[#915EFF]/60 hover:bg-tertiary hover:shadow-[0_0_15px_rgba(145,94,255,0.2)] ${
                idx === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg border border-[#915EFF]/25 bg-[#915EFF]/10 text-[#915EFF] transition-colors duration-300 group-hover:border-[#915EFF] group-hover:bg-[#915EFF] group-hover:text-white">
                <span className="[&>svg]:h-3.5 [&>svg]:w-3.5 sm:[&>svg]:h-4 sm:[&>svg]:w-4">{card.icon}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[9.5px] font-semibold uppercase tracking-wider text-secondary leading-tight">
                  {card.title}
                </span>
                <span className="truncate text-[11px] sm:text-[12px] font-medium text-white transition-colors duration-300 group-hover:text-[#915EFF] leading-tight mt-0.5">
                  {card.value}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Subtle Separator */}
        <div className="relative my-3 flex items-center justify-center">
          <div className="grow border-t border-white/10"></div>
          <span className="mx-3 shrink-0 text-center text-[10px] sm:text-[10.5px] font-medium uppercase tracking-wider text-secondary whitespace-nowrap">
            Or send a message directly
          </span>
          <div className="grow border-t border-white/10"></div>
        </div>

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-2.5 sm:gap-3"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-1 text-[12px] sm:text-[13px] font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border border-transparent focus:border-[#915EFF]/50 px-3.5 py-2 sm:py-2.5 text-[13px] sm:text-[14px] font-medium text-white outline-none transition-colors"
                  {...(input === "message" && { rows: 3 })}
                />
              </label>
            );
          })}

          {status.message && (
            <div
              className={`p-2.5 rounded-lg text-xs font-medium ${
                status.type === "success"
                  ? "bg-green-900/60 text-green-200 border border-green-500/30"
                  : status.type === "info"
                  ? "bg-blue-900/60 text-blue-200 border border-blue-500/30"
                  : "bg-red-900/60 text-red-200 border border-red-500/30"
              }`}
            >
              {status.message}
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-0.5">
            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary shadow-primary w-fit rounded-xl px-5 py-2 text-[13.5px] font-bold text-white shadow-md outline-none hover:bg-[#915EFF] transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            <a
              href={`mailto:${config.html.email}`}
              className="text-secondary hover:text-white text-[12px] sm:text-[13px] flex items-center gap-1.5 underline underline-offset-4"
            >
              Or email directly: {config.html.email}
            </a>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[320px] sm:h-[380px] md:h-[440px] xl:h-[520px] flex-1 max-w-[520px] xl:max-w-[560px] w-full mx-auto flex items-center justify-center"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
