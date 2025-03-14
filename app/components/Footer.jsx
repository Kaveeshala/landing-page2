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
    <div className="w-full"> {/* Prevents overflow */}
      <footer className="relative mt-28 pb-10"> {/* Added bottom padding */}
        <div className="w-full h-[620px] overflow-hidden relative">
          <Image
            src={footer}
            alt="footer"
            className="w-full h-full object-cover"
            width={1920}
            height={1050}
          />
          {/* Dark overlay on the image */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="absolute inset-0 flex flex-col gap-0 items-center leading-none text-white mt-50 text-center">
            <h1 className="text-[86px] font-roboto">Consult with our experts,</h1>
            <h1 className="text-[86px] font-roboto">Get a free quote now!</h1>

            <p className="max-w-lg font-roboto font-light leading-tight mt-8">
              Sunova specializes in innovative solar solutions, providing efficient <br />
              and sustainable energy for homes and businesses, making clean <br />
              power more accessible and reliable.
            </p>

            <Button className="bg-white text-black rounded-full mt-6 py-5 px-6 font-inter hover:bg-gray-400 hover:text-black cursor-pointer">
              CONTACT US
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between mt-6"> {/* Added flex-wrap to prevent overflow */}
            <div className="flex flex-wrap gap-2">
              {firstnavLinks.map((link, index) => (
                <Link key={index} href={link.link} passHref>
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-2 text-sm hover:bg-gray-300 border border-black transition-all duration-300 shadow-none cursor-pointer"
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {secondnavLinks.map((link, index) => (
                <Link key={index} href={link.link} passHref>
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-2 text-sm hover:bg-gray-300 border border-black transition-all duration-300 shadow-none cursor-pointer"
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <hr className="mt-20 border-black" />

          <div className="flex justify-between flex-wrap mt-6 text-sm">
            <p className="font-roboto">Since 2022</p>
            <p className="font-roboto">&copy;2025 Sunova. All rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
