import { notFound } from "next/navigation";
import Accordion from "@/components/Accordion";
import EnrolCard from "@/components/EnrolCard";
import { courses, getCourse, getMentor } from "@/data/content";
import styles from "./course.module.css";

// Build one static page per course
export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

// Unique title, description and Open Graph tags for every course
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.summary,
    openGraph: { title: `${course.title} | Raivatedu`, description: course.summary },
  };
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  const mentor = getMentor(course.mentor);

  const syllabusItems = course.syllabus.map((module, i) => ({
    id: `module-${i}`,
    title: `Module ${i + 1}: ${module.title}`,
    content: <ul>{module.lessons.map((l) => <li key={l}>{l}</li>)}</ul>,
  }));

  return (
    <div className="container">
      <header className="page-head">
        <p className={styles.meta}>{course.category} · {course.level} · {course.duration}</p>
        <h1>{course.title}</h1>
        <p className="lead">{course.summary}</p>
        <p>
          <span className={styles.stars} aria-label={`Rated ${course.rating} out of 5`}>★ {course.rating}</span>{" "}
          ({course.reviewCount.toLocaleString("en-IN")} reviews)
        </p>
      </header>

      <div className={styles.layout}>
        <div className={styles.main}>
          <section aria-labelledby="learn-title">
            <h2 id="learn-title">What you will learn</h2>
            <ul className={styles.outcomes}>
              {course.outcomes.map((o) => <li key={o}>{o}</li>)}
            </ul>
          </section>

          <section aria-labelledby="syllabus-title">
            <h2 id="syllabus-title">Syllabus</h2>
            <Accordion items={syllabusItems} />
          </section>

          <section aria-labelledby="instructor-title">
            <h2 id="instructor-title">Your instructor</h2>
            <div className={styles.instructor}>
              <div className={styles.avatar} aria-hidden="true">{mentor.initials}</div>
              <div>
                <h3>{mentor.name}</h3>
                <p className={styles.role}>{mentor.role}</p>
                <p>{mentor.bio}</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="reviews-title">
            <h2 id="reviews-title">Student reviews</h2>
            <ul className={styles.reviews}>
              {course.reviews.map((r) => (
                <li key={r.name} className={styles.review}>
                  <p><strong>{r.name}</strong> <span className={styles.stars} aria-label={`${r.rating} out of 5 stars`}>{"★".repeat(r.rating)}</span></p>
                  <p>{r.text}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.side}>
          <EnrolCard course={course} />
        </div>
      </div>
    </div>
  );
}
