'use server'
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().email({ message: "Invalid email address" }),
  name: z.string().min(1, {message: "corporation name needed"})
});

export type LoginFormDataType = z.infer<typeof loginSchema>

type responseCorpData = {
  id: number,
  username: string,
  name: string
}

export async function corpLogin(formdata: FormData, userid: string){
  
  const data = Object.fromEntries(formdata)

  const result = loginSchema.safeParse(data)

  if(!result.success){
    const errors = result.error.flatten().fieldErrors

    return errors
  }

  const validData: LoginFormDataType = result.data

    const res = await fetch("http://backend:3000/corps/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ corp: validData }), 
    })

    if(!res.ok){
      console.error(await res.text())
      throw new Error("something went wrong when login...")
    }

    const resdata = await res.json()
    const resCorpData:responseCorpData = resdata.corp
    const corpid = resCorpData.id
    revalidatePath(`/${userid}/${corpid}`)
    redirect(`/${userid}/${corpid}`)
}