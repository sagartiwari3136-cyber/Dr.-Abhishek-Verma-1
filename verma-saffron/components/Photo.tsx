// import type { CSSProperties } from "react";

// interface PhotoProps {
//   src?: string;
//   caption: string;
//   children?: React.ReactNode;
//   className?: string;
//   objectPosition?: CSSProperties["objectPosition"];
// }

// export default function Photo({
//   src,
//   caption,
//   className = "",
//   objectPosition = "center",
// }: PhotoProps) {
//   return (
//     <figure className={`ph ${className}`}>
//       <img
//         src={src}
//         alt={caption}
//         loading="lazy"
//         style={{ objectPosition }}
//       />

//       <figcaption>{caption}</figcaption>
//     </figure>
//   );
// }





import type { CSSProperties, ReactNode } from "react";

interface PhotoProps {
  src?: string;
  caption: string;
  children?: ReactNode;
  className?: string;
  objectPosition?: CSSProperties["objectPosition"];
}

export default function Photo({
  src,
  caption,
  children,
  className = "",
  objectPosition = "center",
}: PhotoProps) {
  return (
    <figure className={`ph ${className}`}>
      <img
        src={src}
        alt={caption}
        loading="lazy"
        style={{ objectPosition }}
      />

      {children}

      <figcaption>{caption}</figcaption>
    </figure>
  );
}
