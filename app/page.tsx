import RecyclAIBot from '@/components/RecyclAIBot'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 pb-20">
        {/* Main headline */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Hey, there! I'm RecyclAI.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Let's be green together.
          </p>
        </div>

        {/* RecyclAI Bot Centerpiece */}
        <div className="mb-8 animate-slide-up">
          <RecyclAIBot size="large" className="mx-auto" />
        </div>

        {/* Call to action */}
        <div className="text-center animate-slide-up">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Let's get started
            </h2>
            <p className="text-gray-600 mb-6">
              Skip the confusion and get straight answers about proper disposal.
            </p>
            <button className="w-full py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Horizontal icons with popouts */}
          <div className="flex justify-center space-x-8 mb-6">
            {/* AI Expert System */}
            <div className="relative group">
              <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-xl">🧠</span>
              </div>
              {/* Popout */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                AI Expert System
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>

            {/* Location-Aware */}
            <div className="relative group">
              <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-xl">📍</span>
              </div>
              {/* Popout */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                Location-Aware
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>

            {/* Educational */}
            <div className="relative group">
              <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors cursor-pointer">
                <span className="text-xl">🌱</span>
              </div>
              {/* Popout */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                Educational
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>

          {/* Footer text */}
          <div className="text-center">
            <p className="text-green-100 text-sm leading-relaxed mb-4">
              Advanced AI with deep environmental knowledge, trained specifically to provide guidance specific to your area's programs, with local recycling centers and disposal options.
            </p>
            <p className="text-green-200 text-xs">
              © 2024 RecyclAI. Making recycling accessible and educational for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}