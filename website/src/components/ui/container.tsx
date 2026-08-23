import type { HTMLAttributes } from "react";

import styles from "./ui.module.css";

export function Container({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`${styles.container} ${className}`.trim()} {...props} />;
}
