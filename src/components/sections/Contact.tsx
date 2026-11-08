import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

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
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}

          {status.message && (
            <div
              className={`p-4 rounded-xl text-sm font-medium ${
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

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none hover:bg-[#915EFF] transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            <a
              href={`mailto:${config.html.email}`}
              className="text-secondary hover:text-white text-[14px] flex items-center gap-2 underline underline-offset-4"
            >
              Or email directly: {config.html.email}
            </a>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
