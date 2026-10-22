import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import CourseCard from "@/components/CourseCard";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import { categories, courses, mentors, stats, testimonials, faqs } from "@/data/content";
import styles from "./home.module.css";

export default function Home() {
  const faqItems = faqs.map((f) => ({ id: f.id, title: f.q, content: <p>{f.a}</p> }));

  return (
    <>
      {/* Hero */}
      <section className={`section ${styles.hero}`}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <h1 className="animate-rise">Learn skills that get you hired</h1>
            <p className="lead animate-rise" style={{ animationDelay: "0.1s" }}>
              Live classes, 1-on-1 mentors and honest career support. Pick a course and start this month.
            </p>
            <div className="animate-rise" style={{ animationDelay: "0.2s" }}>
              <SearchBar />
            </div>
            <p className={`${styles.popular} animate-rise`} style={{ animationDelay: "0.3s" }}>
              Popular: <Link href="/courses?q=python">Python</Link>, <Link href="/courses?q=design">Design</Link>, <Link href="/courses?q=marketing">Marketing</Link>
            </p>
          </div>
          <Image src="/hero.svg" alt="Illustration of a student with books and a lightbulb" width={480} height={400} priority className={styles.heroImage} />
        </div>
      </section>

      {/* Categories */}
      <section className="section" aria-labelledby="categories-title">
        <div className="container">
          <h2 id="categories-title">Popular categories</h2>
          <div className={styles.categories}>
            {categories.map((c) => (
              <Link key={c.name} href={`/courses?category=${c.name}`} className={styles.category}>
                <span className={styles.categoryIcon} aria-hidden="true">{c.icon}</span>
                <strong>{c.name}</strong>
                <span>{c.blurb}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured courses */}
      <section className="section section--tint" aria-labelledby="featured-title">
        <div className="container">
          <h2 id="featured-title">Featured courses</h2>
          <p className="lead">Start with the courses most students pick first.</p>
          <div className="grid-cards">
            {courses.slice(0, 3).map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
          <p className={styles.more}><Button href="/courses" variant="primary">Browse all courses</Button></p>
        </div>
      </section>

      {/* Mentors */}
      <section id="mentors" className="section" aria-labelledby="mentors-title">
        <div className="container">
          <h2 id="mentors-title">Learn from people who do this every day</h2>
          <div className="grid-cards">
            {mentors.map((m) => (
              <article key={m.id} className={styles.mentor}>
                <div className={styles.avatar} aria-hidden="true">{m.initials}</div>
                <h3>{m.name}</h3>
                <p className={styles.role}>{m.role}</p>
                <p>{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="results" className={`section ${styles.stats}`} aria-labelledby="results-title">
        <div className="container">
          <h2 id="results-title">Results our students can point to</h2>
          <dl className={styles.statGrid}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt className={styles.statValue}>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" aria-labelledby="stories-title">
        <div className="container">
          <h2 id="stories-title">What students say</h2>
          <div className="grid-cards">
            {testimonials.map((t) => (
              <figure key={t.name} className={styles.quote}>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption><strong>{t.name}</strong><br />{t.role}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section section--tint" aria-labelledby="faq-title">
        <div className={`container ${styles.faq}`}>
          <h2 id="faq-title">Questions before you enrol?</h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section" aria-labelledby="cta-title">
        <div className={`container ${styles.cta}`}>
          <h2 id="cta-title">Your next batch starts soon</h2>
          <p>Seats per batch are limited so every student gets a mentor&apos;s attention.</p>
          <Button href="/courses" variant="accent">Find your course</Button>
        </div>
      </section>
    </>
  );
}
