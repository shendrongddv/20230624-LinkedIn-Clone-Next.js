import Image from "next/image";
import Link from "next/link";

// Icons
import {
  BsNewspaper,
  BsFillPeopleFill,
  BsPersonVideo2,
  BsBriefcaseFill,
} from "react-icons/bs";

// Dummy Data
const menuLink = [
  {
    id: 1,
    label: "Artikel",
    url: "/",
    icon: "BsNewspaper",
    img: "newspaper.svg",
  },
  {
    id: 2,
    label: "Orang",
    url: "/",
    icon: "BsFillPeopleFill",
    img: "people-fill.svg",
  },
  {
    id: 3,
    label: "Learning",
    url: "/",
    icon: "BsPersonVideo2",
    img: "person-video2.svg",
  },
  {
    id: 4,
    label: "Pekerjaan",
    url: "/",
    icon: "BsBriefcaseFill",
    img: "briefcase-fill.svg",
  },
];

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[999] bg-white">
      <div className="container max-md:px-6">
        <div className="flex h-14 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/LinkedIn.svg"
              alt="LinkedIn"
              width={100}
              height={100}
              className="h-7 w-auto"
            />
          </Link>

          {/* Content */}
          <nav className="flex items-center justify-center gap-6 md:divide-x-[1px]">
            <ul className="hidden items-center justify-center gap-10 md:flex">
              {menuLink?.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="flex flex-col items-center  text-black/75 hover:text-[#0a66c2]"
                  >
                    <Image
                      src={`/icons/${item.img}`}
                      alt={item.label}
                      width={40}
                      height={40}
                      className="h-6 w-6"
                    />
                    <span className="mt-[2px] text-sm font-medium">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-center gap-2 pl-6 md:gap-4">
              <Link href="/" className="btn btn-link">
                <span className="hidden md:flex">Bergabung Sekarang</span>
                <span className="md:hidden">Daftar</span>
              </Link>
              <Link href="/" className="btn btn-primary-outlane">
                Login
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
