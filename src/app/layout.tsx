import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { TodoProvider } from "@/context/todo-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Todo List App",
	description: "A simple todo list application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<TodoProvider>
					<Navigation />
					{children}
				</TodoProvider>
			</body>
		</html>
	);
}
