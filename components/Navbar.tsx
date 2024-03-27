import Link from "next/link";
import Dropdown from "@/components/Dropdown";
import { SquarePen } from "lucide-react";

export default function Navbar() {
  return (
    // w-full is needed because it is using fixed positioning
    <div className="h-14 flex items-center px-5 fixed w-full top-0 bg-background dark:bg-darkBackground justify-between">
      <Link
        href="/"
        // overflow-hidden is needed to hide the title in case of overflow, which is the case when the screen is too small. I am looking at you, galaxy fold.
        // it will look bad, but it is better than the title overflowing the dropdown menu
        className="bg-gradient-to-r from-accentRed to-amber-500 bg-clip-text text-2xl font-extrabold text-transparent w-32 text-center overflow-hidden"
      >
        haymatlos
      </Link>
      <div className="flex gap-2">
        <Link
          href="/post"
          className="rounded-full bg-accentRed text-white flex items-center p-2"
        >
          <SquarePen size={24} />
        </Link>
        <Dropdown />
      </div>
    </div>
  );
}
