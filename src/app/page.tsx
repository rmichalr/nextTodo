"use client";

import { TodoForm } from "@/components/todo-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useTodos } from "@/context/todo-context";

export default function Home() {
	const { todos, toggleTodo, deleteTodo } = useTodos();

	return (
		<main className="container mx-auto max-w-md py-8">
			<h1 className="text-2xl font-bold mb-4">Todo List</h1>
			<TodoForm />
			<div className="mt-6 space-y-2">
				{todos.map((todo) => (
					<div
						key={todo.id}
						className="flex items-center space-x-4 bg-gray-100 p-2 rounded"
					>
						<Checkbox
							checked={todo.completed}
							onCheckedChange={() => toggleTodo(todo.id)}
						/>
						<span
							className={`flex-grow ${
								todo.completed
									? "line-through text-gray-500"
									: ""
							}`}
						>
							{todo.text}
						</span>
						<Button
							variant="destructive"
							size="sm"
							onClick={() => deleteTodo(todo.id)}
						>
							Delete
						</Button>
					</div>
				))}
			</div>
		</main>
	);
}
