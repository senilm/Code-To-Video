import Link from "next/link";
import { Button } from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import { reviews,links,footerLink } from "@/utils/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">

      {/* header */}
      <header className="sticky top-0 z-10 bg-white backdrop-blur-sm bg-opacity-90 dark:bg-black/90">
        <div className="container flex items-center justify-between h-14 px-4 md:px-6">
          <div className="flex items-center">
            <Link className="flex items-center gap-2 font-medium" href="#">
              {/* <SquareIcon className="h-6 w-6" /> */}
              <h1>Code-To-Video</h1>
              <span className="sr-only">Acme Inc</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {links.map((link,i)=>(
              <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href={link.url}
              key={i}
            >
              {link.name}
            </Link>
            ))}
            
          </nav>
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href={'/login'}
            >
              Sign In
            </Link>
           
          </div>
        </div>
      </header>
      {/* header finish */}

      <main className="flex-1">

      {/* Hero section  */}
        <section className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-36">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Code to Video Converter
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Convert your code snippets to beautiful videos. Share your code
                on social media, blogs, and more.
              </p>
            </div>
            <form className="flex flex-col gap-2 max-w-sm mx-auto">
              <Link href={'/home'}>
              <Button className="mx-auto w-full mb-5" type="submit">
                Get Started
              </Button>
              </Link>
            </form>
          </div>
        </section>
      {/* Hero section end */}


      {/* mid section */}
        <section className="w-full py-12 md:py-24 lg:py-10 border-t mt-28">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What is this?
              </h2>
              <div className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Copy, Paste and BOOM!!
                <div>You just made a video of your written code.</div>
              </div>
            </div>
          </div>
        </section>
      {/* mid section end */}


      {/* Testimonial section */}
        <section className="w-full py-12 md:py-24 lg:py-18 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Testimonials
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let's hear what our user says about us.
              </p>
            </div>
            <div className="mx-auto w-full gap-4 mt-10  flex">
              {reviews.map((review, i)=>{
                return(
                  <Card className="w-full max-w-sm rounded-xl border grid gap-4 p-6" key={i}>
                <div className="flex justify-center gap-4">
                  <div className="">
                    <h3 className="text-lg font-semibold text-center ">{review.name}</h3>
                  </div>
                </div>
                <p className="text-sm/relaxed max-lines-4">
                  {review.review}
                </p>
              </Card>
                )
              })}
            </div>
          </div>
        </section>
      {/* Testimonial section end*/}
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Code to Video. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {footerLink.map((link,i)=>(
            <Link className="text-xs hover:underline underline-offset-4" href={link.url} key={i}>
            {link.name}
          </Link>
            ))}
        </nav>
      </footer>
      {/* Footer end */}
    </div>
  );
}
