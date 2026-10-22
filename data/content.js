// All site content lives here, so pages stay clean and content is easy to edit.

export const categories = [
  { name: "Development", icon: "💻", blurb: "Web, apps and APIs" },
  { name: "Design", icon: "🎨", blurb: "UI, UX and product" },
  { name: "Data", icon: "📊", blurb: "Analysis and ML" },
  { name: "Marketing", icon: "📣", blurb: "SEO, ads and growth" },
  { name: "Business", icon: "💼", blurb: "Careers and communication" },
];

export const mentors = [
  { id: "aarav", name: "Aarav Mehta", role: "Senior full-stack engineer", bio: "9 years building products at two funded startups. Has reviewed 1,500+ student projects.", initials: "AM" },
  { id: "meera", name: "Meera Nair", role: "Lead product designer", bio: "Designed apps used by 2 million people. Teaches design as problem solving, not decoration.", initials: "MN" },
  { id: "kabir", name: "Kabir Shah", role: "Data scientist", bio: "Builds forecasting models for a logistics company and mentors first-time analysts.", initials: "KS" },
  { id: "sana", name: "Sana Qureshi", role: "Career coach and growth marketer", bio: "Ran growth for an edtech brand, now coaches students through interviews and offers.", initials: "SQ" },
];

export const courses = [
  {
    slug: "full-stack-web-development", title: "Full-Stack Web Development", category: "Development",
    price: 14999, oldPrice: 19999, duration: "16 weeks", level: "Beginner", rating: 4.8, reviewCount: 1240, students: 5200, mentor: "aarav",
    summary: "Go from zero to a deployed web app. You build five projects with HTML, CSS, JavaScript, React and Node.js.",
    outcomes: ["Build and deploy a full web app", "Write clean JavaScript and React", "Create REST APIs with Node.js and Express"],
    syllabus: [
      { title: "Web foundations", lessons: ["How the web works", "HTML structure and forms", "CSS layout with Flexbox and Grid"] },
      { title: "JavaScript and React", lessons: ["Variables, functions and arrays", "Components and state", "Fetching data from an API"] },
      { title: "Back end and deployment", lessons: ["Routes and middleware in Express", "Storing data in MongoDB", "Deploying your capstone project"] },
    ],
    reviews: [
      { name: "Ishaan P.", rating: 5, text: "I had never coded before. By week 10 I had a working expense tracker and my first interview." },
      { name: "Tanvi R.", rating: 5, text: "Aarav reviews every pull request in detail. That feedback taught me more than any video." },
    ],
  },
  {
    slug: "ui-ux-design-foundations", title: "UI/UX Design Foundations", category: "Design",
    price: 8999, oldPrice: 11999, duration: "8 weeks", level: "Beginner", rating: 4.7, reviewCount: 860, students: 3100, mentor: "meera",
    summary: "Learn research, wireframing and visual design in Figma, and finish with a case study you can show employers.",
    outcomes: ["Run quick user interviews", "Design responsive screens in Figma", "Present a portfolio case study"],
    syllabus: [
      { title: "Understanding users", lessons: ["Interviews and surveys", "Personas and journeys", "Defining the problem"] },
      { title: "Designing screens", lessons: ["Wireframes and flows", "Type, colour and spacing", "Building a component library"] },
      { title: "Testing and portfolio", lessons: ["Usability testing", "Handoff to developers", "Writing your case study"] },
    ],
    reviews: [
      { name: "Nisha K.", rating: 5, text: "My case study from this course got me a design internship offer in a month." },
      { name: "Rahul D.", rating: 4, text: "Clear and practical. I wish there were more live critique sessions." },
    ],
  },
  {
    slug: "data-analysis-with-python", title: "Data Analysis with Python", category: "Data",
    price: 11999, oldPrice: 14999, duration: "10 weeks", level: "Intermediate", rating: 4.8, reviewCount: 720, students: 2400, mentor: "kabir",
    summary: "Clean messy data, find patterns and tell the story with pandas, SQL and charts, using real business datasets.",
    outcomes: ["Clean data with pandas", "Write SQL queries for analysis", "Build clear charts and dashboards"],
    syllabus: [
      { title: "Python for data", lessons: ["Python refresher", "Working with pandas", "Cleaning missing values"] },
      { title: "SQL and exploration", lessons: ["Joins and aggregations", "Exploratory analysis", "Spotting outliers"] },
      { title: "Storytelling", lessons: ["Charts that make a point", "Building a dashboard", "Presenting findings"] },
    ],
    reviews: [
      { name: "Aditya S.", rating: 5, text: "The retail sales project felt like real work. I used it in my interview." },
      { name: "Pooja M.", rating: 5, text: "Kabir explains SQL joins better than anyone I have learned from." },
    ],
  },
  {
    slug: "digital-marketing-bootcamp", title: "Digital Marketing Bootcamp", category: "Marketing",
    price: 7499, oldPrice: 9999, duration: "6 weeks", level: "Beginner", rating: 4.6, reviewCount: 640, students: 2900, mentor: "sana",
    summary: "Learn SEO, paid ads and email marketing by running a live campaign with a small budget.",
    outcomes: ["Plan a channel strategy", "Run and measure a paid campaign", "Write emails that get opened"],
    syllabus: [
      { title: "Strategy and SEO", lessons: ["Know your audience", "Keyword research", "On-page SEO"] },
      { title: "Paid and social", lessons: ["Setting up ads", "Writing ad copy", "Reading campaign reports"] },
      { title: "Email and analytics", lessons: ["Email sequences", "Google Analytics basics", "Your campaign review"] },
    ],
    reviews: [
      { name: "Farhan A.", rating: 5, text: "I ran ads for my family's bakery during the course and orders doubled." },
      { name: "Kavya L.", rating: 4, text: "Practical and fast paced. The SEO module was the best part." },
    ],
  },
  {
    slug: "machine-learning-essentials", title: "Machine Learning Essentials", category: "Data",
    price: 17999, oldPrice: 22999, duration: "12 weeks", level: "Advanced", rating: 4.7, reviewCount: 410, students: 1300, mentor: "kabir",
    summary: "Understand how models learn. Train, evaluate and ship regression, classification and recommendation models.",
    outcomes: ["Train and evaluate ML models", "Avoid overfitting", "Serve a model through a simple API"],
    syllabus: [
      { title: "Core ideas", lessons: ["Features and labels", "Train and test splits", "Measuring model quality"] },
      { title: "Models in practice", lessons: ["Regression and classification", "Trees and ensembles", "Tuning hyperparameters"] },
      { title: "Shipping", lessons: ["Saving a trained model", "Building a prediction API", "Monitoring drift"] },
    ],
    reviews: [
      { name: "Rohit G.", rating: 5, text: "Tough but fair. The weekly doubt sessions kept me from getting stuck." },
      { name: "Sneha V.", rating: 4, text: "Great depth. Be comfortable with Python before you start." },
    ],
  },
  {
    slug: "interview-prep-and-communication", title: "Interview Prep and Communication", category: "Business",
    price: 4999, oldPrice: 6999, duration: "4 weeks", level: "Beginner", rating: 4.9, reviewCount: 980, students: 4100, mentor: "sana",
    summary: "Fix your resume, practise mock interviews and learn to speak clearly under pressure.",
    outcomes: ["Write a one-page resume that gets replies", "Answer behavioural questions with structure", "Negotiate your first offer"],
    syllabus: [
      { title: "Resume and profile", lessons: ["Resume teardown", "LinkedIn that gets found", "Cover notes that work"] },
      { title: "Interview skills", lessons: ["The STAR method", "Live mock interview", "Handling tough questions"] },
      { title: "Offers", lessons: ["Reading an offer letter", "Negotiating salary", "Your first 90 days"] },
    ],
    reviews: [
      { name: "Aman J.", rating: 5, text: "Two mock interviews with Sana and I stopped freezing up. Got the job." },
      { name: "Diya T.", rating: 5, text: "Short, focused and worth every rupee." },
    ],
  },
];

export const stats = [
  { value: "18,000+", label: "students have enrolled" },
  { value: "4.8 / 5", label: "average course rating" },
  { value: "92%", label: "finish their first course" },
  { value: "3,200", label: "learners got a new job last year" },
];

export const testimonials = [
  { name: "Ishaan Patel", role: "Junior developer, Pune", quote: "I came in with zero code. Eight months later I am shipping features at my first job." },
  { name: "Nisha Kapoor", role: "UI designer, Bengaluru", quote: "My mentor tore apart my first portfolio, kindly. The second version landed three offers." },
  { name: "Aditya Sharma", role: "Data analyst, Delhi", quote: "Real datasets, real deadlines. The interview felt easier than the course projects." },
];

export const faqs = [
  { id: "faq-1", q: "Do I need any experience to start?", a: "No. Beginner courses start from the basics. Each course page shows its level so you can pick the right one." },
  { id: "faq-2", q: "Are classes live or recorded?", a: "Both. You get two live sessions a week with your mentor, and every session is recorded in case you miss one." },
  { id: "faq-3", q: "What is the refund policy?", a: "You can ask for a full refund within 7 days of your first class, no questions asked." },
  { id: "faq-4", q: "Will I get a certificate?", a: "Yes. You receive a certificate after you submit your capstone project and pass the final review." },
  { id: "faq-5", q: "Can I pay in instalments?", a: "Yes. Every course can be split into 3 monthly payments with no extra interest." },
];

export const getCourse = (slug) => courses.find((c) => c.slug === slug);
export const getMentor = (id) => mentors.find((m) => m.id === id);
export const getCategory = (name) => categories.find((c) => c.name === name);
