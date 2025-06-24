
import React, { useState } from 'react';

export default function Explore() {
  const allScores = [
    {
      title: "Arrullo",
      composer: "Blas Galindo",
      country: "México",
      instruments: "Voz y piano",
      pdfUrl: "/arrullo-blas-galindo.pdf"
    },
    {
      title: "Te quiero dijiste",
      composer: "María Grever",
      country: "México",
      instruments: "Voz y piano",
      pdfUrl: "/te-quiero-dijiste-grever.pdf"
    },
    {
      title: "El olvido",
      composer: "Manuel M. Ponce",
      country: "México",
      instruments: "Voz y piano",
      pdfUrl: "/el-olvido-ponce.pdf"
    }
  ];

  const [filtered, setFiltered] = useState([]);

  const filterBy = (type, value) => {
    const result = allScores.filter(score => score[type] === value);
    setFiltered(result);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-red-700">Explorar por categoría</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <button onClick={() => filterBy('country', 'México')} className="bg-blue-100 px-4 py-2 rounded border">
          🇲🇽 México
        </button>
        <button onClick={() => filterBy('composer', 'Blas Galindo')} className="bg-green-100 px-4 py-2 rounded border">
          🎼 Blas Galindo
        </button>
        <button onClick={() => filterBy('composer', 'María Grever')} className="bg-green-100 px-4 py-2 rounded border">
          🎼 María Grever
        </button>
        <button onClick={() => filterBy('composer', 'Manuel M. Ponce')} className="bg-green-100 px-4 py-2 rounded border">
          🎼 Manuel M. Ponce
        </button>
        <button onClick={() => filterBy('instruments', 'Voz y piano')} className="bg-yellow-100 px-4 py-2 rounded border">
          🎤 Voz y piano
        </button>
      </div>

      {filtered.length > 0 ? (
        <div className="space-y-4">
          {filtered.map(score => (
            <div key={score.title} className="border p-4 rounded bg-white shadow-sm">
              <h2 className="text-xl font-bold">{score.title}</h2>
              <p>{score.composer} ({score.country})</p>
              <p className="text-sm text-gray-600">{score.instruments}</p>
              <a href={score.pdfUrl} download className="text-blue-600 underline mt-2 inline-block">
                Descargar PDF
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Selecciona una categoría para explorar partituras.</p>
      )}
    </div>
  );
}
