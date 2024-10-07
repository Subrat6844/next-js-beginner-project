import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
	return (
		<div className="h-auto md:h-[40rem] w-full flex rounded-md flex-col items-center justify-center relative overflow-hidden mx-auto md:py-0 py-10">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			<div className="w-full text-center relative p-4 z-10">
				<h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
					Master the art of Music
				</h1>
				<p className="font-normal mt-4 text-base md:text-lg max-w-lg mx-auto text-neutral-300">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
					modi ipsam asperiores? Placeat inventore nostrum a, nemo omnis amet
					ducimus nulla aspernatur cumque.
				</p>
				<div className="mt-4">
					<Link href={"/courses"}>
						<Button
							borderRadius="1.75rem"
							className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
						>
							Explore Courses
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
