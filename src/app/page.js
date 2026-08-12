"use client";
import {
  IconSearch,
  IconUser,
  IconBuildingSkyscraper,  
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconArrowRight,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white text-zinc-900 shadow-md" : "bg-transparent"}`}
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
      <section
        className="relative flex min-h-screen items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="max-w-xl text-left text-white">
            <h1 className="text-4xl font-bold sm:text-6xl">
              Find your best rest in vacation with us{" "}
              <span className="text-secondary">Book Quickly</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-300">
              Enjoy your experience without trouble
            </p>

            {/* Input Search */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Cari kota / hotel"
                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-zinc-400 outline-none backdrop-blur focus:border-secondary"
              ></input>
              <button
                type="button"
                className="rounded-lg bg-secondary px-6 py-3 font-medium text-white transition-colors hover:bg-secondary-dark"
              >
                Find
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*  Best Seller */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-zinc-900 sm:text-4xl">
            Popular Hotel
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
            Discover the best hotels in your favorite cities and enjoy a
            comfortable stay with our top-rated accommodations.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <Link href="/detail">
              <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
                {/* Gambar hotel */}
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
                    alt="Hotel Grand Palace"
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white text-gray-900 px-3 py-1 ...">
                    Best Seller
                  </span>
                </div>
                <div className="p-6">
                  {/* Rating (bintang) */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-zinc-900">
                      Grand Palace
                    </h3>
                    <div className="flex items-center gap-1 text-secondary">
                      <svg
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.286 3.958c.3.921-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.175 0l-3.367 2.446c-.783.57-1.838-.197-1.538-1.118l1.285-3.958a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
                      </svg>
                      <span className="text-sm font-medium text-zinc-700">
                        4.8
                      </span>
                      <span className="text-sm text-zinc-400">(1.2k)</span>
                    </div>
                  </div>

                  <p className="mt-2 flex items-center gap-1 text-sm text-zinc-500">
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
                    Jl. Sudirman No. 12, Jakarta
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-end gap-1">
                      <span className="text-2xl font-bold text-gray-900">
                        Rp 850rb
                      </span>
                      <span className="text-sm text-zinc-400">/malam</span>
                    </div>
                    <button className="cursor-pointer rounded-lg bg-white border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-800">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/detail">
              <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
                {/* Gambar hotel */}
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
                    alt="Hotel Grand Palace"
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white text-gray-900 px-3 py-1 ...">
                    Best Seller
                  </span>
                </div>

                <div className="p-6">
                  {/* Rating (bintang) */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-zinc-900">
                      Grand Palace
                    </h3>
                    <div className="flex items-center gap-1 text-secondary">
                      <svg
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.286 3.958c.3.921-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.175 0l-3.367 2.446c-.783.57-1.838-.197-1.538-1.118l1.285-3.958a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
                      </svg>
                      <span className="text-sm font-medium text-zinc-700">
                        4.8
                      </span>
                      <span className="text-sm text-zinc-400">(1.2k)</span>
                    </div>
                  </div>

                  <p className="mt-2 flex items-center gap-1 text-sm text-zinc-500">
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
                    Jl. Sudirman No. 12, Jakarta
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-end gap-1">
                      <span className="text-2xl font-bold text-gray-900">
                        Rp 850rb
                      </span>
                      <span className="text-sm text-zinc-400">/malam</span>
                    </div>
                    <button className="cursor-pointer rounded-lg bg-white border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-800">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/detail">
              <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
                {/* Gambar hotel */}
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
                    alt="Hotel Grand Palace"
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white text-gray-900 px-3 py-1 ...">
                    Best Seller
                  </span>
                </div>

                <div className="p-6">
                  {/* Rating (bintang) */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-zinc-900">
                      Grand Palace
                    </h3>
                    <div className="flex items-center gap-1 text-secondary">
                      <svg
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.286 3.958c.3.921-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.175 0l-3.367 2.446c-.783.57-1.838-.197-1.538-1.118l1.285-3.958a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
                      </svg>
                      <span className="text-sm font-medium text-zinc-700">
                        4.8
                      </span>
                      <span className="text-sm text-zinc-400">(1.2k)</span>
                    </div>
                  </div>

                  <p className="mt-2 flex items-center gap-1 text-sm text-zinc-500">
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
                    Jl. Sudirman No. 12, Jakarta
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-end gap-1">
                      <span className="text-2xl font-bold text-gray-900">
                        Rp 850rb
                      </span>
                      <span className="text-sm text-zinc-400">/malam</span>
                    </div>
                    <button className="cursor-pointer rounded-lg bg-white border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-800">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Exclusive Offer */}
      <section className="px-6 py-20 ">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            {/* Judul + tulisan kecil (kiri) */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                Exclusive Offer
              </h2>
              <p className="mt-4 max-w-2xl text-zinc-600">
                Take Advantage of our limited-time offers and special packages
                to entrance your stay and create unforgettable memories.
              </p>
            </div>

            {/* Tombol View All Offer (kanan) */}
            <button className="shrink-0 rounded-lg bg-white border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-primary-dark">
              View All Offer
            </button>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
              {/* Gambar + teks di atasnya */}
              <div className="relative h-72">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60"
                  alt="Winter Package"
                  className="h-full w-full object-cover"
                />

                {/* Overlay gelap agar teks terbaca */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Teks di tengah gambar */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                  <h3 className="text-2xl font-bold">Winter Package</h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Book 3 nights & get 1 night free
                  </p>

                  {/* Tombol transparan */}
                  <button className="mt-5 rounded-full border-2 border-white/80 px-6 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white hover:text-zinc-900">
                    View Offers
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
              {/* Gambar + teks di atasnya */}
              <div className="relative h-72">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=60"
                  alt="Family Package"
                  className="h-full w-full object-cover"
                />

                {/* Overlay gelap agar teks terbaca */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Teks di tengah gambar */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                  <h3 className="text-2xl font-bold">Family Package</h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Up to 30% off for family rooms
                  </p>

                  {/* Tombol transparan */}
                  <button className="mt-5 rounded-full border-2 border-white/80 px-6 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white hover:text-zinc-900">
                    View Offers
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
              {/* Gambar + teks di atasnya */}
              <div className="relative h-72">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=60"
                  alt="Family Package"
                  className="h-full w-full object-cover"
                />

                {/* Overlay gelap agar teks terbaca */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Teks di tengah gambar */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                  <h3 className="text-2xl font-bold">Family Package</h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Up to 30% off for family rooms
                  </p>

                  {/* Tombol transparan */}
                  <button className="mt-5 rounded-full border-2 border-white/80 px-6 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white hover:text-zinc-900">
                    View Offers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-zinc-900 sm:text-4xl">
            What Our Client Say Visit Out Site
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
            Discover why discerning travelers choose Quicksay for their luxury
            accomodation around the world .
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card Testimoni 1 */}
            <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="p-6">
                {/* Foto + Nama + Asal Negara (satu baris) */}
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=60"
                    alt="Sarah Johnson"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-zinc-900">
                      Sarah Johnson
                    </h3>
                    <p className="flex items-center gap-1 text-sm text-zinc-500">
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
                      United States
                    </p>
                  </div>
                </div>

                {/* Rating (bintang) */}
                <div className="mt-4 flex items-center gap-1 text-secondary">
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
                    5.0
                  </span>
                </div>

                {/* Komentar */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  "The hotel was absolutely amazing! Beautiful rooms, great
                  service, and the view was stunning. Highly recommended!"
                </p>
              </div>
            </div>

            {/* Card Testimoni 2 */}
            <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="p-6">
                {/* Foto + Nama + Asal Negara (satu baris) */}
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=60"
                    alt="David Kim"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-zinc-900">David Kim</h3>
                    <p className="flex items-center gap-1 text-sm text-zinc-500">
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
                      South Korea
                    </p>
                  </div>
                </div>

                {/* Rating (bintang) */}
                <div className="mt-4 flex items-center gap-1 text-secondary">
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
                    5.0
                  </span>
                </div>

                {/* Komentar */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  "A wonderful experience from start to finish. The staff was
                  friendly and the breakfast was delicious. Will come again!"
                </p>
              </div>
            </div>

            {/* Card Testimoni 3 */}
            <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="p-6">
                {/* Foto + Nama + Asal Negara (satu baris) */}
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=60"
                    alt="Emily Chen"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-zinc-900">Emily Chen</h3>
                    <p className="flex items-center gap-1 text-sm text-zinc-500">
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
                      Singapore
                    </p>
                  </div>
                </div>

                {/* Rating (bintang) */}
                <div className="mt-4 flex items-center gap-1 text-secondary">
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
                    5.0
                  </span>
                </div>

                {/* Komentar */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  "Perfect location and a very cozy atmosphere. The room was
                  spotless and the amenities were top-notch. Loved every
                  moment!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          {/* Card Testimoni 1 */}
          <div className="pt-10 pb-10 overflow-hidden rounded-2xl border border-zinc-100 bg-secondary shadow-sm transition-shadow hover:shadow-md">
            <div className="p-6">
              <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
                Stay Update
              </h2>
              <p className="mx-auto text-md mt-4 max-w-2xl text-center text-white">
                Join our newsletter and be the first to discover new
                destination, exclusive offers, and travel inspiration.
              </p>
              <div className="mt-5 mb-5 flex flex-col gap-3 max-w-md items-center mx-auto text-white sm:flex-row">
                <input
                  type="text"
                  placeholder="Find City / hotel"
                  className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-gray-100 placeholder-glare-100 outline-none backdrop-blur focus:border-secondary"
                ></input>
                <button
                  type="button"
                  className="rounded-lg bg-main px-6 py-3 font-medium text-white border border-white/30 hover:bg-secondary-dark"
                >
                  Find
                </button>
              </div>
              <p className="mx-auto text-md mt-4 max-w-2xl text-center text-white">
                By Subscribing, you agree to our privacy policy and consent to
                receive updates.
              </p>
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
