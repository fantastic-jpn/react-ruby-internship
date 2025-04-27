'use server'

import Button from "@/components/button"
import ChatBubbleOther from "@/components/chatBubble/chatOther"
import ChatBubbleUser from "@/components/chatBubble/chatUser"
import Input from "@/components/InputFIeld/input"
import ChatInput from "@/components/InputFIeld/chatInput"
import getAllChats from "@/lib/getAllChats"

export type chatdataType = {
  message: string,
  users_id: number,
  corps_id: number
}

export default async function ChatPage({params}: {params: {userid: string, corpid:string}}){
  
  const {userid, corpid} = await params

  const chatsdata:chatdataType[] | null = await getAllChats(userid, corpid)
  return(
    <div className="relative flex flex-col h-screen bg-gray-100">
    <section className="p-4 bg-blue-600 text-white text-xl font-bold shadow-md">
      Chat Room: {userid} & {corpid}
    </section>

    <div className="flex-1 overflow-y-auto p-6 space-y-4 px-40">
      {
        chatsdata && (

          chatsdata.map((chat, index) => (
            <ChatBubbleUser chat={chat.message} key={index}/>
          ))
        )
      }
      
    </div>
    <ChatInput users_id={userid} corps_id={corpid} />
  </div>
  )
}