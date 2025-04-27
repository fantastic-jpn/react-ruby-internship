'use server'

import { chatdataType } from "@/app/[userid]/[corpid]/page"


export default async function getAllChats(userid: string, corpid: string){
  const res = await fetch("http://backend:3000/chats/all",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chat: {users_id: userid, corps_id: corpid} }),
  })

  const data: chatdataType[] = await res.json()

  console.log(data)

  if (!Array.isArray(data)) return null

  return data
}