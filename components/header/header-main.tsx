// Components
import { SiteLogoNavbar } from "../site-logo";
import { NavButton } from "./nav-button";
import { NavLists } from "./nav-item";
import { MobileToggle } from "./mobile-toggle";

const HeaderMain = () => {
  return (
    <header className="sticky left-0 top-0 z-30 w-full border-b bg-white p-4">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Site Logo */}
          <SiteLogoNavbar />

          {/* Desktop */}
          <div className="hidden items-center justify-center gap-4 md:flex">
            <NavLists />
            <NavButton />
          </div>

          {/* Mobile */}
          <div className="flex items-center justify-center gap-2 md:hidden">
            <MobileToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
