import Image from "next/image";
import Link from "next/link";

import imgLogo from "../public/LinkedIn.svg";

export const SiteLogoNavbar = () => {
  return (
    <Link href="/">
      <Image
        src={imgLogo}
        alt="LinkedIn"
        width={135}
        height={34}
        className="h-6 w-auto"
      />
    </Link>
  );
};

export const SiteLogoFooterMain = () => {
  return (
    <Link href="/">
      <Image
        src={imgLogo}
        alt="LinkedIn"
        width={135}
        height={34}
        className="h-6 w-auto"
      />
    </Link>
  );
};

export const SiteLogoFooterBottom = () => {
  return (
    <Link href="/">
      <Image
        src={imgLogo}
        alt="LinkedIn"
        width={135}
        height={34}
        className="h-4 w-auto grayscale"
      />
    </Link>
  );
};
