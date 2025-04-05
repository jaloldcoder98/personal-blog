import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
    };
  });

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-6">
      <h1 className="text-3xl font-bold">Mening Blogim</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <div className="p-4 rounded-xl shadow hover:shadow-md transition">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-600">{post.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}