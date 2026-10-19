export default function Avatar({ name, src }) {
  const base = "mx-auto mb-4 size-24 rounded-full";

  if (src) {
    return <img src={src} alt={name} className={`${base} object-cover`} />;
  }

  return (
    <div className={`${base} grid place-items-center bg-accent text-4xl font-bold text-white`}>
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
