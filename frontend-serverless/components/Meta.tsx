import Head from "next/head";
import { ReactElement, FC } from "react";

export const Meta: FC = (): ReactElement => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Carol and Arthur</title>
    <meta name="description" content="Carol and Arthur - Wedding Site" />
    <link rel="canonical" href="https://carolandarthur.com" />
    <meta property="og:title" content="Carol and Arthur" />
    <meta property="og:description" content="Carol and Arthur - Wedding Site" />
    <meta
      property="og:image"
      content="https://carolandarthur.com/IMG_4985_vignette.jpg"
    />
    <meta property="og:url" content="https://carolandarthur.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:site_name" content="Carol and Arthur" />
    <meta name="twitter:image:alt" content="Carol and Arthur Wedding" />
  </Head>
);
