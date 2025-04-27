'use server'
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" })
});

export type LoginFormDataType = z.infer<typeof loginSchema>

export async function validateLogin(formdata: FormData){
  
  const data = Object.fromEntries(formdata)

  const result = loginSchema.safeParse(data)

  if(!result.success){
    const errors = result.error.flatten().fieldErrors

    return errors
  }

  const validData: LoginFormDataType = result.data

  console.log(validData)

  revalidatePath("/")
  redirect("/")
}