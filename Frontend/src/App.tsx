import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-24 h-24 transition-transform hover:scale-110" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-24 h-24 transition-transform hover:scale-110 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8">Vite + React + Tailwind</h1>
      <div className="flex flex-col items-center gap-4">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
        >
          count is {count}
        </button>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
