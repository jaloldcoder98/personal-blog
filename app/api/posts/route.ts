import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { title, date, content } = await request.json();

    if (!title || !date || !content) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);

    const mdContent = `---\ntitle: "${title}"\ndate: "${date}"\n---\n\n${content}`;

    fs.writeFileSync(filePath, mdContent);

    return NextResponse.json({ message: 'Post created' }, { status: 201 });
  } catch (err) {
    console.error('Error saving post:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}