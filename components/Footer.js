import Link from "next/link";
import styles from "./Footer.module.css";

const columns = [
  {
    title: "Learn",
    links: [
      { href: "/courses", label: "All courses" },
      { href: "/courses/full-stack-web-development", label: "Web development" },
      { href: "/#mentors", label: "Our mentors" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#results", label: "Student results" },
      { href: "/#faq", label: "FAQ" },
      { href: "/courses", label: "Admissions" },
    ],
  },
];

const socials = [
  { href: "https://instagram.com", label: "Raivatedu on Instagram", icon: "IG" },
  { href: "https://linkedin.com", label: "Raivatedu on LinkedIn", icon: "in" },
  { href: "https://youtube.com", label: "Raivatedu on YouTube", icon: "YT" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.brand}>Raivatedu</p>
          <p className={styles.blurb}>
            Live courses, 1-on-1 mentors and admissions help for students who
            want a career, not just a certificate.
          </p>
          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} className={styles.social}>
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className={styles.title}>{col.title}</h2>
            <ul className={styles.links}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Raivatedu. All rights reserved.
      </p>
    </footer>
  );
}
