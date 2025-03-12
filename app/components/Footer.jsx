import Image from "next/image";
import footer from "../../public/images/footer.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  const firstnavLinks = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT', link: '/' },
    { name: 'SERVICES', link: '/' },
  ];

  const secondnavLinks = [
    { name: 'TESTIMONIALS', link: '/' },
    { name: 'TEAM', link: '/' },
    { name: 'CONTACT US', link: '/' },
  ];

  return (
    <footer className="relative">
      <div className="w-full h-[350px] overflow-hidden relative">
        <Image
          src={footer}
          alt="footer"
          className="w-full h-full object-cover"
          width={1920}
          height={1050}
        />
        {/* Dark the image */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center text-white mt-12">
          <h1 className="text-6xl">Consult with our experts,</h1>
          <h1 className="text-6xl">Get a free quote now!</h1>
          <p className="max-w-lg text-base leading-tight text-center mt-4">
            Sunova specializes in innovative solar solutions, providing efficient <br />
            and sustainable energy for homes and businesses, making clean <br />
            power more accessible and reliable.
          </p>
          <Button className="bg-white text-black rounded-full mt-6 hover:bg-gray-400 hover:text-black cursor-pointer">Contact US</Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between mt-6">
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

          <div className="flex gap-4">
            {secondnavLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                className="rounded-full text-sm hover:bg-gray-300 border border-black transition-all duration-300 shadow-none"
              >
                <Link href={link.link}>{link.name}</Link>
              </Button>
            ))}
          </div>
        </div>

        <hr className="mt-12 border-gray-300" />

        <div className="flex justify-between mt-6">
          <p>Since 2022</p>
          <p>&copy;2025 Sunova. All rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
