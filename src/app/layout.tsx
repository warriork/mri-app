import type { Metadata } from "next";
import "./globals.css";
import '../init-msw';
import { ApolloProvider } from '@apollo/client';
import client from '../../lib/apolloClient'

export const metadata: Metadata = {
  title: "Medical Patient Dashboard",
  description: "A responsive web application for displaying essential patient health data, including basic information and MRI brain scan images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
      </body>
    </html>
  );
}
