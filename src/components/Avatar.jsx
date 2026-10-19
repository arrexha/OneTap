export default function Avatar({ name, src }) {
  const base = "mx-auto mb-4 size-24 rounded-full ring-2 ring-accent/60 shadow-[0_0_32px_var(--glow)]";

  if (src) {
    return <img src={src} alt={name} className={`${base} object-cover`} />;
  }

  return (
    <div className={`${base} grid place-items-center bg-accent text-4xl font-bold text-white`}>
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
