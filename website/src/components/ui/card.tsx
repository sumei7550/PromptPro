import type { HTMLAttributes } from "react";

import styles from "./ui.module.css";

export type CardVariant = "feature" | "template" | "platform" | "privacy";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

export function Card({ variant, className = "", ...props }: CardProps) {
  const variantClass = variant ? styles[`card${capitalize(variant)}`] : "";
  return <div className={`${styles.card} ${variantClass} ${className}`.trim()} {...props} />;
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
