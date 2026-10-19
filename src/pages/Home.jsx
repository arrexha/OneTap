import { profile } from "../data/profile.js";
import Avatar from "../components/Avatar.jsx";
import LinkButton from "../components/LinkButton.jsx";

export default function Home() {
  return (
    <>
      <Avatar name={profile.name} src={profile.avatar} />
      <h1 className="text-2xl font-bold">{profile.name}</h1>
      <p className="mt-1.5 mb-8 text-muted">{profile.bio}</p>

      <nav className="flex flex-col gap-3">
        {profile.links.map((link) => (
          <LinkButton key={link.label} {...link} />
        ))}
      </nav>

      {/* the secret door 🦦 */}
      <footer className="mt-10 text-sm">
        <a href="#games" className="text-muted transition hover:text-text">
          {profile.footer}
        </a>
      </footer>
    </>
  );
}
