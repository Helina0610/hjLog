import Header from "@/components/layout/Header";
import '@/app/globals.css';

export default function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {
	return (
		<html>
			<body>
				<Header/>
				<main className="mx-auto px-4 w-full max-w-screen-xl bg-gray-100">
					{children}
				</main>
			</body>
		</html>
	);
}

