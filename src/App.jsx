import { useEffect } from "react";
import { profile } from "./data/profile.js";
import Home from "./pages/Home.jsx";

export default function App() {
  useEffect(() => {
    document.title = `${profile.name} — Links`;
  }, []);

  return (
    <div className="flex min-h-screen justify-center px-4 py-16">
      <main className="w-full max-w-md text-center">
        <Home />
      </main>
    </div>
  );
}
