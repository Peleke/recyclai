import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Expert Recycling Guidance
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Get personalized disposal advice for any item through intelligent conversation with our environmental expert AI.
          </p>
        </div>

        {/* Call to Action */}
        <div className="animate-slide-up">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-600 mb-6">
              Describe any item you need help disposing of, and get expert guidance on the most environmentally responsible approach.
            </p>
            <button className="btn-primary w-full">
              Start Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="card">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 text-xl">🧠</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              AI Expert System
            </h3>
            <p className="text-gray-600">
              Powered by advanced AI with deep knowledge of recycling, composting, and proper disposal methods.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 text-xl">📍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Location-Aware
            </h3>
            <p className="text-gray-600">
              Get guidance specific to your area's recycling programs and local disposal options.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 text-xl">🌱</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Educational
            </h3>
            <p className="text-gray-600">
              Learn about environmental impact and make informed decisions about disposal methods.
            </p>
          </div>
        </div>
      </div>

      {/* Status for Development */}
      <div className="mt-12 p-4 bg-accent-50 border border-accent-200 rounded-lg">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-accent-400 rounded-full mr-3"></div>
          <div>
            <h4 className="font-semibold text-accent-800">Development Status</h4>
            <p className="text-accent-700 text-sm">
              ✅ Next.js 16 with Turbopack initialized<br/>
              🔄 Building core consultation engine...<br/>
              📋 Epic 1: Foundation & Infrastructure in progress
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}