"use client";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <MapPin size={20} />,
		href: "https://maps.app.goo.gl/GTuAqokUbcw6JELq7",
		label: "Chapel",
		handle: "Local of Hong Kong West",
		link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7346996872557!2d114.14152297529206!3d22.288037379695375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007f80515555%3A0xa1efb5165695deeb!2sIglesia%20Ni%20Cristo%2C%20Locale%20of%20Hongkong%20West!5e0!3m2!1sen!2shk!4v1700739947266!5m2!1sen!2shk"
	},
	{
		icon: <MapPin size={20} />,
		href: "mailto:dev@chronark.com",
		label: "Reception",
		handle: "ClubONE The Grand Stage",
		link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.754514909546!2d114.14781657529223!3d22.287287079696053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007dd3c5db4b%3A0xfeef83b1244552c1!2sClubONE%20The%20Grand%20Stage!5e0!3m2!1sen!2shk!4v1700747795478!5m2!1sen!2shk"
	}
];

export default function Venues() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">
					{socials.map((s) => (
						<Card key={s.label}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
								<iframe src={s.link} loading="lazy"></iframe>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
