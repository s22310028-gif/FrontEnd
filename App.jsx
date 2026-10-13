import React, { useState, useEffect } from 'react';

function App() {
  const [gempa, setGempa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Gagal mengambil data dari BMKG');
        }
        return res.json();
      })
      .then((data) => {
        setGempa(data.Infogempa.gempa);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data gempa:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Memuat data gempa terkini...
        </p>
      </div>
    );
  }

  if (error || !gempa) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold text-red-500">
          Gagal memuat data gempa. Silakan coba lagi.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Info Gempa Terkini (BMKG)
        </h1>

        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Tanggal</span>
            <span className="font-medium">{gempa.Tanggal}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Jam</span>
            <span className="font-medium">{gempa.Jam}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Magnitude</span>
            <span className="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
              {gempa.Magnitude} SR
            </span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Kedalaman</span>
            <span className="font-medium">{gempa.Kedalaman}</span>
          </div>

          <div className="border-b pb-2">
            <span className="font-semibold text-gray-600 block mb-1">Wilayah</span>
            <span className="text-gray-800">{gempa.Wilayah}</span>
          </div>

          {gempa.Potensi && (
            <div className="border-b pb-2">
              <span className="font-semibold text-gray-600 block mb-1">Potensi</span>
              <span className="text-gray-800">{gempa.Potensi}</span>
            </div>
          )}

          {gempa.Dirasakan && (
            <div className="pb-2">
              <span className="font-semibold text-gray-600 block mb-1">Dirasakan</span>
              <span className="text-gray-800">{gempa.Dirasakan}</span>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Peta Lokasi Gempa (Shakemap)
          </h2>
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <img
              src={`https://data.bmkg.go.id/DataMKG/TEWS/${gempa.Shakemap}`}
              alt="Peta Lokasi Gempa BMKG"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;