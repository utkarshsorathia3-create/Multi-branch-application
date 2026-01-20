import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] animate-blob [animation-delay:4s]"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg shadow-lg shadow-blue-500/20"></div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              MultiBranch<span className="text-blue-500">.io</span>
            </span>
          </Link>
          <Link to="/" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 italic">
          DEEP DIVE INTO<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 text-glow">
            MODERN WORKFLOWS
          </span>
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
          This is a dedicated features page added in the <span className="text-orange-400 font-bold">dev</span> branch to test environment-specific routing and isolation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            { title: 'Environment Isolation', desc: 'Manage local, staging, and production environments with zero cross-contamination.' },
            { title: 'Serverless Scalability', desc: 'Deploy backends as serverless functions that scale automatically with demand.' },
            { title: 'Branch Protection', desc: 'Enforce professional review workflows before code ever touches production.' },
            { title: 'CI/CD Automation', desc: 'Every push triggers a unique preview deployment for safe testing.' }
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Features;
