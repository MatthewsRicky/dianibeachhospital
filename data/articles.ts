export type Article = {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  href: string;
};

export const articles: Article[] = [
  {
    title: "Understanding Preventive Healthcare",
    excerpt:
      "Discover why regular health assessments and early attention to your health matter.",
    category: "Health Tips",
    image: "/images/articles/Botox-tretman-u-poliklnici-Bagatin-2-300x150.jpg",
    href: "/blog/",
  },
  {
    title: "The Importance of Regular Health Checks",
    excerpt:
      "Learn more about routine health checks and how they can support informed healthcare decisions.",
    category: "Health Education",
    image: "/images/articles/Untitled-design-3-1-300x150.png",
    href: "/blog/",
  },
  {
    title: "Making Informed Decisions About Your Health",
    excerpt:
      "Explore the value of understanding your healthcare options and discussing concerns with a professional.",
    category: "Wellness",
    image: "/images/articles/960480-images-300x150.png",
    href: "/blog/",
  },
];
