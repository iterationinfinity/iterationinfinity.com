import Providers from "./providers";
import "./styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Ruslan+Display&family=Vollkorn:wght@400;500;600;700&display=swap" rel="stylesheet" />
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
