"use client";

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { BarToggleIcon, MrRexIcon } from "@/components/Icons";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuLinks = [
    {
      id: 1,
      name: "Women",
      links: [
        { name: "Alpha", col: true },
        { name: "Stella", col: true },
      ],
    },
    {
      id: 2,
      name: "Men",
      links: [
        { name: "Perseus", col: true },
        { name: "Neptun", col: true },
        { name: "Aid", col: true },
      ],
    },
    {
      id: 3,
      name: "Sale",
      links: [
        { name: "Women", col: false },
        { name: "Men", col: false },
      ],
    },
    {
      id: 4,
      name: "About",
      links: [
        { name: "History", col: false },
        { name: "Contacts", col: false },
      ],
    },
    {
      id: 5,
      name: "Newsletter",
      links: [
        { name: "January", col: false },
        { name: "Februar", col: false },
        { name: "March", col: false },
      ],
    },
  ];

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 d-f flex">
            <MrRexIcon />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <BarToggleIcon />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {menuLinks.map((link, key) => {
            return (
              <Link
                className="hover:font-bold transition-all"
                href={
                  link.name !== "Men"
                    ? `/${link.name.toLocaleLowerCase()}`
                    : "/men/stella"
                }
                key={key}
              >
                {link.name}
                {/* <Popover className="relative">
                  <Popover.Button className="flex items-center gap-x-1 text-[1.5rem] font-semibold leading-6 text-gray-900">
                    {link.name}
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {link.links.map((item, key) => (
                          <div
                            key={key}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"></div>
                            <div className="flex-auto">
                              {item.col ? (
                                <Link
                                  href={`/collections/${item.name.toLowerCase()}`}
                                  className="block font-semibold text-gray-900"
                                >
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </Link>
                              ) : (
                                <Link
                                  href={`/${item.name.toLowerCase()}`}
                                  className="block font-semibold text-gray-900"
                                >
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </Link>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover> */}
              </Link>
            );
          })}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className=" hidden text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>{" "}
            {/* Log in is hidden in className with 'hidden'. Pls remove and make visible when it is ready. Plus in mobile menu */}
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              Mr.Rex
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only colo text-blackß">Close menu</span>
              <BarToggleIcon aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/women/alpha" //change later to /women
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Women
                </Link>
                <Link
                  href="/men"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Men
                </Link>
                <Link
                  href="/sale"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sale
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="/newsletter"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Newsletter
                </Link>
                <Link
                  href="/newsletter"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  FAQ
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className=" -mx-3 hidden rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
