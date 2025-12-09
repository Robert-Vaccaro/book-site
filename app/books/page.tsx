"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import BooksSection from "../components/BooksSection";

export default function BooksPage() {

  return (
    <div className="relative min-h-screen font-sans">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{ backgroundImage: 'url(/bg.png)' }}
      >
      </div>
      
      {/* Content */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-16 sm:px-8 lg:px-12">
        {/* Header with Back Link */}
        <div className="relative mb-8 flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <h2 className="absolute left-1/2 -translate-x-1/2 text-center text-3xl font-semibold text-white sm:text-4xl">
            My Books
          </h2>
        </div>

        {/* Books Section */}
        <div className="mb-12">
          <BooksSection />
        </div>

        <Footer />
      </main>
    </div>
  );
}

