import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TenXDesigningPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fitPoints = [
    {
      title: "Does it transcend the scarcity mindset?",
      content: "A 10 X Design is very inefficient initially because it begins by questioning assumptions, by learning and entering the unknown, which by definition is not something you can do on a tight budget with a deadline. It's therefore inappropriate to begin a 10 X Design project within a scarcity mindset created with a fixed deadline and a tight budget. The budget should be generous for the project to allow for the fact that there will be unknowns, and out of respect for the fact that a partially implemented and partially completed ecology, much like a partially constructed electric engine, is worse than no engine because it still doesn't function or provide value until it is complete. But it can take a lot of time and money to get to that point."
    },
    {
      title: "Is this a love project?",
      content: "At its core, love is motivated with the desire to generate sustainable well-being for a person, group or ecology. And exists in a win-win paradigm. Figuring out how to get rich by taking other people's money is not a love project. Figuring out how to more efficiently deplete the environment is not a love project. Creating a 10 times more efficient and effective way to generate and maintain well-being for one or more people in a sustainable ecology is a love project. Love is a superior paradigm to win-lose dynamics and as such Dane is only available to consult on love projects."
    },
    {
      title: "Do you enjoy excellence and beauty for its own sake?",
      content: "Does it give you pleasure to refine a design simply to make it more beautiful, more efficient at generating sustainable well-being? If so, you will be delighted and naturally aligned with Dane's mode of thinking."
    },
    {
      title: "Does your design group consist of 5 people or less?",
      content: "Dane's design process is incredibly personal and attuned to the individuals that he's working with. This is easiest to do with a single client polishing or developing their own design. With design groups that are bigger than five people, it becomes difficult to attune a project equally to all concerned with the project. For this reason, Dane does not take on projects that involve working with a group of more than five people. If you believe your project is compatible, then start an application."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* Title Section */}
      <section className="pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-emerald-700 text-base tracking-wider uppercase font-medium">
            <span style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>10</span> X Designing
          </span>
          <h1 className="font-sans text-4xl text-stone-800 mt-3">
            Amplifying impact through intentional design
          </h1>
        </div>
      </section>

      {/* Section 1: Why is 10 X Designing? */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans text-3xl text-stone-800 mb-6">
                Why is <span style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>10</span> X Designing?
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Discover the philosophy and motivation behind 10 X Designing and why it matters for creating sustainable well-being.
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-stone-500">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-300 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm">Video Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What is 10 X Designing? */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 aspect-video bg-stone-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-stone-500">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-300 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm">Video Coming Soon</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-sans text-3xl text-stone-800 mb-6">
                What is <span style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>10</span> X Designing?
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Learn about the principles and practices that define 10 X Designing and how it differs from conventional design approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 10 X Design Process */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans text-3xl text-stone-800 mb-6">
                <span style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>10</span> X Design Process
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Understand the methodology and steps involved in the 10 X Design process, from initial concept to implementation.
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-stone-500">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-300 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm">Video Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Is your project a good fit? */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="aspect-video bg-stone-200 rounded-xl flex items-center justify-center lg:sticky lg:top-24">
              <div className="text-center text-stone-500">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-300 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm">Video Coming Soon</p>
              </div>
            </div>
            <div>
              <h2 className="font-sans text-3xl text-stone-800 mb-8">
                Is your project a good fit?
              </h2>
              
              {/* 4 Points */}
              <div className="space-y-8">
                {fitPoints.map((point, index) => (
                  <div key={index} className="border-l-4 border-emerald-600 pl-6">
                    <h3 className="font-medium text-lg text-stone-800 mb-3">
                      {index + 1}. {point.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {point.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-stone-100 mb-4">
            Ready to Start Your Application?
          </h2>
          <p className="text-stone-300 mb-8">
            If you believe your project is compatible with <span style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>10</span> X Designing, let's connect.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-stone-100 text-emerald-800 text-sm hover:bg-white transition-all duration-300 rounded-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TenXDesigningPage;
