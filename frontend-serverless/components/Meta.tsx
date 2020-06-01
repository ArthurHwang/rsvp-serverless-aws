import Head from "next/head";
import { ReactElement, FC } from "react";

export const Meta: FC = (): ReactElement => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Carol and Arthur</title>
    <meta content="Carol and Arthur - Wedding" />
    <link rel="canonical" href="https://carolandarthur.com" />
  </Head>
);
