import "../globals.css";
import { ContentWrapper, Footer, Header } from "@/components";
import { PAGE_THEME } from "@/constants";

export const metadata = {
  title: 'Team One Developers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-theme="light" className="bg-theme-bgColor text-theme-textColor">
      <Header theme={PAGE_THEME.light} />
      <section>{children}</section>
      <ContentWrapper>
        <Footer />
      </ContentWrapper>
    </div>
  );
}
