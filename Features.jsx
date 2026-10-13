import React, { useState, useEffect } from 'react';

function Features() {
  const [gempa, setGempa] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
      .then((res) => res.json())
      .then((data) => {
        setGempa(data.Infogempa.gempa);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data gempa:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="features" className="py-12 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Features & Info Gempa Terkini
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Memuat data gempa...</p>
        ) : gempa ? (
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="space-y-3 text-gray-700">
              <p><strong>Tanggal:</strong> {gempa.Tanggal}</p>
              <p><strong>Jam:</strong> {gempa.Jam}</p>
              <p>
                <strong>Magnitude:</strong>{' '}
                <span className="text-red-600 font-bold bg-red-100 px-2 py-0.5 rounded">
                  {gempa.Magnitude} SR
                </span>
              </p>
              <p><strong>Kedalaman:</strong> {gempa.Kedalaman}</p>
              <p><strong>Wilayah:</strong> {gempa.Wilayah}</p>
              {gempa.Potensi && <p><strong>Potensi:</strong> {gempa.Potensi}</p>}
            </div>

            <div className="text-center">
              <p className="font-semibold text-gray-700 mb-2">Peta Shakemap BMKG</p>
              <img
                src={`https://data.bmkg.go.id/DataMKG/TEWS/${gempa.Shakemap}`}
                alt="Peta Lokasi Gempa"
                className="rounded-lg border border-gray-300 mx-auto shadow-sm max-h-72 object-cover"
              />
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500">Gagal mengambil data gempa.</p>
        )}
      </div>
    </section>
  );
}

export default Features;