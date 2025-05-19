"use client";

import { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Opsional: form-u sıfırla
    setFormData({ name: "", email: "" });

    // Opsional: router.refresh() ilə SSR data-nı yenilə
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-8">
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
      />
      <button type="submit">Add User</button>
    </form>
  );
}
