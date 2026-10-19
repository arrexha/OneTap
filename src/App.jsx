import { useEffect, useState } from "react";
import { profile } from "./data/profile.js";
import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";

// "#games" in the address shows the secret games page
const getPage = () => (window.location.hash === "#games" ? "games" : "home");

export default function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.title = page === "games" ? `${profile.name} — Games` : `${profile.name} — Links`;
  }, [page]);

  return (
    <div className="flex min-h-screen justify-center px-4 py-16">
      <main key={page} className="w-full max-w-md text-center">
        {page === "games" ? <Games /> : <Home />}
      </main>
    </div>
  );
}
