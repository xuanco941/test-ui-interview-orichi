"use client"

import type { Metadata } from "next";
import '@shopify/polaris/build/esm/styles.css';
import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "@shopify/polaris";
const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Test Interview",
  description: "Test Interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
      </head>
      <body className={inter.className}>
        <AppProvider i18n={{
          Polaris: {
            Common: {
              checkbox: 'case à cocher',
            },
            ResourceList: {
              sortingLabel: 'Trier par',
              showing: '{itemsCount} {resource} affichés',
              defaultItemPlural: 'articles',
              defaultItemSingular: 'article',
              Item: {
                viewItem: "Afficher les détails de l'{itemName}",
              },
            },
          },
        }}>
          {children}

        </AppProvider>

      </body>
    </html>
  );
}
