// app/blog/layout.tsx
import React from 'react';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold">Blog</h1>
        {/* Blog uchun umumiy menyu */}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default BlogLayout;