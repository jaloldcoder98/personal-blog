// app/admin/layout.tsx
import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        {/* Admin panelining bosh menyusi yoki boshqa qismlar */}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;