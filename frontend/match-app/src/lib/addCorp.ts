'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import {z} from "zod"

const registerCorpSchema = z.object({
  username: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Username is required" }),
  corpName: z
    .string()
    .nonempty({message: "This field is required"})
    .min(1, {message: "This field needs more than 1 character"})
    ,
  corptype: z
    .string()
    .nonempty({ message: "Main field is required" })
    .refine((value) => ["front-end", "back-end", "full-stack", "AI engineer"].includes(value), {
      message: "Invalid field type",
    }),
})

export type registerCorpSchemaType = z.infer<typeof registerCorpSchema>

export async function AddCorp(formdata: FormData){

  const data = Object.fromEntries(formdata)

  const result = registerCorpSchema.safeParse(data)

  if (!result.success){
    const errors = result.error.flatten().fieldErrors
    return errors
  }

  const validData: registerCorpSchemaType = result.data

  console.log(validData)

  //fetch to ruby on rails backend

  // const res = await fetch()

  revalidatePath("/")
  redirect("/")
}