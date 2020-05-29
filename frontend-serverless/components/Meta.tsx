import Head from "next/head";
import { ReactElement, FC } from "react";

export const Meta: FC = (): ReactElement => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Carol and Arthur</title>
  </Head>
);
