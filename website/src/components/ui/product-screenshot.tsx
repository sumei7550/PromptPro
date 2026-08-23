import Image from "next/image";

import styles from "./ui.module.css";

type ProductScreenshotProps = {
  src: string;
  alt: string;
  aspectRatio?: string;
  variant?: "default" | "hero" | "compact";
};

export function ProductScreenshot({ src, alt, aspectRatio = "16 / 10", variant = "default" }: ProductScreenshotProps) {
  return (
    <figure className={`${styles.screenshot} ${styles[`screenshot${capitalize(variant)}`]}`} style={{ aspectRatio }}>
      <Image className={styles.screenshotImage} src={src} alt={alt} fill sizes="(max-width: 639px) 100vw, 1200px" />
    </figure>
  );
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
