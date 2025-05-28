"use client";
import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex h-[70vh] justify-center items-center bg-[#fafafa] dark:bg-[#222d37]">
      <ClipLoader size={50} color="#4A90E2" />
    </div>
  );
}
