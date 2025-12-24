import React from 'react';
import { BookOpen, ExternalLink, Star } from 'lucide-react';
import { books, images } from '../data/mock';

const BooksSection = () => {
  return (
    <section id="books" className="relative py-24 lg:py-32 bg-stone-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={images.texture3}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-700/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-sm tracking-widest uppercase font-medium">Published Works</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-stone-100 mt-4 mb-6">
            Wisdom in<br />
            <span className="text-emerald-400">Written Form</span>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            Dane's books offer practical wisdom and profound insights on relationships, well-being, 
            and creating a life of meaning and beauty.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <a
              key={book.id}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-stone-900/50 backdrop-blur-sm p-6 rounded-lg border border-stone-700/50 hover:border-emerald-600/50 hover:bg-stone-900/80 transition-all duration-500"
            >
              {/* Book Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                </div>
                <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-emerald-400 transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-stone-100 mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                {book.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                {book.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                ))}
                <span className="text-stone-500 text-xs ml-2">Amazon</span>
              </div>
            </a>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="https://daneeasterrose.com/all-books"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-stone-600 text-stone-300 tracking-wide uppercase text-sm hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300 rounded"
          >
            View All Books
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
