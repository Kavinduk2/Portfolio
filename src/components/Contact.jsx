import React, { useState } from "react";

export default function Contact({ isDark }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className={`w-full py-24 px-8 relative overflow-hidden ${isDark ? "bg-[#1a1a1a]" : "bg-[#f0efed]"}`}
    >
      <div
        className={`absolute -bottom-8 left-0 right-0 text-center select-none pointer-events-none ${isDark ? "text-white/5" : "text-black/5"}`}
      >
        GET IN TOUCH
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <p className={`text-xs tracking-widest mb-2 uppercase ${isDark ? "text-gray-500" : "text-gray-400"}`}>Contact</p>
        <h2
          className={`text-5xl md:text-6xl font-light mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
          style={{ fontFamily: "Georgia, serif" }}
        >
          Let's work together.
        </h2>
        <p className={`mb-12 text-lg ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Interested in hiring me? I would love to hear from you.
        </p>

        {sent ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">✓</div>
            <h3 className={`text-2xl font-light ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontFamily: "Georgia, serif" }}>
              Message sent!
            </h3>
            <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>I'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`text-xs tracking-widest uppercase block mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  required
                  placeholder="Your name"
                  className={`w-full bg-transparent border-b py-3 text-base placeholder-opacity-50 focus:outline-none transition-colors ${isDark ? "border-gray-700 text-white placeholder-gray-500 focus:border-white" : "border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-900"}`}
                />
              </div>
              <div>
                <label className={`text-xs tracking-widest uppercase block mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handle}
                  required
                  placeholder="your@email.com"
                  className={`w-full bg-transparent border-b py-3 text-base placeholder-opacity-50 focus:outline-none transition-colors ${isDark ? "border-gray-700 text-white placeholder-gray-500 focus:border-white" : "border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-900"}`}
                />
              </div>
            </div>
            <div>
              <label className={`text-xs tracking-widest uppercase block mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                required
                rows={4}
                placeholder="Tell me about your project..."
                className={`w-full bg-transparent border-b py-3 text-base resize-none placeholder-opacity-50 focus:outline-none transition-colors ${isDark ? "border-gray-700 text-white placeholder-gray-500 focus:border-white" : "border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-900"}`}
              />
            </div>
            {error && <p className={`text-sm ${isDark ? "text-red-300" : "text-red-600"}`}>{error}</p>}
            <div className="flex justify-between items-center pt-4">
              <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>Interested in hiring me?</p>
              <button
                onClick={submit}
                disabled={sending}
                className={`px-8 py-4 text-white rounded-full text-sm tracking-widest uppercase transition-all duration-300 flex items-center gap-2 ${isDark ? "bg-white text-black hover:bg-gray-200" : "bg-gray-900 hover:bg-gray-700"}`}
              >
                {sending ? "Sending..." : "Send Message"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
