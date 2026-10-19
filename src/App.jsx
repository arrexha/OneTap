import { useEffect } from "react";
import { profile } from "./data/profile.js";
import Avatar from "./components/Avatar.jsx";
import LinkButton from "./components/LinkButton.jsx";

export default function App() {
  useEffect(() => {
    document.title = `${profile.name} — Links`;
  }, []);

  return (
    <div className="flex min-h-screen justify-center px-4 py-16">
      <main className="w-full max-w-md text-center">
        <Avatar name={profile.name} src={profile.avatar} />
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p className="mt-1.5 mb-8 text-muted">{profile.bio}</p>

        <nav className="flex flex-col gap-3">
          {profile.links.map((link) => (
            <LinkButton key={link.label} {...link} />
          ))}
        </nav>

        <footer className="mt-10 text-sm text-muted">
          {profile.footer}
        </footer>
      </main>
    </div>
  );
}
