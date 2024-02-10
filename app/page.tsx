import Header from "./components/header";
import { Instagram, Twitter } from "react-feather";

export default function Page() {
	return (
		<div className="container mx-auto">
			<Header />
			<div className="mt-28 m-2 text-left p-6">
				<div className="uppercase font-black text-8xl">
					<h1 className="title">Arriving</h1>
					<h1>
						<span>Soon.</span>
					</h1>
				</div>
				<div className="flex text-xl mt-6">
					<div className="float-right sm:pl-72 leading-none space-y-4">
						<p>please be patient, while we work on building a space to showcase our passion and work.</p>
						<p className="font-barcode text-6xl">iterate</p>
					</div>
				</div>
			</div>
			<div className="text-center mt-20">
				<p className="text-xl mb-4">in the meantime, let's talk</p>
				<div className="flex flex-row gap-4 place-content-center">
					<a href="https://instagram.com/iterationinfinity/" className="mb-4">
						<Instagram />
					</a>
					<a href="https://twitter.com/iterateinfinity" className="mb-4">
						<Twitter />
					</a>
				</div>
				{/* <a href="mailto:mail@iterationinfinity.com" className="mb-4">
					mail@iterationinfinity.com
				</a> */}
			</div>
		</div>
	);
}
