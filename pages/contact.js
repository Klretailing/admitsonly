"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const year = new Date().getFullYear();
  const [form, setForm] = useState({ name: "", email: "", inquiry: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, we'll just simulate submission success.
    // Later we can hook this to Formspree or email service.
    setSubmitted(true);

    // Optionally, clear the form
    setForm({ name: "", email: "", inquiry: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">admitsonly</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
        </nav>
      </header>

      <main className="p-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6">Join the Waitlist</h2>

        {submitted ? (
          <div className="bg-green-100 p-4 rounded mb-6">
            Thanks for joining the waitlist! We'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <label className="block">
              Name
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded mt-1"
              />
            </label>

            <label className="block">
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded mt-1"
              />
            </label>

            <label className="block">
              Inquiry / What's Needed
              <textarea
                required
                name="inquiry"
                value={form.inquiry}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 p-2 rounded mt-1"
              />
            </label>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800"
            >
              Join Waitlist
            </button>
          </form>
        )}

        <h2 className="text-3xl font-semibold mb-4">Submit a Deposit</h2>
        <p className="mb-4">Click the button below to pay your deposit securely via PayPal.</p>

        {/* PayPal button */}
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
          className="mb-20"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          {/* Replace the hosted_button_id with your PayPal button ID */}
          <input type="hidden" name="hosted_button_id" value="YOUR_PAYPAL_BUTTON_ID" />
          <input
            type="submit"
            value="Pay Deposit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-xl cursor-pointer"
          />
        </form>
      </main>

      <footer className="p-6 text-center text-sm text-gray-500">
        &copy; {year} admitsonly. All rights reserved.
      </footer>
    </div>
  );
}
