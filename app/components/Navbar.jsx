import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar({ className }) {
  const firstnavLinks = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "SERVICES", link: "/" },
  ];

  const secondnavLinks = [
    { name: "TESTIMONIALS", link: "/" },
    { name: "TEAM", link: "/" },
    { name: "CONTACT US", link: "/" },
  ];

  return (
    <div className={`relative max-w-7xl mx-auto flex items-center justify-between py-4 ${className}`}>
      <div className="flex gap-2">
        {firstnavLinks.map((link, index) => (
          <Button
            key={index}
            variant="outline"
            className="rounded-full px-6 py-2 text-sm hover:bg-gray-300 border border-black transition-all duration-300 shadow-none"
          >
            <Link href={link.link}>{link.name}</Link>
          </Button>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[37px]">SUNOVA</h1>
      </div>

      <div className="flex gap-4">
        {secondnavLinks.map((link, index) => (
          <Button
            key={index}
            variant="outline"
            className="rounded-full px-6 py-2 text-sm hover:bg-gray-300 border border-black transition-all duration-300 shadow-none"
          >
            <Link href={link.link}>{link.name}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}