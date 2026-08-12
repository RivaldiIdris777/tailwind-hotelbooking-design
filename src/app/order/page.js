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
  IconMapPin,
  IconUsers,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Order() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reservations = [
    {
      id: 1,
      name: "Grand Hotel California",
      bedType: "Single Bed",
      address: "123 Ocean Drive, California",
      guests: 2,
      total: 200,
      checkIn: "September 20, 2025",
      checkOut: "September 23, 2025",
      paid: true,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=200&q=60",
    },
    {
      id: 2,
      name: "The Ritz Carlton",
      bedType: "Double Bed",
      address: "456 Park Avenue, New York",
      guests: 3,
      total: 450,
      checkIn: "October 5, 2025",
      checkOut: "October 8, 2025",
      paid: false,
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=200&q=60",
    },
    {
      id: 3,
      name: "Marina Bay Sands Hotel",
      bedType: "King Bed",
      address: "10 Bayfront Avenue, Singapore",
      guests: 4,
      total: 620,
      checkIn: "November 12, 2025",
      checkOut: "November 15, 2025",
      paid: true,
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=200&q=60",
    },
    {
      id: 4,
      name: "The Plaza Hotel",
      bedType: "Queen Bed",
      address: "768 Sunset Boulevard, Los Angeles",
      guests: 2,
      total: 350,
      checkIn: "December 1, 2025",
      checkOut: "December 4, 2025",
      paid: false,
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=200&q=60",
    },
  ];

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

      <section className="px-6 mb-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
            {/* Header Kolom */}
            <div className="grid grid-cols-12 gap-4 border-b border-zinc-200 pb-4">
              <div className="col-span-12 sm:col-span-6">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Hotels
                </h2>
              </div>
              <div className="col-span-3 hidden sm:block">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Date &amp; Timings
                </h2>
              </div>
              <div className="col-span-3 hidden sm:block">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Payment
                </h2>
              </div>
            </div>

            {/* Daftar Item Reservasi */}
            {reservations.map((res) => (
              <div
                key={res.id}
                className="grid grid-cols-12 gap-4 border-b border-zinc-100 py-6 last:border-b-0"
              >
                {/* Info Hotel */}
                <div className="col-span-12 flex items-start gap-4 sm:col-span-6">
                  <img
                    src={res.image}
                    alt={res.name}
                    className="h-20 w-24 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-zinc-900">
                      {res.name}{" "}
                      <span className="font-normal text-zinc-500">
                        ({res.bedType})
                      </span>
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-500">
                      <IconMapPin size={14} className="shrink-0" />
                      <span className="truncate">{res.address}</span>
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-500">
                      <IconUsers size={14} className="shrink-0" />
                      Guests: {res.guests}
                    </p>
                    <p className="mt-2 text-sm font-bold text-zinc-900">
                      Total: ${res.total}
                    </p>
                  </div>
                </div>

                {/* Date & Timings */}
                <div className="col-span-12 flex gap-10 sm:col-span-3">
                  <div>
                    <p className="text-xs text-zinc-400">Check-In</p>
                    <p className="mt-1 text-sm text-zinc-600">{res.checkIn}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400">Check-Out</p>
                    <p className="mt-1 text-sm text-zinc-600">{res.checkOut}</p>
                  </div>
                </div>

                {/* Status Pembayaran */}
                <div className="col-span-12 flex items-start gap-4 sm:col-span-3 sm:justify-end">
                  {res.paid ? (
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-sm font-medium text-emerald-600">
                        Paid
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-start gap-2.5">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-500" />
                        <span className="text-sm font-medium text-red-600">
                          Unpaid
                        </span>
                      </div>
                      <button
                        type="button"
                        className="rounded-full border border-zinc-300 px-4 py-1.5 text-xs font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
                      >
                        Pay now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
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
