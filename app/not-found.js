import Button from "@/components/Button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="container section" style={{ textAlign: "center" }}>
      <h1>We can&apos;t find that page</h1>
      <p className="lead" style={{ marginInline: "auto" }}>The link may be old or mistyped. Browse our courses instead.</p>
      <Button href="/courses">See all courses</Button>
    </section>
  );
}
