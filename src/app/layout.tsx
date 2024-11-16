'use client'
import "./globals.css";
import {CustomApolloProvider} from "@/components/CustomApolloProvider/CustomApolloProvider";
import {useEffect} from "react";
import {setupMswWorker} from "../../mocks/browser";
import {SetupWorker} from "msw/browser";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    useEffect(() => {
        let mswWorker:SetupWorker | undefined;
        const startMswWorker = async () => {
            mswWorker = await setupMswWorker();
            await mswWorker?.start({ quiet: false});
            console.log('MSW is ready');
        }
        if (process.env.NODE_ENV === "development") {
              startMswWorker();
        }
        return () => {
            mswWorker?.stop();
        }
    }, []);
  return (
    <html lang="en">
      <body
      >
      <CustomApolloProvider >
          <header></header>
          <main>
        {children}
          </main>
          <footer className="h-12 border-t border-black flex flex-row space-x-1 p-4">
           <p>Home work for <span className='font-bold'>Neurona Lab</span></p>
            <p>
                Ihor Fesina 2024
            </p>
          </footer>
      </CustomApolloProvider>
      </body>
    </html>
  );
}
