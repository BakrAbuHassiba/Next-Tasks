"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/auth/login");
    } else {
      const data = await res.json();
      setError(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="w-[90%] max-w-md bg-zinc-900 text-white p-8 rounded-xl shadow-xl border border-red-600">
        <h1 className="text-3xl font-bold text-red-500 mb-6 text-center">Create Account</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500"
          />

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white w-full">
            Sign Up
          </Button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-red-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
