
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 p-6 text-center">
      <img src="/logo.png" alt="PentaLat logo" className="w-64 mx-auto mb-6" />
      <h1 className="text-4xl font-serif font-bold text-red-800 mb-4">PentaLatin</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Este sitio es un homenaje a nuestra historia sonora. Preservar y compartir partituras latinoamericanas es una forma de honrar nuestra identidad cultural,
        nuestra diversidad musical y las voces de compositores que merecen ser escuchados por generaciones futuras.
      </p>
      <Link to="/scores" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded">
        🎼 Explorar partituras
      </Link>
    </div>
  );
}
