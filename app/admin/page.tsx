// app/admin/page.tsx
'use client';

import { useState } from '../../node_modules/react';
import { useRouter } from '../../node_modules/next/navigation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';


export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    if (!title || !date || !content) return alert('Hamma maydonlarni to‘ldiring');

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, date, content }),
    });

    if (res.ok) {
      alert('Post saqlandi!');
      setTitle('');
      setDate('');
      setContent('');
      router.push('/blog');
    } else {
      alert('Xatolik yuz berdi');
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8 space-y-4">
      <h1 className="text-2xl font-bold">Yangi post yaratish</h1>
      <Input placeholder="Sarlavha" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <Textarea placeholder="Kontent (markdown format)" rows={10} value={content} onChange={(e) => setContent(e.target.value)} />
      <Button onClick={handleSubmit}>Postni saqlash</Button>
    </div>
  );
}