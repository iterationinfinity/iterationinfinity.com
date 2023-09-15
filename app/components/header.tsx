"use client";
import { useTheme } from "next-themes";
import IterationLogo from "../assets/iteration.svg";

export default function Header() {
	const { theme, setTheme } = useTheme();

	return (
		<div className="container mx-auto">
			<IterationLogo onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))} className="mx-auto w-16 h-16 cursor-pointer" />
		</div>
	);
}
