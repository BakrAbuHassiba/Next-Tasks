"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();


  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/login");
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen text-white bg-black">
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) return null;

  const { user } = session;

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Profile</h1>

        <img
          src={user?.image ?? "/avatar-default.svg"}
          alt={user?.name ?? "User"}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-red-500"
        />

        <h2 className="text-xl font-semibold">{user?.name ?? "Guest User"}</h2>
        <p className="text-gray-400">{user?.email}</p>

        <button
          onClick={() => signOut()}
          className="mt-6 bg-red-600 hover:bg-red-700 w-full p-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
