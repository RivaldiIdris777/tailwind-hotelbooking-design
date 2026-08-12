"use client";
import {  
  IconBell,
  IconBuildingSkyscraper,
  IconSearch,
  IconUser,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconArrowRight,  
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Detail() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white text-zinc-900 shadow-md" : "bg-white text-zinc-900 shadow-md"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Left Menu */}
          <Link href="/" className="flex items-center gap-2">
            <IconBuildingSkyscraper size={32} />
            <span>Hotel</span>
          </Link>

          {/* Middle Menu */}
          <div className="hidden items-center gap-8 font-medium md:flex">
            <Link href="/">Home</Link>
            <Link href="/detail">Detail</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/explore2">Explore2</Link>
            <Link href="/order">Order</Link>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-4">
            <IconSearch size={24} />
            <IconUser size={24} />
          </div>
        </div>
      </nav>

      {/* Hero Menu */}
      <section className="px-6 mt-25 mb-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2">
            <h1 className="text-zinc-900 font-semibold text-2xl">
              Hotel Rooms{" "}
            </h1>
          </div>

          <p className="flex items-center gap-1 text-sm text-zinc-500 mt-2">
            Take Advantage of our limited-time offer and special packages to
            enchance your stay and create unforgetable memories.
          </p>
        </div>
      </section>

      <section className="px-6 mb-10 ">
        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <div className="bg-white flex flex-col lg:h-[calc(100vh-80px)]">
              <div className="lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
                <div className="flex w-full max-w mb-2 flex-col gap-4 p-4 sm:flex-row sm:items-stretch">
                  <div className="shrink-0 sm:w-64 lg:w-72">
                    <img
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=60"
                      alt="The Grand Palace Resort"
                      className="h-48 w-full rounded-xl object-cover sm:h-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-3 py-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md border border-gray-300 px-2.5 py-1 text-xs font-semibold text-gray-700">
                        Best Offer
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                        <IconBell size={14} />
                        Register Schedule
                      </span>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Grand Palace Resort
                      </h2>
                      <p className="mt-0.5 text-sm text-gray-500">
                        San Diego, CA, USA
                      </p>
                    </div>

                    {/* Fasilitas */}
                    <p className="text-sm text-gray-400">
                      2 Bed Room, 1 Bath Room, Wifi, Swimming Pool
                    </p>

                    {/* Harga di sudut kanan bawah */}
                    <div className="flex justify-end">
                      <p className="text-sm text-gray-500">
                        <span className="text-lg font-bold text-gray-900">
                          $389
                        </span>
                        /night
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="w-4/4 border-t border-gray-300 my-6" />
                <div className="flex w-full max-w mb-2 flex-col gap-4 p-4 sm:flex-row sm:items-stretch">
                  <div className="shrink-0 sm:w-64 lg:w-72">
                    <img
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=60"
                      alt="The Grand Palace Resort"
                      className="h-48 w-full rounded-xl object-cover sm:h-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-3 py-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md border border-gray-300 px-2.5 py-1 text-xs font-semibold text-gray-700">
                        Best Offer
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                        <IconBell size={14} />
                        Register Schedule
                      </span>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Grand Palace Resort
                      </h2>
                      <p className="mt-0.5 text-sm text-gray-500">
                        San Diego, CA, USA
                      </p>
                    </div>

                    {/* Fasilitas */}
                    <p className="text-sm text-gray-400">
                      2 Bed Room, 1 Bath Room, Wifi, Swimming Pool
                    </p>

                    {/* Harga di sudut kanan bawah */}
                    <div className="flex justify-end">
                      <p className="text-sm text-gray-500">
                        <span className="text-lg font-bold text-gray-900">
                          $389
                        </span>
                        /night
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="w-4/4 border-t border-gray-300 my-6" />
                <div className="flex w-full max-w mb-2 flex-col gap-4 p-4 sm:flex-row sm:items-stretch">
                  <div className="shrink-0 sm:w-64 lg:w-72">
                    <img
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=60"
                      alt="The Grand Palace Resort"
                      className="h-48 w-full rounded-xl object-cover sm:h-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-3 py-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md border border-gray-300 px-2.5 py-1 text-xs font-semibold text-gray-700">
                        Best Offer
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                        <IconBell size={14} />
                        Register Schedule
                      </span>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Grand Palace Resort
                      </h2>
                      <p className="mt-0.5 text-sm text-gray-500">
                        San Diego, CA, USA
                      </p>
                    </div>

                    {/* Fasilitas */}
                    <p className="text-sm text-gray-400">
                      2 Bed Room, 1 Bath Room, Wifi, Swimming Pool
                    </p>

                    {/* Harga di sudut kanan bawah */}
                    <div className="flex justify-end">
                      <p className="text-sm text-gray-500">
                        <span className="text-lg font-bold text-gray-900">
                          $389
                        </span>
                        /night
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="w-4/4 border-t border-gray-300 my-6" />
              </div>
            </div>
            <div className="bg-white lg:sticky lg:top-20 lg:h-[calc(100vh-80px)]">
                <div className="mx-auto border border-gray/10 rounded-md w-2/4">
                    <div className="flex justify-between">
                        <h1 className="font-semibold text-gray-700 px-7 py-3">Filters</h1>
                        <p className="text-gray-700 px-7 py-3">Clear</p>
                    </div>
                    <div className="px-7 py-3">
                        <p className="text-gray-700 text-sm font-semibold">Popular filters</p>
                    </div>
                    <div className="flex gap-2 px-7 py-2">
                        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-zinc-300 checked:bg-zinc-800 checked:border-zinc-800"/>
                        <p className="text-sm text-gray-600">Single bed</p>
                    </div>
                    <div className="flex gap-2 px-7 py-2">
                        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-zinc-300 checked:bg-zinc-800 checked:border-zinc-800"/>
                        <p className="text-sm text-gray-600">Family Suite</p>
                    </div>
                    <div className="flex gap-2 px-7 py-2">
                        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-zinc-300 checked:bg-zinc-800 checked:border-zinc-800"/>
                        <p className="text-sm text-gray-600">Double Bed</p>
                    </div>
                    <div className="flex gap-2 px-7 py-2">
                        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-zinc-300 checked:bg-zinc-800 checked:border-zinc-800"/>
                        <p className="text-sm text-gray-600">Luxury Room</p>
                    </div>
                    
                    <div className="px-7 py-3">
                        <p className="text-gray-700 text-sm font-semibold">Price</p>
                    </div>
                    <div className="flex gap-2 px-7 py-2">
                        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-zinc-300 checked:bg-zinc-800 checked:border-zinc-800"/>
                        <p className="text-sm text-gray-600">$2500 to $5000</p>
                    </div>
                    <div className="flex gap-2 px-7 py-2">
                        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-zinc-300 checked:bg-zinc-800 checked:border-zinc-800"/>
                        <p className="text-sm text-gray-600">$5000 to $8000</p>
                    </div>
                    <div className="flex gap-2 px-7 py-2">
                        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-zinc-300 checked:bg-zinc-800 checked:border-zinc-800"/>
                        <p className="text-sm text-gray-600">$8000 to $15000</p>
                    </div>                    

                    <div className="px-7 py-3">
                        <p className="text-gray-700 text-sm font-semibold">Sort By</p>
                    </div>
                    <div className="flex gap-2 px-7 py-2">
                        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-zinc-300 checked:bg-zinc-800 checked:border-zinc-800"/>
                        <p className="text-sm text-gray-600">Price Low to High</p>
                    </div>
                    <div className="flex gap-2 px-7 py-2">
                        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-zinc-300 checked:bg-zinc-800 checked:border-zinc-800"/>
                        <p className="text-sm text-gray-600">Price High to Low</p>
                    </div>
                    <div className="flex gap-2 px-7 py-2">
                        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-zinc-300 checked:bg-zinc-800 checked:border-zinc-800"/>
                        <p className="text-sm text-gray-600">Newest First</p>
                    </div>                    
                </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Kolom 1: Logo + Description + Sosial Media */}
            <div>
              <Link href="/" className="flex items-center gap-2">
                <IconBuildingSkyscraper size={32} className="text-gray-900" />
                <span className="text-xl font-bold text-zinc-900">Hotel</span>
              </Link>

              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Discover the best hotels and enjoy a comfortable stay with our
                top-rated accommodations around the world.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-500 shadow-sm transition-colors hover:bg-primary hover:text-white"
                >
                  <IconBrandFacebook size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-500 shadow-sm transition-colors hover:bg-primary hover:text-white"
                >
                  <IconBrandInstagram size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-500 shadow-sm transition-colors hover:bg-primary hover:text-white"
                >
                  <IconBrandTwitter size={18} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-500 shadow-sm transition-colors hover:bg-primary hover:text-white"
                >
                  <IconBrandLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Kolom 2: Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-900">
                Company
              </h3>

              <ul className="mt-6 flex flex-col gap-3">
                {["About", "Careers", "Press", "Blog", "Partners"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-zinc-500 transition-colors hover:text-primary"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Kolom 3: Support */}
            <div>
              <h3 className=" text-sm font-semibold uppercase tracking-widest text-zinc-900">
                Support
              </h3>

              <ul className="mt-6 flex flex-col gap-3">
                {[
                  "Help Center",
                  "Safety Information",
                  "Cancellation Options",
                  "Contact Us",
                  "Accessibility",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-zinc-500 transition-colors hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 4: Stay Updated */}
            <div>
              <h3 className=" text-sm font-semibold uppercase tracking-widest text-zinc-900">
                Stay Updated
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-zinc-500">
                Subscribe to our newsletter to get the latest offers and
                exclusive deals straight to your inbox.
              </p>

              <form className="mt-6 flex items-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-primary"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex shrink-0 items-center justify-center rounded-r-lg bg-secondary px-4 py-3 text-white transition-colors hover:bg-zinc-800"
                >
                  <IconArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-200">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
            <p className="text-sm text-zinc-500">
              © 2026 Hotel. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Sitemap"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-zinc-500 transition-colors hover:text-primary"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
