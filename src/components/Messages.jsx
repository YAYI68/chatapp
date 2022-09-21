import React from 'react'
import { Message } from "./Message"

export const Messages = () => {
  return (
    <div className="bg-gray-200 overflow-y-scroll p-[10px] h-[auto] ">
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    </div>
  )
}
