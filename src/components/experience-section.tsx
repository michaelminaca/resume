import { FaPython, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiReactjsLine, RiSvelteFill } from 'react-icons/ri';
import { Progress } from '@/components/ui/progress';
import { BiLogoPostgresql } from 'react-icons/bi';

export function ExperienceSection() {
	return (
		<section className=" flex flex-col items-center my-12  justify-center px-8 ">
			<div className="max-w-[92rem] w-full">
				<div className="mb-20">
					<div className="text-center text-5xl font-semibold mb-12">
						About me
					</div>
					<div className=" flex justify-center">
						<div className="max-w-[40rem]">
							<p className="text-center mb-8">
								Hi, I'm Michael and I’m a Computer Science student majoring in
								Quantum Computing at the University of Technology Sydney. I’ve
								been programming since I was 14, starting out with C# and Unity.
								These days, I enjoy working on a variety of projects and enjoy
								exploring the exciting world of quantum computing in my spare
								time.
							</p>
						</div>
					</div>
				</div>
				<div className="grid-cols-1 grid  lg:grid-cols-2 sm:gap-16">
					<div className="flex flex-col items-center">
						<h1 className="text-3xl font-semibold text-center mb-8 sm:mb-16">
							Skills
						</h1>
						<div className="grid grid-cols-2 gap-8 mb-12 sm:mb-0">
							<div className="border rounded-md w-full pt-2 pb-4 px-6">
								<div className="flex justify-center my-4">
									<div className="bg-white text-black rounded-full p-2">
										<IoLogoJavascript size={24} />
									</div>
								</div>
								<p className="mb-3 text-center">Javascript & Typescript</p>
								<Progress value={60} />
							</div>
							<div className="border rounded-md w-full pt-2 pb-4 px-6">
								<div className="flex justify-center my-4">
									<div className="bg-white text-black rounded-full p-1">
										<FaPython size={30} />
									</div>
								</div>
								<p className="mb-3 text-center">Python</p>
								<Progress value={50} />
							</div>
							<div className="border rounded-md w-full pt-2 pb-4 px-6">
								<div className="flex justify-center my-4">
									<div className="bg-white text-black rounded-full p-1">
										<RiSvelteFill size={30} />
									</div>
								</div>
								<p className="mb-3 text-center">Svelte & Sveltekit</p>
								<Progress value={60} />
							</div>
							<div className="border rounded-md w-full pt-2 pb-4 px-6">
								<div className="flex justify-center my-4">
									<div className="bg-white text-black rounded-full p-1">
										<RiReactjsLine size={30} />
									</div>
								</div>
								<p className="mb-3 text-center">React</p>
								<Progress value={30} />
							</div>
							<div className="border rounded-md w-full pt-2 pb-4 px-6">
								<div className="flex justify-center my-4">
									<div className="bg-white text-black rounded-full p-1">
										<FaGitAlt size={30} />
									</div>
								</div>
								<p className="mb-3 text-center">Git & Github</p>
								<Progress value={30} />
							</div>
							<div className="border rounded-md w-full pt-2 pb-4 px-6">
								<div className="flex justify-center my-4">
									<div className="bg-white text-black rounded-full p-1">
										<BiLogoPostgresql size={30} />
									</div>
								</div>
								<p className="mb-3 text-center">Supabase (postgres)</p>
								<Progress value={60} />
							</div>
						</div>
					</div>
					<div>
						<h1 className="text-3xl font-semibold text-center">
							Certifications
						</h1>
						<div className="flex flex-col gap-16 items-center justify-center my-8 sm:my-16">
							<div className="p-8 w-[24rem] border rounded-lg">
								<div className="flex justify-center mb-4">
									<div className="bg-white text-black rounded-full p-1">
										<RiReactjsLine size={30} />
									</div>
								</div>
								<h3 className="font-semibold mb-6">
									Meta Front-End Developer Specialization - React
								</h3>
								<a
									className="bg-white text-nowrap text-black py-2 px-4  rounded-md hover:bg-zinc-200"
									href="https://www.coursera.org/account/accomplishments/specialization/certificate/JNWSTADRGMZ3"
								>
									View certificate
								</a>
							</div>
							<div className="p-8 w-[24rem] border rounded-lg">
								<div className="flex justify-center mb-4">
									<div className="bg-white text-black rounded-full p-1">
										<FaPython size={30} />
									</div>
								</div>
								<h3 className="font-semibold mb-6">
									IBM Certified Associate Developer - Quantum Computation using
									Qiskit v0.2X - Python
								</h3>
								<a
									className="bg-white text-nowrap text-black py-2 px-4  rounded-md hover:bg-zinc-200"
									href="https://www.credly.com/badges/fd52d3d6-b06d-4efc-babf-da436e025bc7/linked_in_profile"
								>
									View certificate
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <Timeline data={data} />; */}
		</section>
	);
}
