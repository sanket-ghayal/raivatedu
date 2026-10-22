"use client"; // needs useState and click handlers, so it runs in the browser

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/#mentors", label: "Mentors" },
  { href: "/#results", label: "Results" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // is the mobile menu open?
  const pathname = usePathname();
  // Only plain page links can be "current"; hash links (/#faq) never are
  const isCurrent = (href) => !href.includes("#") && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // Close the mobile menu when the user presses Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.mark} aria-hidden="true">R</span>
          Raivatedu
        </Link>

        <nav
          id="main-nav"
          aria-label="Main"
          className={`${styles.nav} ${open ? styles.open : ""}`}
        >
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.link}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/courses" variant="accent" onClick={() => setOpen(false)}>
            Enrol now
          </Button>
        </nav>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className={styles.burger} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
