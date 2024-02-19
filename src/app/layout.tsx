import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const roboto = Roboto({subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"]});

export const metadata: Metadata = {
  title: "hotkeys.lol",
  description: "A cheat sheet for all your application hotkeys",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body className={roboto.className}>
    <main className="flex min-h-screen">
      <div className={'bg-neutral-100 mx-auto shadow-lg w-full sm:w-11/12 lg:w-5/6 xl:w-2/3 min-w-[75%] flex flex-col items-center px-8 pt-8 relative'}>
        {children}
        <div className={'flex flex-col mx-auto mt-auto pt-12 pb-2'}>
          <Link href={'https://github.com/ethanhalko/app-keys'} className={'mx-auto'} title={'Link to Github Repository'}>
            <span className={'i-mdi:github text-2xl'}/>
          </Link>
          <div className={'text-sm font-light italic'}>
            Made by&nbsp;
            <a href={'https://ethanhalko.com'}
               title={'ethanhalko.com'}
               className={'underline underline-offset-2 decoration-1 text-slate-700'}
               target={'_blank'}>
              Ethan Halko
            </a>
            &nbsp;in the year 2024
          </div>
        </div>
      </div>
    </main>
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "1bd0d23e22db4afb86433f517c712ba7"}'></script>
    </body>
    </html>
  );
}
