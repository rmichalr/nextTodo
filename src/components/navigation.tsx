import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
	return (
		<nav className="border-b mb-4">
			<div className="container mx-auto flex justify-between items-center p-4 bg-secondary text-secondary-foreground">
				<h1 className="text-xl font-bold">Todo App</h1>
				<div className="space-x-4">
					<Button variant="outline" asChild>
						<Link href="/">Home</Link>
					</Button>
					<Button variant="outline" asChild>
						<Link href="/about">About</Link>
					</Button>
				</div>
			</div>
		</nav>
	);
}
