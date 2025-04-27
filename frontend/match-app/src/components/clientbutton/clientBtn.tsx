'use client'
import React from "react";
import Button from "../button";

type clientBtnType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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