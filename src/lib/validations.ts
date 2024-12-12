import * as z from "zod";

export const TodoSchema = z.object({
	text: z.string().min(1, { message: "Todo cannot be empty" }),
});
