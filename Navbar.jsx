import { useState } from "react";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Kelas Front-End C</h1>

          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Home
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-blue-600"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
            >
              Features
            </a>

            <a href="#" className="text-gray-600 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Login
            </a>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-md mx-4 rounded-xl bg-white p-6 shadow-lg">
            <button
              className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-gray-600"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>

            {}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold">Login</h2>
              <p className="text-gray-500 mt-1">Sign in to your account</p>
            </div>

            {}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="you@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;