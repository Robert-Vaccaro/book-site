"use client";

import Image from "next/image";
import { useState } from "react";
import { FaAmazon } from "react-icons/fa";

interface Book {
  id: string;
  title: string;
  coverImage: string;
  amazonLink: string;
  description?: string;
}

const books: Book[] = [
  {
    id: "1",
    title: "Guardians of Exile",
    coverImage: "/goe-pic.png",
    amazonLink: "https://www.amazon.com/Guardians-Exile-J-S-Kade-ebook/dp/B0CYJ72VFW/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Cs960NWvoFDctWwNzYdwFSqflUO0Mk68vRT5mNb5veXf8I3WdIvRpnQjmhA8FMTb-xsq2jyuA3v16kjx1JbNwBOPbzl-mLh8MfR4QANlrwD_2PNIfZ8Ekj6qnp0MPHmzXbuxLtxetvv0q8WuA_E84yVGGRDnDOIoCDuNtMVnQ6u_LYZPXe0jRf2Oec2reiJ5hKJFfyxzGOfvAXbC_OOW1siNNgOZRMX2ChK7EQlo3GE.OsVe0fqL6-vRR_C6xo5l-7dBdYiRx1TZXCxUDfO_Zls&dib_tag=se&keywords=guardians+of+exile&qid=1765266160&sr=8-1",
    description: `Ethan Walker's worst night in New York should've ended with a delayed subway train—not with the floor splitting open beneath his feet.

In an instant, Ethan is torn from 2019 Manhattan and thrown onto an alien world ruled by the Guardians: ageless beings with crystalline collars that can bend space, time—and send you home with a touch. He's not the only one stolen. Scattered across this hostile planet are strangers ripped from every corner of history: a stone-age hunter, a guilt-ridden conquistador, a cyberpunk hacker from a neon future, and more. Their only common ground? They've all been labeled "anomalies" and locked away.

When Ethan is singled out by Kaelor, the enigmatic leader of the Guardians, he's dragged from the cells and forced into the role of advisor-servant. It's the perfect position to do the one thing no prisoner has ever done: plan a real escape. With the help of Sayori—a razor-sharp hacker who trusts him about as far as she can throw him—and a fragile alliance of survivors, Ethan uncovers the truth behind the collars, the living prison wrapped around them, and the vast system pulsing beneath the planet's surface.

But the deeper they dig, the clearer it becomes: the Guardians aren't just jailers. They're caretakers of something far older and far more dangerous.

To win their freedom, Ethan and his makeshift family will have to break the very heart of the system—and decide whether a broken world without chains is better than a perfect one built on control.`,
  },
];

export default function BooksSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white/90 px-4 py-3 pl-10 text-zinc-900 placeholder-zinc-500 shadow-sm backdrop-blur-sm transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
          <svg
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      
      {/* Books Display */}
      {filteredBooks.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-8">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
            >
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={book.coverImage}
                    alt={`${book.title} book cover`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 384px"
                  />
                </div>
              </a>
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-zinc-900">
                  {book.title}
                </h3>
                <div className="mb-4 flex flex-col gap-2">
                  {book.description && (
                    <button
                      onClick={() => setSelectedBook(book)}
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
                    >
                      View Book Description
                    </button>
                  )}
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
                  >
                    <FaAmazon className="h-4 w-4 mt-0.5" />
                    View on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg text-white">
            No books found matching "{searchQuery}"
          </p>
        </div>
      )}

      {/* Description Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBook(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          
          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-2xl rounded-lg bg-white/95 shadow-2xl backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute right-4 top-4 z-20 rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
              aria-label="Close"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            {/* Modal Content */}
            <div className="max-h-[400px] overflow-y-auto p-6 pr-12">
              <h2 className="mb-4 text-2xl font-bold text-zinc-900">
                {selectedBook.title}
              </h2>
              {selectedBook.description && (
                <p className="whitespace-pre-line text-base leading-relaxed text-zinc-700">
                  {selectedBook.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

