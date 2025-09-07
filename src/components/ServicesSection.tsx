export function ServicesSection() {
  const services = [
    {
      title: 'Trucking Marketplace',
      description: 'Connect with thousands of verified drivers ready to complete your loads. Instant matching based on location, equipment, and availability.',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1H3zM3 10a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H3zM3 16a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H3zM7 4a1 1 0 00-1 1v1a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H7zM7 10a1 1 0 00-1 1v1a1 1 0 001 1h10a1 1 0 001-1v-1a1 1 0 00-1-1H7zM7 16a1 1 0 00-1 1v1a1 1 0 001 1h10a1 1 0 001-1v-1a1 1 0 00-1-1H7z" />
        </svg>
      ),
      ctaText: 'Find a Driver',
      ctaLink: '#find-driver'
    },
    {
      title: 'Freight Recovery',
      description: '24/7 emergency load recovery service. When drivers abandon loads or hit HOS limits, we get your freight moving within hours.',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414-1.414L9 5.586 7.707 4.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
      ),
      ctaText: 'Recover a Load',
      ctaLink: '#recover-load'
    },
    {
      title: 'Logistics Services',
      description: 'Complete logistics support including route optimization, load tracking, and dedicated account management for enterprise clients.',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      ctaText: 'Get Support',
      ctaLink: '#get-support'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recovery Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive freight recovery solutions designed to keep your operations running smoothly, 
            no matter what challenges arise on the road.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              {/* CTA Button */}
              <a
                href={service.ctaLink}
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {service.ctaText}
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Need immediate assistance with a stranded load?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Emergency Recovery
            </button>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Call 1-800-RECOVER
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}