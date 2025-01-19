import { AppHeader } from "@/components";
import { HomeProviders } from "./homeProviders";
import {Toaster} from "@/components/ui/toaster"
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session) {
    return null;
  }

  return (
      <html lang="en">
        <body>
          <SessionProvider session={session}>
            <HomeProviders>
              <AppHeader />
              {children}
              <Toaster />
            </HomeProviders>
          </SessionProvider>
        </body>
      </html>
  );
}
