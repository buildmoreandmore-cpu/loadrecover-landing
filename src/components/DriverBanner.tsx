export function DriverBanner() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Stop Driving Empty Miles. Start Earning More.
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Join thousands of drivers earning premium rates on high-priority recovery loads. 
              Flexible schedules, instant payments, and dedicated support.
            </p>

            {/* Driver Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-orange-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Earn $2,500-$5,000+ per week</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-orange-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Instant payment to your debit card</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-orange-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Choose your own schedule & routes</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-orange-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">24/7 dispatch & roadside support</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-xl transition-colors inline-flex items-center">
              Sign Up as a Driver – Free
              <svg className="ml-2 w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="mt-4">
              <p className="text-orange-200 text-sm">Free to join • No monthly fees • Get started today</p>
            </div>
          </div>

          {/* Right Content - Stats/Features */}
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Why Drivers Choose LoadRecover</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Higher Pay Rates</h4>
                  <p className="text-orange-100 text-sm">Premium rates for urgent recovery loads - typically 20-40% above standard rates</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Flexible Schedule</h4>
                  <p className="text-orange-100 text-sm">Work when you want, where you want. Accept loads that fit your schedule and location</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Dedicated Support</h4>
                  <p className="text-orange-100 text-sm">24/7 dispatch team, roadside assistance, and dedicated driver success managers</p>
                </div>
              </div>
            </div>

            {/* Driver Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-orange-300 border-opacity-30">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-orange-200 text-sm">Driver Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$4,200</div>
                <div className="text-orange-200 text-sm">Avg Weekly Earnings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}