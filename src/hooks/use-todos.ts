"use client";

import { useState, useEffect } from "react";
import { Todo } from "@/types/todo";
import { v4 as uuidv4 } from "uuid";

export function useTodos() {
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

	const addTodo = (newTodo: Omit<Todo, "id">) => {
		const todoWithId = { ...newTodo, id: uuidv4() };
		setTodos((currentTodos) => [...currentTodos, todoWithId]);
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

	return { todos, addTodo, toggleTodo, deleteTodo };
}
