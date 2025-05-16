"use client";

import Link from "next/link";

export default function Services() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">admitsonly</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="p-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6">Services</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Personalized college roadmap planning</li>
          <li>Application strategy and essay review</li>
          <li>Test prep guidance (SAT, ACT, etc.)</li>
          <li>Interview preparation and mock sessions</li>
          <li>Ongoing academic mentoring and progress tracking</li>
        </ul>
      </main>

      <footer className="p-6 text-center text-sm text-gray-500">
        &copy; {year} admitsonly. All rights reserved.
      </footer>
    </div>
  );
}
