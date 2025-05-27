"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleClick = () => {
    router.replace("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {error.message || "An unexpected error occurred"}
        </p>
        <button
          onClick={handleClick}
          className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
        >
          Go To Main Page
        </button>
      </div>
    </div>
  );
}
