import Link from "next/link";
import Dropdown from "@/components/Dropdown";

export default function Navbar() {
  return (
    // w-full is needed because it is using fixed positioning
    <div className="h-14 flex items-center px-5 fixed w-full top-0 bg-background dark:bg-darkBackground justify-between">
      <Link
        href="/"
        className="bg-gradient-to-r from-accentRed to-amber-500 bg-clip-text text-2xl font-extrabold text-transparent w-32 text-center"
      >
        haymatlos
      </Link>
      <Dropdown />
    </div>
  );
}
