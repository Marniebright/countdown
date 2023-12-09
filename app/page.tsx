'use client'

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Timer } from "./components/timer"

const navigation = [
  { name: "The Couple", href: "/couple" },
  { name: "Venues", href: "/venues" },
];

const date = "January 17, 2024"
const groom = "Chrisrel"
const bride = "Jinky"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-green via-zinc-600/20 to-white">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
        <h1 className="z-10 text-4xl duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-9xl md:text-9xl whitespace-nowrap bg-clip-text">
          <span> {groom} </span>
          <span>
            & 
          </span>
          <span> {bride} </span>
        </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-400/50 to-zinc-300/0" />
  
      <div className="my-8 text-center animate-fade-in">
        <h2 className="text-zinc-500 font-display sm:text-6xl md:text-6xl">
          <span>{date}</span>
        </h2>
      </div>
      <div className="text-center animate-fade-in">
        <h3 className="text-sm text-zinc-500">
          <Timer deadline="Jan 17, 2024 10:00:00"/>
        </h3>
      </div>
      <nav className="my-10 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );

}
