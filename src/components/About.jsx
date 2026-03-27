import React from 'react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Cases Handled' },
    { number: '18', label: 'Years of Excellence' },
    { number: '50+', label: 'Legal Experts' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image/Visual side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-900 rounded-full opacity-10"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 text-gold-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                  <p className="font-display text-2xl font-bold text-white">Kamsi & Co.</p>
                  <p className="text-primary-200 mt-2">Since 2005</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-gold-400 font-semibold uppercase tracking-wider text-sm">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mt-4 mb-6">
              A Legacy of Legal Excellence
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 2005, Kamsi & Co. has grown from a small boutique firm to one of the
                most respected legal practices in the region. Our commitment to justice,
                integrity, and client-centered service has earned us a reputation for excellence.
              </p>
              <p>
                We specialize in a wide range of legal services, from corporate law and commercial
                litigation to family law and estate planning. Our team of experienced attorneys
                brings a wealth of knowledge and a track record of success to every case we handle.
              </p>
              <p>
                What sets us apart is our personalized approach. We understand that every client's
                situation is unique, and we take the time to develop tailored strategies that
                protect your interests and achieve your goals.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gold">
                  <div className="text-2xl font-bold text-primary-900">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center mt-8 text-primary-700 font-semibold hover:text-gold-400 transition-colors"
            >
              Get in Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
