import Link from "next/link";
import styles from "./Button.module.css";

// Reusable button. Renders a <Link> if href is given, else a <button>.
export default function Button({
  href,
  children,
  variant = "primary", // "primary" | "accent" | "ghost"
  ...props
}) {
  const className = `${styles.button} ${styles[variant]}`;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
