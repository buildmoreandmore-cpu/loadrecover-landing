export function ServicesSection() {
  const services = [
    {
      title: 'Trucking Marketplace',
      description: 'Connect with thousands of verified drivers ready to complete your loads. Instant matching based on location, equipment, and availability.',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          {/* Truck icon */}
          <path d="M6.5 17.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM17.5 17.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          <path d="M3 7v8h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H2v1h3.05c.43 1.44 1.76 2.5 3.45 2.5s3.02-1.06 3.45-2.5h2.1c.43 1.44 1.76 2.5 3.45 2.5s3.02-1.06 3.45-2.5H22v-8l-3-3h-4V4H3v3zM15 6h3l2 2v7h-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H20v-9h-5V6zM13 15H8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H13v-3z"/>
        </svg>
      ),
      ctaText: 'Find a Driver',
      ctaLink: '#find-driver'
    },
    {
      title: 'Freight Recovery',
      description: '24/7 emergency load recovery service. When drivers abandon loads or hit HOS limits, we get your freight moving within hours.',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          {/* Shield with checkmark (rescue/recovery) */}
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
        </svg>
      ),
      ctaText: 'Recover a Load',
      ctaLink: '#recover-load'
    },
    {
      title: 'Logistics Services',
      description: 'Complete logistics support including route optimization, load tracking, and dedicated account management for enterprise clients.',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          {/* Gear/Settings icon */}
          <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.61L12.75,4H11.25Z"/>
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