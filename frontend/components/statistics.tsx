const stats = [
  { number: "12", label: "Years Experience" },
  { number: "97%", label: "Retention Rate" },
  { number: "8K", label: "Tour Completed" },
  { number: "19K", label: "Happy Travellers" },
]

export function Statistics() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10">
        <div className="w-12 h-12 text-cyan-400">
          <svg viewBox="0 0 48 48" fill="currentColor">
            <circle cx="24" cy="16" r="8" />
            <path d="M24 28c-8 0-16 4-16 8v4h32v-4c0-4-8-8-16-8z" />
          </svg>
        </div>
      </div>
      <div className="absolute top-20 left-32">
        <div className="w-8 h-8 text-cyan-300">
          <svg viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="12" r="6" />
            <path d="M16 20c-6 0-12 3-12 6v2h24v-2c0-3-6-6-12-6z" />
          </svg>
        </div>
      </div>
   

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                {/* Circular Progress Background */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5f3f3" strokeWidth="2" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#1da9c9"
                    strokeWidth="2"
                    strokeDasharray={`${70 + index * 10} 283`}
                    strokeLinecap="round"
                  />
                </svg>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-cyan-50 rounded-full m-4">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 text-center px-4">{stat.label}</div>
                </div>

                {/* Decorative Dot */}
                <div className="absolute top-2 right-8 w-3 h-3 bg-cyan-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
