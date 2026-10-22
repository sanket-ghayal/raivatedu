import CourseExplorer from "@/components/CourseExplorer";
import { courses, categories } from "@/data/content";

export const metadata = {
  title: "All courses",
  description: "Browse live, mentor-led courses in development, design, data, marketing and career skills. Filter by category and sort by price or rating.",
  openGraph: {
    title: "All courses | Raivatedu",
    description: "Browse live, mentor-led courses in development, design, data, marketing and career skills.",
  },
};

// In Next.js 15+, searchParams is a Promise, so we await it.
export default async function CoursesPage({ searchParams }) {
  const { q = "", category = "All" } = await searchParams;

  return (
    <div className="container">
      <header className="page-head">
        <h1>Find your next course</h1>
        <p className="lead">Every course includes live mentor sessions, projects and a certificate.</p>
      </header>
      {/* key resets the filters when the URL changes */}
      <CourseExplorer key={`${q}-${category}`} courses={courses} categories={categories} initialCategory={category} initialQuery={q} />
    </div>
  );
}
