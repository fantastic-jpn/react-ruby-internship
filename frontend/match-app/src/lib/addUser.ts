'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod";

const registerSchema = z.object({
    username: z.string().email({ message: "Invalid email address" }).nonempty({message: "This field is required"}),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }).nonempty({message: "This field is required"}),
    confirmPassword: z.string().nonempty({message: "This field is required"}),
    fieldtype: z
    .string()
    .nonempty({ message: "Main field is required" })
    .refine((value) => ["front-end", "back-end", "full-stack", "AI engineer"].includes(value), {
      message: "Invalid field type",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type registerSchemaType = z.infer<typeof registerSchema>;

export async function AddUser(formdata: FormData){

  const data = Object.fromEntries(formdata)
  const result = registerSchema.safeParse(data);

  if(!result.success){
    console.log(result.error.format())
    const errors = result.error.flatten().fieldErrors

    console.log(errors)

    return errors
  }

  const validData: registerSchemaType = result.data;

  console.log(validData)


  //fetch to ruby on rails backend 
  revalidatePath("/")
  redirect("/")
}