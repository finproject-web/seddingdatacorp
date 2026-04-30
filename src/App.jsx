import React, { useState } from 'react'
import { Check, Phone, Mail, MapPin, ArrowRight, Shield, Zap, Users, TrendingUp } from 'lucide-react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    industry: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you shortly.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            We Generate High-Intent US Leads That Convert
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Exclusive, verified leads for insurance, loans, solar, and financial services companies.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg mb-4">
            Get 20 Free Test Leads
          </button>
          <p className="text-blue-200 text-sm">
            No long-term contracts • Real-time delivery • TCPA compliant
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-gray-50 py-8 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span className="font-medium">US Market Focused</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span className="font-medium">Verified Leads (Call + Email)</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span className="font-medium">Real-Time Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span className="font-medium">Scalable Daily Volume</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / INDUSTRIES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Insurance Leads</h3>
              <p className="text-gray-600">High-intent customers actively looking for coverage</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Loan Leads</h3>
              <p className="text-gray-600">Pre-qualified borrowers ready to apply</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mortgage Leads</h3>
              <p className="text-gray-600">Refinance & home loan inquiries</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solar Leads</h3>
              <p className="text-gray-600">Homeowners interested in solar solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Capture</h3>
              <p className="text-gray-600">We capture high-intent users through targeted ads & outreach</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verify</h3>
              <p className="text-gray-600">We verify leads via call and email</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deliver</h3>
              <p className="text-gray-600">We deliver leads in real-time via CSV, API, or Google Sheets</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE LEADS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Sample Leads
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase">State</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase">Interest</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">John D.</td>
                  <td className="px-6 py-4 text-gray-600">CA</td>
                  <td className="px-6 py-4 text-gray-600">Solar</td>
                  <td className="px-6 py-4 text-gray-600">(XXX-XXX-1234)</td>
                  <td className="px-6 py-4 text-green-600 font-medium">2 min ago</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">Sarah M.</td>
                  <td className="px-6 py-4 text-gray-600">TX</td>
                  <td className="px-6 py-4 text-gray-600">Loan</td>
                  <td className="px-6 py-4 text-gray-600">(XXX-XXX-5678)</td>
                  <td className="px-6 py-4 text-green-600 font-medium">5 min ago</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">Michael R.</td>
                  <td className="px-6 py-4 text-gray-600">FL</td>
                  <td className="px-6 py-4 text-gray-600">Insurance</td>
                  <td className="px-6 py-4 text-gray-600">(XXX-XXX-9012)</td>
                  <td className="px-6 py-4 text-green-600 font-medium">8 min ago</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">Emily K.</td>
                  <td className="px-6 py-4 text-gray-600">NY</td>
                  <td className="px-6 py-4 text-gray-600">Mortgage</td>
                  <td className="px-6 py-4 text-gray-600">(XXX-XXX-3456)</td>
                  <td className="px-6 py-4 text-green-600 font-medium">12 min ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RESULTS / PROOF */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Performance You Can Trust
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Check className="w-6 h-6 text-green-400" />
                <span className="text-xl font-bold">100+ leads</span>
              </div>
              <p className="text-blue-200">generated daily</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Check className="w-6 h-6 text-green-400" />
                <span className="text-xl font-bold">High contact</span>
              </div>
              <p className="text-blue-200">& conversion rates</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Check className="w-6 h-6 text-green-400" />
                <span className="text-xl font-bold">US-targeted</span>
              </div>
              <p className="text-blue-200">traffic</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Check className="w-6 h-6 text-green-400" />
                <span className="text-xl font-bold">Verified</span>
              </div>
              <p className="text-blue-200">customer intent</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Insurance Leads</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$10 – $40</p>
              <p className="text-gray-600">per lead</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Loan Leads</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$15 – $60</p>
              <p className="text-gray-600">per lead</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Solar Leads</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$20 – $100</p>
              <p className="text-gray-600">per lead</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mb-8">
            Pricing depends on location, exclusivity, and volume
          </p>
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Request Sample Leads
            </button>
          </div>
        </div>
      </section>

      {/* FREE TEST OFFER */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start With Free Test Leads
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            We offer 20 free leads so you can evaluate quality before scaling.
          </p>
          <button className="bg-white text-orange-600 font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Get Free Leads
          </button>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Compliance & Data Quality
          </h2>
          <p className="text-lg text-gray-600">
            All leads are collected with proper user consent and follow TCPA guidelines. We prioritize data accuracy, transparency, and compliance.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Get Started Today
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Industry</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select industry</option>
                    <option value="insurance">Insurance</option>
                    <option value="loan">Personal Loan</option>
                    <option value="mortgage">Mortgage</option>
                    <option value="solar">Solar</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Submit Request
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">1-800-LEADS-NOW</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">contact@leadgenpro.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">123 Business Ave, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LeadGen Pro</h3>
              <p className="text-gray-400">High-intent US leads that convert for insurance, loans, solar, and financial services.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1-800-LEADS-NOW</li>
                <li>contact@leadgenpro.com</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LeadGen Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
