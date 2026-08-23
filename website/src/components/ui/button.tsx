import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement } from "react";

import styles from "./ui.module.css";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "large" | "medium" | "small";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonProps): ReactElement;
export function Button(props: LinkProps): ReactElement;
export function Button({ variant = "primary", size = "medium", className = "", ...props }: ButtonProps | LinkProps) {
  const classNames = `${styles.button} ${styles[`button${capitalize(variant)}`]} ${styles[`button${capitalize(size)}`]} ${className}`.trim();

  if ("href" in props) {
    const { href, ...anchorProps } = props as LinkProps;
    return <a className={classNames} href={href} {...anchorProps} />;
  }

  const buttonProps = props as ButtonProps;
  return <button className={classNames} type="button" {...buttonProps} />;
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
