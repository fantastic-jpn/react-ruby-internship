import { chatType } from "./chatType";



export default function ChatBubbleUser({chat}: chatType){
  return(
    <div className="flex justify-end">
        <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md max-w-xs">
          {chat}
        </div>
      </div>
  )
}