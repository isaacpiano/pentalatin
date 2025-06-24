import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 p-4 text-center">
      <img src="/logo.png" alt="PentaLat logo" className="w-64 mx-auto mb-6" />
      <h1 className="text-4xl font-serif font-bold text-red-800 mb-4">PentaLat</h1>
      <p className="mb-2 text-lg text-gray-700">
        La primera biblioteca digital de partituras dedicada exclusivamente a la música latinoamericana.
      </p>
      <p className="mb-6 text-lg text-gray-700">
        The first digital sheet music library fully dedicated to Latin American music.
      </p>
      <Link to="/scores" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded">
        🎼 Explorar partituras / Browse scores
      </Link>
    </div>
  )
}
