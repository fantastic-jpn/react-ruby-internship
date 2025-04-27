'use server'

import { revalidatePath } from "next/cache"

export async function createChat(message: string, users_id: string, corps_id: string){
  const res = await fetch("http://backend:3000/chats/",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chat: {message: message, users_id: users_id, corps_id: corps_id} })
  })

  const data = await res.json()

  console.log(data)

  revalidatePath(`/${users_id}/${corps_id}`)
}