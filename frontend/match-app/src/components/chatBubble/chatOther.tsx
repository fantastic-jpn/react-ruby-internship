import { chatType } from "./chatType";

export default function ChatBubbleOther({chat}: chatType){
  return(
    <div className="flex justify-start">
    <div className="bg-white p-3 rounded-lg shadow-md max-w-xs">
      {chat}
    </div>
  </div>
  )
}