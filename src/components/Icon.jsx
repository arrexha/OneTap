const ICON_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons";


export default function Icon({ name, className = "size-5" }) {
  const src = name.startsWith("/") ? name : `${ICON_CDN}/${name}.svg`;
  const url = `url('${src}')`;

  return (
    <span
      className={`${className} shrink-0 bg-current`}
      style={{
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}
