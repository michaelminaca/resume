import { FaCircle } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import QuantumSoarImage from '@/assets/quantumsoar.JPG';

export function ProjectsSection() {
	return (
		<section className=" flex flex-col items-center mb-8 mt-12  justify-center px-8 ">
			<div className="max-w-[92rem] w-full">
				<h1 className="text-center mb-12 text-5xl font-semibold">Projects</h1>
			</div>
			<div className="px-16">
				<Carousel
					opts={{
						loop: true,
					}}
					className="w-full max-w-[82rem]"
				>
					<CarouselContent>
						<CarouselItem>
							<div className="p-1">
								<div className="border grid w-full gap-8 lg:grid-cols-2 grid-cols-1 p-8 rounded-md">
									<div>
										<h2 className="text-2xl font-semibold mb-4">
											Quantum Soar
										</h2>
										<p>
											Interactive Quantum Computing learning platform. Goes from
											zero to understanding popular quantum algorithms,
											including Shor's algorithm.
										</p>
										<ul className="ml-16 mt-4 mb-8">
											<li className="flex gap-3 items-center">
												<FaCircle size={8} />
												Svelte & Sveltekit
											</li>
											<li className="flex gap-3 items-center">
												<FaCircle size={8} />
												Supabase (postgres)
											</li>
											<li className="flex gap-3 items-center">
												<FaCircle size={8} />
												Typescript
											</li>
											<li className="flex gap-3 items-center">
												<FaCircle size={8} />
												TailwindCSS
											</li>
										</ul>
										<a
											className="bg-white text-nowrap text-black py-2 px-4  rounded-md hover:bg-zinc-200"
											href="https://www.quantumsoar.com"
										>
											Visit quantumsoar.com
										</a>
									</div>
									<div className="flex mt-8 jusify-center items-center">
										<img
											className="border rounded-md max-w-[64rem] w-full"
											src={QuantumSoarImage}
										/>
									</div>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="w-[40rem] ">
							<div className="p-1">
								<div className="border grid w-full gap-8 md:grid-cols-2 grid-cols-1 p-8 rounded-md">
									<div>
										<h2 className="text-2xl font-semibold mb-4">
											Quantum Soar
										</h2>
										<p>
											Interactive Quantum Computing learning platform. Goes from
											zero to understanding popular quantum algorithms,
											including Shor's algorithm.
										</p>
										<ul className="ml-16 mt-4 mb-8">
											<li className="flex gap-3 items-center">
												<FaCircle size={8} />
												Svelte & Sveltekit
											</li>
											<li className="flex gap-3 items-center">
												<FaCircle size={8} />
												Supabase (postgres)
											</li>
											<li className="flex gap-3 items-center">
												<FaCircle size={8} />
												Typescript
											</li>
											<li className="flex gap-3 items-center">
												<FaCircle size={8} />
												TailwindCSS
											</li>
										</ul>
										<a
											className="bg-white text-nowrap text-black py-2 px-4  rounded-md hover:bg-zinc-200"
											href="https://www.quantumsoar.com"
										>
											Visit quantumsoar.com
										</a>
									</div>
									<div className="flex mt-8 jusify-center items-center">
										<img
											className="border rounded-md max-w-[64rem] w-full"
											src={QuantumSoarImage}
										/>
									</div>
								</div>
							</div>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
}
