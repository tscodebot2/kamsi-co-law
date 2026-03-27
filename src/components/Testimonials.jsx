import React from 'react';

const testimonials = [
  {
    name: 'Folashade Adeyemi',
    role: 'Business Owner',
    content: 'Kamsi & Co. handled our company merger with exceptional professionalism. Their attention to detail and strategic advice helped us close the deal on favorable terms. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Tunde Bakare',
    role: 'Individual Client',
    content: 'During my divorce, the team at Kamsi & Co. was compassionate yet aggressive in protecting my rights and my children’s well-being. They fought hard and delivered outstanding results.',
    rating: 5,
  },
  {
    name: 'Ngozi Eze',
    role: 'Real Estate Developer',
    content: 'We have relied on Kamsi & Co. for all our real estate transactions for over 10 years. Their expertise in property law and zoning issues is unmatched.',
    rating: 5,
  },
  {
    name: 'Emeka Obi',
    role: 'Corporate Executive',
    content: 'When we faced a complex regulatory challenge, Kamsi & Co. provided clear guidance and resolved the matter efficiently. Their depth of knowledge is impressive.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Kamsi & Co.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-800/50 border border-primary-700 rounded-xl p-8 hover:border-gold transition-colors"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg text-primary-100 leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-900 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-primary-300">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gold">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <p className="text-2xl font-display font-semibold text-white mt-2">
            Rated 5.0 Stars by Our Clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
