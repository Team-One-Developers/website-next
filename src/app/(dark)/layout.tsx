import "../globals.css";
import { Header } from "@/components";
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
    <div data-theme="dark" className="bg-theme-bgColor text-theme-textColor">
      <Header theme={PAGE_THEME.dark} />
      <section>{children}</section>
    </div>
  );
}
