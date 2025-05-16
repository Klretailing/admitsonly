"use client";

import Link from "next/link";

export default function About() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">admitsonly</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="p-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6">About Me</h2>
        <p className="mb-4">
          Hi, I’m your mentor and college consultant dedicated to helping
          students build personalized roadmaps to get into top colleges in the nation.
        </p>
        <p>
          With years of experience guiding high school and college students,
          I focus on mentoring students to stay on track, improve their applications,
          and navigate the complex admissions process with confidence.
        </p>
      </main>

      <footer className="p-6 text-center text-sm text-gray-500">
        &copy; {year} admitsonly. All rights reserved.
      </footer>
    </div>
  );
}
