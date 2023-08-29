// Components
import { SiteLogoNavbar } from "../site-logo";
import DesktopNavbar from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

const HeaderMain = () => {
  return (
    <header className="sticky left-0 top-0 z-30 w-full border-b bg-white px-4">
      <div className="container">
        <div className="flex h-14 items-center justify-between gap-2 md:h-16">
          {/* Site Logo */}
          <SiteLogoNavbar />

          {/* Desktop Navbar */}
          <DesktopNavbar />

          {/* Mobile Navbar */}
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
