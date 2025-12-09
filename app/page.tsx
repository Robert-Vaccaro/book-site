"use client";

import Image from "next/image";
import Link from "next/link";
import { BsBook } from "react-icons/bs";
import Footer from "./components/Footer";
import BooksSection from "./components/BooksSection";

export default function Home() {

  return (
    <div className="relative min-h-screen font-sans">
      {/* Background Image with Blur */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{ backgroundImage: 'url(/bg.png)' }}
      >
      </div>
      
      {/* Content */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-16 sm:px-8 lg:px-12">
        {/* Author Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 overflow-hidden rounded-xl border-4 border-white/30 shadow-xl">
            <Image
              src="/profpic.PNG"
              alt="J. S. Kade"
              width={200}
              height={200}
              className="h-60 w-48 object-cover"
              priority
            />
          </div>
          <h1 className="mb-2 text-4xl font-bold text-white sm:text-5xl">
            J. S. Kade
          </h1>
          <p className="text-xl text-zinc-200">
            Author
          </p>
          <div className="flex gap-6 pt-4">
              <a
                href="https://www.tiktok.com/@j.s.kade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-700 backdrop-blur-sm transition-colors hover:bg-amber-500 hover:text-white"
                aria-label="TikTok"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/j.s.kade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-700 backdrop-blur-sm transition-colors hover:bg-amber-500 hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <Link
                href="/books"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-700 backdrop-blur-sm transition-colors hover:bg-amber-500 hover:text-white"
                aria-label="Books"
              >
                <BsBook className="h-5 w-5" />
              </Link>
            </div>
        </div>

        {/* About Me Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-center text-3xl font-semibold text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto max-w-3xl rounded-lg bg-white/90 p-8 shadow-lg backdrop-blur-sm">
            <p className="mb-4 text-lg leading-relaxed text-zinc-800">
              Hi, I'm J. S. Kade, a passionate storyteller dedicated to crafting immersive worlds and compelling narratives. My work explores themes of adventure, fantasy, and the human experience through the lens of extraordinary characters and settings.
            </p>
            <p className="text-lg leading-relaxed text-zinc-800">
              Through my writing, I aim to transport readers to new realms while exploring timeless themes of courage, resilience, and the power of hope. Each story is a journey, and I'm thrilled to share these adventures with you.
            </p>
          </div>
        </div>

        {/* Books Section */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-semibold text-white sm:text-4xl">
            My Books
          </h2>
          <BooksSection />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
