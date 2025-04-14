import { LinearGradient } from 'react-text-gradients';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Card } from '@/components/ui/card';
import { BsFillEnvelopeFill, BsPhoneFill } from 'react-icons/bs';
import { StarsBackground } from '@/components/ui/stars-background';
import { BlurFade } from '@/components/magicui/blur-fade';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

export function HeroSection() {
	return (
		<section className="flex min-h-screen flex-col justify-center items-center">
			<StarsBackground />
			<BlurFade delay={0.5} duration={1}>
				<div className="p-4">
					<div className="relative w-full max-w-xl">
						<div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-violet-600 blur-3xl" />
						<div className="relative flex h-full flex-col justify-center items-center  rounded-4xl border border-gray-800 bg-background p-16 shadow-xl">
							<h1 className="text-2xl sm:text-4xl text-center  font-semibold">
								Hi, I'm Michael Minaca
							</h1>

							<LinearGradient gradient={['to left', '#2563eb ,#d946ef']}>
								<h2 className="text-center text-5xl sm:text-6xl mt-4 font-semibold ">
									Welcome!
								</h2>
							</LinearGradient>

							<div className="mt-8">
								<p className="text-center text-sm sm:text-base mb-2 max-w-[30rem] font-semibold">
									Currently studying Bachelor of{' '}
									<span className="underline">Computing Science</span> (Honours)
									majoring in{' '}
									<span className="underline">Quantum Information Science</span>
								</p>

								<p className="text-center  text-sm sm:text-base font-semibold text-zinc-500">
									at the University of Technology Sydney
								</p>
								<p className="text-center  text-sm sm:text-base font-semibold text-sm text-zinc-500">
									(Mar 2023 - Dec 2026)
								</p>
							</div>

							<Card className="flex flex-row mt-4 py-2 bg-background px-8 rounded-4xl items-center gap-4">
								<Popover>
									<PopoverTrigger className="cursor-pointer">
										<BsFillEnvelopeFill
											className="hover:text-background bg-transparent p-1 rounded-full hover:bg-white transition-colors"
											size={48}
										/>
									</PopoverTrigger>
									<PopoverContent className="bg-background text-center">
										michaelsminaca@gmail.com
									</PopoverContent>
								</Popover>
								<Popover>
									<PopoverTrigger className="cursor-pointer">
										<BsPhoneFill
											className="hover:text-background bg-transparent p-1 rounded-full hover:bg-white transition-colors"
											size={48}
										/>
									</PopoverTrigger>
									<PopoverContent className="bg-background text-center">
										(+61) 481 575 768
									</PopoverContent>
								</Popover>
								<a
									target="_blank"
									href="https://www.linkedin.com/in/michael-minaca-413253250/"
								>
									<AiFillLinkedin
										className="hover:text-background bg-transparent p-1 rounded-full hover:bg-white transition-colors"
										size={48}
									/>
								</a>
								<a target="_blank" href="https://github.com/michaelminaca/">
									<AiFillGithub
										className="hover:text-background bg-transparent p-1 rounded-full hover:bg-white transition-colors"
										size={48}
									/>
								</a>
							</Card>
							<a
								className="bg-white mt-8 text-nowrap text-black py-2 px-4  rounded-md hover:bg-zinc-200"
								href="https://www.coursera.org/account/accomplishments/specialization/certificate/JNWSTADRGMZ3"
							>
								View resume
							</a>
						</div>
					</div>
				</div>
			</BlurFade>
		</section>
	);
}
