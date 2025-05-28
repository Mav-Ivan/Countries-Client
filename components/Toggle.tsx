"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { ClipLoader } from "react-spinners";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Toggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ClipLoader size={30} color="#4A90E2" />;
  }

  const icon =
    theme === "light" ? (
      <span className="flex justify-between">
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
        <p className="hidden md:flex ml-2">Light Mode</p>
      </span>
    ) : (
      <span className="flex justify-between">
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
        <p className="hidden md:flex ml-2">Dark Mode</p>
      </span>
    );

  return (
    <Button variant="outline" onClick={handleClick}>
      {icon}
    </Button>
  );
}
