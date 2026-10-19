import Icon from "./Icon.jsx";

export default function LinkButton({ label, icon, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3.5 font-medium backdrop-blur-md transition hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_0_24px_var(--glow)]"
    >
      <Icon name={icon} />
      <span className="mr-8 flex-1 text-center">{label}</span>
    </a>
  );
}
