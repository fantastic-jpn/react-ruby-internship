'use client'
import Button from "../button";

type clientBtnType = {
  text: string
  onclickfunction: () => void
}

export default function ClientBtn({text, onclickfunction}: clientBtnType){
  return(
    <Button onClick={() => {onclickfunction()}}>
      {text}
    </Button>
  )
}