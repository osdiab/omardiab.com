import Head from "next/head";
import { useEffect, useState } from "react";

interface DeferredLinkProps {
  href: string;
  rel: string;
  preload?: boolean;
}
export default function DeferredLink({
  href,
  rel,
  preload = false,
}: DeferredLinkProps): JSX.Element {
  const [addLink, setAddLink] = useState(false);
  // add the real link in `useEffect` to ensure it only happens after the
  // component has mounted, not in SSR
  useEffect(() => {
    setAddLink(true);
  }, []);

  return (
    <Head>
      {preload && <link rel="preload" href={href} />}
      {addLink && <link rel={rel} href={href} />}
    </Head>
  );
}
