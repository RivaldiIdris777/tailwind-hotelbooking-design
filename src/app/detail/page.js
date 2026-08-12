"use client";
import {
  IconWifi,
  IconHanger,
  IconSalad,
  IconBuildingSkyscraper,
  IconSearch,
  IconUser,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconArrowRight,
  IconHome,
  IconChecklist,
  IconLocation,
  IconHeart,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

export default function Detail() {
  const [scrolled, setScrolled] = useState(false);

  // Map Leaflet
    const MapView = dynamic(() => import("../components/mapleaflet/Page"), {
      ssr: false,
      loading: () => (
        <div className="flex h-full items-center justify-center text-gray-500">
          Loading map...
        </div>
      ),
    });

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
              Grand Palace Resort{" "}
              <span className="text-sm px-1">(Single Resort)</span>
            </h1>
            <span className="text-center left-4 top-4 rounded-full bg-secondary text-gray-100 px-3 py-1">
              35 % Off
            </span>
          </div>

          <div className="flex items-center text-secondary gap-2 mt-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.286 3.958c.3.921-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.175 0l-3.367 2.446c-.783.57-1.838-.197-1.538-1.118l1.285-3.958a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
              </svg>
            ))}
            <span className="ml-1 text-sm font-medium text-zinc-700">
              200+ Reviews
            </span>
          </div>

          <p className="flex items-center gap-1 text-sm text-zinc-500 mt-2">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Los Angeles, USA
          </p>

          {/* Grid Image */}
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Gambar utama besar (kiri) */}
            <div className="h-full overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=60"
                alt="Grand Palace Resort"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Grid 2x2  */}
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=60"
                  alt="Kamar Hotel"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=60"
                  alt="Kolam Renang"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=60"
                  alt="Restoran"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=60"
                  alt="Lobby Hotel"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature Hotel */}
          <div className="flex items-center justify-between mt-5">
            <h1 className="font-semibold text-2xl text-zinc-900">
              Experience Luxury Like Never Before
            </h1>
            <h1 className="font-semibold text-2xl text-zinc-900">$289/ Day</h1>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-2 top-1 rounded-md bg-gray-200 text-gray-700 px-3 py-1 ...">
              <IconWifi />
              <span>Free Wifi</span>
            </div>
            <div className="flex items-center gap-2 top-1 rounded-md bg-gray-200 text-gray-700 px-3 py-1 ...">
              <IconSalad />
              <span>Free Breakfast</span>
            </div>
            <div className="flex items-center gap-2 top-1 rounded-md bg-gray-200 text-gray-700 px-3 py-1 ...">
              <IconHanger />
              <span>Room Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Request */}
      <section className="px-6 ">
        <div className="mx-auto max-w-7xl">
          <hr className="w-3/4 border-t border-gray-300 my-6" />

          <div className="flex flex-col gap-6 p-6 border border-gray-300 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
              <div>
                <p className="font-semibold text-md text-gray-700">Check-In</p>
                <span className="text-sm text-gray-300">Add Rate</span>
              </div>
              <div className="hidden sm:inline-block w-[1px] h-10 bg-gray-300 align-middle"></div>
              <div>
                <p className="font-semibold text-md text-gray-700">Check-Out</p>
                <span className="text-sm text-gray-300">Add Rate</span>
              </div>
              <div className="hidden sm:inline-block w-[1px] h-10 bg-gray-300 align-middle"></div>
              <div>
                <p className="font-semibold text-md text-gray-700">Guests</p>
                <span className="text-sm text-gray-300">2 Guests</span>
              </div>
            </div>
            <button className="w-full rounded-lg bg-secondary border border-gray-300 px-14 py-2.5 font-medium text-white transition-colors hover:bg-white hover:text-gray-700 sm:w-auto">
              Check Availability
            </button>
          </div>

          <div className="flex items-center mt-10 gap-5">
            <IconHome className="text-gray-700 font-semibold" />
            <div>
              <h3 className="font-semibold text-zinc-900">Clean Room</h3>
              <p className="flex items-center gap-1 text-sm text-zinc-500">
                You Will have the clean room for you
              </p>
            </div>
          </div>
          <div className="flex items-center mt-10 gap-5">
            <IconChecklist className="text-gray-700 font-semibold" />
            <div>
              <h3 className="font-semibold text-zinc-900">Enhance Clean</h3>
              <p className="flex items-center gap-1 text-sm text-zinc-500">
                The host has comitted to Staybnb's cleaning process.
              </p>
            </div>
          </div>
          <div className="flex items-center mt-10 gap-5">
            <IconLocation className="text-gray-700 font-semibold" />
            <div>
              <h3 className="font-semibold text-zinc-900">Greate Location</h3>
              <p className="flex items-center gap-1 text-sm text-zinc-500">
                90% of recent guests gave the location a 5 star-rating.
              </p>
            </div>
          </div>
          <div className="flex items-center mt-10 gap-5">
            <IconHeart className="text-gray-700 font-semibold" />
            <div>
              <h3 className="font-semibold text-zinc-900">
                Great check-in experience
              </h3>
              <p className="flex items-center gap-1 text-sm text-zinc-500">
                100% of recent guests gave the check-in process a 5-star rating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Description */}
      <section className="px-6 mt-5">
        <div className="mx-auto max-w-7xl">
          <hr className="w-3/4 border-t border-gray-300 my-6" />

          <p className="text-gray-700 text-md">
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allocated ground floor according to availability.
            You get the comfortable two bedroom apartment that has a true city
            feeling.
          </p>

          <hr className="w-3/4 border-t border-gray-300 my-6" />

          <h1 className="font-semibold text-2xl text-gray-700">Location</h1>
          <div className="bg-primary lg:sticky lg:top-20 lg:h-[calc(100vh-80px)]">
            <MapView/>
          </div>          

          <h1 className="font-semibold text-xl text-gray-700">
            Los Angeles, California, USA
          </h1>

          <p className="text-gray-700 text-sm text-gray-300 mt-2">
            it's like a home away from home
          </p>

          <hr className="w-3/4 border-t border-gray-300 my-6" />
        </div>
      </section>

      {/* Posted By */}
      <section className="px-6 py-10 mt-5">
        <div className="mx-auto max-w-7xl">
          <div>
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=60"
                alt="Sarah Johnson"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h1 className="text-semibold text-xl text-gray-700">
                  Hosted By Sarah Johnson
                </h1>
                <div className="mt-1 flex items-center gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 fill-current"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.286 3.958c.3.921-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.175 0l-3.367 2.446c-.783.57-1.838-.197-1.538-1.118l1.285-3.958a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
                    </svg>
                  ))}
                  <div className="flex justify-between gap-10">
                    <span className="ml-1 text-sm font-medium text-zinc-700">
                      200+ reviews
                    </span>
                    <span className="ml-1 text-sm font-medium text-zinc-700">
                      Response rate: 100%
                    </span>
                    <span className="ml-1 text-sm font-medium text-zinc-700">
                      Response time: 30 min
                    </span>
                  </div>
                </div>
                <button className="mt-10 rounded-lg bg-secondary border border-gray-300 px-14 py-2.5 font-medium text-white transition-colors hover:bg-white hover:text-gray-700 sm:w-auto">
                  Contact Now
                </button>
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
