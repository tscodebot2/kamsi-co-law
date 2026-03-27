import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block border-b-2 border-gold pb-2 mb-6">
              <span className="text-gold-400 text-sm uppercase tracking-widest font-medium">
                Established 2005
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Justice, Integrity,{' '}
              <span className="text-gold-400">Excellence</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-xl">
              At Kamsi & Co., we provide exceptional legal representation with a personal touch.
              Our experienced team is dedicated to protecting your rights and achieving the best
              possible outcomes for our clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="btn-primary bg-gold hover:bg-gold-600 text-white border-none"
              >
                Schedule Consultation
              </a>
              <a
                href="#practice-areas"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-900"
              >
                Our Practice Areas
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">500+</div>
                <div className="text-sm text-primary-200">Cases Won</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">18</div>
                <div className="text-sm text-primary-200">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">98%</div>
                <div className="text-sm text-primary-200">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right side - Professional imagery placeholder */}
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-primary-900/20 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                <svg className="w-32 h-32 text-gold-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 17.09 5.1 7.63 12 4.18zM12 22a10 10 0 0 1-10-10 10 10 0 0 1 10-10 10 10 0 0 1 10 10z"/>
                </svg>
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-display text-2xl font-semibold text-white mb-2">
                  Kamsi & Co. Legal Team
                </h3>
                <p className="text-primary-200">
                  Dedicated to Your Success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-70 hover:opacity-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
