import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from './AuthProvider';
import NavBar from './NavBar';

export default function Home() {
    const [isAuthorized, setIsAuthorized] = useContext(AuthContext);
    const username = localStorage.getItem("username");
    
    useEffect(() => {
        const token = localStorage.getItem("access");
        if (token) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      }, [setIsAuthorized]);

    const handleLogout = () => {
        localStorage.clear();
        setIsAuthorized(false);
    }

  return (
    <div
      className="min-h-screen text-gray-100 font-mono"
      style={{
        background:
          'linear-gradient(180deg, #000000 0%, #020202 40%, #070707 100%)',
      }}
    >
      <header className="py-8 text-center px-4 relative">
        {/* tasteful login/logout button top-right */}
        <div className="absolute right-4 top-4">
          {isAuthorized ? (
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm shadow-sm transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1.5 rounded-md bg-cyan-300 hover:bg-cyan-400 text-black text-sm shadow-sm transition"
            >
              Login
            </Link>
          )}
        </div>

        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-200 to-cyan-200">
          Path Games AI
        </h1>
        
      </header>

      <main className="max-w-4xl mx-auto p-3">
        {/* Responsive YouTube embed */}
        <div className="w-full rounded-lg shadow-xl overflow-hidden mb-8" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))' }}>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              title="Path Games Intro"
              src="https://www.youtube.com/embed/wbCjgwvCbHc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              style={{ border: '0' }}
            />
          </div>
        </div>

        {/* Centered menu as card grid */}
        <section className="bg-white/3 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li>
              <Link
                to="/mousegame"
                className="block w-full text-left p-4 rounded-md bg-white/5 border border-white/6 hover:bg-white/6 transition transform hover:-translate-y-1"
              >
                Play Mouse Game
              </Link>
            </li>
            <li>
              <Link
                to="/seeoldmousegames"
                className="block w-full text-left p-4 rounded-md bg-white/5 border border-white/6 hover:bg-white/6 transition transform hover:-translate-y-1"
              >
                Mouse Game Visualizer
              </Link>
            </li>
            <li>
              <Link
                to="/firegame"
                className="block w-full text-left p-4 rounded-md bg-white/5 border border-white/6 hover:bg-white/6 transition transform hover:-translate-y-1"
              >
                Play Fire Game
              </Link>
            </li>
            <li>
              <Link
                to="/seeoldfiregames"
                className="block w/full text-left p-4 rounded-md bg-white/5 border border-white/6 hover:bg-white/6 transition transform hover:-translate-y-1"
              >
                Fire Game Visualizer
              </Link>
            </li>
            <li>
              <Link
                to="/credits"
                className="block w-full text-left p-4 rounded-md bg-white/5 border border-white/6 hover:bg-white/6 transition transform hover:-translate-y-1"
              >
                Credits
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className="block w-full text-left p-4 rounded-md bg-white/5 border border-white/6 hover:bg-white/6 transition transform hover:-translate-y-1"
              >
                Submit Anonymous Feedback
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}