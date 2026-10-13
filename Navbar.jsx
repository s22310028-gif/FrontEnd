import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Front-End C</div>
        <div className="space-x-6 text-gray-600 font-medium hidden md:block">
          <a href="#hero" className="hover:text-blue-600 transition">Beranda</a>
          <a href="#features" className="hover:text-blue-600 transition">Info Gempa</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;