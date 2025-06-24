import React, { useState, useEffect } from 'react';

const ScoreCard = ({ title, composer, country, instruments, bio, pdfUrl }) => {
  const [readyToDownload, setReadyToDownload] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(countdown);
    } else {
      setReadyToDownload(true);
    }
  }, [timer]);

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 mb-10">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="italic mb-1">{composer} ({country})</p>
      <p className="mb-4 text-sm">Instrumentos: {instruments}</p>
      <p className="text-sm text-gray-700 mb-4">{bio}</p>
      <iframe src={pdfUrl} className="w-full h-96 mb-4" title={title} />
      {!readyToDownload ? (
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded" disabled>
          Esperando {timer} segundos...
        </button>
      ) : (
        <a
          href={pdfUrl}
          download
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Descargar partitura
        </a>
      )}
    </div>
  );
};

export default function App() {
  const scores = [
    {
      title: "Arrullo",
      composer: "Blas Galindo",
      country: "México",
      instruments: "Voz y piano",
      bio: "Blas Galindo (1910–1993) fue un compositor y director mexicano, parte del Grupo de los Cuatro. Su obra refleja el nacionalismo musical mexicano.",
      pdfUrl: "/arrullo-blas-galindo.pdf",
    },
    {
      title: "Te quiero dijiste",
      composer: "María Grever",
      country: "México",
      instruments: "Voz y piano",
      bio: "María Grever (1885–1951) fue una compositora mexicana pionera, autora de más de 800 canciones incluyendo el bolero 'Te quiero dijiste'.",
      pdfUrl: "/te-quiero-dijiste-grever.pdf",
    },
  ];

  return (
    <div className="bg-neutral-100 min-h-screen p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-serif font-bold text-red-800">PentaLat</h1>
        <p className="text-sm text-gray-600">
          La primera biblioteca digital de partituras dedicada exclusivamente a la música latinoamericana.
        </p>
        <p className="text-sm text-gray-600">
          The first digital sheet music library fully dedicated to Latin American music.
        </p>
      </header>
      <main>
        {scores.map((score) => (
          <ScoreCard key={score.title} {...score} />
        ))}
      </main>
      <footer className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} PentaLat | Proyecto cultural sin fines de lucro
      </footer>
    </div>
  );
}
