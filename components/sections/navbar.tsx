import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const navItems = [
  { name: "Features & Benefits", href: "#features" },
  { name: "FAQs", href: "#faq" },
  { name: "About", href: "#about" },
];

const Navbar = () => {
  return (
    <nav className="absolute top-0 px-4 lg:px-8 py-4 w-full flex items-center justify-between z-10">
      <Link href="/">
        <Image
          src="https://framerusercontent.com/images/ZXeDno27AcSEceLITVHyZ5LggE.png"
          alt="Logo"
          width={120}
          height={120}
        />
      </Link>
      <ul className="hidden md:flex items-center gap-x-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="hover:bg-gray-50 hover:text-slate-900 px-4 py-2 rounded-md text-slate-700 transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <Button size="sm" className="bg-[#379244] hover:bg-[#2a7035]" asChild>
            <Link href="https://calendly.com/jake-pistachiosoftware/pistachio-intro-call?month=2024-04">
              Get Started
            </Link>
          </Button>
        </li>
      </ul>
      <Button
        size="sm"
        className="inline-flex md:hidden bg-[#379244] hover:bg-[#2a7035]"
        asChild
      >
        <Link href="https://calendly.com/jake-pistachiosoftware/pistachio-intro-call?month=2024-04">
          Get Started
        </Link>
      </Button>
    </nav>
  );
};

export default Navbar;
