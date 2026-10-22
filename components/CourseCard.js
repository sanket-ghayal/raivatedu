import Link from "next/link";
import { getCategory, getMentor } from "@/data/content";
import { formatPrice } from "@/lib/format";
import styles from "./CourseCard.module.css";

export default function CourseCard({ course }) {
  const category = getCategory(course.category);
  const mentor = getMentor(course.mentor);

  return (
    <article className={styles.card}>
      <div className={styles.cover} aria-hidden="true">{category.icon}</div>
      <div className={styles.body}>
        <p className={styles.meta}>{course.category} · {course.level}</p>
        <h3 className={styles.title}>
          {/* The ::after on this link makes the whole card clickable */}
          <Link href={`/courses/${course.slug}`} className={styles.link}>{course.title}</Link>
        </h3>
        <p className={styles.mentor}>with {mentor.name}</p>
        <p className={styles.rating}>
          <span aria-label={`Rated ${course.rating} out of 5`}>★ {course.rating}</span>
          <span> ({course.reviewCount.toLocaleString("en-IN")} reviews)</span>
        </p>
        <div className={styles.footer}>
          <span className={styles.price}>{formatPrice(course.price)}</span>
          <span className={styles.duration}>{course.duration}</span>
        </div>
      </div>
    </article>
  );
}
