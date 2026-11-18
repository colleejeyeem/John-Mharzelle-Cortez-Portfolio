
"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
    >
      {/* Section Heading */}
      <div className="max-w-3xl">
        <p className="mb-5 text-xs tracking-[0.2em] text-[#6B675F]">
          04 / GET IN TOUCH
        </p>

        <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
          Let&apos;s build something meaningful together.
        </h2>

        <p className="mt-8 max-w-xl text-base leading-8 text-[#6B675F]">
          I&apos;m open to professional opportunities,
          collaborations, and conversations about
          technology and digital solutions.
        </p>
      </div>

      {/* Email */}
      <div className="mt-12 border-t border-[#DED9CF] pt-8">
        <p className="mb-4 text-xs tracking-[0.15em] text-[#6B675F]">
          EMAIL
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&to=johnmharzellecortez@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xl font-medium transition-opacity duration-300 hover:opacity-50 md:text-3xl"
        >
          johnmharzellecortez@gmail.com ↗
        </a>
      </div>

      {/* LinkedIn */}
      <div className="mt-8">
        <a
          href="https://www.linkedin.com/in/john-mharzelle-cortez-33a2a2330/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#6B675F] transition-colors duration-300 hover:text-[#171717]"
        >
          LinkedIn ↗
        </a>
      </div>

      {/* Contact Form */}
      <div className="mt-20 border-t border-[#DED9CF] pt-12">
        <div className="mb-10">
          <p className="mb-4 text-xs tracking-[0.15em] text-[#6B675F]">
            SEND A MESSAGE
          </p>

          <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
            Have a project or opportunity in mind?
          </h3>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* Name */}
          <div>
            <label className="mb-3 block text-sm text-[#6B675F]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full border-b border-[#DED9CF] bg-transparent py-4 text-sm outline-none transition-colors focus:border-[#171717]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-3 block text-sm text-[#6B675F]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full border-b border-[#DED9CF] bg-transparent py-4 text-sm outline-none transition-colors focus:border-[#171717]"
            />
          </div>

          {/* Subject */}
          <div className="md:col-span-2">
            <label className="mb-3 block text-sm text-[#6B675F]">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this regarding?"
              required
              className="w-full border-b border-[#DED9CF] bg-transparent py-4 text-sm outline-none transition-colors focus:border-[#171717]"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="mb-3 block text-sm text-[#6B675F]">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={5}
              required
              className="w-full resize-none border-b border-[#DED9CF] bg-transparent py-4 text-sm outline-none transition-colors focus:border-[#171717]"
            />
          </div>

          {/* Status Message */}
          {status === "success" && (
            <p className="text-sm text-green-700 md:col-span-2" role="status">
              Your message has been sent successfully. Thank you for reaching out!
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-700 md:col-span-2" role="alert">
              Something went wrong. Please try again or contact me directly through email.
            </p>
          )}

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center gap-3 rounded-full border border-[#171717] px-7 py-4 text-sm transition-all duration-300 hover:bg-[#171717] hover:text-[#F4F1EA] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send Message"}
              {!isSending && <span>↗</span>}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
