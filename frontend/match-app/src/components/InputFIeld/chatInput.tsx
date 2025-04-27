'use client'

import { useState } from "react";
import Button from "../button";
import ClientTextArea from "./clientInput";
import { createChat } from "@/lib/createChat";
import { revalidatePath } from "next/cache";

type chatInputPropsType = {
  users_id: string,
  corps_id: string,
}

export default function ChatInput({users_id, corps_id}: chatInputPropsType){

  const [text, setText] = useState("")

  return (
    <section className=" w-full p-4 border-t border-gray-300 bg-white flex items-center gap-2">
      <ClientTextArea value={text} onChange={(e) => setText(e.target.value)}/>
      <Button onClick={async (e) => {
        e.preventDefault()
  
        if(!text) return
        await createChat(text, users_id, corps_id)
        setText("")
      }}>
        Send
      </Button>
    </section>
  );
}