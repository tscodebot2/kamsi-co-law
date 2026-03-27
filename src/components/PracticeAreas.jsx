import React from 'react';

const practiceAreas = [
  {
    title: 'Corporate Law',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    description: 'Comprehensive legal support for businesses including formation, governance, mergers & acquisitions, and regulatory compliance.',
  },
  {
    title: 'Commercial Litigation',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2V7m10 0l3 5m-3-5l-6-2" />
      </svg>
    ),
    description: 'Aggressive representation in contract disputes, partnership conflicts, and complex commercial litigation matters.',
  },
  {
    title: 'Family Law',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    description: 'Compassionate guidance through divorce, custody battles, adoption, and domestic agreements with focus on family well-being.',
  },
  {
    title: 'Real Estate Law',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    description: 'Assistance with property transactions, title searches, zoning issues, construction contracts, and real estate disputes.',
  },
  {
    title: 'Estate Planning',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Protect your legacy with wills, trusts, power of attorney, and comprehensive estate planning strategies.',
  },
  {
    title: 'Criminal Defense',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    description: 'Tenacious defense for all criminal charges, from misdemeanors to serious felonies, ensuring your rights are protected.',
  },
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-semibold uppercase tracking-wider text-sm">What We Do</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mt-4 mb-6">
            Our Practice Areas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive legal services across multiple practice areas,
            providing expert advice and representation for individuals and businesses alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 card-hover border border-gray-100"
            >
              <div className="text-primary-700 mb-6">
                {area.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-primary-900 mb-4">
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center mt-6 text-gold-400 font-semibold hover:text-gold-600 transition-colors"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
