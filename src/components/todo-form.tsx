"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TodoSchema } from "@/lib/validations";
import { useTodos } from "@/context/todo-context";

export function TodoForm() {
	const { addTodo } = useTodos();

	const form = useForm<z.infer<typeof TodoSchema>>({
		resolver: zodResolver(TodoSchema),
		defaultValues: { text: "" },
	});

	const onSubmit = (values: z.infer<typeof TodoSchema>) => {
		addTodo(values.text);
		form.reset();
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex space-x-2"
			>
				<FormField
					control={form.control}
					name="text"
					render={({ field }) => (
						<FormItem className="flex-grow">
							<FormControl>
								<Input
									placeholder="Enter a new todo"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Add Todo</Button>
			</form>
		</Form>
	);
}
