'use client';

import { useContext } from "react";
import { AppContext } from "./Provider";
import { useRouter } from "next/navigation";

export default function ClientComponent({ children } : { children: React.ReactNode }) {
  const router = useRouter();
  const context = useContext(AppContext);

  function handleClick() {
    window.alert(context?.value ?? 'unknown');
    router.refresh();
  }
  
  return (
    <button onClick={handleClick}>
      { children }
    </button>
  )
}