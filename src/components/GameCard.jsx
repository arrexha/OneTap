import { useState } from "react";
import Icon from "./Icon.jsx";

const className =
  "flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3.5 text-left backdrop-blur-md transition hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_0_24px_var(--glow)]";

export default function GameCard({ label, icon, tag, url }) {
  const [copied, setCopied] = useState(false);

  const content = (
    <>
      <Icon name={icon} />
      <span className="flex-1 font-medium">{label}</span>
      <span className="font-mono text-sm text-muted">{copied ? "Copied!" : tag}</span>
    </>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener" className={className}>
        {content}
      </a>
    );
  }

  const copy = async () => {
    await navigator.clipboard.writeText(tag);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button type="button" onClick={copy} className={className}>
      {content}
    </button>
  );
}
