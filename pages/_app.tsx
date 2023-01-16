import { SessionProvider } from "next-auth/react";
import "./styles/global.scss";
import Header from "./components/Header";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import { useRouter } from "next/router";

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      {router.pathname !== "/login" && <Header />}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
