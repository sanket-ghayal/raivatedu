"use client";

import { useState } from "react";
import Button from "./Button";
import { formatPrice } from "@/lib/format";
import styles from "./EnrolCard.module.css";

export default function EnrolCard({ course }) {
  const [enrolled, setEnrolled] = useState(false);
  const saving = Math.round((1 - course.price / course.oldPrice) * 100);

  return (
    <aside className={styles.card} aria-label="Enrol in this course">
      <p className={styles.price}>
        {formatPrice(course.price)} <s className={styles.old}>{formatPrice(course.oldPrice)}</s>
      </p>
      <p className={styles.save}>Save {saving}% until the next batch starts</p>
      <ul className={styles.list}>
        <li>{course.duration} with live mentor sessions</li>
        <li>Recorded classes for every session</li>
        <li>Certificate after your capstone review</li>
        <li>7-day full refund</li>
      </ul>
      <Button variant="accent" disabled={enrolled} onClick={() => setEnrolled(true)}>
        {enrolled ? "Seat reserved" : "Enrol now"}
      </Button>
      <p className={styles.status} role="status">
        {enrolled && "You're in! We'll email your batch details and payment link within a day."}
      </p>
    </aside>
  );
}
