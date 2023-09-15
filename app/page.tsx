import Header from "./components/header";

export default function Page() {
	return (
		<div className="container mx-auto">
			<Header />
			<div className="mt-28 m-2 text-center sm:text-left">
				<div className="uppercase font-black font-head text-8xl">
					<h1>Arriving</h1>
					<h1>
						<span className="bg-nice-orange dark:text-black">Soon.</span>
					</h1>
				</div>
				<div className="flex text-xl mt-6">
					<div className="float-right sm:pl-80 leading-none space-y-4">
						<p>please be patient, while we work on building a space to showcase our passion and work.</p>
						<p className="font-barcode text-6xl">iterate</p>
					</div>
				</div>
			</div>
			<div className="text-center mt-20">
				<p className="opacity-50 text-xl">in the meantime, let's talk</p>
				<a href="mailto:contact@iterationinfinity.com">contact@iterationinfinity.com</a>
			</div>
		</div>
	);
}
