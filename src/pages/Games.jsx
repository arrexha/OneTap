import { profile } from "../data/profile.js";
import Icon from "../components/Icon.jsx";
import GameCard from "../components/GameCard.jsx";

export default function Games() {
  return (
    <>
      <div className="mx-auto mb-4 grid size-24 place-items-center rounded-full bg-accent text-white ring-2 ring-accent/60 shadow-[0_0_32px_var(--glow)]">
        <Icon name="/icons/gamepad.svg" className="size-12" />
      </div>
     
      

      <div className="flex flex-col gap-3">
        {profile.games.map((game) => (
          <GameCard key={game.label} {...game} />
        ))}
      </div>

      <footer className="mt-10 text-sm">
        <a href="#" className="text-muted transition hover:text-text">
          ← Back
        </a>
      </footer>
    </>
  );
}
