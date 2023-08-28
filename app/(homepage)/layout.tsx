// Components
import HeaderMain from "@/components/header/header-main";
import FooterMain from "@/components/footer/footer-main";

interface HomepageLayoutProps {
  children: React.ReactNode;
}

export default async function HomepageLayout({
  children,
}: HomepageLayoutProps) {
  return (
    <>
      <HeaderMain />
      <main className="flex flex-col">{children}</main>
      <FooterMain />
    </>
  );
}
