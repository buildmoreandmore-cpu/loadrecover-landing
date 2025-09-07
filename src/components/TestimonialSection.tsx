export function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Main Testimonial */}
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
            "LoadRecover saved us over $2M in delayed freight costs last year. When our driver had a medical emergency in Kansas, they had a replacement driver there within 3 hours. Absolutely incredible service."
          </blockquote>

          {/* Author */}
          <div className="mb-12">
            <div className="font-semibold text-lg text-gray-900">Sarah Martinez</div>
            <div className="text-gray-600">Operations Director, FreightCorp Logistics</div>
          </div>

          {/* Social Proof Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 py-8 border-t border-b border-gray-200">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Companies Trust Us</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">15,000+</div>
              <div className="text-gray-600">Verified Drivers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">$50M+</div>
              <div className="text-gray-600">Freight Recovered</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">
              Join 100s of carriers saving millions with LoadRecover.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center">
              Start Free Today
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Additional Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Fast response time and professional drivers. LoadRecover has become our go-to solution for any freight emergencies."
              </p>
              <div className="text-sm">
                <div className="font-semibold">Mike Chen</div>
                <div className="text-gray-600">LogiMax Transportation</div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The transparency and real-time tracking gives us complete confidence. Worth every penny for the peace of mind."
              </p>
              <div className="text-sm">
                <div className="font-semibold">Jessica Torres</div>
                <div className="text-gray-600">TransGlobal Freight</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}