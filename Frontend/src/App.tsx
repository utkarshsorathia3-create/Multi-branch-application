import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

interface BackendData {
  message: string;
  environment: string;
  timestamp: string;
}

function App() {
  const [count, setCount] = useState(0)
  const [backendData, setBackendData] = useState<BackendData | null>(null)
  const [loading, setLoading] = useState(true)

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setBackendData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching backend:', err)
        setLoading(false)
      })
  }, [apiUrl])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4 text-center">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-24 h-24 transition-transform hover:scale-110" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-24 h-24 transition-transform hover:scale-110 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-5xl font-bold mb-4">MERN Multi-Branch</h1>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl mb-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-500">Environment Details</h2>
        {loading ? (
          <p className="animate-pulse">Fetching from Backend...</p>
        ) : backendData ? (
          <div className="space-y-2 text-left">
            <p><span className="font-bold">Status:</span> {backendData.message}</p>
            <p><span className="font-bold text-green-500">Env:</span> {backendData.environment}</p>
            <p><span className="font-bold">Backend URL:</span> <code className="text-xs">{apiUrl}</code></p>
            <p className="text-xs text-gray-500 mt-2">Last fetch: {new Date(backendData.timestamp).toLocaleTimeString()}</p>
          </div>
        ) : (
          <p className="text-red-500">Could not connect to Backend</p>
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-transform active:scale-95"
        >
          count is {count}
        </button>
        <p className="text-gray-600 dark:text-gray-400">
          This app demonstrates branch-specific environments.
        </p>
      </div>
    </div>
  )
}

export default App
