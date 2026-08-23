import type { HTMLAttributes } from "react";

import styles from "./ui.module.css";

export type BadgeStatus = "historical" | "configured-unverified";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  status?: BadgeStatus;
};

export function Badge({ status, className = "", ...props }: BadgeProps) {
  const statusClass = status ? styles[`badge${capitalize(status)}`] : "";
  return <span className={`${styles.badge} ${statusClass} ${className}`.trim()} {...props} />;
}

export function PlatformStatusBadge({ status, children, ...props }: BadgeProps & { status: BadgeStatus }) {
  return (
    <Badge status={status} {...props}>
      <span className={styles.badgeDot} aria-hidden="true" />
      {children}
    </Badge>
  );
}

function capitalize(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}
