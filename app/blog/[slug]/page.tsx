import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function PostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "posts", `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = marked(content);

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-gray-600 mb-6">{data.date}</p>
      <div className="prose prose-neutral" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}