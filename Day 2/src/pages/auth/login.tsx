"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result?.error) {
      router.push("/"); 
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl mb-6 font-bold text-center text-red-500">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 p-2 rounded"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <button
            onClick={() => signIn("github")}
            className="w-full bg-gray-700 hover:bg-gray-600 p-2 rounded"
          >
            Sign in with GitHub
          </button>
          <button
            onClick={() => signIn("google")}
            className="w-full bg-blue-600 hover:bg-blue-500 p-2 rounded"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
