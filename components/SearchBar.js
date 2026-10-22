"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SearchBar.module.css";

// Hero search: sends the visitor to /courses?q=...
export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/courses?q=${encodeURIComponent(q)}` : "/courses");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} role="search">
      <label htmlFor="hero-search" className="sr-only">Search courses</label>
      <input
        id="hero-search"
        className={styles.input}
        type="search"
        placeholder="Try “python”, “design” or “marketing”"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className={styles.button}>Search</button>
    </form>
  );
}
