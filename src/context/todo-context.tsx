"use client";

import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	useMemo,
} from "react";
import { Todo } from "@/types/todo";
import { v4 as uuidv4 } from "uuid";

interface TodoContextType {
	todos: Todo[];
	addTodo: (text: string) => void;
	toggleTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: React.ReactNode }) {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		const storedTodos = localStorage.getItem("todos");
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const addTodo = (text: string) => {
		const newTodo: Todo = {
			id: uuidv4(),
			text,
			completed: false,
		};
		setTodos((currentTodos) => [...currentTodos, newTodo]);
	};

	const toggleTodo = (id: string) => {
		setTodos((currentTodos) =>
			currentTodos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id: string) => {
		setTodos((currentTodos) =>
			currentTodos.filter((todo) => todo.id !== id)
		);
	};

	return (
		<TodoContext.Provider
			value={useMemo(
				() => ({ todos, addTodo, toggleTodo, deleteTodo }),
				[todos, addTodo, toggleTodo, deleteTodo]
			)}
		>
			{children}
		</TodoContext.Provider>
	);
}

export function useTodos() {
	const context = useContext(TodoContext);
	if (context === undefined) {
		throw new Error("useTodos must be used within a TodoProvider");
	}
	return context;
}
