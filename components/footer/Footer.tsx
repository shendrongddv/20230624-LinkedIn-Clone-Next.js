import Image from "next/image";
import Link from "next/link";

// Icons
import { BiChevronDown } from "react-icons/bi";

// Dummy Data
import { footerMenu, footerMenuBottom } from "@/dummy";

const Footer = () => {
  return (
    <footer>
      {/* Footer Main */}
      <div className="bg-[#F3F2F0] p-6">
        <div className="container">
          <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-5">
            <div className="max-md:col-span-2">
              <Link href="/">
                <Image
                  src="/LinkedIn.svg"
                  alt="LinkedIn"
                  width={50}
                  height={50}
                  className="h-6 w-auto"
                />
              </Link>
            </div>
            {footerMenu?.map((item) => (
              <div key={item.id} className="space-y-2">
                <h4 className="font-medium text-black">{item.heading}</h4>
                <ul className="space-y-1">
                  {item.subMenu?.map((subitem) => (
                    <li key={subitem.id}>
                      <Link
                        href={subitem.url}
                        className="text-sm text-black/75 hover:text-[#0a66c2] hover:underline"
                      >
                        {subitem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ./Footer Main */}

      {/* Footer Bottom */}
      <div className="bg-white p-6">
        <div className="container">
          <ul className="grid w-full grid-cols-2 gap-4 text-xs md:flex md:flex-wrap md:justify-start">
            <li className="flex items-center justify-start gap-1 grayscale">
              <Image
                src="/LinkedIn.svg"
                alt="LinkedIn"
                width={50}
                height={50}
                className="h-4 w-auto"
              />
              <span className="text-[#0a66c2]">© 2023</span>
            </li>

            {footerMenuBottom?.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className="text-black/75 hover:text-[#0a66c2] hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <div className="flex w-max items-center justify-start gap-1 rounded border p-2 text-black/75">
                Bahasa <BiChevronDown />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* ./ Footer Bottom */}
    </footer>
  );
};

export default Footer;
