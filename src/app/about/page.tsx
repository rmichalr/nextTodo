export default function About() {
	return (
		<main className="container mx-auto max-w-md py-8">
			<h1 className="text-2xl font-bold mb-4">About Todo List App</h1>
			<p className="mb-4">
				A modern, robust Todo List application demonstrating advanced
				React and Next.js development techniques with a focus on state
				management, type safety, and user experience.
			</p>

			<h2 className="text-xl font-semibold mb-3">Key Features</h2>
			<ul className="list-disc pl-5 space-y-2 mb-4">
				<li>Global state management using React Context</li>
				<li>Persistent todo storage with localStorage</li>
				<li>Client-side form validation</li>
				<li>Responsive and interactive todo list interface</li>
				<li>
					Seamless navigation between pages while maintaining state
				</li>
			</ul>

			<h2 className="text-xl font-semibold mb-3">
				Architectural Highlights
			</h2>
			<div className="space-y-2 mb-4">
				<div>
					<strong>State Management:</strong> Implemented a global Todo
					Context that provides consistent state across all pages and
					maintains localStorage synchronization.
				</div>
				<div>
					<strong>Persistence Strategy:</strong> Utilizes browser
					localStorage to ensure todos are preserved between page
					refreshes and navigations.
				</div>
				<div>
					<strong>Type Safety:</strong> Leverages TypeScript and Zod
					for robust type checking and runtime validation.
				</div>
			</div>

			<h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
			<div className="space-y-2 mb-4">
				<div>
					<strong>Frontend Framework:</strong> Next.js 14
				</div>
				<div>
					<strong>State Management:</strong> React Context API
				</div>
				<div>
					<strong>UI Library:</strong> shadcn/ui
				</div>
				<div>
					<strong>Styling:</strong> Tailwind CSS
				</div>
				<div>
					<strong>Form Handling:</strong> React Hook Form
				</div>
				<div>
					<strong>Validation:</strong> Zod
				</div>
				<div>
					<strong>Language:</strong> TypeScript
				</div>
			</div>
		</main>
	);
}
