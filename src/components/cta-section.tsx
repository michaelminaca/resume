import { LinearGradient } from 'react-text-gradients';

export function CallToAction() {
	return (
		<section className=" min-h-[20rem] flex flex-col justify-center items-center">
			<h2 className="text-3xl font-semibold">
				<LinearGradient gradient={['to left', '#2563eb ,#d946ef']}>
					Thanks{' '}
				</LinearGradient>{' '}
				for stopping by!
			</h2>
			<p className="text-center mb-7 text-zinc-400 font-semibold mt-2 italic ">
				- Michael Minaca
			</p>

			<a
				target="_blank"
				className="bg-white  text-nowrap text-black py-2 px-4  rounded-md hover:bg-zinc-200"
				href="/michael_minaca_resume.pdf"
			>
				View resume
			</a>
		</section>
	);
}
