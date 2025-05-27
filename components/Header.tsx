import Link from "next/link";
import { Toggle } from "./Toggle";

export default function Header() {
  return (
    <div className="h-[10vh] md:h-[15vh] p-5 lg:p-10 shadow-md bg-white dark:bg-[#2c3743] flex justify-between items-center">
      <Link className="text-lg lg:text-3xl font-bold" href="/">
        Where in the world ?
      </Link>
      <Toggle />
    </div>
  );
}
