import { useState, useEffect } from 'react'

interface BackendData {
  message: string;
  environment: string;
  timestamp: string;
}

function App() {
  const [backendData, setBackendData] = useState<BackendData | null>(null)
  const [loading, setLoading] = useState(true)
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setBackendData(data)
      } catch (err) {
        console.error('Error fetching backend:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [apiUrl])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased transition-colors duration-300 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob [animation-delay:2000ms]"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob [animation-delay:4000ms]"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight text-gradient-effect">
          MultiBranch.io
        </div>
        <div className="flex items-center gap-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
            backendData?.environment === 'production' 
              ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
              : backendData?.environment === 'staging'
              ? 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800'
              : 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800'
          }`}>
            {loading ? 'Detecting Env...' : backendData?.environment || 'Development'}
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Master Your <br />
              <span className="text-gradient-effect">Multi-Branch</span> <br />
              Architecture.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              Understand how to seamlessly transition your application from Development to Staging and finally to Production with automated workflows and environment isolation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95">
                Start Learning
              </button>
              <button className="px-8 py-4 glass-effect text-slate-900 dark:text-white rounded-xl font-bold transition-all hover:bg-white/90 dark:hover:bg-slate-800/90 active:scale-95">
                View GitHub
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="glass-effect p-8 rounded-3xl shadow-2xl relative z-20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                Backend Live Status
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div className="text-sm text-slate-500 mb-1">Response Message</div>
                  <div className="text-lg font-medium">{loading ? '...' : backendData?.message || 'Connecting...'}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    <div className="text-sm text-slate-500 mb-1">Active Branch</div>
                    <div className="text-lg font-bold text-blue-500 capitalize">{backendData?.environment || 'Dev'}</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    <div className="text-sm text-slate-500 mb-1">API Latency</div>
                    <div className="text-lg font-bold text-green-500">24ms</div>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-mono text-center">
                  Last Update: {loading ? '--:--:--' : backendData?.timestamp ? new Date(backendData.timestamp).toLocaleTimeString() : 'N/A'}
                </div>
              </div>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-linear-to-br from-blue-500 to-indigo-600 rounded-3xl -z-10 rotate-3 opacity-10"></div>
          </div>
        </div>

        {/* Info Section */}
        <section className="mt-32 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Isolated Env', desc: 'Each branch (Dev, Stage, Prod) has its own distinct environment variables and databases.', icon: '🛡️' },
            { title: 'Auto Deployment', desc: 'Push to specific branches to trigger automated Vercel or GitHub Action deployments.', icon: '🚀' },
            { title: 'Safety Checks', desc: 'Promote code with confidence using gated PRs and automated testing pipelines.', icon: '⚙️' },
          ].map((feature, i) => (
            <div key={i} className="glass-effect p-8 rounded-2xl hover:translate-y-[-4px] transition-transform">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </section>
      </main>


      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
        © 2026 MultiBranch Architecture Learning Journey. Created with React + Express.
      </footer>
    </div>
  )
}

export default App
