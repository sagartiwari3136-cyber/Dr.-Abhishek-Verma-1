import Image from "next/image";

function CamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <circle cx="12" cy="13.5" r="3.5" />
      <path d="M8 7l1.5-3h5L16 7" />
    </svg>
  );
}

/** Real photo when `src` is set, otherwise a saffron placeholder frame. Caption always shows. */
export default function Photo({
  src,
  caption,
  className = "",
  style,
  children,
}: {
  src?: string;
  caption: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <div className={`ph ${className}`} style={style}>
      {src ? (
        <Image src={src} alt={caption} fill sizes="(min-width: 768px) 33vw, 100vw" style={{ objectFit: "cover" }} />
      ) : (
        <CamIcon />
      )}
      <span className="cap">{caption}</span>
      {children}
    </div>
  );
}
