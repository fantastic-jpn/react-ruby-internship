'use client'

import { usePathname } from "next/navigation";
import Header from "./header";

export default function ConditionalHeader(){
  const pathname = usePathname()

  if(pathname == "/register" || pathname == "/registercorp" || pathname == "/login") return null
  
  return <Header />
}