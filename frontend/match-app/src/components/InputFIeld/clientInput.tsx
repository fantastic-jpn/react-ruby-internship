'use client'

import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  value: string;
};

export default function ClientTextArea({ className, value, onChange, ...props }: InputProps) {
  return (
    <textarea
      {...props}
      value={value}
      onChange={onChange}
      rows={3}
      placeholder="Type your message..."
      className={clsx(
        "w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition",
        className
      )}
    />
  );
}