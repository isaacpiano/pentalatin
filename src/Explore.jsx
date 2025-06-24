
import React from 'react';

export default function Explore() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-red-700">Explorar por categoría</h1>
      <p className="mb-2">Muy pronto podrás explorar partituras por:</p>
      <ul className="list-disc ml-6 text-gray-700">
        <li>País</li>
        <li>Compositor</li>
        <li>Instrumentos</li>
      </ul>
      <p className="mt-4 text-sm text-gray-500">* Esta sección está en desarrollo. Puedes sugerir obras o categorías por la página de contacto.</p>
    </div>
  );
}
