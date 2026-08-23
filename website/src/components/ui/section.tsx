import type { HTMLAttributes } from "react";

import { Container } from "./container";
import styles from "./ui.module.css";

type SectionProps = HTMLAttributes<HTMLElement> & {
  contained?: boolean;
};

export function Section({ className = "", contained = true, children, ...props }: SectionProps) {
  const content = contained ? <Container>{children}</Container> : children;
  return (
    <section className={`${styles.section} ${className}`.trim()} {...props}>
      {content}
    </section>
  );
}
