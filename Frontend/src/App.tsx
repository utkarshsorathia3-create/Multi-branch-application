import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Features from './Features';

interface BackendData {
  message: string;
  environment: string;
  timestamp: string;
}

function Home() {
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
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] animate-blob [animation-delay:4s]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg shadow-lg shadow-blue-500/20"></div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              MultiBranch<span className="text-blue-500">.io</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/features" className="text-sm font-bold text-slate-400 hover:text-white transition-colors mr-4">
              Features
            </Link>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${
              backendData?.environment === 'production' 
                ? 'border-green-500/50 text-green-400 bg-green-500/10'
                : backendData?.environment === 'staging'
                ? 'border-amber-500/50 text-amber-400 bg-amber-500/10'
                : 'border-blue-500/50 text-blue-400 bg-blue-500/10'
            }`}>
              <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                backendData?.environment === 'production' ? 'bg-green-500' : backendData?.environment === 'staging' ? 'bg-amber-500' : 'bg-blue-500'
              }`}></div>
              {loading ? 'Detecting Env' : backendData?.environment || 'Development'}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
              Live Learning Sandbox
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              BUILD SMART.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 text-glow">
                SHIP FAST.
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
              A comprehensive MERN stack template designed to master multi-branch architecture. Learn how to isolate development, staging, and production environments like a pro.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/features" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-blue-500/20">
                Explore Workflow
              </Link>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] text-white">
                View Docs
              </button>
            </div>
          </div>

          {/* Status Display Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative glass-card p-10 rounded-[2rem] overflow-hidden">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">System Diagnostics</h3>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Backend Payload</label>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 font-mono text-sm group-hover:bg-white/[0.07] transition-colors">
                    <span className="text-blue-400">{'>'}</span> {loading ? 'Fetching...' : backendData?.message || 'Connection Error'}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/[0.07] transition-colors">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Environment</label>
                    <div className="text-xl font-black capitalize text-blue-400 tracking-tight">
                      {backendData?.environment || 'Dev'}
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/[0.07] transition-colors">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Status</label>
                    <div className="text-xl font-black text-green-400 tracking-tight">Active</div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-[10px] font-mono text-slate-600">
                  <span>SSL SECURE_PROTOCOL_TLSv1.3</span>
                  <span>{loading ? '00:00:00' : backendData?.timestamp ? new Date(backendData.timestamp).toLocaleTimeString() : 'OFFLINE'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-12 border-t border-white/5 text-center">
        <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.3em]">
          Powered by Express & React TypeScript
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Router>
  );
}

export default App
