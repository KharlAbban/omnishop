import { AppHeader } from "@/components";
import { HomeProviders } from "./homeProviders";
import {Toaster} from "@/components/ui/toaster"

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
          <HomeProviders>
            <AppHeader />
            {children}
            <Toaster />
          </HomeProviders>
        </body>
      </html>
  );
}
