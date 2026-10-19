const ICON_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons";

export default function LinkButton({ label, icon, url }) {
  // icons starting with "/" come from the public folder, everything else from Simple Icons
  const src = icon.startsWith("/") ? icon : `${ICON_CDN}/${icon}.svg`;
  const iconUrl = `url('${src}')`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3.5 font-medium transition hover:-translate-y-0.5 hover:border-accent"
    >
      <span
        className="size-5 shrink-0 bg-current"
        style={{
          maskImage: iconUrl,
          WebkitMaskImage: iconUrl,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      />
      <span className="mr-8 flex-1 text-center">{label}</span>
    </a>
  );
}
