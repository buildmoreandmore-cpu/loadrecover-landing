export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* LoadRecover Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center">
                {/* Truck Logo */}
                <svg className="w-10 h-8" viewBox="0 0 48 32" fill="none">
                  {/* Truck Cab */}
                  <rect x="2" y="8" width="12" height="16" rx="2" fill="#FF6B35" />
                  {/* Truck Trailer */}
                  <rect x="16" y="6" width="28" height="18" rx="2" fill="#FF6B35" />
                  {/* Truck Wheels */}
                  <circle cx="8" cy="26" r="3" fill="#FF6B35" />
                  <circle cx="38" cy="26" r="3" fill="#FF6B35" />
                  {/* Wheel Details */}
                  <circle cx="8" cy="26" r="1.5" fill="white" />
                  <circle cx="38" cy="26" r="1.5" fill="white" />
                  {/* Cab Window */}
                  <rect x="4" y="10" width="8" height="6" rx="1" fill="white" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Load</span>
                <span className="text-xl font-bold text-orange-500">Recover</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The #1 freight recovery marketplace connecting companies with verified drivers nationwide. 
              Available 24/7 for emergency load recovery.
            </p>
            <div className="flex items-center space-x-2 text-orange-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-semibold">1-800-RECOVER</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Freight Recovery</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Driver Marketplace</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Emergency Dispatch</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Load Tracking</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Route Optimization</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Logistics Support</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Driver Support</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Company Support</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Safety Resources</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 mt-8">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Insurance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2025 LoadRecover. All rights reserved. DOT #123456 | MC #789012</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}