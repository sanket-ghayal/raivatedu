"use client";

import { useState, useMemo } from "react";
import CourseCard from "./CourseCard";
import Button from "./Button";
import styles from "./CourseExplorer.module.css";

const sorters = {
  popular: (a, b) => b.students - a.students,
  rating: (a, b) => b.rating - a.rating,
  "price-low": (a, b) => a.price - b.price,
  "price-high": (a, b) => b.price - a.price,
};

// Filtering and sorting happen in the browser, so it feels instant.
export default function CourseExplorer({ courses, categories, initialCategory = "All", initialQuery = "" }) {
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("popular");
  const [query, setQuery] = useState(initialQuery);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses
      .filter((c) => category === "All" || c.category === category)
      .filter((c) => !q || `${c.title} ${c.category} ${c.summary}`.toLowerCase().includes(q))
      .sort(sorters[sort]);
  }, [courses, category, sort, query]);

  function reset() {
    setCategory("All");
    setQuery("");
  }

  return (
    <div>
      <div className={styles.controls}>
        <div className={styles.field}>
          <label htmlFor="course-search">Search</label>
          <input id="course-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses" />
        </div>
        <div className={styles.field}>
          <label htmlFor="course-sort">Sort by</label>
          <select id="course-sort" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="popular">Most popular</option>
            <option value="rating">Highest rated</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </div>
      </div>

      <div className={styles.chips} role="group" aria-label="Filter by category">
        {["All", ...categories.map((c) => c.name)].map((name) => (
          <button key={name} className={styles.chip} aria-pressed={category === name} onClick={() => setCategory(name)}>
            {name}
          </button>
        ))}
      </div>

      <p className={styles.count} aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "course" : "courses"}
      </p>

      {visible.length > 0 ? (
        <div className="grid-cards">
          {visible.map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
      ) : (
        <div className={styles.empty}>
          <h2>No courses match yet</h2>
          <p>Try a different keyword or clear your filters to see every course.</p>
          <Button variant="primary" onClick={reset}>Clear filters</Button>
        </div>
      )}
    </div>
  );
}
