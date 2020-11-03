import Head from "next/head";
import { useEffect, useState } from "react";

const fonts = [
  "https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;700&display=swap",
];
export default function Fonts(): JSX.Element {
  const [addFonts, setAddFonts] = useState(false);
  useEffect(() => {
    // dont add the fonts until the page has already been mounted
    setAddFonts(true);
  }, []);

  return (
    <Head>
      {addFonts
        ? fonts.map((fontUrl) => (
            <link key={fontUrl} rel="stylesheet" href={fontUrl} />
          ))
        : null}
    </Head>
  );
}
