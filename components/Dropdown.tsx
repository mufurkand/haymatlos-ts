"use client";

import { CircleUserRound, ChevronUp, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // close the dropdown menu when clicked outside or on scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll);
    // clean the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative text-white">
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className={
          "bg-accentRed p-2 flex justify-between gap-2" +
          (isOpen ? " rounded-t-lg" : " rounded-lg")
        }
        type="button"
      >
        <CircleUserRound size={24} />
        <p className="text-white">Profil</p>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isOpen && <DropdownMenu setIsOpen={setIsOpen} />}
    </div>
  );
}

function DropdownMenu({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-accentRed absolute w-full flex flex-col gap-2 p-2 rounded-b-lg text-center">
      <Link onClick={handleClick} href="/sign-up">
        Kayıt ol
      </Link>
      <Link onClick={handleClick} href="/sign-in">
        Giriş yap
      </Link>
      <Link onClick={handleClick} href="/profile">
        Profil
      </Link>
    </div>
  );
}
