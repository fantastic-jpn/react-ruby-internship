'use server'

import CorpLogin from "@/components/corpLoginForm/corpLogin"

export default async function ChatPage({params}: {params: {userid: string}}){
  
  const {userid} = await params
  
  return(
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <CorpLogin userid={userid}/>
    </div>
  )
}